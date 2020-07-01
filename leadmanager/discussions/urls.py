from rest_framework import routers
from .api import DiscussionViewset


router = routers.DefaultRouter()

router.register('api/discussions',DiscussionViewset,'discussions')

urlpatterns = router.urls