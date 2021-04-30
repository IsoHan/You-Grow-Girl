from django.db import models

# Create your models here.

# example model

class Plant(models.Model):
    common_name = models.CharField(max_length=100, unique=True)
    img_name = models.CharField(max_length=100, default=False)
    sunlight = models.CharField(max_length=100, blank=True)
    moisture = models.CharField(max_length=500, default=False, blank=True)
    toxic_to_dogs= models.BooleanField(default=False)
    toxic_to_cats= models.BooleanField(default=False)
    plant_habit = models.CharField(max_length=500, default=False, blank=True)
    bloom_period = models.CharField(max_length=500, default=False, blank=True)
    humidity = models.CharField(max_length=100, default=False, blank=True)
    ph_soil = models.CharField(max_length=100, default=False, blank=True)
    description = models.CharField(max_length=100, default=False, blank=True)

