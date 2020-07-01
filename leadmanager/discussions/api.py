from rest_framework import viewsets,permissions
from .serializers import DiscussionSerializer
from discussions.models import Discussion

class DiscussionViewset(viewsets.ModelViewSet):
    queryset = Discussion.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DiscussionSerializer