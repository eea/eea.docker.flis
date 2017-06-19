from django.template.loader import render_to_string
from django import forms
from embed_video.fields import EmbedVideoFormField
from wagtail.contrib.table_block.blocks import TableBlock
from wagtail.wagtailcore.blocks import StructBlock, CharBlock, RichTextBlock, ChoiceBlock, ListBlock, PageChooserBlock, \
    BooleanBlock, FieldBlock, TextBlock
from wagtail.wagtaildocs.blocks import DocumentChooserBlock
from wagtail.wagtailimages.blocks import ImageChooserBlock
from wagtail.wagtailsnippets.blocks import SnippetChooserBlock
from .choices import COLORS, ICONS
from .snippets import TeamMember, Institution, Testimonial


class ReadMoreButtonBlock(StructBlock):
    label = CharBlock(default="Find out more", required=False)
    page = PageChooserBlock(required=False)

    class Meta:
        template = 'pages/streamfield_blocks/read-more-button-block.html'


class ImageWithCaptionBlock(StructBlock):
    image = ImageChooserBlock(required=True)
    caption = CharBlock(required=False)
    image_width = ChoiceBlock(choices=(('content_wide', 'Content wide'), ('page_wide', 'Page wide')), required=True)

    class Meta:
        image = 'pages/images/streamfield_blocks/image_with_caption.jpg'
        template = 'pages/streamfield_blocks/image_with_caption.html'


class FootNotesBlock(StructBlock):
    notes = ListBlock(RichTextBlock(required=True))

    class Meta:
        image = 'pages/images/streamfield_blocks/footnotes.jpg'
        template = 'pages/streamfield_blocks/footnotes.html'


class TopicGridBlock(StructBlock):
    block_heading = CharBlock(required=True)
    larger_images = BooleanBlock(default=False, required=False)
    items = ListBlock(PageChooserBlock(target_model='topics.TopicIndexPage'))
    read_more_button = ReadMoreButtonBlock(required=False)

    class Meta:
        image = 'pages/images/streamfield_blocks/topic_grid.jpg'
        template = 'pages/streamfield_blocks/topic_grid.html'


class SixPolygonHeader(StructBlock):
    first_polygon_header = CharBlock(required=True)
    first_polygon_text = RichTextBlock(required=True)
    first_polygon_icon = ChoiceBlock(choices=ICONS, required=True)

    second_polygon_header = CharBlock(required=True)
    second_polygon_text = RichTextBlock(required=True)
    second_polygon_icon = ChoiceBlock(choices=ICONS, required=True)

    third_polygon_header = CharBlock(required=True)
    third_polygon_text = RichTextBlock(required=True)
    third_polygon_icon = ChoiceBlock(choices=ICONS, required=True)

    fourth_polygon_header = CharBlock(required=True)
    fourth_polygon_text = RichTextBlock(required=True)
    fourth_polygon_icon = ChoiceBlock(choices=ICONS, required=True)

    fifth_polygon_header = CharBlock(required=True)
    fifth_polygon_text = RichTextBlock(required=True)
    fifth_polygon_icon = ChoiceBlock(choices=ICONS, required=True)

    sixth_polygon_header = CharBlock(required=False)
    sixth_polygon_text = RichTextBlock(required=False)
    sixth_polygon_icon = ChoiceBlock(choices=ICONS, required=False)

    class Meta:
        image = 'pages/images/streamfield_blocks/six_polygon_header.jpg'
        template = 'pages/streamfield_blocks/six_polygon_header.html'


class ThreeColumnBlock(StructBlock):
    block_heading = CharBlock(required=True)

    first_column_heading = CharBlock(required=True)
    first_column_text = RichTextBlock(required=True)
    first_column_color = ChoiceBlock(choices=COLORS, required=True)
    first_column_icon = ChoiceBlock(choices=ICONS, required=True)
    first_column_page = PageChooserBlock(required=False)

    second_column_heading = CharBlock(required=True)
    second_column_text = RichTextBlock(required=True)
    second_column_color = ChoiceBlock(choices=COLORS, required=True)
    second_column_icon = ChoiceBlock(choices=ICONS, required=True)
    second_column_page = PageChooserBlock(required=False)

    third_column_heading = CharBlock(required=True)
    third_column_text = RichTextBlock(required=True)
    third_column_color = ChoiceBlock(choices=COLORS, required=True)
    third_column_icon = ChoiceBlock(choices=ICONS, required=True)
    third_column_page = PageChooserBlock(required=False)

    class Meta:
        image = 'pages/images/streamfield_blocks/three_columns.jpg'
        template = 'pages/streamfield_blocks/three_columns.html'


class FourColumnWithHeadingImageBlock(StructBlock):
    block_heading = CharBlock(required=True)

    image = ImageChooserBlock(required=True)

    first_column_heading = CharBlock(required=True)
    first_column_text = RichTextBlock(required=True)

    second_column_heading = CharBlock(required=True)
    second_column_text = RichTextBlock(required=True)

    third_column_heading = CharBlock(required=True)
    third_column_text = RichTextBlock(required=True)

    fourth_column_heading = CharBlock(required=True)
    fourth_column_text = RichTextBlock(required=True)

    read_more_button = ReadMoreButtonBlock(required=False)

    class Meta:
        image = 'pages/images/streamfield_blocks/four_columns_with_heading_image.jpg'
        template = 'pages/streamfield_blocks/four_columns_with_heading_image.html'


class HeadingWithTextBlock(StructBlock):
    block_heading = CharBlock(required=True)
    style = ChoiceBlock(
        choices=[
            ('white', 'White background'),
            ('community', 'Community background')
        ],
        required=True
    )

    items = ListBlock(StructBlock([
        ('heading', CharBlock(required=True)),
        ('text', RichTextBlock(required=True)),
    ]))

    read_more_button = ReadMoreButtonBlock(required=False)

    class Meta:
        image = 'pages/images/streamfield_blocks/heading_with_text.jpg'
        template = 'pages/streamfield_blocks/heading_with_text.html'


class HeadingWithImageBlock(StructBlock):
    block_heading = CharBlock(required=True)
    image = ImageChooserBlock(required=True)
    read_more_button = ReadMoreButtonBlock(required=False)

    class Meta:
        image = 'pages/images/streamfield_blocks/heading_with_image.jpg'
        template = 'pages/streamfield_blocks/heading_with_image.html'


class CommunityStatsBlock(StructBlock):
    block_heading = CharBlock(required=True)

    first_column_number = CharBlock(required=True)
    first_column_text = CharBlock(required=True)

    second_column_number = CharBlock(required=True)
    second_column_text = CharBlock(required=True)

    third_column_number = CharBlock(required=True)
    third_column_text = CharBlock(required=True)

    fourth_column_number = CharBlock(required=True)
    fourth_column_text = CharBlock(required=True)

    class Meta:
        image = 'pages/images/streamfield_blocks/community_stats.jpg'
        template = 'pages/streamfield_blocks/community_stats.html'


class Stakeholders(StructBlock):
    block_heading = CharBlock(required=True)

    personas = ListBlock(StructBlock([
        ('image', ImageChooserBlock(required=True)),
        ('name', CharBlock(required=True)),
        ('position', CharBlock(required=True)),
        ('excerpt', TextBlock(required=True)),
    ]))

    file = DocumentChooserBlock(required=False)
    label = CharBlock(default="Find out more", required=False, label="Download button label")

    class Meta:
        image = 'pages/images/streamfield_blocks/team.jpg'
        template = 'pages/streamfield_blocks/stakeholders.html'


class MethodologyBlock(StructBlock):
    block_heading = CharBlock(required=True)

    class Meta:
        # image = 'pages/images/streamfield_blocks/heading_with_image.jpg'
        template = 'pages/streamfield_blocks/methodology.html'


class TeamBlock(StructBlock):
    first_team_member = SnippetChooserBlock(target_model=TeamMember, required=True)
    second_team_member = SnippetChooserBlock(target_model=TeamMember, required=True)
    third_team_member = SnippetChooserBlock(target_model=TeamMember, required=True)
    fourth_team_member = SnippetChooserBlock(target_model=TeamMember, required=True)

    class Meta:
        image = 'pages/images/streamfield_blocks/team.jpg'
        template = 'pages/streamfield_blocks/team.html'


class InstitutionsBlock(StructBlock):
    block_heading = CharBlock(required=True)

    items = ListBlock(SnippetChooserBlock(target_model=Institution, required=True))

    class Meta:
        image = 'pages/images/streamfield_blocks/institutions.jpg'
        template = 'pages/streamfield_blocks/institutions.html'


class TestimonialsBlock(StructBlock):
    first_testimonial = SnippetChooserBlock(target_model=Testimonial, required=True)
    second_testimonial = SnippetChooserBlock(target_model=Testimonial, required=True)
    third_testimonial = SnippetChooserBlock(target_model=Testimonial, required=True)

    class Meta:
        image = 'pages/images/streamfield_blocks/testimonials.jpg'
        template = 'pages/streamfield_blocks/testimonials.html'


class UpdatedTableBlock(TableBlock):
    @property
    def media(self):
        return forms.Media(
            css={'all': ['pages/table_block/handsontable.full.min.css']},
            js=['pages/table_block/handsontable.full.min.js', 'pages/table_block/table.js']
        )


class TableWithHeaderBlock(StructBlock):
    default_table_options = {
        'minSpareRows': 0,
        'startRows': 4,
        'startCols': 4,
        'colHeaders': False,
        'rowHeaders': False,
        'contextMenu': True,
        'editor': 'text',
        'stretchH': 'all',
        'height': 150,
        'renderer': 'text',
        'autoColumnSize': False,
        'mergeCells': True
    }

    number = CharBlock(title='Table number', required=False)
    title = CharBlock(title='Table title', required=False)
    table = UpdatedTableBlock(table_options=default_table_options, required=True)

    class Meta:
        image = 'pages/images/streamfield_blocks/table_with_header.jpg'
        template = 'pages/streamfield_blocks/table_with_header.html'

    def render(self, value, context=None):
        template = getattr(self.meta, 'template', None)
        if template and value.get('table', None):
            table_header = value['table']['data'][0] if value['table'].get('data', None) and len(
                value['table']['data']) > 0 and value['table'].get('first_row_is_table_header', False) else None
            first_col_is_header = value['table'].get('first_col_is_header', False)

            if context is None:
                new_context = {}
            else:
                new_context = dict(context)

            new_context.update({
                'self': value,
                self.TEMPLATE_VAR: value['table'],
                'table_header': table_header,
                'first_col_is_header': first_col_is_header,
                'html_renderer': self.declared_blocks['table'].is_html_renderer(),
                'data': value['table']['data'][1:] if table_header else value['table'].get('data', [])
            })
            return render_to_string(template, new_context)


class VideoEmbedFieldBlock(FieldBlock):
    def __init__(self, required=True, help_text=None, max_length=None, **kwargs):
        self.field = EmbedVideoFormField(
            required=required,
            help_text=help_text,
            max_length=max_length,
        )
        super(VideoEmbedFieldBlock, self).__init__(**kwargs)


class VideoEmbedBlock(StructBlock):
    embed = VideoEmbedFieldBlock()

    class Meta:
        icon = 'media'
        template = 'pages/streamfield_blocks/video_embed.html'
