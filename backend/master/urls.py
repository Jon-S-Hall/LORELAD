from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('', views.home),
    path('about/', views.about),
    path('Video_upload/', views.post_new),
    path('Video_upload/recordings/', views.show_video),
    path('upload_record/', views.createRecord, name="create_record",)
]

urlpatterns += staticfiles_urlpatterns()