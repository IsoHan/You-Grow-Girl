from rest_framework import routers
from .api import PlantViewset

router = routers.DefaultRouter()
router.register('api/plants', PlantViewset, 'plants')

urlpatterns = router.urls