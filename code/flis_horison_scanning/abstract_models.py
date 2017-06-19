from django.conf import settings
from django.db import models
from wagtail.wagtailadmin.edit_handlers import FieldPanel

from pages.abstract_models import Orderable


class GenericElement(models.Model):
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        blank=True,
        editable=False,
        on_delete=models.SET_NULL,
    )
    title = models.CharField(max_length=512)
    short_title = models.CharField(max_length=64)
    geographical_scope = models.ForeignKey('flis_metadata.GeographicalScope', null=True, blank=True)
    country = models.ForeignKey('flis_metadata.Country', null=True, blank=True)
    url = models.CharField(max_length=256, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True, null=True, editable=False)
    live = models.BooleanField(default=False)
    author = models.CharField(max_length=512)

    def __str__(self):
        return self.title

    class Meta:
        abstract = True


class SourcesMixin(models.Model):
    sources = models.ManyToManyField('flis_horison_scanning.Source', blank=True)

    class Meta:
        abstract = True


class CategoryBase(models.Model):
    title = models.CharField(max_length=64)

    def __str__(self):
        return self.title

    class Meta:
        abstract = True


class SortableCategoryWithDescriptionBase(Orderable, models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        abstract = True

    panels = [
        FieldPanel('title'),
        FieldPanel('description'),
        FieldPanel('sort_order'),
    ]
