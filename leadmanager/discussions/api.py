from rest_framework import viewsets,permissions
from .models import Discussion
from .serializers import DiscussionSerializer

class DiscussionViewsets(viewsets.ModelViewSet):
    queryset = Discussion.objects.all()

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.discussions.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    serializer_class = DiscussionSerializer