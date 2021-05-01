from rest_framework import routers
from .views import GardenPlantViewset

router = routers.DefaultRouter()
router.register('api/gardenplants', GardenPlantViewset, 'gardenplants')

urlpatterns = router.urls