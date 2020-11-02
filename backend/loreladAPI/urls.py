from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
'''
router.register(r'languages', views.LanguageViewSet, basename='api-language')
router.register(r'speaker', views.SpeakerSerializer, basename='api-speaker')
router.register(r'record', views.RecordSerializer, basename='api-record')
'''
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
