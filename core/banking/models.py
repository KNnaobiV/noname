from django.db import models
from django.contrib.auth import get_user_model
from django.shortcut import reverse

from .validators import validate_account_number

User = get_user_model()

class BankAccount(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    account_number = models.PositiveIntegerField(
        max_length=10, unique=True, validators=[validate_account_number]
    )
    balance = models.DecimalField(decimal_places=2)

    def __str__(self):
        return f"Account: {self.account_number}, Owner: {self.owner.username}"

    def get_absolute_url(self):
        return reverse('banking:account', kwargs={username:self.owner.username})


class Transaction(models.Model):
    CATEGORY_CHOICES = (
        ("clothing", "CLOTHING"),
        ("food", "FOOD"),
        ("health care", "HEALTH CARE"),
        ("hobbies", "HOBBIES"),
        ("housing", "HOUSING"),
        ("subscription", "SUBSCRIPTION"),
        ("transportation", "TRANSPORTATION"),
        ("utilities", "UTILITIES"),
        ("other", "OTHER"),
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    date = models.DateField()
    category = models.CharField(
        max_length=20, choices=CATEGORY_CHOICES, blank=False
    )
    notes = models.CharField(max_length=30, blank=True)
    bank_account = models.ForeignKey(
        BankAccount, on_delete=models.SET_NULL, null=True, blank=True
    )

    def __str__(self):
        return f"{self.amount} on {self.date}: {self.description}"

    def clean(self):
        if self.category.name == 'other' and not self.notes:
            raise ValidationError(
                "If category is 'OTHER', you must specify notes"
            )

    def get_absolute_url(self):
        return reverse('banking:transaction', kwargs={pk:self.pk})
