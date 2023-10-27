from django.db import models
from django.shortcuts import reverse
from django.contrib.auth.models import AbstractUser
from auth.validators import validate_phone
# Create your models here.

class DefaultUser(AbstractUser):
    phone = models.PositiveIntegerField(
        null=True, blank=True, validators=[validate_phone] 
    )
    def __str__(self):
        return f'{self.username}'

    def get_absolute_url(self):
        return reverse('auth:profile', kwargs={'username': self.username})
    