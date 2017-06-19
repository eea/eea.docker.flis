from django.conf.urls import url
from django.views.generic import TemplateView

from .views import FlisContactFormView

urlpatterns = [
    url(r'^$', FlisContactFormView.as_view(), name='contact_form'),
    url(r'^sent/$',
        TemplateView.as_view(
            template_name='contact/contact_form_sent.html'),
        name='contact_form_sent'),
]
