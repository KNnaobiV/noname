from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

__all__ = [
    "validate_account_number", 
    "validate_bvn"
]

def validate_account_number(value):
    if len(str(value)) > 10 or len(str(value)) < 10:
        raise ValidationError(
            _(f'{value} is not ten digits, phone must be 10 digits.')
        )


def validate_bvn(value):
    if len(str(value)) != 10:
        raise ValidationError(
            _f(f'{value} is not ten digits, bvn must be 10 digits.')
        )