from django.contrib import admin

# Register your models here.

from .models import Language
from .models import Speaker
from .models import Record



admin.site.register(Language)
admin.site.register(Speaker)
admin.site.register(Record)