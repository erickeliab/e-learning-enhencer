from rest_framework import viewsets,permissions
from .models import Discussion
from .serializers import DiscussionSerializer

class DiscussionViewsets(viewsets.ModelViewSet):
    queryset = Discussion.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = DiscussionSerializer