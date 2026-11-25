# Ejercicio 06: Funcionalidades adicionales para una tienda completa

El catálogo actual permite consultar productos y filtrarlos por categoría.
Para convertirlo en una aplicación completa de comercio electrónico para
Bella Flora se necesitan las siguientes funcionalidades.

## Proceso de compra

| Funcionalidad | Descripción |
|---|---|
| Carrito de compras | Agregar y quitar productos, cambiar cantidades y ver el total. |
| Registro de pedidos | Guardar cada compra (modelos Pedido y DetallePedido) con su estado: pendiente, pagado, enviado, entregado. |
| Pasarela de pagos | Cobro en línea con tarjeta o billeteras digitales mediante un proveedor como Culqi, Niubiz o Mercado Pago. |
| Datos de entrega | Dirección, fecha y hora de entrega, y mensaje de dedicatoria para el destinatario. |

## Clientes

| Funcionalidad | Descripción |
|---|---|
| Registro e inicio de sesión | Autenticación de clientes (por ejemplo con tokens JWT en Django REST Framework). |
| Historial de pedidos | Cada cliente consulta sus compras anteriores y su estado. |

## Catálogo

| Funcionalidad | Descripción |
|---|---|
| Detalle de producto | Página individual con más fotos y descripción ampliada. |
| Búsqueda y ordenamiento | Buscar por nombre y ordenar por precio. |
| Control de stock | Descontar el stock al comprar y mostrar "Agotado" cuando llegue a cero. |
| Subida de imágenes | Cargar fotos desde el administrador (campo de imagen) en lugar de pegar una URL. |
| Paginación en la API | Devolver los productos por páginas cuando el catálogo crezca. |

## Calidad y publicación

| Funcionalidad | Descripción |
|---|---|
| Variables de entorno | Mover la dirección de la API y la clave secreta de Django fuera del código. |
| Pruebas automáticas | Verificar modelos, servicios REST y componentes clave. |
| Despliegue | Publicar el frontend y el backend con HTTPS y una base de datos de producción. |
