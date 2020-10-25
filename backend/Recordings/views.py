from django.shortcuts import render,redirect

# Create your views here.
from .models import Video
from .forms import VideoForm


def post_new(request):
    form = VideoForm(request.POST, request.FILES)
    if request.method =='POST':
        
        if form.is_valid():
            form.save()
            return redirect('recordings/')
        else:
            form = VideoForm()
    return render(request,'post.html',{'form':form})

def showvideo(request):
    video = Video.objects.all()


    return render(request, 'upload.html',{"video" : video})