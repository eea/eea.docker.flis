from contact_form.views import ContactFormView
from django.shortcuts import render
from .forms import FlisContactForm


class FlisContactFormView(ContactFormView):
    form_class = FlisContactForm

    def form_valid(self, form):
        form.save()
        return render(self.request, 'contact/contact_form_sent.html', {})
