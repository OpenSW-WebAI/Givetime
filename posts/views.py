from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator
from django.shortcuts import render

from .models import Post

# 게시판 목록
def donation_list(request):
    postlist = Post.objects.filter(post_type='donation').order_by('-created_at')
    paginator = Paginator(postlist, 10)  # 페이지당 게시글 수수
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    popular_posts = Post.objects.filter(post_type='donation').order_by('-views')[:5]

    return render(request, 'posts/donation_list.html', {
        'page_obj': page_obj,
        'popular_posts': popular_posts
    })

def request_list(request):
    postlist = Post.objects.filter(post_type='request').order_by('-created_at')
    paginator = Paginator(postlist, 10)  # 페이지당 게시글 수수
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    popular_posts = Post.objects.filter(post_type='request').order_by('-views')[:5]
    return render(request, 'posts/request_list.html', {
        'page_obj': page_obj,
        'popular_posts': popular_posts
    })


def story_list(request):
    postlist = Post.objects.filter(post_type='story').order_by('-created_at')
    paginator = Paginator(postlist, 10)  # 페이지당 게시글 수수
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    popular_posts = Post.objects.filter(post_type='story').order_by('-views')[:5]
    return render(request, 'posts/story_list.html', {
        'page_obj': page_obj,
        'popular_posts': popular_posts
    })
def announcement_list(request):
    postlist = Post.objects.filter(post_type='announcement').order_by('-created_at')
    paginator = Paginator(postlist, 10)  # 페이지당 게시글 수수
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    return render(request, 'posts/story_list.html', {
        'page_obj': page_obj,
    })

# 게시글 상세 보기
def donation_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id, post_type='donation')
    
    session_key = f'viewed_post_{post_id}'

    if not request.session.get(session_key, False):
        post.views += 1
        post.save()
        request.session[session_key] = True  # 본 글이라고 표시

    return render(request, 'posts/donation_detail.html')


def request_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id, post_type='request')
    
    session_key = f'viewed_post_{post_id}'
    if not request.session.get(session_key, False):
        post.views += 1
        post.save()
        request.session[session_key] = True

    return render(request, 'posts/request_detail.html', {'post': post})

def story_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id, post_type='story')
    
    session_key = f'viewed_post_{post_id}'
    if not request.session.get(session_key, False):
        post.views += 1
        post.save()
        request.session[session_key] = True

    return render(request, 'posts/story_detail.html', {'post': post})

def announcement_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id, post_type='announcement')
    
    session_key = f'viewed_post_{post_id}'
    if not request.session.get(session_key, False):
        post.views += 1
        post.save()
        request.session[session_key] = True

    return render(request, 'posts/announcement_detail.html', {'post': post})

# 게시글 작성
@login_required
def create_post(request, post_type):
    VALID_POST_TYPES = ['donation', 'request', 'story', 'announcement']
    if post_type not in VALID_POST_TYPES:
        return render(request, '404.html')

    # 공지사항은 관리자만 작성 가능
    if post_type == 'announcement' and not request.user.is_superuser:
        return render(request, '403.html')

    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        category = request.POST.get('category') if post_type in ['donation', 'request'] else None

        Post.objects.create(
            title=title,
            content=content,
            post_type=post_type,
            category=category,
            author=request.user
        )

        return redirect(f'/posts/{post_type}/')

    return render(request, 'posts/post_form.html', {'post_type': post_type})
