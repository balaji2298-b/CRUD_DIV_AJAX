# Generated by Django 3.2 on 2024-11-11 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hitmen',
            name='mobilenumber',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
