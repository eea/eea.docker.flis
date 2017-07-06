from django.core.validators import validate_email
from django.db import models
from wagtail.contrib.settings.models import BaseSetting
from wagtail.contrib.settings.registry import register_setting


def validate_comma_separated_email(value):
    emails = value.split(',')
    for email in emails:
        validate_email(email.strip())


@register_setting
class ContactFormSettings(BaseSetting):
    recipients = models.CharField(
        max_length=256,
        help_text='A comma-separated list of email addresses to send contact form emails to',
        validators=[validate_comma_separated_email]
    )