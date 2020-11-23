from django import forms
from django.forms import ModelForm
from .models import Record


#class VideoForm(ModelForm):
#    class Meta:
#        model = Video
#        fields = '__all__'


class RecordForm(ModelForm):
    class Meta:
        model = Record
        fields = ['title', 'subject', 'language','date_recorded','media', 'quality', 'source']

