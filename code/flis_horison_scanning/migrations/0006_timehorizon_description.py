# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-16 12:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('flis_horison_scanning', '0005_auto_20170314_1629'),
    ]

    operations = [
        migrations.AddField(
            model_name='timehorizon',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
