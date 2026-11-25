# Bella Flora - Tienda virtual de comercio electrónico

Aplicación web de comercio electrónico para una florería, desarrollada con
ReactJS (frontend) y Django REST Framework (backend).

## Documentación

- [Ejercicio 01: Análisis del negocio y planificación](docs/ejercicio-01-analisis.md)

## Ejecución en entorno local

**Backend (Django):**

```bash
cd backend
python -m venv venv
venv\Scripts\activate        
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Disponible en http://localhost:8000

**Frontend (React + Vite):**

```bash
cd frontend
npm install
npm run dev
```

Disponible en http://localhost:5173

## Servicios REST del backend

| Método | Ruta              | Descripción         |
|--------|-------------------|---------------------|
| GET    | /api/categorias/  | Lista de categorías |
| GET    | /api/productos/   | Lista de productos  |

Para cargar datos de ejemplo, crear un administrador con
`python manage.py createsuperuser` e ingresar a http://localhost:8000/admin

- [Ejercicio 06: Funcionalidades adicionales](docs/ejercicio-06-funcionalidades-adicionales.md)

- [Planificación de mejoras del e-commerce](docs/planificacion-mejoras-ecommerce.md)