from rest_framework import routers
from .api import PlantViewset
from django.conf import settings
from django.conf.urls.static import static
from django_restful_admin import admin as api_admin 
from django.urls import include, path
from django.contrib import admin
from .views import CustomUserCreate


router = routers.DefaultRouter()
router.register('plants', PlantViewset, 'plants')




urlpatterns = [
    path('api/', include(router.urls)),
    path('apiadmin/', admin.site.urls),
    path('register/', CustomUserCreate.as_view(), name="create_user")
    
]
