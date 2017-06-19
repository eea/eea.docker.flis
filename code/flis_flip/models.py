from django.db import models
from django.forms import CheckboxSelectMultiple, SelectMultiple
from modelcluster.fields import ParentalManyToManyField, ParentalKey
from wagtail.wagtailadmin.edit_handlers import FieldPanel, FieldRowPanel, MultiFieldPanel, InlinePanel
from wagtail.wagtailcore.models import Orderable
from wagtail.wagtailsnippets.models import register_snippet

from pages.abstract_models import FlisPage


@register_snippet
class PhasesOfPolicy(models.Model):
    title = models.CharField(max_length=128)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)


@register_snippet
class ForesightApproach(models.Model):
    title = models.CharField(max_length=128)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)


@register_snippet
class TypeOfOutcome(models.Model):
    TYPE_CHOICES = (
        ('all', 'All'),
        ('activity', 'Forward looking activity'),
        ('assessment', 'Assessment'),
    )

    title = models.CharField(max_length=256)
    blossom = models.BooleanField(default=False)
    doc_type = models.CharField(
        'Type',
        choices=TYPE_CHOICES,
        max_length=128,
        null=True,
        default='all'
    )
    sort_id = models.IntegerField(default=0, null=True, blank=True)

    class Meta:
        ordering = ('title',)

    def __str__(self):
        return self.title


class Outcome(Orderable, models.Model):
    study = ParentalKey('Study', related_name='outcomes')

    type_of_outcome = models.ForeignKey(
        'TypeOfOutcome',
        verbose_name='type of output',
        null=True,
        blank=True)

    document_title = models.CharField('title', max_length=255)

    text = models.TextField('text', null=True, blank=True)

    file_id = models.FileField(upload_to='outcomes', max_length=256, null=True,
                               blank=True, default='', verbose_name='File')

    def __str__(self):
        return self.document_title


class Study(FlisPage):
    is_creatable = False

    EEA = 'eea'
    OTHER = 'other'
    REQUESTED_BY_CHOICES = (
        (EEA, 'EEA'),
        (OTHER, 'Other'),
    )

    YES = 1
    NO = 0
    YES_NO_CHOICES = (
        ('', '----'),
        (YES, 'Yes'),
        (NO, 'No'),
    )

    POLICY = 'policy'
    NON_POLICY = 'non_policy'
    PURPOSE_CHOICES = (
        (POLICY, 'Support to policy'),
        (NON_POLICY, 'Non-policy (research, civil initiative, NGOs...'),
    )

    requested_by = models.CharField(
        'who requested the study?',
        max_length=64,
        choices=REQUESTED_BY_CHOICES,
        blank=True
    )

    start_date = models.DateField('start date')

    end_date = models.DateField('end date')

    lead_author = models.TextField('lead author')

    other = models.TextField(
        'other organisations/authors or contact persons',
        blank=True
    )

    purpose_and_target = models.CharField(
        'purpose and target audience',
        max_length=128,
        choices=PURPOSE_CHOICES,
        blank=True,
    )

    additional_information = models.TextField(
        'additional information',
        blank=True)

    geographical_scope = models.ForeignKey(
        'flis_metadata.GeographicalScope',
        verbose_name='geographical scope',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    countries = ParentalManyToManyField(
        'flis_metadata.Country',
        verbose_name='countries',
        blank=True)

    def __str__(self):
        return self.title


class ForwardLookingActivity(Study):
    parent_page_types = ['pages.StaticIndex']

    phase_of_policy = models.ForeignKey(
        'PhasesOfPolicy',
        verbose_name='phases of policy cycle',
        null=True,
        blank=True,
        on_delete=models.SET_NULL
    )

    environmental_themes = ParentalManyToManyField(
        'flis_metadata.EnvironmentalTheme',
        verbose_name='topics',
        blank=True)

    additional_information_phase = models.TextField(
        ('additional information about the application'),
        blank=True)

    foresight_approaches = ParentalManyToManyField(
        'ForesightApproach',
        verbose_name='foresight approaches used')

    stakeholder_participation = models.BooleanField(
        'stakeholder participation',
        default=False)

    additional_information_stakeholder = models.TextField(
        'additional information about stakeholder involvement',
        blank=True)

    content_panels = Study.content_panels + [
        FieldPanel('requested_by'),
        MultiFieldPanel([FieldRowPanel([
            FieldPanel('start_date'),
            FieldPanel('end_date')
        ])]
            , 'Timing'
        ),
        MultiFieldPanel([
            FieldPanel('environmental_themes'),
            FieldPanel('geographical_scope'),
            FieldPanel('countries', widget=SelectMultiple),
        ], 'Scope of study'),
        MultiFieldPanel([
            FieldPanel('lead_author'),
            FieldPanel('other'),
        ], 'References and contact information'),
        MultiFieldPanel([
            FieldPanel('purpose_and_target'),
            FieldPanel('additional_information'),
        ], 'Purpose and target audience'),

        MultiFieldPanel([
            FieldPanel('phase_of_policy'),
            FieldPanel('additional_information_phase'),
        ], 'Application of forward looking information in policy cycle'),

        MultiFieldPanel([
            FieldPanel('foresight_approaches'),
            FieldPanel('stakeholder_participation'),
            FieldPanel('additional_information_stakeholder'),
        ], 'Methods and methodology used'),
        InlinePanel('outcomes', label='Outcomes'),
    ]

    class Meta:
        verbose_name_plural = 'Forward looking activities'


class Assesment(Study):
    parent_page_types = ['pages.StaticIndex']

    BLOSSOM_CHOICES = (
        (1, 'BLOSSOM study'),
        (0, 'other study'),
    )

    blossom = models.IntegerField(
        'Approach to assessment',
        choices=BLOSSOM_CHOICES,
        default=0,
    )

    content_panels = Study.content_panels + [
        FieldPanel('blossom'),
        FieldPanel('requested_by'),
        MultiFieldPanel([FieldRowPanel([
            FieldPanel('start_date'),
            FieldPanel('end_date')
        ])]
            , 'Timing'
        ),
        MultiFieldPanel([
            FieldPanel('geographical_scope'),
            FieldPanel('countries', widget=CheckboxSelectMultiple),
        ], 'Scope of study'),
        MultiFieldPanel([
            FieldPanel('lead_author'),
            FieldPanel('other'),
        ], 'References and contact information'),
        MultiFieldPanel([
            FieldPanel('purpose_and_target'),
            FieldPanel('additional_information'),
        ], 'Purpose and target audience'),
        InlinePanel('outcomes', label='Outcomes'),
    ]
