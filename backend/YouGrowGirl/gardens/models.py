from django.db import models
from django.contrib.auth.models import User
from plants.models import Plant

# Create your models here.
class GardenPlant(models.Model):
    #plant = models.CharField(max_length=100)
    plant = models.ForeignKey(Plant, related_name= "plants", on_delete= models.CASCADE, null=True)
    owner = models.ForeignKey(User, related_name= "plants", on_delete= models.CASCADE, null=True)