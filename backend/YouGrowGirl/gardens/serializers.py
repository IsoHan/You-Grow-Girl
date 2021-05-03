from rest_framework import serializers
from gardens.models import GardenPlant
from plants.serializers import PlantSerializer

# Plant Serializer
class GardenPlantSerializer(serializers.ModelSerializer):
    plant = PlantSerializer()
    class Meta:
        fields = ('plant','owner' )
        model = GardenPlant
 
class GardenPlantAddSerializer(serializers.ModelSerializer):
    class Meta:
        fields= ('plant',)
        model= GardenPlant 
        