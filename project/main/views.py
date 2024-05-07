from django.shortcuts import render

# Create your views here.

def selector(request):
  return render(request, 'main/selector.html')

def eventHandler(request):
  return render(request, 'main/eventHandler.html')

def practice(request):
  return render(request, 'main/practice.html')