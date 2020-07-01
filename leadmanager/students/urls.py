from .api import StudentViewsets
from rest_framework import routers


router = routers.DefaultRouter()

router.register('api/students',StudentViewsets,'students')

urlpatterns = router.urls