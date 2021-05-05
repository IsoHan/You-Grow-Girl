from plants.models import Plant
from .serializers import PlantSerializer
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import RegistrationSerializer, UserSerializer
from rest_framework import generics, permissions, mixins
from rest_framework.response import Response
from rest_framework.decorators import api_view



# Plant Viewset - a viewset allows us to create a CRUD API without providing explicit 
# methods for functionality so don't need to define explicit routes, can use Default Router
# see: https://www.youtube.com/watch?v=Uyei2iDA4Hs 14:25

class PlantViewset(viewsets.ModelViewSet):
    queryset = Plant.objects.all()
    permissions_class = [
        permissions.AllowAny
    ]

    serializer_class = PlantSerializer


############################ Registeration API #############################



"""

@api_view(['POST',])
def registration_view(request):
    
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = "successfully registered new user"
            data['username'] = user.username
            data['email'] = user.email

        else:
            data = serializer.errors
        return Response(data)
  """     

#Register API  

from django.contrib.auth.mixins import LoginRequiredMixin
class RegisterApi(LoginRequiredMixin,generics.GenericAPIView):
    serializer_class = RegistrationSerializer
    def post(self, request, *args,  **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
      #      "user": UserSerializer(user,    context=self.get_serializer_context()).data,
            "message": "User Created Successfully.  Now perform Login to get your token",
        })

