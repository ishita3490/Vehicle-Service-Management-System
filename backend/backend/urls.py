from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

# Default root view to prevent 400 errors
def home(request):
    return JsonResponse({"message": "Welcome to Vehicle Service Management API"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('service.urls')),  # Include API routes
    path('', home),  # Add this line to handle requests at "/"
]
