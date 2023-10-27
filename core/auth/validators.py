from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def validate_phone(value):
    if len(str(value)) > 11 or len(str(value)) < 11:
        raise ValidationError(
            _(f'{value} is not eleven digits, phone must be 11 digits ')
        )