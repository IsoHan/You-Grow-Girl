from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from django.conf.urls import url

urlpatterns = [
    path('', include('plants.urls')),
    path('gardens/', include('gardens.urls')),
    path('api-auth', include('rest_framework.urls')),
    path('api/users', include('plants.urls')),
    path('api/v1/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/v1/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-token-refresh/', refresh_jwt_token),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



