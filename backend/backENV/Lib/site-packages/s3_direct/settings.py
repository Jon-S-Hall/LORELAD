from datetime import timedelta

from django.conf import settings

S3DIRECT_DESTINATIONS = {
    'default': {
        'key': 'upload_file',
        'allowed': '*',
        'acl': 'public-read',
        'content_disposition': 'attachment',
        'content_length_range': (0, 20000000),
        'bucket': settings.AWS_STORAGE_BUCKET_NAME,
        'expiration_time': timedelta(seconds=300),
        'region': settings.AWS_S3_REGION_NAME,
        'server_side_encryption': None,
    },
    **getattr(settings, 'S3DIRECT_DESTINATIONS', None),

}
