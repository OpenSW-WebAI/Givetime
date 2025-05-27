from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from account.models import CustomUser

@login_required
def my_page(request):
    user = request.user

    context = {
        'nickname': user.nickname,
        'email': user.email,
        'location': user.location,
        'about': user.about or '소개를 작성해주세요!',
        'skills': user.skills or '스킬을 입력해주세요!',
        'services': user.services or '서비스를 입력해주세요!',
    }

    return render(request, 'mypage/mypage.html', context)

@login_required
def edit_profile(request):
    user = request.user

    if request.method == 'POST':
        user.about = request.POST.get('about', '')
        user.skills = request.POST.get('skills', '')
        user.services = request.POST.get('services', '')
        user.save()
        return redirect('mypage:my_page')
  

    return render(request, 'mypage/edit_profile.html', {'user': user})