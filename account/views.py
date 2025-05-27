from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib import messages
from django.http import JsonResponse
from .forms import SignUpForm, LoginForm

User = get_user_model()

def signup_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        nickname = request.POST.get('nickname')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        location = request.POST.get('location')

        if password != confirm_password:
            return JsonResponse({'success': False, 'message': '비밀번호가 일치하지 않습니다.'})

        if User.objects.filter(email=email).exists():
            return JsonResponse({'success': False, 'message': '이미 존재하는 이메일입니다.'})

        user = User.objects.create_user(email=email, password=password, nickname=nickname, location=location)
        login(request, user)
        return JsonResponse({'success': True})

    return JsonResponse({'success': False, 'message': '잘못된 요청입니다.'})

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            messages.success(request, '로그인 성공!')
            return redirect('main')
        else:
            messages.error(request, '로그인 실패!')
    return redirect('main')

def logout_view(request):
    logout(request)
    messages.success(request, '로그아웃 되었습니다.')
    return redirect('main')
