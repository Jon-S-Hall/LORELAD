from .serializers import LanguageSerializer, SpeakerSerializer, RecordSerializer
from master.models import Language, Record, Speaker
from rest_framework import mixins
from rest_framework import generics, filters

## Languages API view
class LanguageList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    """
    List all Languages, or create a new Language.
    """
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = '__all__'

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
class RecordList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    """
    List all records, or create a record.
    """
    serializer_class = RecordSerializer

    def get_queryset(self):
        queryset = Record.objects.all()
        language = self.request.query_params.get('language', None)
        if Language is not None:
            queryset = queryset.filter(language=language)
        return queryset

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


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

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
