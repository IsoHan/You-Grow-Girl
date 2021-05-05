from django.contrib import admin

# Register your models here.


from django_restful_admin import admin
from plants.models import Plant

admin.site.register(Plant)    
  


class AuthRequiredMiddleware(object):
    def process_request(self, request):
        redirect_url = '/apiadmin/login'

        if not request.user.is_authenticated() and request.path != redirect_url:
            return HttpResponseRedirect(redirect_url)
        return None