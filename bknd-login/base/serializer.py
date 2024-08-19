from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProductSerislizer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields= '__all__'