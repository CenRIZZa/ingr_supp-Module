from django.urls import include, path
from . import views

from django.conf import settings
from django.conf.urls.static import static 


urlpatterns = [
    path('', views.getData),
    
    

    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
