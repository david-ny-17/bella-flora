from django.urls import path

from . import views

urlpatterns = [
    path("categorias/", views.CategoriaListView.as_view(), name="categoria-list"),
    path("productos/", views.ProductoListView.as_view(), name="producto-list"),
]