from rest_framework import routers
from .api import SettingsViewsets


router = routers.DefaultRouter()

router.register('api/settings',SettingsViewsets,'settings')

urlpatterns = router.urls