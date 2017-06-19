from django.db import models
from wagtail.wagtailadmin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.wagtailcore.fields import StreamField, RichTextField
from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore import blocks
from pages.abstract_models import PageWithHeader, FlisPage
from pages.blocks import ImageWithCaptionBlock, FootNotesBlock, TableWithHeaderBlock, VideoEmbedBlock
from topics.blocks import NexusGraph


class TopicIndexPage(PageWithHeader):
    parent_page_objects = [7]
    subpage_types = ['topics.TopicStoryPage']

    subtitle = models.CharField(max_length=255, blank=True, null=True)

    content_panels = PageWithHeader.content_panels + [
        FieldPanel('subtitle'),
    ]


class TopicStoryPage(FlisPage):
    parent_page_types = ['topics.TopicIndexPage']
    subpage_types = []

    teaser = RichTextField(blank=True, null=True)

    content = StreamField([
        ('image_with_caption', ImageWithCaptionBlock()),
        ('footnotes', FootNotesBlock()),
        # ('resources_nexus', ResourcesNexusBlock()),
        ('nexus_graph', NexusGraph()),
        ('table_with_header', TableWithHeaderBlock()),
        ('paragraph', blocks.RichTextBlock()),
        ('subheading',
         blocks.CharBlock(classname="full title", template='pages/streamfield_blocks/subheading.html', icon='title')),
        ('video_embed', VideoEmbedBlock()),
    ], blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('teaser'),
        StreamFieldPanel('content'),
    ]
