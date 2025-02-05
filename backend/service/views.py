from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Component, Vehicle, Repair
from .serializers import ComponentSerializer, VehicleSerializer, RepairSerializer
from datetime import datetime

class ComponentViewSet(viewsets.ModelViewSet):
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class RepairViewSet(viewsets.ModelViewSet):
    queryset = Repair.objects.all()
    serializer_class = RepairSerializer

@api_view(['GET'])
def revenue_data(request):
    revenue_per_day = {}
    revenue_per_month = {}
    revenue_per_year = {}

    # ✅ Use `repair_date` instead of `date`
    repairs = Repair.objects.all()

    for repair in repairs:
        date_str = repair.repair_date.strftime("%Y-%m-%d")  # Daily revenue
        month_str = repair.repair_date.strftime("%Y-%m")    # Monthly revenue
        year_str = repair.repair_date.strftime("%Y")        # Yearly revenue

        revenue_per_day[date_str] = revenue_per_day.get(date_str, 0) + repair.repair_price
        revenue_per_month[month_str] = revenue_per_month.get(month_str, 0) + repair.repair_price
        revenue_per_year[year_str] = revenue_per_year.get(year_str, 0) + repair.repair_price

    revenue_data = {
        "daily": [{"date": key, "revenue": value} for key, value in revenue_per_day.items()],
        "monthly": [{"month": key, "revenue": value} for key, value in revenue_per_month.items()],
        "yearly": [{"year": key, "revenue": value} for key, value in revenue_per_year.items()],
    }

    return Response(revenue_data)
