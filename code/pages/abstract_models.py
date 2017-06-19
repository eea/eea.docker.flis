from django.db import models
from wagtail.wagtailadmin.edit_handlers import MultiFieldPanel, FieldPanel
from wagtail.wagtailcore.models import Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from pages.choices import COLORS, ICONS


class FlisPage(Page):
    parent_page_objects = []

    class Meta:
        abstract = True

    @classmethod
    def can_exist_under(cls, parent):
        """
        Checks if this page type can exist as a subpage under a parent page
        instance.

        See also: :func:`Page.can_create_at` and :func:`Page.can_move_to`
        """
        can_exist = cls in parent.specific_class.allowed_subpage_models()

        # Every model can have a 'alter_can_exist_under' method may override can_exist value
        if hasattr(parent.specific_class, 'alter_can_exist_under'):
            can_exist = parent.alter_can_exist_under(cls, can_exist)

        return can_exist

    def get_next_live_sibling(self):
        """
        :returns: The next node's sibling, or None if it was the rightmost
            sibling.
        """
        try:
            return self.get_siblings().filter(path__gt=self.path).live()[0]
        except IndexError:
            return None

    def get_prev_live_sibling(self):
        """
        :returns: The previous node's sibling, or None if it was the leftmost
            sibling.
        """
        try:
            return self.get_siblings().filter(path__lt=self.path).reverse().live()[0]
        except IndexError:
            return None


class Orderable(models.Model):
    sort_order = models.IntegerField(default=0, editable=True)
    sort_order_field = 'sort_order'

    class Meta:
        abstract = True
        ordering = ['sort_order']


class TemplateableMixin(object):
    """
    Define these in a child model:

    TEMPLATES_AND_CONTEXTS = {}

    page_template = models.CharField(choices=zip(TEMPLATES_AND_CONTEXTS.keys(), TEMPLATES_AND_CONTEXTS.keys()), max_length=255, blank=True, null=True)

    settings_panels = FlisPage.settings_panels + [
        FieldPanel('page_template', classname="template"),
    ]
    """

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        template = self.get_template(request, *args, **kwargs)
        manually_selected_template = [t for t in self.TEMPLATES_AND_CONTEXTS if t[0] == template]
        if len(manually_selected_template) > 0:
            context_callback = manually_selected_template[0][1]
            if context_callback:
                context = context_callback(context, request, *args, **kwargs)
        return context

    def get_template(self, request, *args, **kwargs):
        if not self.page_template:
            return super().get_template(request, *args, **kwargs)
        return self.page_template


class PageWithHeader(FlisPage):
    header_image = models.ForeignKey(
        'pages.FlisImage',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    header_color = models.CharField(max_length=255, choices=COLORS, blank=True, null=True)
    header_icon = models.CharField(max_length=255, choices=ICONS, blank=True, null=True)

    class Meta:
        abstract = True


PageWithHeader.settings_panels = FlisPage.settings_panels + [
    MultiFieldPanel([
        ImageChooserPanel('header_image'),
        FieldPanel('header_color'),
        FieldPanel('header_icon'),
    ], "Page style")
]
