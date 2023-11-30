from django.db import models
from django.db.models import Count
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='category_images/', null=True)
    categorydate = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

class Article(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(upload_to='article_images/')
    postdate = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    readingtime = models.PositiveIntegerField()
    tags = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=255)
    message = models.TextField()
    createdat = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.article.title

class ContactMessage(models.Model):
    fullname = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    createdat = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
