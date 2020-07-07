from rest_framework import viewsets,permissions
from .models import Settings
from .serializers import SettingsSerializer

class SettingsViewsets(viewsets.ModelViewSet):
    queryset = Settings.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = SettingsSerializer