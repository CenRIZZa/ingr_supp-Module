from django.db import models
from django.shortcuts import render


class Ingr(models.Model):
    ingr_name = models.CharField(max_length=50)
    ingr_quant = models.IntegerField(default=0)
    ingr_desc = models.CharField(max_length=50)
    ingr_catg = models.CharField(max_length=50)
    ingr_cost = models.FloatField(default=0.0)
    ingr_suppNo = models.CharField(max_length=50)
    ingr_exp = models.DateField(editable=True)
    ingr_batch = models.CharField(max_length=5, default='00001')
    ingr_date = models.DateField(editable=True)
    ingr_act = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            # This is a new object, increment the batch_number
            last_object = Ingr.objects.last()
            if last_object:
                # Increment the last batch_number
                next_batch_number = str(int(last_object.ingr_batch) + 1).zfill(5)
                self.ingr_batch = next_batch_number
        super().save(*args, **kwargs)


class Supp(models.Model):
    Supp_name = models.CharField(max_length=50)
    Supp_quant = models.IntegerField(default=0)
    Supp_desc = models.CharField(max_length=50)
    Supp_catg = models.CharField(max_length=50)
    Supp_cost = models.FloatField(default=0.0)
    Supp_suppNo = models.CharField(max_length=50)
    Supp_exp = models.DateField()
    Supp_batch = models.CharField(max_length=5, default='00001')
    Supp_date = models.DateField()
    Supp_act = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            # This is a new object, increment the batch_number
            last_object = Supp.objects.last()
            if last_object:
                # Increment the last batch_number
                next_batch_number = str(int(last_object.Supp_batch) + 1).zfill(5)
                self.Supp_batch = next_batch_number
        super().save(*args, **kwargs)
