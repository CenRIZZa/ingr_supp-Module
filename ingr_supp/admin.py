from django.contrib import admin
from .models import Ingr,Supp

from django.contrib import admin
from .models import Ingr

@admin.register(Ingr)
class IngrAdmin(admin.ModelAdmin):
    list_display = ('ingr_name', 'ingr_quant', 'ingr_desc', 'ingr_catg', 'ingr_cost', 'ingr_suppNo', 'formatted_exp', 'ingr_batch', 'formatted_date', 'ingr_act')

    def formatted_exp(self, obj):
        return obj.ingr_exp.strftime('%Y-%m-%d') if obj.ingr_exp else None
    formatted_exp.short_description = 'Expiration Date'

    def formatted_date(self, obj):
        return obj.ingr_date.strftime('%Y-%m-%d') if obj.ingr_date else None
    formatted_date.short_description = 'Date'

@admin.register(Supp)
class SuppAdmin(admin.ModelAdmin):
    list_display = ('Supp_name', 'Supp_quant', 'Supp_desc', 'Supp_catg', 'Supp_cost', 'Supp_suppNo', 'Supp_exp', 'Supp_batch', 'Supp_date', 'Supp_act')
