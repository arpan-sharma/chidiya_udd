# chidiya_udd/serializers.py
from rest_framework import serializers
from .models import Entity

class EntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entity
        fields = ['name', 'can_fly', 'symbol', 'sound']
