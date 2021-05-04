from django.contrib import admin

# Register your models here.


from django_restful_admin import admin
from plants.models import Plant

admin.site.register(Plant)    
  