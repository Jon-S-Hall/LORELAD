from rest_framework import serializers
from django.contrib.auth.models import User
from master.models import Language, Record, Speaker, CONTINENT_CHOICES

class UserSerializer(serializers.ModelSerializer):
    snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())
    class Meta:
        model = User
        fields = ['id', 'username', 'languages', 'records']

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name', 'family', 'continent']


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ['media', 'title', 'subject', 'source', 'language', 'speakerID', 'date_created', 'quality', 'date_recorded']


# To be deleted
class SpeakerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Speaker
        fields = ['name', 'email', 'phone', 'country', 'languages']
