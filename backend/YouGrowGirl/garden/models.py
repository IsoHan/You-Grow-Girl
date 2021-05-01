from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class GardenPlant(models.Model):
    plant = models.CharField(max_length=100)
    owner = models.ForeignKey(User, related_name= "plants", on_delete= models.CASCADE, null=True)