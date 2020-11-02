from rest_framework import serializers
from languages.models import Language, Record, Speaker

class LanguageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Language
        fields = ['name', 'family', 'continent']


class RecordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Record
        fields = [
        'SOURCES', 'media', 'title', 'subject', 'source', 'languageID', 'speakerID', 'date_created', 'quality', 'date_recorded']

class SpeakerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Speaker
        fields = ['name', 'email', 'phone', 'country', 'languages']
