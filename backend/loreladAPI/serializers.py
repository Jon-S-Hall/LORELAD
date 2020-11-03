from rest_framework import serializers
from django.contrib.auth.models import User, Group
from master.models import Language, Record, Speaker, CONTINENT_CHOICES

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name', 'family', 'continent']
    # id = serializers.IntegerField(label="ID", read_only=True)
    # name = serializers.CharField(required = True, allow_blank = False, max_length = 100)
    # family = serializers.CharField(required = False, allow_blank = True, max_length = 100)
    # continent = serializers.ChoiceField(choices=CONTINENT_CHOICES, default='', required = False)
    #
    # def create(self, validated_data):
    #     """
    #     Create and return a new `Language` instance, given the validated data.
    #     """
    #     return Language.objects.create(**validated_data)
    #
    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `Language` instance, given the validated data.
    #     """
    #     instance.name = validated_data.get('name', instance.title)
    #     instance.family = validated_data.get('family', instance.family)
    #     instance.continent = validated_data.get('continent', instance.continent)
    #     instance.save()
    #     return instance



class RecordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Record
        fields = ['media', 'title', 'subject', 'source', 'languageID', 'speakerID', 'date_created', 'quality', 'date_recorded']

class SpeakerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Speaker
        fields = ['name', 'email', 'phone', 'country', 'languages']
