# Generated by Django 5.0.3 on 2024-05-30 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ingr',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ingr_name', models.CharField(max_length=50)),
                ('ingr_quant', models.IntegerField(default=0)),
                ('ingr_desc', models.CharField(max_length=50)),
                ('ingr_catg', models.CharField(max_length=50)),
                ('ingr_cost', models.FloatField(default=0.0)),
                ('ingr_suppNo', models.CharField(max_length=50)),
                ('ingr_exp', models.DateField()),
                ('ingr_batch', models.CharField(default='00001', max_length=5)),
                ('ingr_date', models.DateField()),
                ('ingr_act', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Supp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Supp_name', models.CharField(max_length=50)),
                ('Supp_quant', models.IntegerField(default=0)),
                ('Supp_desc', models.CharField(max_length=50)),
                ('Supp_catg', models.CharField(max_length=50)),
                ('Supp_cost', models.FloatField(default=0.0)),
                ('Supp_suppNo', models.CharField(max_length=50)),
                ('Supp_exp', models.DateField()),
                ('Supp_batch', models.CharField(default='00001', max_length=5)),
                ('Supp_date', models.DateField()),
                ('Supp_act', models.BooleanField(default=True)),
            ],
        ),
    ]