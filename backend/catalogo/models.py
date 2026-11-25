from django.db import models


class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name = "categoría"
        verbose_name_plural = "categorías"
        ordering = ["id"]

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    # Con este stock o menos (y mayor que 0) se considera "últimas unidades"
    STOCK_BAJO = 5

    nombre = models.CharField(max_length=150)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    imagen = models.URLField(max_length=500)
    stock = models.PositiveIntegerField(default=0)
    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.PROTECT,
        related_name="productos",
    )

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.nombre

    @property
    def estado_stock(self):
        if self.stock == 0:
            return "agotado"
        if self.stock <= self.STOCK_BAJO:
            return "ultimas"
        return "disponible"