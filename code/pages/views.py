from dal import autocomplete
from django.contrib.admin.utils import quote
from django.db.models import Count
from django.http import Http404
from django.shortcuts import redirect, get_object_or_404, render
from django.template.response import TemplateResponse
from django.utils.decorators import classonlymethod
from wagtail.contrib.modeladmin.views import CreateView

from flis_flip.models import Assesment, ForwardLookingActivity
from flis_horison_scanning.models import TypeOfSignal, Signal
from .snippets import Word

from wagtail.utils.pagination import paginate
from wagtail.wagtailcore import hooks
from wagtail.wagtailcore.models import Page


def foresight_dictionary_get_context(context, request, *args, **kwargs):
    context['words'] = Word.objects.live()
    return context


def drivers_of_change_get_context(context, request, *args, **kwargs):
    context['types_of_signals'] = TypeOfSignal.objects.all()

    signals = Signal.objects.order_by('-first_published_at').live()
    if request.GET.get('type_of_signal'):
        try:
            assert request.GET['type_of_signal'] in [signal.slug for signal in context['types_of_signals']]
        except AssertionError:
            raise Http404
        signals = signals.filter(type_of_signal__slug=request.GET['type_of_signal'])

    paginator, paginated_signals = paginate(request, signals, 'page', 9)

    context['signals'] = paginated_signals

    return context


def assesments_of_use_get_context(context, request, *args, **kwargs):
    context['assesments'] = Assesment.objects.specific().live()
    return context


def foresight_in_policy_cycle_get_context(context, request, *args, **kwargs):
    context['foresight_in_policy_cycle'] = ForwardLookingActivity.objects.specific().live()[:3]
    return context


class WagtailPageServeBaseView(object):
    template_name = None

    def __init__(self, instance, request):
        self.instance = instance
        self.request = request
        self.request.is_preview = getattr(request, 'is_preview', False)

    @classonlymethod
    def serve(cls, instance, request, *args, **kwargs):
        view = cls(instance, request)
        return TemplateResponse(
            request,
            view.get_template() or instance.get_template(request, *args, **kwargs),
            view.get_context_data(*args, **kwargs)
        )

    def get_template(self):
        return self.template_name

    def get_context_data(self, *args, **kwargs):
        context = self.instance.get_context(self.request, *args, **kwargs)
        return context


class HomePageView(WagtailPageServeBaseView):
    template_name = 'pages/home_page.html'


class FlisCommunityPageView(WagtailPageServeBaseView):
    template_name = 'pages/flis_community.html'


class StaticIndexCreateView(CreateView):
    def dispatch(self, request, *args, **kwargs):
        if self.is_pagemodel:
            user = request.user
            parents = self.permission_helper.get_valid_parent_pages(user)

            parents = list(
                filter(
                    lambda parent: self.model in parent.get_allowed_subpage_types(),
                    parents.specific()
                )
            )

            # There's only one available parent for this page type for this
            # user, so we send them along with that as the chosen parent page
            if len(parents) == 1:
                parent = parents[0]
                parent_pk = quote(parent.pk)
                return redirect(self.url_helper.get_action_url(
                    'add', self.app_label, self.model_name, parent_pk))

            # The page can be added in multiple places, so redirect to the
            # choose_parent view so that the parent can be specified
            return redirect(self.url_helper.get_action_url('choose_parent'))
        return super(CreateView, self).dispatch(request, *args, **kwargs)


class StaticIndexCreateViewAdminMixin(object):
    create_view_class = StaticIndexCreateView


def index(request, parent_page_id=None):
    if parent_page_id:
        parent_page = get_object_or_404(Page, id=parent_page_id).specific
    else:
        parent_page = Page.get_first_root_node().specific

    pages = parent_page.get_children().prefetch_related('content_type')

    # Get page ordering
    ordering = request.GET.get('ordering', 'ord')
    if ordering not in [
        'title',
        '-title',
        'content_type',
        '-content_type',
        'live', '-live',
        'latest_revision_created_at',
        '-latest_revision_created_at',
        'ord'
    ]:
        ordering = '-latest_revision_created_at'

    if ordering == 'ord':
        # preserve the native ordering from get_children()
        pass
    elif ordering == 'latest_revision_created_at':
        # order by oldest revision first.
        # Special case NULL entries - these should go at the top of the list.
        # Do this by annotating with Count('latest_revision_created_at'),
        # which returns 0 for these
        pages = pages.annotate(
            null_position=Count('latest_revision_created_at')
        ).order_by('null_position', 'latest_revision_created_at')
    elif ordering == '-latest_revision_created_at':
        # order by oldest revision first.
        # Special case NULL entries - these should go at the end of the list.
        pages = pages.annotate(
            null_position=Count('latest_revision_created_at')
        ).order_by('-null_position', '-latest_revision_created_at')
    else:
        pages = pages.order_by(ordering)

    # Don't paginate if sorting by page order - all pages must be shown to
    # allow drag-and-drop reordering
    do_paginate = ordering != 'ord'

    if do_paginate:
        # Retrieve pages in their most specific form.
        # Only do this for paginated listings, as this could potentially be a
        # very expensive operation when performed on a large queryset.
        pages = pages.specific()

    # allow hooks to modify the queryset
    for hook in hooks.get_hooks('construct_explorer_page_queryset'):
        pages = hook(parent_page, pages, request)

    # Pagination
    if do_paginate:
        paginator, pages = paginate(request, pages, per_page=50)

    return render(request, 'wagtailadmin/pages/index.html', {
        'parent_page': parent_page.specific,
        'ordering': ordering,
        'pagination_query_params': "ordering=%s" % ordering,
        'pages': pages,
        'do_paginate': do_paginate,
    })


class AutocompleteBase(autocomplete.Select2QuerySetView):
    model = None

    def get_queryset(self):
        # Don't forget to filter out results depending on the visitor !
        if not self.request.user.is_authenticated():
            return self.model.objects.none()

        qs = self.model.objects.all()

        if self.q:
            qs = qs.filter(title__istartswith=self.q)

        return qs
