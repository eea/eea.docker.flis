from django.utils.html import format_html
from django.conf import settings
from wagtail.wagtailcore import hooks


@hooks.register('insert_global_admin_css')
def import_waat_icons_stylesheet():
    elem = '<link rel="stylesheet" href="{}waat_icons/css/waat_icons.css">'.format(settings.STATIC_URL)
    return format_html(elem)
