from rest_framework import viewsets,permissions
from .models import Settings
from .serializers import SettingsSerializer


class SettingsViewsets(viewsets.ModelViewSet):
    queryset = Settings.objects.all()

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.settings.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


    serializer_class = SettingsSerializer