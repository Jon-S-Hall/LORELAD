from rest_framework import serializers
from django.contrib.auth.models import User
from master.models import Language, Record, Speaker, CONTINENT_CHOICES
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User

#class UserSerializer(serializers.ModelSerializer):
#    snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())
#    class Meta:
#        model = User
#        fields = ['id', 'username', 'languages', 'records']


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        #fields = ['name', 'family', 'continent', 'num_speakers', 'num_recordings', 'summary']
        fields = ['id', 'name', 'num_speakers', 'num_recordings', 'continent', 'summary']

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ['title', 'subject', 'media', 'language', 'speakerID', 'date_created', 'date_recorded']


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

    #user field doesn't natively have a token field
    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    #handles creation of new tokens
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