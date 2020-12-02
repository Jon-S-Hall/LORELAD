from django.urls import include, path, re_path
from rest_framework import routers
from . import views
from .views import current_user, UserList
router = routers.DefaultRouter()


'''
router.register(r'speaker', views.SpeakerSerializer, basename='api-speaker')
router.register(r'record', views.RecordSerializer, basename='api-record')
'''
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('check_user/', current_user),
    path('languages/', views.LanguageList.as_view()),
    path('languages/<name>', views.LanguageDetail.as_view(), name='language_detail'),
    path('records/', views.RecordList.as_view()),
    path('records/<int:pk>', views.RecordDetail.as_view()),
    path('users/', UserList.as_view()), #when creating a user, send POST to this url
    path('records/<str:title>', views.RecordDetail.as_view()),
    #path('users/<int:pk>/', views.UserDetail.as_view()),
    ]
