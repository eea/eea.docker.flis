from wagtail.wagtailadmin.edit_handlers import FieldPanel
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel

from wagtail.wagtailsnippets.models import register_snippet
from django.db import models


@register_snippet
class TeamMember(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    organisation = models.CharField(max_length=255)
    image = models.ForeignKey(
        'pages.FlisImage',
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    panels = [
        FieldPanel('name'),
        FieldPanel('country'),
        FieldPanel('organisation'),
        ImageChooserPanel('image'),
    ]

    def __str__(self):
        return self.name


@register_snippet
class Institution(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField(blank=True, null=True, max_length=255)
    logo = models.ForeignKey(
        'pages.FlisImage',
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    panels = [
        FieldPanel('name'),
        FieldPanel('url'),
        ImageChooserPanel('logo'),
    ]

    def __str__(self):
        return self.name


@register_snippet
class Testimonial(models.Model):
    author = models.CharField(max_length=255)
    image = models.ForeignKey(
        'pages.FlisImage',
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    text = RichTextField(blank=False, null=False)

    panels = [
        FieldPanel('author'),
        ImageChooserPanel('image'),
        FieldPanel('text'),
    ]

    def __str__(self):
        return self.author


class WordQuerySet(models.QuerySet):
    def live(self):
        return self.filter(live=True)


class WordManager(models.Manager):
    def get_queryset(self):
        return WordQuerySet(self.model, using=self._db)

    def live(self):
        return self.get_queryset().live()


@register_snippet
class Word(models.Model):
    word = models.CharField(max_length=255)
    description = RichTextField(blank=False, null=False)
    sources = RichTextField(blank=True, null=True)
    live = models.BooleanField(verbose_name='Is published', default=True, editable=True)

    panels = [
        FieldPanel('word'),
        FieldPanel('description'),
        FieldPanel('sources'),
        FieldPanel('live'),
    ]

    def __str__(self):
        return self.word

    class Meta:
        verbose_name = 'Dictionary word'
        verbose_name_plural = 'Dictionary words'

    objects = WordManager()
