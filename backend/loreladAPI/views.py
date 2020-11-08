from rest_framework import viewsets, permissions
from .serializers import LanguageSerializer, SpeakerSerializer, RecordSerializer
from master.models import Language, Record, Speaker
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse

from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

#class UserList(generics.ListAPIView):
#    queryset = User.objects.all()
#    serializer_class = UserSerializer


#class UserDetail(generics.RetrieveAPIView):
#    queryset = User.objects.all()
#    serializer_class = UserSerializer


## Languages API view
class LanguageList(APIView):
    """
    List all Languages, or create a new Language.
    """
    def get(self, request, format):
        language = Language.objects.all()
        serializer = LanguageSerializer(language, many=True)
        return Response(serializer.data)

    def post(self, request, format):
        serializer = LanguageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

## single language view add 'DELETE' in api_view
class LanguageDetail(APIView):
    """
    Retrieve or update a languages.
    """
    def get_object(self, pk):
        try:
            language = Language.objects.get(pk=pk)
        except Language.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk, format = None):
        language = self.get_object(pk)
        serializer = LanguageSerializer(language)
        return Response(serializer.data)

    def put(self, request, pk, format = None):
        language = self.get_object(pk)
        serializer = LanguageSerializer(language, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format = None):
        language = self.get_object(pk)
        language.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


## Record API View
class RecordList(APIView):
    """
    List all records, or create a record.
    """

    def get(self, request, format):
        record = Record.objects.all()
        serializer = RecordSerializer(record, many=True)
        return Response(serializer.data)

    def post(self, request, format):
        serializer = RecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

## single record view, add 'DELETE' in api_view if wanted
class RecordDetail(APIView):
    """
    Retrieve or update a languages.
    """
    def get_object(self, pk):
        try:
            record = Record.objects.get(pk=pk)
        except Record.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk, format = None):
        record = self.get_object(pk)
        serializer = RecordSerializer(record)
        return Response(serializer.data)

    def put(self, request, pk, format = None):
        record = self.get_object(pk)
        serializer = RecordSerializer(record, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format = None):
        record = self.get_object(pk)
        record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
