from django import template
from contact.forms import FlisContactForm

register = template.Library()


@register.inclusion_tag('contact_form/contact_form.html', takes_context=True)
def contact_form(context):
    return {
        'form': FlisContactForm(request=context['request'])
    }
