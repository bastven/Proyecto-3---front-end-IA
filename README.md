# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





##Promp utilizado para el desarrollo

Actúa como un Desarrollador Senior de React. Crea una Single Page Application (SPA) llamada 'Astro-Tracker'.
Diseño Visual: Estética profesional inspirada en centros de control espacial. Fondo #050505. Usa Magenta (#FF00FF) para llamadas a la acción y estados de error, y Amarillo (#FFFF00) para elementos destacados, bordes de cards y estados de éxito.
Requisitos Técnicos Obligatorios:

React Hooks: Usa useState para el CRUD y useEffect para sincronizar con Local Storage y la API.
Consumo de API: Conéctate a la NASA APOD API. Implementa un buscador por fecha. Debe mostrar un estado de 'Cargando...' con un spinner amarillo y manejar errores (ej: fecha inválida).

CRUD + Local Storage:
Create: Permitir guardar la imagen de la NASA en una lista de 'Favoritos'.
Read: Mostrar una galería de los hallazgos guardados persistidos en Local Storage.
Update: Permitir al usuario añadir y editar una 'Nota de Observación' personal a cada imagen guardada.
Delete: Botón para eliminar hallazgos de la galería.
Seguridad e IA: Implementa una función de sanitización para los inputs de las notas (prevención XSS). Agregue comentarios en el código explicando dónde la IA optimizó el manejo de errores y la validación de tipos.

Estructura de la Interfaz:
Navbar con logo 'Astro-Tracker' en Amarillo.
Hero Section con la 'Imagen del Día' de la NASA.
Formulario de búsqueda por fecha.
Sección 'Mi Diario de Observación' con las cards del CRUD.
