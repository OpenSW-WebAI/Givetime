# posts/models.py
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    POST_TYPE_CHOICES = [
        ('donation', '재능기부'),
        ('request', '재능요청'),
        ('story', '따뜻한 이야기'),
        ('announcement', '공지사항'),
    ]

    CATEGORY_CHOICES = [
        ('education', '교육'),
        ('it', 'IT/개발'),
        ('design', '디자인'),
        ('etc', '기타'),
    ]

    title = models.CharField(max_length=200)
    content = models.TextField()
    post_type = models.CharField(max_length=20, choices=POST_TYPE_CHOICES)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, blank=True, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.title}"
