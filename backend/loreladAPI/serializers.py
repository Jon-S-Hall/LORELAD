from rest_framework import serializers
from django.contrib.auth.models import User
from master.models import Language, Record, Speaker, CONTINENT_CHOICES
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)

#class UserSerializer(serializers.ModelSerializer):
#    snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())
#    class Meta:
#        model = User
#        fields = ['id', 'username', 'languages', 'records']


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name', 'num_speakers', 'num_recordings', 'continent', 'summary', 'cov_image']

class RecordSerializer(TaggitSerializer, serializers.ModelSerializer):
    tags = TagListSerializerField() # tag type: list of str
    class Meta:
        model = Record
        fields = ['id', 'title', 'subject', 'media', 'language', 'speaker', 'date_created', 'date_recorded', 'tag']


# To be deleted
class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = ['name', 'email', 'phone', 'country', 'languages']


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)


class UserSerializerWithToken(serializers.ModelSerializer):

    # user field doesn't natively have a token field
    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    # handles creation of new tokens
    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')
