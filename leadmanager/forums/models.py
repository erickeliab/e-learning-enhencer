from django.db import models
from django.contrib.auth.models import User

class Forum(models.Model):
    forum_id = models.CharField(max_length=4)
    totaldiscussions = models.CharField(max_length=4)
    users = models.ManyToManyField(User,blank=True)
    
