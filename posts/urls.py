from django.urls import path
from . import views

urlpatterns = [
    path('donation/', views.donation_list, name='donation_list'),
    path('request/', views.request_list, name='request_list'),            
    path('story/', views.story_list, name='story_list'),               
    path('announcement/', views.announcement_list, name='announcement_list'),  

    path('donation/<int:post_id>/', views.donation_detail, name='donation_detail'), 
    path('request/<int:post_id>/', views.request_detail, name='request_detail'),
    path('story/<int:post_id>/', views.story_detail, name='story_detail'),
    path('announcement/<int:post_id>/', views.announcement_detail, name='announcement_detail'),

    path('<str:post_type>/create/', views.create_post, name='create_post'),
]
