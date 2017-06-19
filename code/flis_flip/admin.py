from wagtail.contrib.modeladmin.options import ModelAdminGroup, ModelAdmin, modeladmin_register
from flis_flip.models import ForwardLookingActivity, Assesment, ForesightApproach, PhasesOfPolicy, TypeOfOutcome
from pages.admin import FlisPageAdmin
from pages.views import StaticIndexCreateViewAdminMixin


class ForwardLookingActivityAdmin(StaticIndexCreateViewAdminMixin, FlisPageAdmin):
    model = ForwardLookingActivity


class AssesmentAdmin(StaticIndexCreateViewAdminMixin, FlisPageAdmin):
    model = Assesment


class ForesightApproachAdmin(StaticIndexCreateViewAdminMixin, ModelAdmin):
    model = ForesightApproach


class PhasesOfPolicyAdmin(StaticIndexCreateViewAdminMixin, ModelAdmin):
    model = PhasesOfPolicy


class TypeOfOutcomeAdmin(ModelAdmin):
    model = TypeOfOutcome


class FlipAdminGroup(ModelAdminGroup):
    menu_label = 'Foresight Policy'
    menu_icon = 'waat icon--stack'
    menu_order = 200
    items = (
        AssesmentAdmin,
        ForwardLookingActivityAdmin,
        ForesightApproachAdmin,
        PhasesOfPolicyAdmin,
        TypeOfOutcomeAdmin
    )


modeladmin_register(FlipAdminGroup)
