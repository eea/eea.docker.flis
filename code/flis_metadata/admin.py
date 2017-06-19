from wagtail.contrib.modeladmin.options import ModelAdmin
from flis_metadata.models import GeographicalScope, EnvironmentalTheme, Country


class GeographicalScopeAdmin(ModelAdmin):
    model = GeographicalScope
    list_display = ('title',)
    search_fields = ('title',)


class EnvironmentalThemeAdmin(ModelAdmin):
    model = EnvironmentalTheme
    list_display = ('title',)
    search_fields = ('title',)


class CountryAdmin(ModelAdmin):
    model = Country
    list_display = ('name', 'iso')
    search_fields = ('name', 'iso')
