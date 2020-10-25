from django.db import models
from languages.models import Speaker, Language
# Create your models here.
class Video(models.Model):
    caption= models.CharField(max_length=500)
    speaker = models.ForeignKey(Speaker, on_delete=models.CASCADE)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    videofile= models.FileField(upload_to='recordings/', null=True)

    def __str__(self):
        return self.caption + ": " + str(self.videofile)