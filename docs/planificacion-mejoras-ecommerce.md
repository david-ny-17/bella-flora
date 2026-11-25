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

## 2. Público objetivo

### Perfiles de cliente

| Perfil | Descripción | Qué necesita | Cómo responde la aplicación |
|--------|-------------|--------------|-----------------------------|
| Comprador de regalos | Personas de 20 a 45 años que buscan flores para cumpleaños, aniversarios o fechas especiales como San Valentín o el Día de la Madre. | Encontrar rápido una opción adecuada y ver el precio de inmediato. | Catálogo visual, filtro por categoría, búsqueda y recomendaciones. |
| Comprador de ocasión urgente | Personas que necesitan un detalle en poco tiempo. | Saber qué hay disponible y qué está agotado. | Estado de stock visible en cada producto. |
| Cliente interesado en plantas y decoración | Personas que compran plantas o arreglos para el hogar u oficina. | Comparar opciones de plantas y arreglos. | Categorías claras y productos relacionados. |
| Cliente que busca ofertas | Personas atentas a precios y promociones. | Identificar fácilmente los productos con descuento. | Etiquetas de oferta y precios rebajados. |

### Usuario administrador

La propia florería, que necesita registrar productos, actualizar el stock y
definir descuentos desde el panel de administración de Django sin tocar código.

### Contexto de uso

Se asume que la mayoría de los clientes entrará desde el celular, muchas veces
al llegar desde redes sociales. Por eso la tienda se diseña priorizando la
visualización en pantallas pequeñas, con textos legibles, botones fáciles de
tocar y carga rápida de imágenes.

## 3. Características clave

| N.º | Característica | Descripción | Estado actual |
|-----|----------------|-------------|---------------|
| 1 | Diseño responsivo | La interfaz se adapta a móvil, tablet y escritorio, con navegación y controles cómodos para pantallas táctiles. | Completo: menú móvil, botones táctiles de 44 px y pruebas en anchos de 360 a 1280 px. |
| 2 | Gestión básica de inventario | Control del stock de cada producto desde el administrador, con estados visibles en la tienda: disponible, últimas unidades y agotado. | Completo: stock editable y filtrable en el administrador, y estado visible en cada tarjeta de la tienda. |
| 3 | Visualización, filtrado y búsqueda | Catálogo con filtro por categoría y un buscador por nombre de producto. | Completo: filtro por categoría y búsqueda por nombre en el servicio REST, combinables entre sí. |
| 4 | Promociones y descuentos | Productos con precio rebajado, etiqueta de descuento y destaque de las ofertas. | Pendiente. |
| 5 | Sistema de recomendación | Sugerencias de productos relacionados, por ejemplo de la misma categoría o marcados como destacados. | Pendiente. |

### Resumen de lo que se agregará

**Backend (Django):**

- Nuevos campos en el modelo de producto para el descuento y para marcar productos destacados.
- Búsqueda por nombre en el servicio REST de productos.
- Servicio REST de productos recomendados.

**Frontend (React):**

- Barra de búsqueda junto al filtro de categorías.
- Etiquetas de stock y de descuento en las tarjetas de producto.
- Sección de productos recomendados.
- Ajustes de diseño para dispositivos móviles.

### Criterio de recomendación inicial

Como la tienda aún no registra pedidos, no es posible recomendar según
compras anteriores. La primera versión recomendará productos de la misma
categoría y productos destacados por la florería. Cuando existan pedidos, el
sistema podrá mejorar usando los productos más vendidos.