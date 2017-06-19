from wagtail.wagtailcore.blocks import StructBlock, TextBlock, CharBlock, RichTextBlock
from pages.blocks import ReadMoreButtonBlock


class NexusGraph(StructBlock):
    block_heading = CharBlock(required=True)
    top_title = CharBlock(required=True)
    top_description = RichTextBlock(required=False)
    top_to_left_description = RichTextBlock(required=False)
    top_to_right_description = RichTextBlock(required=False)
    right_title = CharBlock(required=True)
    right_description = RichTextBlock(required=False)
    right_to_top_description = RichTextBlock(required=False)
    right_to_left_description = RichTextBlock(required=False)
    left_title = CharBlock(required=True)
    left_description = RichTextBlock(required=False)
    left_to_right_description = RichTextBlock(required=False)
    left_to_top_description = RichTextBlock(required=False)
    read_more_button = ReadMoreButtonBlock(required=False)

    class Meta:
        image = 'topics/images/streamfield_blocks/resources_nexus.png'
        template = 'topics/streamfield_blocks/nexus_graph.html'


class ResourcesNexusBlock(StructBlock):
    block_heading = CharBlock(required=True)
    food_description = TextBlock()
    food_to_water_description = TextBlock()
    food_to_energy_description = TextBlock()
    water_description = TextBlock()
    water_to_food_description = TextBlock()
    water_to_energy_description = TextBlock()
    energy_description = TextBlock()
    energy_to_water_description = TextBlock()
    energy_to_food_description = TextBlock()
    read_more_button = ReadMoreButtonBlock(required=False)

    class Meta:
        image = 'topics/images/streamfield_blocks/resources_nexus.png'
        template = 'topics/streamfield_blocks/resources_nexus.html'
