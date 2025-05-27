# mypage/urls.py
from django.urls import path
from . import views

app_name = 'mypage'

urlpatterns = [
    path('', views.my_page, name='my_page'),
    path('edit/', views.edit_profile, name='edit_profile'),
]
