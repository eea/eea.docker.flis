from dal import autocomplete
from dal_select2.widgets import Select2Multiple
from dal_select2_taggit.widgets import TaggitSelect2
from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from modelcluster.contrib.taggit import ClusterTaggableManager
from modelcluster.fields import ParentalManyToManyField, ParentalKey
from taggit.models import TaggedItemBase, TagBase
from wagtail.wagtailadmin.edit_handlers import FieldPanel, InlinePanel, MultiFieldPanel
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailcore.models import Page
from wagtail.wagtailimages.edit_handlers import ImageChooserPanel
from wagtail.wagtailsnippets.edit_handlers import SnippetChooserPanel
from charsleft_widget.widgets import CharsLeftArea

from flis_horison_scanning.abstract_models import GenericElement, SourcesMixin, CategoryBase, \
    SortableCategoryWithDescriptionBase
from pages.abstract_models import FlisPage, Orderable
from pages.widgets import FlisListModelSelect2
from .choices import TREND_TYPES, UNCERTAINTY_TYPES


class Source(GenericElement):
    title_original = models.CharField(max_length=512, null=True, blank=True)
    published_year = models.CharField(max_length=4)
    legacy_file = models.CharField(max_length=512, null=True, blank=True)
    summary = models.TextField(null=True, blank=True)
    author = models.CharField(max_length=512)

    def __unicode__(self):
        return self.name


class Figure(GenericElement, SourcesMixin):
    legacy_file = models.CharField(max_length=512, blank=True, null=True)
    theme = models.ForeignKey('flis_metadata.EnvironmentalTheme')


class SteepCategory(CategoryBase):
    class Meta:
        verbose_name_plural = 'Steep Categories'


class ImpactType(CategoryBase):
    pass


class Impact(GenericElement, SourcesMixin):
    impact_type = models.ForeignKey('ImpactType', related_name='impact_type', blank=True, null=True)
    steep_category = models.ForeignKey('SteepCategory', related_name='impact_category', blank=True, null=True)
    description = models.TextField()


class Implication(GenericElement, SourcesMixin):
    AREA_POLICY = (
        ('mock_policy', 'Mock policy'),
    )

    policy_area = models.CharField(
        max_length=64,
        choices=AREA_POLICY,
        default=0,
        blank=True,
        null=True,
    )
    description = models.TextField(max_length=2048)

    def __unicode__(self):
        return self.name


class Indicator(GenericElement, SourcesMixin):
    theme = models.ForeignKey('flis_metadata.EnvironmentalTheme')
    start_date = models.DateField(editable=True, null=True, blank=True)
    end_date = models.DateField(editable=True)
    assessment = models.TextField(null=True, blank=True)
    assessment_author = models.CharField(max_length=64, null=True, blank=True)


class DriverOfChange(FlisPage):
    is_creatable = False

    image = models.ForeignKey(
        'pages.FlisImage',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    short_title = models.CharField(max_length=64)
    geographical_scope = models.ForeignKey(
        'flis_metadata.GeographicalScope',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )
    country = models.ForeignKey(
        'flis_metadata.Country',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    steep_category = models.ForeignKey(
        'SteepCategory',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )
    time_horizon = models.ForeignKey(
        'TimeHorizon',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )
    summary = RichTextField(null=True, blank=True)

    impacts = ParentalManyToManyField(
        'Impact',
        blank=True,
    )
    implications = ParentalManyToManyField(
        'Implication',
        blank=True,
    )
    indicators = ParentalManyToManyField(
        'Indicator',
        blank=True,
    )
    sources = ParentalManyToManyField(
        'Source',
        blank=True,
    )
    figures = ParentalManyToManyField(
        'Figure',
        blank=True,
    )

    content_panels = Page.content_panels + [
        ImageChooserPanel('image'),
        FieldPanel('short_title'),
        SnippetChooserPanel('geographical_scope'),
        SnippetChooserPanel('country'),
        SnippetChooserPanel('steep_category'),
        SnippetChooserPanel('time_horizon'),
        FieldPanel('summary'),
        FieldPanel('impacts', widget=autocomplete.ModelSelect2Multiple(url='impacts-autocomplete')),
        FieldPanel('implications', widget=autocomplete.ModelSelect2Multiple(url='implications-autocomplete')),
        FieldPanel('indicators', widget=autocomplete.ModelSelect2Multiple(url='indicators-autocomplete')),
        FieldPanel('sources', widget=autocomplete.ModelSelect2Multiple(url='sources-autocomplete')),
        FieldPanel('figures', widget=autocomplete.ModelSelect2Multiple(url='figures-autocomplete')),
    ]

    class Meta:
        verbose_name = 'Signal of Change'
        verbose_name_plural = 'Signals of Change'


class Trend(DriverOfChange):
    parent_page_types = ['pages.StaticIndex']
    trend_type = models.IntegerField(choices=TREND_TYPES, default=1)

    content_panels2 = DriverOfChange.content_panels + [
        SnippetChooserPanel('trend_type')
    ]


class Uncertainty(DriverOfChange):
    parent_page_types = ['pages.StaticIndex']
    uncertainty_type = models.IntegerField(choices=UNCERTAINTY_TYPES, default=1)

    content_panels2 = DriverOfChange.content_panels + [
        SnippetChooserPanel('uncertainty_type')
    ]

    class Meta:
        verbose_name_plural = 'Uncertainties'


class WeakSignal(DriverOfChange):
    parent_page_types = ['pages.StaticIndex']


class WildCard(DriverOfChange):
    parent_page_types = ['pages.StaticIndex']


class SignalTagItem(TagBase):
    class Meta:
        ordering = ('name',)


class SignalTag(TaggedItemBase):
    content_object = ParentalKey('Signal', related_name='tagged_signals')
    tag = models.ForeignKey(SignalTagItem,
                            related_name="%(app_label)s_%(class)s_items")


class Signal(FlisPage):
    class Meta:
        ordering = ('-first_published_at',)

    SIGNAL_TYPES = (
        ('megatrend', 'Megatrend'),
        ('trend', 'Trend'),
        ('weak_signal', 'Weak Signal'),
        ('wild_card', 'Wild Card'),
        ('other', 'Other'),
    )

    parent_page_types = ['pages.StaticIndex']

    short_title = models.CharField(max_length=256)

    type_of_signal = models.ForeignKey(
        'TypeOfSignal',
        null=True,
        blank=False,
        on_delete=models.SET_NULL
    )

    cover_image = models.ForeignKey(
        'pages.FlisImage',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    geographical_scope = models.ForeignKey(
        'GeographicalScope',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    headline = models.TextField(max_length=256)

    description = RichTextField()

    origin_of_signal = models.ForeignKey(
        'OriginOfSignal',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    time_horizon = models.ForeignKey(
        'TimeHorizon',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    overall_impact = models.ForeignKey(
        'OverallImpact',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    impact_description = RichTextField(blank=True, null=True)

    implications = RichTextField(blank=True, null=True)

    strategies = ParentalManyToManyField(
        'EUStrategy',
        blank=True,
    )

    date_of_signal_detection = models.DateField(null=True)
    date_of_last_modification = models.DateField(blank=True, null=True,
                                                 verbose_name='Date of last modification to the signal')

    likelihood = models.ForeignKey(
        'RelevanceOfSignalLikelihood',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    severity = models.ForeignKey(
        'RelevanceOfSignalSeverity',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    keywords = ClusterTaggableManager(through=SignalTag, blank=True)

    content_panels = [
        FieldPanel('short_title'),
        FieldPanel('type_of_signal', widget=FlisListModelSelect2),
        FieldPanel('title'),
        ImageChooserPanel('cover_image'),
        FieldPanel('geographical_scope', widget=FlisListModelSelect2),
        FieldPanel('headline', widget=CharsLeftArea),
        FieldPanel('description'),
        InlinePanel('images', label='Images'),
        FieldPanel('origin_of_signal', widget=FlisListModelSelect2),
        FieldPanel('time_horizon', widget=FlisListModelSelect2),
        FieldPanel('overall_impact', widget=FlisListModelSelect2),
        FieldPanel('impact_description'),
        FieldPanel('implications'),
        InlinePanel('signal_sources', label='Source'),
        InlinePanel('eea_indicators', label='Related EEA Indicator'),
        FieldPanel('overall_impact', widget=FlisListModelSelect2),
        FieldPanel('strategies', widget=Select2Multiple),
        FieldPanel('date_of_signal_detection'),
        FieldPanel('date_of_last_modification'),
        MultiFieldPanel([
            FieldPanel('likelihood'),
            FieldPanel('severity'),
        ], heading='Relevance of the signal'),
        FieldPanel('keywords', widget=TaggitSelect2(url='tags-autocomplete')),
    ]

    def save(self, *args, **kwargs):
        original = self.__class__.objects.get(pk=self.pk) if self.pk else None

        if any(
                [
                            original and self.date_of_last_modification == original.date_of_last_modification,
                            self.date_of_last_modification is None
                ]
        ):
            self.date_of_last_modification = timezone.now()

        super().save(*args, **kwargs)


Signal._meta.get_field('title').verbose_name = 'Long title'


class SignalImage(models.Model):
    signal = ParentalKey('Signal', related_name='images')
    image = models.ForeignKey(
        'pages.FlisImage',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    caption = models.TextField(blank=True, null=True)

    panels = [
        ImageChooserPanel('image'),
        FieldPanel('caption'),
    ]

    class Meta:
        ordering = ('pk',)


class SignalSource(models.Model):
    signal = ParentalKey('Signal', related_name='signal_sources')
    source = RichTextField(blank=False)

    class Meta:
        ordering = ('pk',)


class EEAIndicator(models.Model):
    signal = ParentalKey('Signal', related_name='eea_indicators')
    title = models.CharField(max_length=512)
    url = models.URLField(max_length=512)

    class Meta:
        ordering = ('pk',)


class OriginOfSignal(SortableCategoryWithDescriptionBase):
    class Meta:
        verbose_name = 'Origin of Signal'
        verbose_name_plural = 'Origins of Signals'


class OverallImpact(SortableCategoryWithDescriptionBase):
    pass


class TimeHorizon(SortableCategoryWithDescriptionBase):
    pass


class GeographicalScope(SortableCategoryWithDescriptionBase):
    pass


class TypeOfSignal(SortableCategoryWithDescriptionBase):
    slug = models.SlugField(max_length=50, primary_key=True, editable=False)

    def save(self, *args, **kwargs):
        if self.slug is None or len(self.slug) == 0:
            self.slug = slugify(self.title)
        super(TypeOfSignal, self).save(*args, **kwargs)

    class Meta:
        verbose_name_plural = 'Types of Signals'


class EUStrategy(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'EU Strategies'


class RelevanceOfSignalLikelihood(SortableCategoryWithDescriptionBase):
    class Meta:
        verbose_name = 'Relevance of Signal: Likelihood'
        verbose_name_plural = 'Relevance of Signal: Likelihoods'


class RelevanceOfSignalSeverity(SortableCategoryWithDescriptionBase):
    class Meta:
        verbose_name = 'Relevance of Signal: Severity'
        verbose_name_plural = 'Relevance of Signal: Severities'
