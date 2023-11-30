from rest_framework.serializers import ModelSerializer
from ..models import Category, Article, Comment, ContactMessage

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'image', 'categorydate')

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'category', 'title', 'author', 'postdate', 'content', 'image', 'readingtime', 'tags')

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'article','fullname', 'createdat', 'message')

class ContactMessageSerializer(ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ('id', 'email','fullname', 'createdat', 'message')