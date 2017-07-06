# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-06 16:29
from __future__ import unicode_literals

import contact.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0033_remove_golive_expiry_help_text'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactFormSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recipients', models.CharField(help_text='A comma-separated list of email addresses to send contact form emails to', max_length=256, validators=[contact.models.validate_comma_separated_email])),
                ('site', models.OneToOneField(editable=False, on_delete=django.db.models.deletion.CASCADE, to='wagtailcore.Site')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
