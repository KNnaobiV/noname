# Generated by Django 4.2.6 on 2023-10-28 17:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Loan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('loan_date', models.DateField()),
                ('is_repaid', models.BooleanField(default=False)),
                ('borrower', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='borrower', to=settings.AUTH_USER_MODEL)),
                ('lender', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='lender', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='LoanRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=7)),
                ('requested_date', models.DateField()),
                ('is_approved', models.BooleanField(default=False)),
                ('requester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='LoanRepayment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('repaid', models.DateField()),
                ('loan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='loan.loan')),
            ],
        ),
        migrations.CreateModel(
            name='CreditScore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]