import hashlib
import hmac
import json
from base64 import b64encode
from datetime import datetime

from django.conf import settings

from . import settings as app_settings


class S3DirectUploadParam(object):

    def __init__(self, dest=None, content_type=None):
        self.errors = []

        if not dest:
            dest = 'default'

        try:
            destination_settings =\
                app_settings.S3DIRECT_DESTINATIONS[dest]
        except KeyError:
            self.errors.append(
                'Provided destination is not specified in config',
            )
            return

        for key, value in destination_settings.items():
            setattr(self, key, value)

        self.access_key =\
            getattr(settings, 'AWS_S3_ACCESS_KEY_ID', None)
        self.secret_access_key =\
            getattr(settings, 'AWS_S3_SECRET_ACCESS_KEY', None)
        self.now_date = datetime.utcnow().strftime('%Y%m%dT%H%M%S000Z')
        self.raw_date = datetime.utcnow().strftime('%Y%m%d')

        if content_type:
            self.content_type = content_type

        if (
            content_type and
            (self.allowed and content_type not in self.allowed) and
            self.allowed != '*'):
            self.errors.append('Invalid file type.')
            return

        if not self.region or self.region == 'us-east-1':
            self.endpoint = 's3.amazonaws.com'

        self.endpoint = f's3-{self.region}.amazonaws.com'

        if self.access_key is None or self.secret_access_key is None:
            try:
                from botocore.credentials import (
                    InstanceMetadataProvider,
                    InstanceMetadataFetcher
                )
            except ImportError:
                InstanceMetadataProvider = None
                InstanceMetadataFetcher = None

            if all([InstanceMetadataProvider, InstanceMetadataFetcher]):
                provider = InstanceMetadataProvider(
                    iam_role_fetcher=InstanceMetadataFetcher(
                        timeout=1000,
                        num_attempts=2)
                )
                creds = provider.load()
                self.access_key = creds.access_key
                self.secret_access_key = creds.secret_key
                self.token = creds.token
            else:
                self.errors.append(
                    'Failed to access EC2 instance metadata due to '
                    'missing dependency.'
                )
                return

    def __call__(self, *args, **kwargs):
        if self.errors:
            raise AttributeError(
                f'Objects was not initialized successfully.'
                f'For more details see errors attribute: '
                f'{",".join(self.errors)}'
            )

        policy = self.generate_policy()

        signature = self.generate_signature(policy)

        bucket_url = self.generate_bucket_url()

        upload_credentials = self.generate_upload_credentials(
            policy,
            signature,
            bucket_url
        )

        return upload_credentials

    def generate_x_amz_credentials(self):
        return (
            f'{self.access_key}/{self.raw_date}/{self.region}/s3/aws4_request'
        )

    def generate_conditions(self):
        conditions = []

        if hasattr(self, 'content_type'):
            conditions.append({"content-type": self.content_type})
        if hasattr(self, 'token'):
            conditions.append({"x-amz-security-token": self.token})
        if hasattr(self, 'cache_control'):
            conditions.append({'Cache-Control': self.cache_control})
        if hasattr(self, 'content_length_range'):
            conditions.append(['content-length-range',
                               self.content_length_range[0],
                               self.content_length_range[1]])
        return conditions

    def generate_policy(self):

        expires = (datetime.utcnow() + self.expiration_time)\
            .strftime('%Y-%m-%dT%H:%M:%S.000Z')

        policy_dict = {
            "expiration": expires,
            "conditions": [
                {"bucket": self.bucket},
                {"acl": self.acl},
                {"key": self.key},
                {"success_action_status": '201'},
                {"x-amz-credential": self.generate_x_amz_credentials()},
                {"x-amz-algorithm": "AWS4-HMAC-SHA256"},
                {"x-amz-date": self.now_date},
            ]
        }

        conditions = self.generate_conditions()

        policy_dict['conditions'] += conditions

        policy_object = json.dumps(policy_dict)

        policy = b64encode(
            policy_object.replace('\n', '').replace('\r', '').encode())

        return policy

    def generate_signature(self, policy):

        date_key = hmac.new(b'AWS4' + self.secret_access_key.encode('utf-8'),
                            msg=self.raw_date.encode('utf-8'),
                            digestmod=hashlib.sha256).digest()
        date_region_key = hmac.new(date_key, msg=self.region.encode('utf-8'),
                                   digestmod=hashlib.sha256).digest()
        date_region_service_key = hmac.new(date_region_key, msg=b's3',
                                           digestmod=hashlib.sha256).digest()
        signing_key = hmac.new(date_region_service_key, msg=b'aws4_request',
                               digestmod=hashlib.sha256).digest()
        signature = hmac.new(signing_key, msg=policy,
                             digestmod=hashlib.sha256).hexdigest()
        return signature

    def generate_bucket_url(self):
        structure = getattr(settings, 'S3DIRECT_URL_STRUCTURE',
                            'https://{0}/{1}')

        bucket_url = structure.format(self.endpoint, self.bucket)
        return bucket_url

    def generate_upload_credentials(self, policy, signature, bucket_url):
        return_dict = {
            "policy": policy.decode(),
            "success_action_status": 201,
            "x-amz-credential": self.generate_x_amz_credentials(),
            "x-amz-date": self.now_date,
            "x-amz-signature": signature,
            "x-amz-algorithm": "AWS4-HMAC-SHA256",
            "form_action": bucket_url,
            "key": self.key,
            "acl": self.acl,
        }
        if hasattr(self, 'content_type'):
            return_dict["content-type"] = self.content_type

        if hasattr(self, 'token'):
            return_dict['x-amz-security-token'] = self.token

        if hasattr(self, 'cache_control'):
            return_dict['Cache-Control'] = self.cache_control

        return return_dict
