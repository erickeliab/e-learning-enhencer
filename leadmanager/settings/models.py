from django.db import models
from django.contrib.auth.models import User


class Settings(models.Model):
    student = models.CharField(max_length=3)
    updatetime = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    updatebysms = models.BooleanField(default=True)
    updatebyemail = models.BooleanField(default=False)
    owner = models.ForeignKey(
        User, related_name="settings", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)