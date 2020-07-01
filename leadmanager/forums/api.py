from forums.models import Forum
from rest_framework import viewsets, permissions
from .serializers import ForumSerializer

# forums viewset

class ForumViewset(viewsets.ModelViewSet):
    queryset = Forum.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ForumSerializer