from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()


'''
router.register(r'speaker', views.SpeakerSerializer, basename='api-speaker')
router.register(r'record', views.RecordSerializer, basename='api-record')
'''
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('languages/', views.LanguageList.as_view()),
    path('languages/<int:pk>', views.LanguageDetail.as_view()),
    path('records/', views.RecordList.as_view()),
    path('records/<int:pk>', views.RecordDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    ]
