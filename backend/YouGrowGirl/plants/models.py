from django.db import models

# Create your models here.

# example model

class Plant(models.Model):
    common_name = models.CharField(max_length=100, unique=True, default=False)
    sunlight = models.CharField(max_length=100, blank=True)
    moisture = models.CharField(max_length=500, default=False, blank=True)
    height = models.CharField(max_length=100, default=False,  blank=True)
    toxic_to_dogs= models.BooleanField(default=False)
    toxic_to_cats= models.BooleanField(default=False)
    humidity = models.CharField(max_length=100, default=False, blank=True)

