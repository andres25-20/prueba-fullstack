# dev_full_stack
Se desarrollar una aplicación full stack  

Este proyecto consiste en una API REST protegida con API Key, y un frontend React que consume el endpoint `/api/locations`.

---

## Tecnologías

- Backend: Laravel 12 (PHP 8+)
- Frontend: React + Vite + TypeScript
- Estilos: Material UI
- Autenticación: API Key
- Calidad de Código: Laravel Pint, PHPStan, PHP CodeSniffer

## Instalación del Backend (Laravel)

 Extensiones activas: fileinfo, zip, pdo_sqlite
- cd backend
- composer install
- cp .env.example .env
- php artisan key:generate

### Base de datos

- Se crea archivo database/database.sqlite
- Para ello se modifica el archivo la ruta de la db_database en el .env
 DB_DATABASE=/ruta/absoluta/a/backend/database/database.sqlite

- ejecutamos migraciones
 php artisan migrate

### corremos el backend
- php artisan serve


### Heramientas de calidad de codiga

Laravel Pint
- vendor/bin/pint

PHP CodeSniffer
- vendor/bin/phpcs --standard=PSR12 app/

PHPStan / Archivo phpstan.neon
- vendor/bin/phpstan analyse


## Instalación del Frontend (React + Vite)

- cd frontend
- npm install
- npm run dev

### Pruebas con Postman

- Crear Solicitud GET

http://localhost:8000/api/locations

- Header

X-API-KEY: 123456789


- Ejecucion 

http://localhost:5173


### Funcionalidades

Consume datos desde el backend (/api/locations)
Muestra cada sede en una tarjeta usando Material UI (Card)

Presenta:
Imagen (image)
Nombre de la sede (name)
Código (code)
Fecha de creación (creationDate)
