from django.db import models
from django.utils.crypto import get_random_string      # generate unique id

# Created language models for tables.
#We will try our best to manage this class since there will be max 7000 languages.
CONTINENT_CHOICES = (('as', 'Asia'), ('af', 'Africa'),          ('oc','Oceania'),('eu','Europe'''), ('na','North America'), ('sa','South America'), ('nan', 'Not Defined')
                    # 'Antarctica'
                    )


def content_file_name(instance, filename):
    return '/'.join(['recordings', instance.language.name, filename]) #the recording folder is known to be in s3


class Language(models.Model):
    name = models.CharField(max_length=200, null=False, unique=True)
    #nearestLanguage = models.ForeignKey(Language, null=True, on_delete=models.SET_NULL)
    family = models.CharField(max_length=200, null=True)
    continent = models.CharField(choices=CONTINENT_CHOICES, default='nan', max_length=200)
    # summary = models.CharField(max_length=1000, null = True)
    # nums_speakers = models.CharField(max_length=200, null = True)
    # nums_recordings = models.CharField(max_length=200, null = True)


    def __str__(self):
        return self.name or ''

    class Meta:
        ordering = ['name']


class Speaker(models.Model):
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    country = models.CharField(max_length=200, null=True) #later use django_countries
    languages = models.ManyToManyField(Language)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Record(models.Model):
    SOURCES = (
        ('Direct Input','Direct Input') , ('WikiTongues', 'WikiTongues'), ('LORELAD Input', 'LORELAD Input'), ('YouTube', 'YouTube'), ('Physical Recorder','Physical Recorder'))

    record_id = models.CharField(max_length=8, unique=True, default=get_random_string(8), null=True)
    media = models.FileField(upload_to=content_file_name, null=True)
    title = models.CharField(max_length=200, null=True)
    subject = models.CharField(max_length=200, null=True)
    source = models.CharField(max_length=200, null=True, choices=SOURCES)
    language = models.ForeignKey(Language, null=True, on_delete=models.SET_NULL)
    speakerID = models.ForeignKey(Speaker, null=True, on_delete=models.SET_NULL)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    quality = models.IntegerField(null=True) #how can we find the quality of a recording?
    date_recorded = models.DateTimeField(null=True)

    class Meta:
        ordering = ['date_recorded']

    def __str__(self):
        return self.title + ": " + str(self.media)
