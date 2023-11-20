from django.contrib import admin
from articles.models import Category, Article

# CHANGING TABLE LAYOUT
class categoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'category', 'title', 'author', 'postdate', 'content')
    list_filter = ['category']

# Register your models here.
admin.site.register(Category, categoryAdmin)
admin.site.register(Article, ArticleAdmin)