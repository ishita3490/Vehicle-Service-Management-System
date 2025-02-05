from django.db import models

class Component(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Vehicle(models.Model):
    vin = models.CharField(max_length=17, unique=True)  # Vehicle Identification Number
    issue_description = models.TextField()

    def __str__(self):
        return self.vin

class Repair(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    component = models.ForeignKey(Component, on_delete=models.CASCADE, null=True, blank=True)
    repair_price = models.DecimalField(max_digits=10, decimal_places=2)
    repair_date = models.DateField(auto_now_add=True) 
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Repair for {self.vehicle.vin}"
