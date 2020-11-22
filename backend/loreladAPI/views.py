from .serializers import LanguageSerializer, SpeakerSerializer, RecordSerializer
from master.models import Language, Record, Speaker
from rest_framework import generics, filters, mixins, status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

## Languages API view
class LanguageList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    """
    List all Languages, or create a new Language.
    """
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    ordering_fields = '__all__'
    filterset_fields = ['continent', 'family', 'name']

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class LanguageDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    """
    Retrieve or update a languages.
    """
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)



## Record API View
class RecordList(mixins.ListModelMixin, generics.GenericAPIView):
    parser_classes = (MultiPartParser, FormParser)
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    ordering_fields = ['language__name', 'date_recorded', 'speakerID__name']
    filterset_fields = ['language__name', 'source', 'speakerID__name', 'subject', 'title']

    def post(self, request, *args, **kwargs):
        serializer = RecordSerializer(data=request.data)
        if serializer.is_valid():
          serializer.save()
          return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
          return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)



## single record view, add 'DELETE' in api_view if wanted
class RecordDetail(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    """
    Retrieve or update a languages.
    """
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    lookup_field = 'title'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
