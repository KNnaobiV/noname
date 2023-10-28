from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from authentik.api.views import *

router = DefaultRouter()

urlpatterns = [
    path(
        'profile/<int:pk>/api/', ProfileAPI.as_view(), 
    name='profile_api'
    ),
    path('register/api/', RegisterAPI.as_view(), name='register_api'),
    # path("", include(router.urls)),
    path("login/", TokenPairView.as_view(), name="token_pair"),
    path("login/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("register/", RegisterView.as_view(), name="register")
]
