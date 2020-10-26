from django.db import models

# Created language models for tables.
#We will try our best to manage this class since there will be max 7000 languages.

class Language(models.Model):
    name = models.CharField(max_length=200, null=True)
    #nearestLanguage = models.ForeignKey(Language, null=True, on_delete=models.SET_NULL)
    family = models.CharField(max_length=200, null=True)
    continent = models.CharField(max_length=200, null=True)

class Speaker(models.Model):
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    country = models.CharField(max_length=200, null=True) #later use django_countries
    languages = models.ManyToManyField(Language)

class Record(models.Model):
    SOURCES = (
        ('Direct Input','Direct Input') , ('WikiTongues', 'WikiTongues'), ('LORELAD Input', 'LORELAD Input'), ('YouTube', 'YouTube'), ('Physical Recorder','Physical Recorder'))
    media = models.FileField(null=True)
    title = models.CharField(max_length=200, null=True)
    subject = models.CharField(max_length=200, null=True)
    source = models.CharField(max_length=200, null=True, choices=SOURCES)
    languageID = models.ForeignKey(Language, null=True, on_delete=models.SET_NULL)
    speakerID = models.ForeignKey(Speaker, null=True, on_delete=models.SET_NULL)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    quality = models.IntegerField(null=True) #how can we find the quality of a recording?
    date_recorded = models.DateTimeField(null=True)


