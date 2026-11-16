# Ejercicio 01: Análisis del negocio y planificación de la aplicación

## 1. Rubro comercial seleccionado

**Rubro:** Florería

Se eligió este rubro porque sus productos son muy visuales, se agrupan de forma
natural en categorías (ramos, arreglos, plantas, etc.) y se benefician de un
catálogo en línea donde el cliente pueda ver las opciones antes de comprar.

## 2. Nombre comercial y descripción de productos

**Nombre comercial:** Bella Flora

**Descripción:** Bella Flora es una florería que ofrece flores frescas y
productos decorativos para todo tipo de ocasiones: cumpleaños, aniversarios,
eventos y decoración del hogar.

**Productos que ofrecerá:**

- Ramos de flores naturales.
- Arreglos florales en floreros, canastas y cajas.
- Plantas de interior y de ornamento.
- Detalles y regalos complementarios (cajas de regalo, tarjetas, peluches).

## 3. Funcionalidades de la primera versión

**Incluidas en esta versión:**

- Mostrar el catálogo de productos en la página principal.
- Mostrar cada producto en una tarjeta con su información (nombre, descripción,
  precio, imagen y categoría).
- Mostrar la lista de categorías disponibles.
- Filtrar los productos según la categoría seleccionada.
- Navegación principal mediante un encabezado con el logotipo y el nombre de la tienda.
- Obtener productos y categorías desde el backend mediante servicios REST.
- Administrar productos y categorías desde el panel de administración de Django.
- Mostrar mensajes de carga y de error al consultar la información.
- Interfaz adaptable a distintos tamaños de pantalla (responsive).

**Fuera del alcance de esta versión** (se agregarán en laboratorios posteriores):

- Carrito de compras.
- Registro de pedidos.
- Autenticación de clientes.
- Pasarela de pagos.

## 4. Información de los productos

### Producto

| Campo        | Descripción                          | Tipo de dato (Django)     |
|--------------|--------------------------------------|---------------------------|
| id           | Identificador único (automático)     | AutoField                 |
| nombre       | Nombre del producto                  | CharField                 |
| descripcion  | Descripción del producto             | TextField                 |
| precio       | Precio de venta                      | DecimalField              |
| categoria    | Categoría a la que pertenece         | ForeignKey (Categoria)    |
| imagen       | Imagen o URL de la imagen            | URLField                  |
| stock        | Cantidad disponible                  | PositiveIntegerField      |

### Categoría

| Campo  | Descripción                      | Tipo de dato (Django) |
|--------|----------------------------------|-----------------------|
| id     | Identificador único (automático) | AutoField             |
| nombre | Nombre de la categoría           | CharField             |

**Relación:** una categoría tiene muchos productos (uno a muchos); cada producto
pertenece a una sola categoría.

**Categorías iniciales:** Ramos, Arreglos florales, Plantas de interior, Cajas y detalles.

## 5. Elementos principales de la interfaz

| Elemento        | Función                                                              |
|-----------------|----------------------------------------------------------------------|
| Header          | Muestra el logotipo, el nombre de la tienda y la navegación.         |
| CategoryFilter  | Muestra las categorías y permite seleccionar una para filtrar.       |
| ProductList     | Contiene el catálogo y muestra varias tarjetas de productos.         |
| ProductCard     | Tarjeta de un producto: imagen, nombre, descripción, precio y categoría. |

**Boceto de la interfaz:**

```
+----------------------------------------------------------------+
| [Logo] Bella Flora              Inicio  Catálogo  Categorías   |  <- Header
+----------------------------------------------------------------+
| [Todas] [Ramos] [Arreglos] [Plantas] [Cajas]                   |  <- CategoryFilter
+----------------------------------------------------------------+
| +------------+   +------------+   +------------+               |
| |  imagen    |   |  imagen    |   |  imagen    |               |
| | Nombre     |   | Nombre     |   | Nombre     |               |  <- ProductList
| | Categoría  |   | Categoría  |   | Categoría  |               |     con ProductCard
| | S/ 00.00   |   | S/ 00.00   |   | S/ 00.00   |               |
| +------------+   +------------+   +------------+               |
+----------------------------------------------------------------+
```

## 6. Esquema de comunicación

```
+---------------------------+
|        FRONTEND           |
|    ReactJS + Vite         |
|   http://localhost:5173   |
+---------------------------+
      |               ^
      | Petición HTTP | Respuesta
      | GET (fetch)   | en JSON
      v               |
+---------------------------+
|         BACKEND           |
|  Django REST Framework    |
|   http://localhost:8000   |
+---------------------------+
      |               ^
      | Consultas     | Datos
      | (ORM)         |
      v               |
+---------------------------+
|      BASE DE DATOS        |
|   SQLite (db.sqlite3)     |
+---------------------------+
```

**Endpoints previstos:**

| Método | Ruta              | Descripción                    |
|--------|-------------------|--------------------------------|
| GET    | /api/categorias/  | Lista de categorías            |
| GET    | /api/productos/   | Lista de productos             |

**Flujo:** el usuario abre la tienda en React, que solicita los datos a Django
mediante `fetch`; Django los consulta en la base de datos y los devuelve en
formato JSON para que React los muestre en pantalla.