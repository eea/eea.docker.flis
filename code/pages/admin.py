from wagtail.contrib.modeladmin.options import ModelAdmin, modeladmin_register, ModelAdminGroup
from flis_metadata.admin import GeographicalScopeAdmin, EnvironmentalThemeAdmin, CountryAdmin
from .snippets import Word, Institution, TeamMember, Testimonial


class FlisPageAdmin(ModelAdmin):
    add_to_settings_menu = False
    exclude_from_explorer = False
    list_display = ['title', 'latest_revision_created_at', 'owner', 'live', 'has_unpublished_changes', 'show_in_menus',
                    'get_parent']
    search_fields = ('title',)
    ordering = ['title']


class TestimonialAdmin(ModelAdmin):
    model = Testimonial
    menu_order = 1000
    add_to_settings_menu = False
    exclude_from_explorer = False
    search_fields = ('author',)
    list_display = ['author']
    ordering = ['author']


class TeamMemberAdmin(ModelAdmin):
    model = TeamMember
    menu_order = 1000
    add_to_settings_menu = False
    exclude_from_explorer = False
    search_fields = ('name', 'country', 'organisation')
    list_display = ['name', 'country', 'organisation']
    ordering = ['name']


class InstitutionAdmin(ModelAdmin):
    model = Institution
    menu_order = 1000
    add_to_settings_menu = False
    exclude_from_explorer = False
    search_fields = ('name',)
    list_display = ['name']
    ordering = ['name']


class WordAdmin(ModelAdmin):
    model = Word
    menu_label = 'Dictionary words'
    menu_order = 1000
    add_to_settings_menu = False
    exclude_from_explorer = False
    search_fields = ('word', 'description')
    list_display = ['word', 'live']
    ordering = ['word']


class CommonAdminGroup(ModelAdminGroup):
    menu_label = 'Common'
    menu_icon = 'radio-full'  # change as required
    menu_order = 200
    items = (
        CountryAdmin,
        WordAdmin,
        EnvironmentalThemeAdmin,
        GeographicalScopeAdmin,
        InstitutionAdmin,
        TestimonialAdmin,
        # TeamMemberAdmin,
    )


modeladmin_register(CommonAdminGroup)
