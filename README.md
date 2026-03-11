# Proyecto listo - Segunda Evaluación Parcial React

Este proyecto cumple con los requisitos de la evaluación:

- Landing page
- Dos páginas adicionales
- Uso de JSX
- Props y children de padre a hijo
- Header y footer personalizados
- Barra de navegación
- Elementos estáticos (CSS e imagen externa)
- Componente contador
- Componente con cambio de estado
- Componente con cambio de visibilidad
- Conexión a Web API en ASP.NET Core
- Componente que muestra información desde API en .NET Core

## Estructura

- `frontend/` -> aplicación React con Vite
- `backend/` -> Web API en ASP.NET Core

## Cómo ejecutar el backend

1. Abrir terminal dentro de `backend`
2. Ejecutar:

```bash
 dotnet restore
 dotnet run
```

La API quedará disponible en:

- `https://localhost:7096/api/products`
- Swagger: `https://localhost:7096/swagger`

## Cómo ejecutar el frontend

1. Abrir terminal dentro de `frontend`
2. Copiar `.env.example` a `.env`
3. Ejecutar:

```bash
npm install
npm run dev
```

La app correrá en:

- `http://localhost:5173`

## Sugerencia para GitHub

Sube la carpeta completa `react_parcial_ready` para que tengas frontend y backend en el mismo repositorio.
