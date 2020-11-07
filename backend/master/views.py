from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Video, Record
from .forms import VideoForm, RecordForm


# Create your views here.


def home(request):
    return render(request, 'master/index.html')


def about(request):
    return render(request, 'master/about.html')


def post_new(request):
    form = VideoForm(request.POST, request.FILES)
    if request.method == 'POST':

        if form.is_valid():
            form.save()
            return redirect('recordings/')
        else:
            form = VideoForm()
    return render(request, 'master/post.html', {'form': form}) #form is something user can manipulate? render puts the view on the page


def show_video(request):
    video = Video.objects.all()

    return render(request, 'master/upload.html', {"video": video})


def createRecord(request):
    form = RecordForm(request.POST, request.FILES)
    if request.method == 'POST':
        if form.is_valid():
            print(form)
            form.save() #saves into the database.
            return redirect('/')
    context = {'form':form}
    return render(request, 'master/upload_media_form.html', context)
