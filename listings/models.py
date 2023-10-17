from django.db import models

class Listing(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    bedrooms = models.IntegerField()
    latitude = models.FloatField(null=True, blank=True)  # Added this line
    longitude = models.FloatField(null=True, blank=True)  # Added this line

    def __str__(self):
        return self.name
