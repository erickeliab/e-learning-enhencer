from django.db import models
from forums.models import Forum


class Discussion(models.Model):
    disc_id = models.CharField(max_length=4)
    totalposts = models.CharField(max_length=4)
    forum = models.ForeignKey(Forum,on_delete=models.CASCADE,null=True)