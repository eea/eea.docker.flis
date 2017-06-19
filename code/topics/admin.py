from wagtail.contrib.modeladmin.options import ModelAdminGroup, modeladmin_register
from pages.admin import FlisPageAdmin
from topics.models import TopicIndexPage, TopicStoryPage


class TopicIndexPageAdmin(FlisPageAdmin):
    model = TopicIndexPage


class TopicStoryPageAdmin(FlisPageAdmin):
    model = TopicStoryPage


class TopicAdminGroup(ModelAdminGroup):
    menu_label = 'Topics'
    menu_icon = 'waat icon--clusters'  # change as required
    menu_order = 200
    items = (
        TopicIndexPageAdmin,
        TopicStoryPageAdmin
    )


modeladmin_register(TopicAdminGroup)
