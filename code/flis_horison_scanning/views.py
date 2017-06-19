from pages.views import AutocompleteBase
from .models import EUStrategy, SignalTagItem


class StrategiesAutocomplete(AutocompleteBase):
    model = EUStrategy


class TagsAutocomplete(AutocompleteBase):
    model = SignalTagItem

    def get_queryset(self):
        # Don't forget to filter out results depending on the visitor !
        if not self.request.user.is_authenticated():
            return self.model.objects.none()

        qs = self.model.objects.all()

        if self.q:
            qs = qs.filter(name__istartswith=self.q)

        return qs
