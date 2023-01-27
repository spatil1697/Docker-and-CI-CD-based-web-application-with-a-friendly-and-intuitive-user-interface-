from django.contrib.auth.password_validation import validate_password
from django.core.mail import send_mail
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from backend import settings
from django.shortcuts import render, redirect
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from django.conf import settings

User = get_user_model()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        # ...
        return token


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])


    class Meta:
        model = User
        fields = ('email', 'username', 'password') 

    def create(self, validated_data):
        user = User.objects.create(
        username=validated_data['username'],
        email = validated_data['email'],
        )

        user.set_password(validated_data['password'])

        user.save()

        return user

