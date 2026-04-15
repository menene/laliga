# La Liga Explorer - Proyecto de Progresión

Proyecto de demostración en clase construido para enseñar la evolución de una aplicación web moderna. La aplicación consume la API de **football-data.org** para mostrar la tabla de posiciones de La Liga y permite hacer drill-down hacia el detalle de cada equipo.

El objetivo principal de este repositorio es que los estudiantes puedan ver la progresión y las diferencias arquitectónicas al cambiar entre distintas ramas (*branches*). Cada rama introduce nuevos conceptos, herramientas o frameworks.

## Resumen de Ramas

![Diagrama de progresión](flow.png)

- **`main`**: Esta rama. Actúa como índice y contiene este README con la visión general del proyecto y la descripción de cada etapa.
- **`01-vite`**: Implementación en **JavaScript Vanilla** usando **Vite** como bundler moderno. Demuestra el uso de ES Modules, manejo de assets estáticos (CSS, imágenes), variables de entorno y configuración de proxy en el dev server para evitar problemas de CORS. Intencionalmente sin frameworks.
- **`02-custom-router`**: Introduce un **enrutador manual del lado del cliente** (Client-Side Router) construido con JS Vanilla. Muestra cómo las Single Page Applications (SPAs) manejan la navegación entre vistas y el historial del navegador bajo el capó.
- **`03-react`**: Refactorización completa de la aplicación utilizando **React**. Demuestra la arquitectura basada en componentes, el manejo de estado y el ecosistema de React en contraste con el enfoque vanilla inicial.

## Cómo usar este repositorio

Para explorar las diferentes etapas del proyecto, simplemente cambia a la rama correspondiente utilizando tu terminal:

```bash
git checkout 01-vite
git checkout 02-custom-router
git checkout 03-react
```

**Nota importante:** Cada rama contiene su propio archivo `README.md` con las instrucciones específicas sobre la estructura de carpetas, comandos de Docker y npm, y explicaciones teóricas detalladas para esa etapa en particular.
