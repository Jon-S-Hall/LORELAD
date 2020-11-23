from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import detail_route
from rest_framework import status

from . import serializers, s3


class S3DirectUploadView(GenericViewSet):

    params_serializer_class = serializers.S3DirectSerializer
    file_model = None
    file_field = 'file'

    def get_additional_fields(self):
        return dict()

    def _get_upload_serializer(self):
        return serializers.confirm_serializer(
            model=self.file_model,
            file_field=self.file_field,
        )

    @detail_route(
        methods=['GET'],
        url_path='upload',
        serializer_class=params_serializer_class,
    )
    def upload_params(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        param_generator = s3.S3DirectUploadParam()

        return Response(data=param_generator())

    @detail_route(
        methods=['POST'],
        url_path='confirm',
    )
    def upload_confirm(self, request, *args, **kwargs):
        data = request.data
        serializer_class = self._get_upload_serializer()
        serializer = serializer_class(data=data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        validated_data.update(
            {**self.get_additional_fields()}
        )
        serializer.create(validated_data)
        return Response(status=status.HTTP_201_CREATED)
