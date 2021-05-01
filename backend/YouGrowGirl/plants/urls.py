from rest_framework import routers
from .api import PlantViewset
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('api/plants', PlantViewset, 'plants')

urlpatterns = router.urls