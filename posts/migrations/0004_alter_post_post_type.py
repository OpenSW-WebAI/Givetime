# Generated by Django 5.0.6 on 2025-05-30 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_type',
            field=models.CharField(choices=[('donation', '재능 기부'), ('request', '재능 요청'), ('story', '따뜻한 이야기'), ('announcement', '공지사항')], max_length=20),
        ),
    ]
