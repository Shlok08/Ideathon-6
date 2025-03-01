from django.shortcuts import render
from rest_framework.views import APIView, Response

# Create your views here.
class Test(APIView):

    # authentication_classes =[]
    # permission_classes = []

    def get(self, request):

        response = Response({"status": "ok"})

        return response