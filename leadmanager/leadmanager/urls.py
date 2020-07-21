from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('leads.urls')),
    path('', include('accounts.urls')),
    path('', include('settings.urls')),
    path('', include('discussions.urls')),
    path('', include('broadcast.urls'))

]
