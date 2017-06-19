from wagtail.contrib.modeladmin.options import ModelAdminGroup, modeladmin_register, ModelAdmin

from flis_horison_scanning.models import Source, Figure, SteepCategory, ImpactType, TimeHorizon, Impact, Implication, \
    Indicator, Signal, OriginOfSignal, OverallImpact, GeographicalScope, \
    TypeOfSignal, RelevanceOfSignalSeverity, RelevanceOfSignalLikelihood, EUStrategy
from pages.admin import FlisPageAdmin
from pages.views import StaticIndexCreateViewAdminMixin


class GenericAdmin(ModelAdmin):
    list_display = ('title', 'live', 'owner', 'author', 'created')
    list_filter = ('live',)
    search_fields = ('title', 'owner', 'author')


class CategoryAdmin(ModelAdmin):
    list_display = ('title',)
    search_fields = ('title',)


class SortableWithDescriptionCategoryAdmin(ModelAdmin):
    list_display = ('title', 'sort_order')
    search_fields = ('title',)
    ordering = ('sort_order',)


class SteepCategoryAdmin(CategoryAdmin):
    model = SteepCategory


class ImpactTypeAdmin(CategoryAdmin):
    model = ImpactType


class SourceAdmin(GenericAdmin):
    model = Source


class ImpactAdmin(GenericAdmin):
    model = Impact


class ImplicationAdmin(GenericAdmin):
    model = Implication


class IndicatorAdmin(GenericAdmin):
    model = Indicator


class FigureAdmin(GenericAdmin):
    model = Figure


class SignalAdmin(StaticIndexCreateViewAdminMixin, FlisPageAdmin):
    model = Signal


class OriginOfSignalAdmin(SortableWithDescriptionCategoryAdmin):
    model = OriginOfSignal


class OverallImpactAdmin(SortableWithDescriptionCategoryAdmin):
    model = OverallImpact


class GeographicalScopeAdmin(SortableWithDescriptionCategoryAdmin):
    model = GeographicalScope


class TypeOfSignalAdmin(SortableWithDescriptionCategoryAdmin):
    model = TypeOfSignal


class TimeHorizonAdmin(SortableWithDescriptionCategoryAdmin):
    model = TimeHorizon


class EUStrategyAdmin(ModelAdmin):
    model = EUStrategy
    list_display = ('title',)
    search_fields = ('title',)


class RelevanceOfSignalSeverityAdmin(SortableWithDescriptionCategoryAdmin):
    model = RelevanceOfSignalSeverity


class RelevanceOfSignalLikelihoodAdmin(SortableWithDescriptionCategoryAdmin):
    model = RelevanceOfSignalLikelihood


class FlisHorisonScanningAdminGroup(ModelAdminGroup):
    menu_label = 'Horizon Scanning'
    menu_icon = 'waat icon--sunset'  # change as required
    menu_order = 200
    items = (
        SignalAdmin,
        OriginOfSignalAdmin,
        OverallImpactAdmin,
        GeographicalScopeAdmin,
        TimeHorizonAdmin,
        TypeOfSignalAdmin,
        EUStrategyAdmin,
        RelevanceOfSignalSeverityAdmin,
        RelevanceOfSignalLikelihoodAdmin
    )


# When using a ModelAdminGroup class to group several ModelAdmin classes together,
# you only need to register the ModelAdminGroup class with Wagtail:
modeladmin_register(FlisHorisonScanningAdminGroup)
