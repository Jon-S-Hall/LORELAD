from django.db import models
# Created language models for tables.
#We will try our best to manage this class since there will be max 7000 languages.
CONTINENT_CHOICES = ['Asia', 'Africa', 'Australia',
                    'Europe', 'North America', 'South America',
                    # 'Antarctica'
                    ]

def content_file_name(instance, filename):
    return '/'.join(['recordings', instance.language.name, filename]) #the recording folder is known to be in s3




class Language(models.Model):
    name = models.CharField(max_length=200, null=True)
    #nearestLanguage = models.ForeignKey(Language, null=True, on_delete=models.SET_NULL)
    family = models.CharField(max_length=200, null=True)
    continent = models.CharField(choices=CONTINENT_CHOICES, default='', max_length=200, null=True)

    def __str__(self):
        return self.name

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

class Video(models.Model):
    caption= models.CharField(max_length=500)
    speaker = models.ForeignKey(Speaker, on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    videofile= models.FileField(upload_to=content_file_name, null=True)


    def __str__(self):
        return self.caption + ": " + str(self.videofile)