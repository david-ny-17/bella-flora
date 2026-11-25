from django.db.models import Case, IntegerField, Value, When
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


class ProductoRecomendadoListView(generics.ListAPIView):
    """Recomienda hasta 4 productos que tengan stock.

    Orden de prioridad:
    1. Productos de la categoría indicada (?categoria=Ramos), si se envía.
    2. Productos destacados por la florería.
    3. Productos con mayor descuento.
    """

    serializer_class = ProductoSerializer
    LIMITE = 4

    def get_queryset(self):
        categoria = self.request.query_params.get("categoria", "").strip()

        queryset = Producto.objects.select_related("categoria").filter(stock__gt=0)
        orden = ["-destacado", "-descuento", "id"]

        if categoria:
            queryset = queryset.annotate(
                misma_categoria=Case(
                    When(categoria__nombre=categoria, then=Value(1)),
                    default=Value(0),
                    output_field=IntegerField(),
                )
            )
            orden.insert(0, "-misma_categoria")

        return queryset.order_by(*orden)[: self.LIMITE]