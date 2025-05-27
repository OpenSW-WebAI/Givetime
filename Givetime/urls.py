from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('posts/', include('posts.urls')),
    path('mypage/', include('mypage.urls')),
    path('account/', include('account.urls')),
]
