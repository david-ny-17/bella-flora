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