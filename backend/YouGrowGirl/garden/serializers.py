from rest_framework import serializers
from garden.models import GardenPlant

# Plant Serializer
class GardenPlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = GardenPlant
        fields = '__all__'
        