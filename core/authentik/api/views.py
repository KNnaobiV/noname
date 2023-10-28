from django.contrib.auth import get_user_model
from django.contrib.auth.views import LoginView
from django.contrib.auth.hashers import make_password
from django.shortcuts import reverse

from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.mixins import CreateModelMixin
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

from authentik.api.serializers import *

__all__ = [
    "RegisterAPI",
    "ProfileAPI",
    "RegisterView",
    "TokenPairView",
]

User = get_user_model()

class TokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = PairTokenSerializer


class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


class RegisterAPI(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializers):
        password = make_password(serializer.validated_data.get('password'))
        serializer.save(password=password)

    """def post(self, request, format=None):
        serializer_class = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.set_password(request.data['password'])
            user.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
"""

class ProfileAPI(APIView):
    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        return Response({'url': reverse('profile_api'),})
