from rest_framework import routers
from .api import DiscussionViewsets


router = routers.DefaultRouter()

router.register('api/discussions',DiscussionViewsets,'discussions')

urlpatterns = router.urls


