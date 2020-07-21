from django.urls import path
from . import views
from django.conf.urls import url
from django.contrib import admin
from django.views.decorators.cache import cache_control
from django.views.generic import TemplateView


urlpatterns = [
  path('', views.index),
  url(r'^sw_cached_site.js', cache_control(max_age=2592000)(TemplateView.as_view(
    template_name="sw_cached_site.js",
    content_type='application/javascript',
)), name='sw_cached_site.js'),
]