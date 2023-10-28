from django.db import models
from django.contrib.auth import get_user_model
from django.shortcuts import reverse

from .validators import *

User = get_user_model()

class BankAccount(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    account_number = models.PositiveIntegerField(
        unique=True, validators=[validate_account_number]
    )
    balance = models.DecimalField(max_digits=15, decimal_places=2)
    bvn = models.PositiveIntegerField(
        unique=True, validators=[validate_bvn]
    )
    is_activated = models.BooleanField(default=False)

    def __str__(self):
        return f"Account: {self.account_number}, Owner: {self.owner.username}"

    def get_absolute_url(self):
        return reverse('banking:account', kwargs={username:self.owner.username})


class DebitTransaction(models.Model):
    CATEGORY_CHOICES = (
        ("clothing", "CLOTHING"),
        ("food", "FOOD"),
        ("health care", "HEALTH CARE"),
        ("hobbies", "HOBBIES"),
        ("housing", "HOUSING"),
        ("loan", "LOAN"),
        ("subscription", "SUBSCRIPTION"),
        ("transportation", "TRANSPORTATION"),
        ("utilities", "UTILITIES"),
        ("other", "OTHER"),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    date = models.DateField()
    category = models.CharField(
        max_length=20, choices=CATEGORY_CHOICES, blank=False
    )
    notes = models.CharField(max_length=30, blank=True)
    receiver = models.ForeignKey(
        BankAccount, on_delete=models.DO_NOTHING, related_name="receiver"
    )

    def __str__(self):
        return f"""
            {self.amount} on {self.date}: {self.description} 
            to {self.receiver.owner}
        """

    def clean(self):
        if self.category.name == 'other' and not self.notes:
            raise ValidationError(
                "If category is 'OTHER', you must specify notes"
            )

    def get_absolute_url(self):
        return reverse('banking:debit', kwargs={pk:self.pk})

    class Meta:
        ordering = ['-date']


class CreditTransaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2, blank=False)
    description = models.TextField()
    date = models.DateField()
    sender = models.ForeignKey(
        BankAccount, on_delete=models.DO_NOTHING, related_name="sender"
    )

    def __str__(self):
        return f"""
            {self.amount} on {self.date}: {self.description} from 
            {self.sender.owner}
        """

    def clean(self):
        if self.category.name == 'other' and not self.notes:
            raise ValidationError(
                "If category is 'OTHER', you must specify notes"
            )

    def get_absolute_url(self):
        return reverse('banking:credit', kwargs={pk:self.pk})

    class Meta:
        ordering = ['-date']

