from django.urls import include, path
from . import views

from django.conf import settings
from django.conf.urls.static import static 


urlpatterns = [
    path('stocks',views.view, name="view"),
    path('ingr',views.ingr, name = "ingr"),
    path('products',views.prod, name="prod"),
    path('add_ingredient/', views.add_ingredient, name='add_ingredient'),
    path('update_ingredient/<int:ingredient_id>/', views.update_ingredient, name='update_ingredient'),

    path('delete_ingredient/<int:ingredient_id>/', views.delete_ingredient, name='delete_ingredient'),
    path('upload',views.sample, name='upload'),
    path('add_supply/', views.add_supply, name='add_supply'),
    path('update_supplies/<int:supplies_id>/', views.update_supplies, name='update_supply'),
    path('delete_supplies/<int:supplies_id>/', views.delete_supplies, name='delete_supplies'),
    path('main', views.main, name='main'),
    
    

    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
