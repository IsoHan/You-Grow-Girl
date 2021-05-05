from django.shortcuts import render
from rest_framework.views import APIView

# Create your views here.

from django.middleware.csrf import get_token

class CSRFGeneratorView(APIView):
    def get(self, request):
        csrf_token = get_token(request)
        return Response(csrf_token)