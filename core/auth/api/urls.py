from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from auth.api import views

urlpatterns = [
    path(
        'profile/<int:pk>/api/', views.ProfileAPI.as_view(), 
    name='profile_api'
    ),
    path('register/api/', views.RegisterAPI.as_view(), name='register_api'),
    # path('api_auth/', include('rest_framework.urls')),
    path('api_auth/', include('dj_rest_auth.urls')),
]