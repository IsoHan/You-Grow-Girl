# Generated by Django 3.1.7 on 2021-05-03 14:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gardens', '0002_auto_20210503_1138'),
    ]

    operations = [
        migrations.RenameField(
            model_name='gardenplant',
            old_name='plant_id',
            new_name='plant',
        ),
    ]