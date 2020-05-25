from django.shortcuts import render
from utils import *
from solution import *
#from serializers import SDSerializer
from rest_framework.generics import GenericAPIView#the serializer classes created
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import generics, viewsets
from rest_framework.decorators import api_view
from django.http import HttpResponse, JsonResponse

# Create your views here.
@api_view(('GET',))
def home(request, prob):
    result = solve(prob)
    d= {"prob":prob, "soln":result}
    return JsonResponse(d)
