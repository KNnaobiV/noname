from django.contrib.auth.models import Group
from django.contrib.auth.models import Permission
from loan.models import Loan, LoanRepayment, LoanRequest,  Caretaker

GROUPS = ['lender', 'borrower']
READ_PERMISSIONS = ['view']
WRITE_PERMISSIONS = ['add', 'change', 'delete']


class Command(BaseCommand):
    help = 'Creats default permission groups for users'

    def handle (self, *args, **options):
        for group in GROUPS:
            new_group, created = Group.objects.get_or_create(name=group)
            print(f'Created {group} group.')