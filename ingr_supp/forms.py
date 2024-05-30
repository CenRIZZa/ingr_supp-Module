from django import forms
from .models import Ingr,Supp

class IngrForm(forms.ModelForm):
    class Meta:
        model = Ingr
        fields = ['ingr_name', 'ingr_quant', 'ingr_desc', 'ingr_catg', 'ingr_cost', 'ingr_suppNo', 'ingr_exp','ingr_date', 'ingr_act']

class SuppForm(forms.ModelForm):
    class Meta:
        model = Supp
        fields = ['Supp_name', 'Supp_quant', 'Supp_desc', 'Supp_catg', 'Supp_cost', 'Supp_suppNo', 'Supp_exp','Supp_date', 'Supp_act']

    
class IngrFormUp1(forms.ModelForm):
    class Meta:
        model = Ingr
        fields = ['ingr_name', 'ingr_quant', 'ingr_desc', 'ingr_catg', 'ingr_cost', 'ingr_suppNo', 'ingr_exp','ingr_date', 'ingr_act']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name in self.fields.keys():
            self.fields[field_name].required = False

class SuppFormUp(forms.ModelForm):
    class Meta:
        model = Supp
        fields = ['Supp_name', 'Supp_quant', 'Supp_desc', 'Supp_catg', 'Supp_cost', 'Supp_suppNo', 'Supp_exp','Supp_date', 'Supp_act']
        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            for field_name in self.fields.keys():
                self.fields[field_name].required = False



class IngrEditForm(forms.ModelForm):
    class Meta:
        model = Ingr
        fields = ['ingr_name', 'ingr_quant', 'ingr_desc', 'ingr_catg', 'ingr_cost', 'ingr_suppNo', 'ingr_exp', 'ingr_act']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)