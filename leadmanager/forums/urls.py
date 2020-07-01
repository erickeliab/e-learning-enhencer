from rest_framework import routers
from .api import ForumViewset


router = routers.DefaultRouter()
router.register('api/forums',ForumViewset,'forums')

urlpatterns = router.urls