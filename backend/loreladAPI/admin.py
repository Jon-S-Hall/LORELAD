from django.contrib import admin
from django.contrib.admin.sites import AlreadyRegistered

from languages.models import Language, Record, Speaker

# Register your models here
Models = [Language, Record, Speaker]
try:
    admin.site.register(Models)
except AlreadyRegistered:
    pass
