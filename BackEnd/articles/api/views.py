from rest_framework.viewsets import ModelViewSet
from ..models import Category, Article
from .serializers import CategorySerializer, ArticleSerializer

class CategoryView(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ArticleView(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer