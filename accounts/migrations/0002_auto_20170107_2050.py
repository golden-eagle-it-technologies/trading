# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-07 20:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='alternet_email',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name=b'Alternet Email '),
        ),
        migrations.AddField(
            model_name='profile',
            name='phone',
            field=models.CharField(blank=True, max_length=12, null=True, verbose_name=b'Phone'),
        ),
    ]