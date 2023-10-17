"""haohunt URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
"""

# haohunt/haohunt/urls.py

from django.contrib import admin
from django.urls import path, include
from accounts import views as accounts_views  # Renamed to avoid any naming conflict

urlpatterns = [
    path('', include('listings.urls')),  # URL pattern for the homepage
    path('admin/', admin.site.urls),
    path('api/', include('listings.urls')),  # Existing API endpoint for listings
    path('api/auth/register/', accounts_views.register, name='register'),
    path('api/auth/login/', accounts_views.login, name='login'),
    path('api/auth/logout/', accounts_views.logout, name='logout'),
    path('accounts/', include('accounts.urls')),  # New URL pattern for account templates
    path('listings/', include('listings.urls')),  # New URL pattern for listing templates
]

