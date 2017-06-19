def get_page_index(obj, amongst_live_pages=True):
    """
    Get oage's index (a number) within its siblings.
    :param obj: 
        Wagtail page object
    :param amongst_live_pages: 
        Get index amongst live pages if True or all pages if False.
    :return: 
        Index of a page if found or None if page doesn't have an index.
    """
    qs = obj.__class__.objects.filter(depth=obj.depth).values_list('pk', flat=True)
    if amongst_live_pages:
        qs = qs.live()
    if obj.depth > 1:
        # making sure the non-root nodes share a parent
        parentpath = obj._get_basepath(obj.path, obj.depth - 1)
        qs = qs.filter(
            path__range=obj._get_children_path_interval(parentpath))

    try:
        index = list(qs).index(obj.pk)
        return index
    except ValueError:
        return None
