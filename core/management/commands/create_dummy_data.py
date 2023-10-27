import random
import string

from django.core.management.base import BaseCommand

from auth.models import DefaultUser
from banking.models import Transaction, BankAccount
