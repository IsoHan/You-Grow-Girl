from rest_framework import serializers
from plants.models import Plant
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from django.db import models
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password


# Plant Serializer
class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'
        

############################### User and Register Serialization classes #########################

# Register serializer
class RegistrationSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ['id','username','email','password']
        extra_kwargs = {
            'password':{'write_only': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'])
        
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']

        return username, email, password
    

# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

