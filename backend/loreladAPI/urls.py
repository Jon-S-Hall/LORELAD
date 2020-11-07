from django.urls import include, path
from rest_framework import routers
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

router = routers.DefaultRouter()


'''
router.register(r'speaker', views.SpeakerSerializer, basename='api-speaker')
router.register(r'record', views.RecordSerializer, basename='api-record')
'''
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('languages/', views.language_list),
    path('languages/<int:pk>', views.language_detail),
    ]

# urlpatterns = format_suffix_patterns(urlpatterns)
