from __future__ import absolute_import, unicode_literals
from django.db import models
from multiselectfield import MultiSelectField

from wagtail.wagtailadmin.edit_handlers import FieldPanel, StreamFieldPanel, MultiFieldPanel
from wagtail.wagtailcore.blocks import RichTextBlock
from wagtail.wagtailcore.fields import StreamField
from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.utils import resolve_model_string

from flis_flip.blocks import ForesightInPolicyCycleBlock, AssesmentsOfUsesBlock
from flis_flip.models import Assesment, ForwardLookingActivity
from flis_horison_scanning.blocks import DriversOfChangeBlock
from flis_horison_scanning.models import DriverOfChange
from .abstract_models import PageWithHeader, FlisPage, TemplateableMixin
from .blocks import ThreeColumnBlock, HeadingWithTextBlock, CommunityStatsBlock, TeamBlock, InstitutionsBlock, \
    SixPolygonHeader, TopicGridBlock, TestimonialsBlock, HeadingWithImageBlock, \
    FourColumnWithHeadingImageBlock, TableWithHeaderBlock, VideoEmbedBlock, Stakeholders, MethodologyBlock
from .views import foresight_dictionary_get_context, drivers_of_change_get_context, assesments_of_use_get_context, \
    foresight_in_policy_cycle_get_context
from .snippets import TeamMember, Testimonial, Institution, Word

from django.db.models.signals import post_delete
from django.dispatch import receiver

from wagtail.wagtailimages.models import Image, AbstractImage, AbstractRendition


class FlisImage(AbstractImage):
    copyright = models.CharField(max_length=255, blank=True)

    admin_form_fields = Image.admin_form_fields + (
        # Then add the field names here to make them appear in the form:
        # 'caption',
        'copyright',
    )


class FlisImageRendition(AbstractRendition):
    image = models.ForeignKey('FlisImage', related_name='renditions')

    class Meta:
        unique_together = (
            ('image', 'filter_spec', 'focal_point_key'),
        )


# Delete the source image file when an image is deleted
@receiver(post_delete, sender=FlisImage)
def image_delete(sender, instance, **kwargs):
    instance.file.delete(False)


# Delete the rendition image file when a rendition is deleted
@receiver(post_delete, sender=FlisImageRendition)
def rendition_delete(sender, instance, **kwargs):
    instance.file.delete(False)


class StaticIndex(TemplateableMixin, PageWithHeader):
    subpage_types = [
        'flis_horison_scanning.Signal',
        'flis_flip.Assesment',
        'flis_flip.ForwardLookingActivity',
    ]

    # Allow administrator to manually set allowed subpage types per object.
    allowed_subpage_types = MultiSelectField(
        choices=zip(subpage_types, subpage_types),
        null=True,
        blank=True
    )

    TEMPLATES_AND_CONTEXTS = (
        ('pages/drivers_of_change.html', drivers_of_change_get_context),
        ('pages/assesments_of_uses_index.html', assesments_of_use_get_context),
        ('pages/foresight_in_policy_cycle_index.html', foresight_in_policy_cycle_get_context),
    )

    page_template = models.CharField(choices=((k[0], k[0]) for k in TEMPLATES_AND_CONTEXTS), max_length=255, blank=True,
                                     null=True)

    settings_panels = PageWithHeader.settings_panels + [
        MultiFieldPanel([
            FieldPanel('page_template', classname="template"),
            FieldPanel('allowed_subpage_types', classname='choice_field'),
        ], 'Developer settings', classname='collapsible collapsed'),
    ]

    def alter_can_exist_under(self, child_page_class, can_exist):
        """
        Alter what pages may appear as children for Static Pages.
        """
        if len(self.allowed_subpage_types) > 0:
            allowed_subpage_type_models = [resolve_model_string(model_string) for model_string in
                                           self.allowed_subpage_types]
            return child_page_class in allowed_subpage_type_models

        return can_exist

    def get_allowed_subpage_types(self):
        """
        Returns the list of manually selected subpage types, normalised as model classes.
        """
        if self.allowed_subpage_types is None or len(self.allowed_subpage_types) == 0:
            return []

        return [resolve_model_string(model_string) for model_string in self.allowed_subpage_types]


class StaticPage(TemplateableMixin, PageWithHeader):
    subtitle = models.CharField(max_length=255, blank=True, null=True)

    content = StreamField([
        ('assesments_of_uses', AssesmentsOfUsesBlock()),
        ('community_stats', CommunityStatsBlock()),
        ('drivers_of_change', DriversOfChangeBlock()),
        ('four_columns_with_image', FourColumnWithHeadingImageBlock()),
        ('foresight_in_policy_cycle', ForesightInPolicyCycleBlock()),
        ('heading_with_image', HeadingWithImageBlock()),
        ('heading_with_text', HeadingWithTextBlock()),
        ('institutions', InstitutionsBlock()),
        ('methodology', MethodologyBlock()),
        ('polygon_header', SixPolygonHeader()),
        ('stakeholders', Stakeholders()),
        ('table_with_header', TableWithHeaderBlock()),
        # ('team', TeamBlock()),
        ('testimonials', TestimonialsBlock()),
        ('three_columns', ThreeColumnBlock()),
        ('topic_grid', TopicGridBlock()),
        ('paragraph', RichTextBlock(template='pages/streamfield_blocks/paragraph.html')),
        ('video_embed', VideoEmbedBlock()),
    ], blank=True)

    content_panels = PageWithHeader.content_panels + [
        FieldPanel('subtitle'),
        StreamFieldPanel('content'),
    ]

    TEMPLATES_AND_CONTEXTS = (
        ('pages/home_page.html', None),
        ('pages/foresight_dictionary.html', foresight_dictionary_get_context),
    )

    page_template = models.CharField(choices=((k[0], k[0]) for k in TEMPLATES_AND_CONTEXTS), max_length=255, blank=True,
                                     null=True)

    settings_panels = PageWithHeader.settings_panels + [
        MultiFieldPanel([
            FieldPanel('page_template', classname="template"),
        ], 'Developer settings', classname='collapsible collapsed'),
    ]
