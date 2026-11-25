# Planificación de mejoras del e-commerce Bella Flora

Este documento define los objetivos, el público objetivo y las características
clave de la segunda etapa de la tienda virtual Bella Flora.

**Punto de partida:** la aplicación ya cuenta con un catálogo de productos,
organización por categorías y filtrado por categoría, con un frontend en
ReactJS y un backend en Django REST Framework. Esta etapa agrega las
funcionalidades necesarias para convertirla en una tienda más completa.

## 1. Objetivos de la aplicación

### Objetivo general

Ampliar el catálogo de Bella Flora hasta convertirlo en una tienda en línea más
completa, que ayude al cliente a encontrar y elegir flores con facilidad, y que
permita a la florería controlar su inventario y promocionar sus productos.

### Objetivos específicos

| N.º | Objetivo específico | Cómo se comprobará |
|-----|---------------------|--------------------|
| 1 | Lograr que la tienda se vea y funcione bien en celulares, tablets y computadoras. | Pruebas en anchos de 375, 768 y 1280 px sin desplazamiento horizontal. |
| 2 | Controlar el inventario: que la florería sepa cuánto stock tiene y que el cliente vea cuándo un producto está agotado o por agotarse. | El stock se administra desde Django y la tienda muestra el estado de cada producto. |
| 3 | Facilitar la búsqueda de productos mediante filtrado por categoría y búsqueda por nombre. | Al escribir un término o elegir una categoría, solo se muestran los productos que coinciden. |
| 4 | Dar visibilidad a promociones y descuentos que incentiven la compra. | Los productos en oferta muestran su precio rebajado y una etiqueta de descuento. |
| 5 | Recomendar productos relacionados para que el cliente descubra más opciones. | La tienda muestra una sección de productos sugeridos según criterios definidos. |