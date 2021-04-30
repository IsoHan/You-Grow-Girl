# Generated by Django 3.1.7 on 2021-04-30 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('common_name', models.CharField(default=False, max_length=100, unique=True)),
                ('sunlight', models.CharField(blank=True, max_length=100)),
                ('moisture', models.CharField(blank=True, default=False, max_length=500)),
                ('height', models.CharField(blank=True, default=False, max_length=100)),
                ('toxic_to_dogs', models.BooleanField(default=False)),
                ('toxic_to_cats', models.BooleanField(default=False)),
                ('humidity', models.CharField(blank=True, default=False, max_length=100)),
            ],
        ),
    ]
