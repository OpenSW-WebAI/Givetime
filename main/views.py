from django.shortcuts import render
from posts.models import Post

def home(request):
    # 모집중인 재능기부 최근 4개
    donation_posts = Post.objects.filter(post_type='donation').order_by('-created_at')[:4]
    
    # 따뜻한 이야기 최근 4개
    story_posts = Post.objects.filter(post_type='story').order_by('-created_at')[:4]
    
    return render(request, 'main/main.html', {
        'donation_posts': donation_posts,
        'story_posts': story_posts,
    })
