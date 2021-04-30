from plants.models import Plant
from rest_framework import viewsets, permissions
from .serializers import PlantSerializer

# Plant Viewset - a viewset allows us to create a CRUD API without providing explicit 
# methods for functionality so don't need to define explicit routes, can use Default Router
# see: https://www.youtube.com/watch?v=Uyei2iDA4Hs 14:25

class PlantViewset(viewsets.ModelViewSet):
    queryset = Plant.objects.all()
    permissions_class = [
        permissions.AllowAny
    ]

    serializer_class = PlantSerializer

