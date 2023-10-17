# haohunt/listings/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
# router.register(r'listings', views.ListingViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    path('', views.homepage, name='homepage'),
    path('list/', views.listing_view, name='listing_view'),  # New URL for listing template
]



