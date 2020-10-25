from django.db import models

# Created language models for tables.
class Language(models.Model):
    name = models.CharField(max_length=200, null=True)
    family = models.CharField(max_length=200, null=True)

class Speaker(models.Model):
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)

class Record(models.Model):
    #set language ID as a Language class tyoe. Allow it to be null.
    languageID = models.ForeignKey(Language, null=True, on_delete=models.SET_NULL)
    speakerID = models.ForeignKey(Speaker, null=True, on_delete=models.SET_NULL)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    date_recorded = models.DateTimeField(null=True)


