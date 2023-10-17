
# haohunt/accounts/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_view, name='register_view'),  # New URL for register template
    path('login/', views.login_view, name='login_view'),           # New URL for login template
    path('profile/', views.profile_view, name='profile_view'),     # New URL for profile template
]
