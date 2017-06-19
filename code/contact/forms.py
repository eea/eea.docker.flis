from contact_form.forms import ContactForm


class FlisContactForm(ContactForm):
    def __init__(self, data=None, files=None, request=None,
                 recipient_list=None, *args, **kwargs):
        super().__init__(data=data, files=files, request=request, recipient_list=recipient_list,
                         *args, **kwargs)
        self.fields['name'].widget.attrs['placeholder'] = 'name'
        self.fields['email'].widget.attrs['placeholder'] = 'e-mail'
        self.fields['body'].widget.attrs['placeholder'] = 'message'
