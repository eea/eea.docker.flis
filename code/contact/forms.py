from contact_form.forms import ContactForm
from wagtail.wagtailcore.models import Site

from contact.models import ContactFormSettings


class FlisContactForm(ContactForm):

    def __init__(self, data=None, files=None, request=None,
                 recipient_list=None, *args, **kwargs):

        if not recipient_list:
            contact_form_settings = ContactFormSettings.for_site(Site.objects.first())
            if contact_form_settings:
                recipient_list = [email.strip() for email in contact_form_settings.recipients.split(',')]

        super().__init__(data=data, files=files, request=request, recipient_list=recipient_list,
                         *args, **kwargs)

        self.fields['name'].widget.attrs['placeholder'] = 'name'
        self.fields['email'].widget.attrs['placeholder'] = 'e-mail'
        self.fields['body'].widget.attrs['placeholder'] = 'message'