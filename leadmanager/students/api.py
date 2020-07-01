from rest_framework import viewsets,permissions
from students.models import Student
from .serializers import StudentSerializer


class StudentViewsets(viewsets.ModelViewSet):
    queryset = Student.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = StudentSerializer