from django.conf.urls import url
from .views import StrategiesAutocomplete, TagsAutocomplete

urlpatterns = [
    url(
        r'^strategies-autocomplete/$',
        StrategiesAutocomplete.as_view(),
        name='strategies-autocomplete',
    ),
    url(
        r'^tags-autocomplete/$',
        TagsAutocomplete.as_view(),
        name='tags-autocomplete',
    ),
]
