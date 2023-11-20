from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import CategoryView, ArticleView

post_router = DefaultRouter()
post_router.register(r'category', CategoryView)
post_router.register(r'article', ArticleView)