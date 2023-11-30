from django.contrib import admin
from articles.models import Category, Article, Comment, ContactMessage

# CHANGING TABLE LAYOUT
class categoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'title', 'author', 'postdate', 'content')
    list_filter = ['category']

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'article','fullname', 'createdat', 'message')
    list_filter = ['createdat']

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'email','fullname', 'createdat', 'message')
    list_filter = ['createdat']

# Register your models here.
admin.site.register(Category, categoryAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(ContactMessage, ContactMessageAdmin)