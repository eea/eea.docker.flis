from dal.widgets import WidgetMixin
from dal_select2.widgets import Select2WidgetMixin
from django import forms
from django.forms.models import ModelChoiceIterator
from django.utils.encoding import force_text
from django.utils.html import format_html
from django.utils.safestring import mark_safe


class ModelSelectWithOptionsWithTooltips(forms.Select):
    """
    Provides a select widget that uses one of the model fields
    to create a title tooltip attribute for an option
    It's useful to provide additional description for a select's option.
    """

    def __init__(self, attrs=None, choices=(), title_from=None):
        super(ModelSelectWithOptionsWithTooltips, self).__init__(attrs, choices)
        self.title_from = title_from or 'description'

    def render_option(self, selected_choices, option_value, option_label, option_title=None):
        if option_value is None:
            option_value = ''
        option_value = force_text(option_value)
        if option_value in selected_choices:
            selected_html = mark_safe(' selected="selected"')
            if not self.allow_multiple_selected:
                # Only allow for a single selection.
                selected_choices.remove(option_value)
        else:
            selected_html = ''
        return format_html('<option title="{}" value="{}"{}>{}</option>', force_text(option_title), option_value,
                           selected_html, force_text(option_label))

    def render_options(self, selected_choices):
        if not isinstance(self.choices, ModelChoiceIterator):
            return super(ModelSelectWithOptionsWithTooltips, self).render_options(selected_choices)

        # Normalize to strings.
        selected_choices = set(force_text(v) for v in selected_choices)
        output = []

        # Get empty value (if exists) from initial field options.
        for option_value, option_label in self.choices:
            if option_value is None or option_value is '':
                output.append(self.render_option(selected_choices, option_value, option_label, ''))
                break

        # Generate options from a queryset.
        for item in self.choices.queryset:
            output.append(self.render_option(selected_choices, item.pk, item.title,
                                             item.description if hasattr(item, self.title_from) else ''))
        return '\n'.join(output)


class FlisListModelSelect2(WidgetMixin, Select2WidgetMixin, ModelSelectWithOptionsWithTooltips):
    """Select widget for regular choices and Select2."""
