from django.shortcuts import render
from django.db.models import Q

from rest_framework import viewsets
from .models import Listing
from .serializers import ListingSerializer


class ListingViewSet(viewsets.ModelViewSet):
    serializer_class = ListingSerializer

    def get_queryset(self):
        queryset = Listing.objects.all()

        # Extracting query parameters
        location = self.request.query_params.get('location', None)
        min_budget = self.request.query_params.get('min_budget', None)
        max_budget = self.request.query_params.get('max_budget', None)
        bedrooms = self.request.query_params.get('bedrooms', None)

        # Filtering
        if location is not None:
            queryset = queryset.filter(location__icontains=location)

        if min_budget is not None and max_budget is not None:
            queryset = queryset.filter(Q(price__gte=min_budget) & Q(price__lte=max_budget))

        if bedrooms is not None:
            queryset = queryset.filter(bedrooms=bedrooms)

        return queryset
