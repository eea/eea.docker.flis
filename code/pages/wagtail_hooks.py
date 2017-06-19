from django.conf import settings
from django.utils.html import format_html_join, format_html
from wagtail.wagtailcore import hooks
from .admin import *


@hooks.register('insert_editor_js')
def editor_js():
    js_files = [
        'pages/js/tweak_richtext_buttons.js',
    ]
    js_includes = format_html_join('\n', '<script src="{0}{1}"></script>',
                                   ((settings.STATIC_URL, filename) for filename in js_files)
                                   )
    return js_includes


@hooks.register('construct_main_menu')
def hide_snippets_menu_item(request, menu_items):
    menu_items[:] = [item for item in menu_items if item.name != 'snippets']


@hooks.register('insert_global_admin_css')
def global_admin_css():
    from django.contrib.staticfiles.templatetags.staticfiles import static
    return format_html('<link rel="stylesheet" href="{}">', static('pages/css/wagtailadmin-style.css'))
