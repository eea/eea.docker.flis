from wagtail.wagtailcore.blocks import StructBlock

from flis_horison_scanning.models import DriverOfChange, Signal
from pages.blocks import ReadMoreButtonBlock


class DriversOfChangeBlock(StructBlock):
    all_drivers_page = ReadMoreButtonBlock(required=True)

    class Meta:
        label = 'Drivers of change'
        admin_text = '{label}: configured elsewhere'.format(label=label)
        template = 'flis_horison_scanning/streamfield_blocks/signal.html'
        image = 'flis_horison_scanning/images/streamfield_blocks/signal.png'

    def get_context(self, value, parent_context=None):
        context = super().get_context(value, parent_context)
        context['signals'] = Signal.objects.order_by('-first_published_at').live()[:3]
        return context
