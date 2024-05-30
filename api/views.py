from rest_framework.response import Response
from rest_framework.decorators import api_view

from ingr_supp.models import Ingr
from api.serializers import IngrSerializer




@api_view(['GET'])
def getData(request):
    Ingredients = Ingr.objects.all()
    serializer = IngrSerializer(Ingredients, many=True)
    return Response(serializer.data)