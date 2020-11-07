from rest_framework import viewsets, permissions
from .serializers import LanguageSerializer, SpeakerSerializer, RecordSerializer
from master.models import Language, Record, Speaker
from django.contrib.auth.models import User, Group
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view


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


## Languages API view
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

## single language view add 'DELETE' in api_view
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
        serializer = LanguageSerializer(language)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = LanguageSerializer(language, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # elif request.method == 'DELETE':
    #     snippet.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)


## Record API View
@api_view(['GET', 'POST'])
def record_list(request, format=None):
    """
    List all records, or create a record.
    """

    if request.method == 'GET':
        record = Record.objects.all()
        serializer = RecordSerializer(record, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

## single record view, add 'DELETE' in api_view if wanted
@api_view(['GET', 'PUT'])
def record_detail(request, pk, format=None):
    """
    Retrieve or update a languages.
    """
    try:
        record = Record.objects.get(pk=pk)
    except Record.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RecordSerializer(record)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RecordSerializer(record, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
