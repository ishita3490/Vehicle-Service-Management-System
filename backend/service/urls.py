from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views  # ✅ Import views instead of specific classes

router = DefaultRouter()
router.register(r'components', views.ComponentViewSet)
router.register(r'vehicles', views.VehicleViewSet)
router.register(r'repairs', views.RepairViewSet)

urlpatterns = [
    path('', include(router.urls)),  
    path('revenue/', views.revenue_data, name="revenue_data"),  # Fix here!
]
