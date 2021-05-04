from rest_framework import viewsets, permissions 
from .models import GardenPlant 
from .serializers import GardenPlantSerializer,GardenPlantAddSerializer
# Create your views here.

class GardenPlantViewset(viewsets.ModelViewSet):
    # serializer_class = GardenPlantSerializer
    permissions_classes = [permissions.IsAuthenticated]

    # only get the plantsGrowing of that user 
    def get_queryset(self):
        return self.request.user.plants.all() 
    

    # assign user as owner when create plant growing object
    def perform_create(self, serializer):
        #plant = Plant.objects.get 
        serializer.save(owner=self.request.user)

    def get_serializer_class(self):
        if self.action in ('create'):
            return GardenPlantAddSerializer
        else: 
            return GardenPlantSerializer
