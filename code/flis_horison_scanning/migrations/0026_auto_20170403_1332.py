# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-03 13:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('flis_horison_scanning', '0025_auto_20170403_1329'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signal',
            name='date_of_last_modification',
            field=models.DateField(blank=True, null=True, verbose_name='Date of last modification to the signal'),
        ),
    ]
