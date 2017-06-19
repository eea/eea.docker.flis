from django.db import models
from wagtail.wagtailsnippets.models import register_snippet


@register_snippet
class GeographicalScope(models.Model):
    title = models.CharField(max_length=128)
    require_country = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)


@register_snippet
class EnvironmentalTheme(models.Model):
    title = models.CharField(max_length=128)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)


@register_snippet
class Country(models.Model):
    iso = models.CharField(max_length=2, primary_key=True)
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'countries'
        ordering = ('name',)
