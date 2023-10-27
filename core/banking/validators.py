from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def validate_account_number(value):
    if len(str(value)) > 10 or len(str(value)) < 10:
        raise ValidationError(
            _(f'{value} is not eleven digits, phone must be 10 digits ')
        )