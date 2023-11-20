from django.contrib import admin
from articles.models import Category, Content

# CHANGING TABLE LAYOUT
class categoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

class contentAdmin(admin.ModelAdmin):
    list_display = ('category', 'title', 'description')

# Register your models here.
admin.site.register(Category, categoryAdmin)
admin.site.register(Content, contentAdmin)