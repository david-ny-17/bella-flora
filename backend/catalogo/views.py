from rest_framework import filters, generics

from .models import Categoria, Producto
from .serializers import CategoriaSerializer, ProductoSerializer


class CategoriaListView(generics.ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class ProductoListView(generics.ListAPIView):
    queryset = Producto.objects.select_related("categoria")
    serializer_class = ProductoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["nombre"]