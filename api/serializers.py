# serializers.py
from rest_framework import serializers
from ingr_supp.models import Ingr, Supp

class IngrSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingr
        fields = '__all__'

class SuppSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supp
        fields = '__all__'
