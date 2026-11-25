from django.contrib import admin

from .models import Categoria, Producto


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ("id", "nombre")


class EstadoStockFilter(admin.SimpleListFilter):
    title = "estado de stock"
    parameter_name = "estado_stock"

    def lookups(self, request, model_admin):
        return [
            ("agotado", "Agotado"),
            ("ultimas", "Últimas unidades"),
            ("disponible", "Disponible"),
        ]

    def queryset(self, request, queryset):
        valor = self.value()
        if valor == "agotado":
            return queryset.filter(stock=0)
        if valor == "ultimas":
            return queryset.filter(stock__gt=0, stock__lte=Producto.STOCK_BAJO)
        if valor == "disponible":
            return queryset.filter(stock__gt=Producto.STOCK_BAJO)
        return queryset


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ("nombre", "categoria", "precio", "stock", "estado")
    list_editable = ("stock",)
    list_filter = ("categoria", EstadoStockFilter)
    search_fields = ("nombre",)

    @admin.display(description="Estado de stock")
    def estado(self, producto):
        textos = {
            "agotado": "Agotado",
            "ultimas": "Últimas unidades",
            "disponible": "Disponible",
        }
        return textos[producto.estado_stock]