from urllib.parse import unquote, urlparse

from django.conf import settings

from rest_framework import serializers

DESTINATION_CHOICES = [
    (key, key) for key in settings.S3DIRECT_DESTINATIONS.keys()
]


class S3DirectSerializer(serializers.Serializer):
    """Serializer for validation s3direct uploading fields"""
    # filename = serializers.CharField(required=True)
    content_type = serializers.CharField(required=False)


class LocalUploadSerializer(serializers.Serializer):
    """Serializer for validation local uploading fields"""
    file = serializers.FileField(required=True)


def confirm_serializer(model, file_field=None):

    if not file_field:
        file_field = 'file'

    class S3ConfirmSerializer(serializers.ModelSerializer):
        """Serializer to confirm s3 media upload"""
        locals().update(**{
            file_field: serializers.URLField(max_length=512)
        })

        class Meta:
            locals().update(**{
                'model': model,
                'fields': (file_field,),
            })

        def to_internal_value(self, data):

            data = super().to_internal_value(data)

            if data.get(file_field):
                file_url = data[file_field]

                file_url = urlparse(file_url).path

                # In case of S3 upload crop S3 bucket name
                file_url = file_url.split('/')[-1]

                # Normalize URL
                file_url = unquote(unquote(file_url))

                data.update({'file': file_url})

            return data

    return S3ConfirmSerializer
