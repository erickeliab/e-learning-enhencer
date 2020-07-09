from django.db import models
from django.contrib.auth.models import User

class Discussion(models.Model):
    disc_id = models.CharField(max_length=4)
    totalposts = models.CharField(max_length=4)
    owner = models.ForeignKey(
        User, related_name="discussions", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
