import json
from django.http import HttpResponseServerError
from django.shortcuts import get_object_or_404, render
from django.views.decorators.csrf import csrf_exempt
from .models import Ingr,Supp
from django.shortcuts import render, redirect
from .models import Ingr
from .forms import IngrEditForm, IngrForm, IngrFormUp1, SuppForm, SuppFormUp
from django.shortcuts import render, redirect
from django.http import HttpResponseServerError
from .forms import IngrFormUp1
from .models import Ingr
from datetime import datetime




# Create your views here.
def view(request):
    supplies = Supp.objects.all()
    return render(request,'home.html',{'supplies':supplies})

def prod(request):
    return render(request,'prod.html')

def ingr(request):
    ingredients = Ingr.objects.all()
    for ingredient in ingredients:
        ingredient.status = ingredient_status(ingredient.ingr_quant)
    return render(request, 'ingredients.html', {'ingredients':ingredients})



def add_ingredient(request):
    if request.method == 'POST':
        form = IngrForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('ingr')  # Redirect to the ingredients page after adding
    else:
        form = IngrForm()
    return render(request, 'ingredients.html', {'form': form})

def add_supply(request):
    if request.method == 'POST':
        form = SuppForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('view')  # Redirect to the ingredients page after adding
    else:
        form = IngrForm()
    return render(request, 'home.html', {'form': form})


def sample(request):
    return render(request,'upload.html')

def update_ingredient(request, ingredient_id):
    try:
        ingredient = Ingr.objects.get(pk=ingredient_id)
    except Ingr.DoesNotExist:
        return HttpResponseServerError("Ingredient not found")

    if request.method == 'POST':
        form = IngrFormUp1(request.POST, instance=ingredient)
        if form.is_valid():
            # Compare submitted data with existing data
            updated_data = form.cleaned_data
            for field_name, value in updated_data.items():
                if getattr(ingredient, field_name) != value:
                    setattr(ingredient, field_name, value)
            ingredient.save()
            return redirect('ingr')  # Redirect to the ingredients page after updating
        else:
            # Redirect to error.html if form is invalid
            return render(request, 'error.html', {'form': form})
    else:
        # Populate form with existing data
        form = IngrFormUp1(instance=ingredient)
    
    return render(request, 'ingredients.html', {'form': form, 'ingredient_id': ingredient_id})
def update_supplies(request, supplies_id):
    try:
        supplies= Supp.objects.get(pk=supplies_id)
    except Supp.DoesNotExist:
        return HttpResponseServerError("Ingredient not found")

    if request.method == 'POST':
        form = SuppFormUp(request.POST, instance=supplies)
        if form.is_valid():
            # Print the cleaned data from the form
            print(form.cleaned_data)
            
            form.save()
            return redirect('view')  # Redirect to the ingredients page after updating
        else:
            # Redirect to error.html if form is invalid
            return render(request, 'error.html', {'form': form})
    else:
        form = SuppFormUp(instance=supplies)
    
    return render(request, 'home.html', {'form': form, 'supplies_id': supplies_id})


def delete_ingredient(request, ingredient_id):
    # Retrieve the ingredient object from the database
    ingredient = get_object_or_404(Ingr, pk=ingredient_id)
    
    if request.method == 'POST':
        # Delete the ingredient from the database
        ingredient.delete()
        return redirect('ingr')  # Redirect to the ingredients page after deletion
    
    # If the request method is not POST, render a confirmation page
    return render(request, 'confirm_delete.html', {'ingredient': ingredient})

def delete_supplies(request, supplies_id):
    # Retrieve the ingredient object from the database
    supplies = get_object_or_404(Supp, pk=supplies_id)
    
    if request.method == 'POST':
        # Delete the ingredient from the database
        supplies.delete()
        return redirect('view')  # Redirect to the ingredients page after deletion
    
    # If the request method is not POST, render a confirmation page
    return render(request, 'confirm_delete.html', {'supplies': supplies})



def ingredient_status(quantity):
    if quantity < 10:
        return "Critically low"
    elif 10 <= quantity < 15:
        return "Low"
    elif 15 <= quantity < 20:
        return "Medium"
    else:
        return "Sufficient"
    
from django.shortcuts import render

def main(request):
    return render(request, 'SupplyManagement.html')
