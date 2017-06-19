from wagtail.wagtailcore.blocks import StructBlock
from pages.blocks import ReadMoreButtonBlock
from .models import ForwardLookingActivity, Assesment


class ForesightInPolicyCycleBlock(StructBlock):
    read_more_link = ReadMoreButtonBlock(required=True)

    class Meta:
        label = 'Foresight in Policy Cycle'
        template = 'flis_flip/streamfield_blocks/foresight_in_policy_cycle.html'
        image = 'flis_flip/images/streamfield_blocks/foresight_in_policy_cycle.png'

    def get_context(self, value, parent_context=None):
        context = super().get_context(value, parent_context)
        context['foresight_in_policy_cycle'] = ForwardLookingActivity.objects.specific().live()[:3]
        return context


class AssesmentsOfUsesBlock(StructBlock):
    read_more_link = ReadMoreButtonBlock(required=True)

    class Meta:
        label = 'Assesments Of Uses'
        template = 'flis_flip/streamfield_blocks/assesments_of_uses.html'
        image = 'flis_flip/images/streamfield_blocks/assesments_of_uses.png'

    def get_context(self, value, parent_context=None):
        context = super().get_context(value, parent_context)
        context['assesments'] = Assesment.objects.specific().live()[:3]
        return context
