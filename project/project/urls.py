from django.contrib import admin
from django.urls import path
from main import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.selector, name="selector"),
    path('eventHandler', views.eventHandler, name="eventHandler"),
    path('practice', views.practice, name="practice"),
]
