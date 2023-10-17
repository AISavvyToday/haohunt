"""haohunt URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include

# Import accounts views directly to avoid errors
import accounts.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('listings.urls')),
    path('api/auth/register/', accounts.views.register, name='register'),  # Changed the URL to make it more organized
    path('api/auth/login/', accounts.views.login, name='login'),          # Changed the URL to make it more organized
    path('api/auth/logout/', accounts.views.logout, name='logout'),       # Changed the URL to make it more organized
]
