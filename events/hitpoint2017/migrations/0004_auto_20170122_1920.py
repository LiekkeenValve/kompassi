# -*- coding: utf-8 -*-
# Generated by Django 1.9.12 on 2017-01-22 17:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hitpoint2017', '0003_timeslot'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signupextra',
            name='construction',
            field=models.BooleanField(default=False, help_text='Huomaathan, ett\xe4 perjantain ja lauantain v\xe4liselle y\xf6lle ei ole tarjolla majoitusta.', verbose_name='Voin ty\xf6skennell\xe4 jo perjantaina'),
        ),
    ]
