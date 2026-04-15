# La Liga - Rama `02-manual-router`

Esta rama se centra en la transformación de la aplicación en una **SPA (Single Page Application)** mediante la implementación de un sistema de enrutamiento manual. Abandonamos el cambio de componentes basado en estado interno para usar URLs reales.

**Consulta el `README.md` en la rama `main` para ver la arquitectura global del proyecto y la estructura completa de ramas.**

---

## Objetivos de esta Rama

El propósito es entender cómo funciona un router moderno "bajo el capó" sin depender de librerías externas. Los conceptos clave son:

| Concepto | Implementación en el Proyecto |
|---|---|
| **History API** | Uso de `pushState` y el evento `popstate` para navegar sin recargar. |
| **URL Parsing** | Extracción de parámetros dinámicos de la URL (ej: `:id`). |
| **Deep Linking** | Capacidad de entrar directamente a un equipo mediante su URL. |
| **Data Attributes** | Intercepción de clicks en enlaces mediante `data-link`. |

---

## Arquitectura del Router (`src/router.js`)

Hemos implementado una clase `Router` que centraliza la lógica de navegación:

```js
// Ejemplo de configuración de rutas en main.js
const routes = [
  { path: '/', view: renderTeamList },
  { path: '/team/:id', view: renderTeamDetail }
];

new Router(routes, document.getElementById('app'));
```

### Flujo de Navegación:
1.  **Intercepción:** Un listener global detecta clicks en elementos con `data-link`.
2.  **Prevención:** Se cancela el comportamiento por defecto del navegador (`e.preventDefault()`).
3.  **PushState:** Se actualiza la URL en la barra de direcciones sin pedir una nueva página al servidor.
4.  **Matching:** El router compara la nueva URL con los patrones definidos (usando regex o splits).
5.  **Renderizado:** Se ejecuta la función `view` asociada a la ruta encontrada.

---

## Estructura de Carpetas

```
la-liga-explorer/ (Rama 02-manual-router)
├── src/
│   ├── router.js            ← NUEVO: Lógica del motor de rutas
│   ├── main.js              ← Instancia el Router y define las rutas
│   ├── components/
│   │   ├── TeamList.js      ← Ahora usa enlaces <a data-link>
│   │   └── TeamDetail.js    ← Recibe el parámetro :id desde el router
...
```

---

## Configuración de Vite para SPA

Para que el enrutamiento funcione al recargar la página (F5) en una subruta como `/team/86`, el servidor de desarrollo debe estar configurado para redirigir todas las peticiones al `index.html`. Vite lo hace automáticamente en modo desarrollo, pero es un concepto vital para producción.

---

## Script de Demo Sugerido

1.  **Navegación:** Hacer click en un equipo y observar cómo la URL cambia a `/team/ID` instantáneamente.
2.  **Botón Atrás:** Usar el botón de retroceso del navegador para volver a la lista (evento `popstate`).
3.  **Recarga Directa:** Escribir una URL de equipo directamente en el browser y ver cómo la aplicación carga la vista correcta desde el inicio.
4.  **Código:** Analizar `router.js` para ver cómo se parsean los parámetros `:id`.
