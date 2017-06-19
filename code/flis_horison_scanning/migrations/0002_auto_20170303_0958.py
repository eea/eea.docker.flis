# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-03 09:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import wagtail.wagtailcore.fields


class Migration(migrations.Migration):
    dependencies = [
        ('wagtailimages', '0018_remove_rendition_filter'),
        ('flis_horison_scanning', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='driverofchange',
            name='image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL,
                                    related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AlterField(
            model_name='driverofchange',
            name='summary',
            field=wagtail.wagtailcore.fields.RichTextField(blank=True, null=True),
        ),
    ]
