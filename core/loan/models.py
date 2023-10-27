from django.db import models
from django.contrib.auth import get_user_model
from django.shortcut import reverse

User = get_user_model()

# Create your models here.
class Loan(models.Model):
    lender = models.ForeignKey(User, on_delete=models.CASCADE)
    borrower = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    loan_date = models.DateField()
    is_repaid = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.amount} loaned from {self.lender.username} to {self.borrower.username}"

    def get_absolute_url(self):
        return reverse('loan:loan', kwargs={
            pk:self.pk, lender:self.lender, borrower:self.borrower
        })


class LoanRequest(models.Model):
    requester = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(decimal_places=2)
    requested = models.DateTimeField()
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.requester.username} requested {self.amount}"

    def get_absolute_url(self):
        return reverse('loan:request', kwargs={
            pk:self.pk, lender:self.lender, borrower:self.borrower
        })


class LoanRepayment(models.Model):
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    repaid = models.DateField()

    def __str__(self):
        return f"{self.amount} repaid for loan {self.loan.pk} by {self.loan.borrower.username}"


class CreditScore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    @property
    def calculate_credit_score(self):
        score = 650
        # some logic
        return score