# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-03 14:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.contrib.taggit


class Migration(migrations.Migration):
    dependencies = [
        ('flis_horison_scanning', '0026_auto_20170403_1332'),
    ]

    operations = [
        migrations.CreateModel(
            name='SignalTagItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Name')),
                ('slug', models.SlugField(max_length=100, unique=True, verbose_name='Slug')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AlterModelOptions(
            name='eustrategy',
            options={'verbose_name_plural': 'EU Strategies'},
        ),
        migrations.AlterModelOptions(
            name='relevanceofsignallikelihood',
            options={'verbose_name': 'Relevance of Signal: Likelihood',
                     'verbose_name_plural': 'Relevance of Signal: Likelihoods'},
        ),
        migrations.AlterModelOptions(
            name='relevanceofsignalseverity',
            options={'verbose_name': 'Relevance of Signal: Severity',
                     'verbose_name_plural': 'Relevance of Signal: Severities'},
        ),
        migrations.AlterField(
            model_name='signal',
            name='keywords',
            field=modelcluster.contrib.taggit.ClusterTaggableManager(blank=True,
                                                                     help_text='A comma-separated list of tags.',
                                                                     through='flis_horison_scanning.SignalTag',
                                                                     to='flis_horison_scanning.SignalTagItem',
                                                                     verbose_name='Tags'),
        ),
        migrations.AlterField(
            model_name='signaltag',
            name='tag',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                                    related_name='flis_horison_scanning_signaltag_items',
                                    to='flis_horison_scanning.SignalTagItem'),
        ),
    ]
