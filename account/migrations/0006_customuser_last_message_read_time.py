# Generated by Django 5.2.2 on 2025-06-05 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("account", "0005_alter_customuser_nickname"),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="last_message_read_time",
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
