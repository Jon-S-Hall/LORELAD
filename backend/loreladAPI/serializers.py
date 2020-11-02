from rest_framework import serializers
from django.contrib.auth.models import User, Group
from languages.models import Language, Record, Speaker

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class LanguageSerializer(serializers.Serializer):
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
