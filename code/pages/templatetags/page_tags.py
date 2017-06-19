import re
from math import floor

from django import template
from wagtail.wagtailcore.models import Page

from pages.utils import get_page_index

register = template.Library()


@register.assignment_tag(takes_context=True)
def get_site_root(context):
    # NB this returns a core.Page, not the implementation-specific model used
    # so object-comparison to self will return false as objects would differ
    return context['request'].site.root_page


@register.assignment_tag(takes_context=True)
def get_topics_root(context):
    # NB this returns a core.Page, not the implementation-specific model used
    # so object-comparison to self will return false as objects would differ
    return Page.objects.get(pk=7)


def has_menu_children(page):
    return page.get_children().live().in_menu().exists()


# Retrieves the submenu items - the immediate children of the parent page
@register.inclusion_tag('pages/tags/top_submenu.html', takes_context=True)
def top_submenu(context, parent, calling_page=None):
    output = top_menu(context, parent=parent, calling_page=calling_page)
    output['parent'] = parent
    menu_item_colors = ['black', 'lime', 'orange', 'aqua']
    index = 0
    for menuitem in output['menuitems']:
        menuitem.color = menu_item_colors[index] if len(menu_item_colors) > index else 'aqua'
        index += 1
    return output


# Retrieves the top menu items - the immediate children of the parent page
# The has_menu_children method is necessary because the bootstrap menu requires
# a dropdown class to be applied to a parent
@register.inclusion_tag('pages/tags/top_menu.html', takes_context=True)
def top_menu(context, parent, calling_page=None):
    menuitems = parent.get_children().live().in_menu().specific()
    menu_item_colors = ['orange', 'lime', 'purple', 'cherry', 'red', 'aqua']
    index = 0
    for menuitem in menuitems:
        menuitem.show_dropdown = has_menu_children(menuitem)
        menuitem.color = menu_item_colors[index] if len(menu_item_colors) > index else 'aqua'
        # We don't directly check if calling_page is None since the template
        # engine can pass an empty string to calling_page
        # if the variable passed as calling_page does not exist.
        menuitem.active = (calling_page.url.startswith(menuitem.url)
                           if calling_page else False)
        index += 1
    return {
        'calling_page': calling_page,
        'menuitems': menuitems,
        # required by the pageurl tag that we want to use within this template
        'request': context['request'],
    }


# Retrieves the children of the top menu items for the drop downs
@register.inclusion_tag('pages/tags/top_menu_children.html', takes_context=True)
def top_menu_children(context, parent):
    menuitems_children = parent.get_children()
    menuitems_children = menuitems_children.live().in_menu()
    return {
        'parent': parent,
        'menuitems_children': menuitems_children,
        # required by the pageurl tag that we want to use within this template
        'request': context['request']
    }


# Retrieves the bottom menu items - the immediate children of the parent page
@register.inclusion_tag('pages/tags/bottom_menu.html', takes_context=True)
def bottom_menu(context, parent):
    menuitems = parent.get_children().live().in_menu()

    grouped_menu_items = {'left': [], 'right': []}
    items_per_group = floor(len(menuitems) / 2)
    index = 0
    for menuitem in menuitems:
        menuitem.show_dropdown = has_menu_children(menuitem)
        grouped_menu_items['left' if index <= items_per_group else 'right'].append(menuitem)
        index += 1

    return {
        'menuitems': grouped_menu_items,
        'request': context['request'],
    }


@register.inclusion_tag('pages/tags/page_header.html')
def page_header(title, subtitle, icon, background_color, cover_image, slogan=None):
    return {
        'title': title,
        'subtitle': subtitle,
        'icon': icon,
        'background_color': background_color,
        'cover_image': cover_image,
        'slogan': slogan,
    }


@register.simple_tag
def to_list(*args):
    return args


@register.simple_tag
def page_index(page):
    index = get_page_index(page)
    return index + 1 if index is not None else ''


@register.filter
def strip_word(string, word_to_strip):
    pattern = re.compile(re.escape(word_to_strip), re.IGNORECASE)
    return pattern.sub('', string)


@register.filter
def divide(value, arg):
    try:
        return int(value) / int(arg)
    except (ValueError, ZeroDivisionError):
        return None
