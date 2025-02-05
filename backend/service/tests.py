from django.test import TestCase
from .models import Component, Vehicle, Repair

class ServiceTests(TestCase):
    def setUp(self):
        self.component = Component.objects.create(name="Brake Pads", price=1500)
        self.vehicle = Vehicle.objects.create(vin="ABC123XYZ", issue_description="Brake issue")
        self.repair = Repair.objects.create(vehicle=self.vehicle, component=self.component, repair_price=2000)

    def test_component_creation(self):
        self.assertEqual(self.component.name, "Brake Pads")

    def test_vehicle_creation(self):
        self.assertEqual(self.vehicle.vin, "ABC123XYZ")

    def test_repair_creation(self):
        self.assertEqual(self.repair.repair_price, 2000)
