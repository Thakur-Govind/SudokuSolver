from rest_framework import serializers
from .models import Solver
from django.contrib.auth import get_user_model

class SDSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solver
        fields = ('prob','result')
