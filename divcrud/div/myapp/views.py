from django.shortcuts import render,redirect
from myapp.models import Hitmen
from django.contrib import messages


def index(request):
	hitmens = Hitmen.objects.all()
	context = {'hitmens': hitmens}
	return render(request,'index.html',context)
    
def create(request):
	hitmen = Hitmen(mobilenumber=request.POST.get('mobilenumber'), otp=request.POST.get('otp'))
	hitmen.save()
	return render(request,'index.html')
	
def edit(request,id):
	hitmen = Hitmen.objects.get(id=id)
	context = {'hitmen': hitmen}
	return render(request,'edit.html',context)

def update(request,id):
	hitmen = Hitmen.objects.get(id=id)
	hitmen.mobilenumber = request.POST.get('mobilenumber')
	hitmen.otp = request.POST.get('otp')
	hitmen.save()
	return redirect('/')
	
def delete(request,id):
	hitmen = Hitmen.objects.filter(id=id)
	messages.success(request,"Successfully Deleted")
	hitmen.delete()
	return redirect('index')
	