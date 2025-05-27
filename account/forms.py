from django import forms
from django.contrib.auth.forms import AuthenticationForm
from .models import CustomUser

class SignUpForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ['email', 'nickname', 'location', 'password', 'confirm_password']

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")
        if password != confirm_password:
            raise forms.ValidationError("비밀번호가 일치하지 않습니다.")
        return cleaned_data

class LoginForm(AuthenticationForm):
    username = forms.EmailField(label="이메일")
