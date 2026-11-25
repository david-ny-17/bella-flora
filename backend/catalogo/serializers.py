from rest_framework import serializers

from .models import Categoria, Producto


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ["id", "nombre"]


class ProductoSerializer(serializers.ModelSerializer):
    categoria = serializers.StringRelatedField()
    estado_stock = serializers.ReadOnlyField()
    en_oferta = serializers.ReadOnlyField()
    precio_final = serializers.DecimalField(
        max_digits=8, decimal_places=2, read_only=True
    )

    class Meta:
        model = Producto
        fields = [
            "id",
            "nombre",
            "descripcion",
            "precio",
            "descuento",
            "precio_final",
            "en_oferta",
            "imagen",
            "stock",
            "estado_stock",
            "categoria",
        ]