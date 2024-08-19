from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from rest_framework import status
from .serializer import UserSerializer,ProductSerislizer
from .models import Product

@api_view(['GET'])
def index(req):
    return Response('hello')

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        # Initialize the serializer with the data from the request
        username = request.data.get('username')
        password = request.data.get('password')
        
        # Validate the data
        if(username):
            exsist= User.objects.filter(username= username)
            if (exsist):
                return Response ({'error' : 'user already exsist'})
            else: 
                User.objects.create_user(
                    username=username,
                    password=password
                )
                return Response({'msg': 'user created successfully'})
        


@api_view(['GET'])
def get_products(request):
    if request.method == 'GET':
        return Response (ProductSerislizer(Product.objects.all(),many=True).data)

@api_view(['GET'])
def get_users(request):
    all_users  = UserSerializer(User.objects.all(), many=True).data
    return Response (all_users)