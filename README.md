# La Liga - Rama `03-react`

Esta rama representa la culminación del proyecto, donde migramos la lógica imperativa de las ramas anteriores a un paradigma **declarativo** utilizando **React**. 

**Consulta el `README.md` en la rama `main` para ver la arquitectura global del proyecto y la estructura completa de ramas.**

---

## Objetivos de esta Rama

El propósito es entender las ventajas de un framework moderno en comparación con la manipulación manual del DOM. Los conceptos clave son:

| Concepto | Implementación en el Proyecto |
|---|---|
| **JSX** | Combinación de lógica y marcado en archivos `.jsx`. |
| **Hooks (`useState`)** | Gestión del estado de la UI (carga, errores, datos) de forma reactiva. |
| **Hooks (`useEffect`)** | Sincronización con la API de football-data.org al montar componentes. |
| **Componentes Props** | Modularización extrema (ej: `TeamLogo`, `StandingsTable`) para facilitar la reutilización. |
| **Composición** | Construcción de vistas complejas mediante la unión de pequeños componentes atómicos. |

---

## Arquitectura de Componentes

La aplicación se ha descompuesto en componentes funcionales altamente modulares localizados en `src/components/`:

-   **`TeamList.jsx`**: Gestiona la lógica de la tabla de posiciones.
    -   `StandingsTable.jsx`: Estructura de la tabla.
    -   `TeamLine.jsx`: Fila individual de cada equipo.
    -   `StandingsLegend.jsx`: Leyenda de colores (Champions, Europa, Descenso).
-   **`TeamDetail.jsx`**: Gestiona la vista profunda del equipo.
    -   `TeamDetailHeader.jsx`, `CoachInfo.jsx`, `TeamSquadList.jsx`, etc.

### Cambio de Paradigma:
- **Antes (Vanilla):** Buscábamos elementos con `getElementById` y los "limpiábamos" antes de inyectar nuevo HTML.
- **Ahora (React):** Describimos cómo debe verse la UI basándonos en el **Estado**. React se encarga de actualizar eficientemente solo lo que ha cambiado.

---

## Estructura de Carpetas

```
la-liga-explorer/ (Rama 03-react)
├── index.html               ← Contiene el <div id="root">
├── vite.config.js           ← Configurado con el plugin @vitejs/plugin-react
└── src/
    ├── main.jsx             ← Entry point de React (instancia el Virtual DOM)
    ├── api.js               ← Mantenemos la lógica de fetch (independiente del framework)
    ├── components/          ← Bibliotecas de componentes JSX
    └── css/                 ← Estilos globales
```

---

## Script de Demo Sugerido

1.  **Declaratividad:** Mostrar cómo `main.jsx` simplemente renderiza componentes sin tocar el DOM directamente.
2.  **Estado de Carga:** Observar cómo el componente muestra un spinner o mensaje de "Cargando..." basado en un booleano de estado.
3.  **Props:** Cambiar una propiedad en un componente padre y ver cómo se propaga automáticamente a los hijos.
4.  **DevTools:** Usar la extensión de React en el navegador para inspeccionar el árbol de componentes y su estado interno.
