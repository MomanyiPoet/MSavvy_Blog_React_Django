from rest_framework.serializers import ModelSerializer
from ..models import Category, Article

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'image', 'categorydate')

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'category', 'title', 'author', 'postdate', 'content', 'image', 'readingtime', 'tags')