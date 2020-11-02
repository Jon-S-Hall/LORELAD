from django.db import models
from master.models import Speaker, Language
# Create your models here.

def content_file_name(instance, filename):
    return '/'.join(['recordings', instance.language.name, filename])

class Video(models.Model):
    caption= models.CharField(max_length=500)
    speaker = models.ForeignKey(Speaker, on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    videofile= models.FileField(upload_to=content_file_name, null=True)

    def __str__(self):
        return self.caption + ": " + str(self.videofile)