from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.mixins import CreateModelMixin
from authentik.api.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import reverse
from django.contrib.auth.views import LoginView

__all__ = [
    "RegisterAPI",
    "ProfileAPI",
]

User = get_user_model()

class RegisterAPI(APIView):
    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_BAD_REQUEST)


class ProfileAPI(APIView):
    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        return Response({'url': reverse('profile_api'),})
