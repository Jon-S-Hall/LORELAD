from rest_framework import viewsets, permissions
from .serializers import UserSerializer, GroupSerializer, LanguageSerializer, SpeakerSerializer, RecordSerializer
from master.models import Language, Record, Speaker
from django.contrib.auth.models import User, Group
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

# class LanguageViewSet(viewsets.ModelViewSet):
#     queryset = Language.objects.all().order_by('name')
#     serializer_class = LanguageSerializer
#
# class SpeakerViewSet(viewsets.ModelViewSet):
#     queryset = Speaker.objects.all()
#     serializer_class = SpeakerSerializer
#
# class RecordViewSet(viewsets.ModelViewSet):
#     queryset = Record.objects.all()
#     serializer_class = RecordSerializer


@api_view(['GET', 'POST'])
def language_list(request, format=None):
    """
    List all languages, or create a languages.
    """

    if request.method == 'GET':
        language = Language.objects.all()
        serializer = LanguageSerializer(language, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = LanguageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def language_detail(request, pk, format=None):
    """
    Retrieve or update a languages.
    """
    try:
        language = Language.objects.get(pk=pk)
    except Language.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        language = Language.objects.all()
        serializer = LanguageSerializer(language)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = LanguageSerializer(language, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
