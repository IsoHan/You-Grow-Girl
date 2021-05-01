from rest_framework import viewsets, permissions 
from .models import GardenPlant 
from .serializers import GardenPlantSerializer
# Create your views here.

class GardenPlantViewset(viewsets.ModelViewSet):
    serializer_class = GardenPlantSerializer
    permissions_classes = [permissions.IsAuthenticated]

    #only get the plantsGrowing of that user 
    def get_queryset(self):
        return self.request.user.plants.all() 
    

    #asign user as owner when create plant growing object
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
