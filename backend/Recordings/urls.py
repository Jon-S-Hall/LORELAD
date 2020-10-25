from django.urls import path
from . import views

urlpatterns = [
    path('Video_upload/', views.post_new),
    path('recordings/', views.showvideo),
]