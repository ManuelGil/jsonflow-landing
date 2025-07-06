# JSON Flow – Modern UI Design Guide

Guía visual para una landing page técnica, sofisticada y centrada en el modo oscuro. Inspirada en sitios modernos como Cobalt y Codeium, esta guía está pensada para diseñadores que buscan claridad, jerarquía visual y una experiencia de usuario fluida.

---

## Fundamentos del Diseño

- **Estética técnica y minimalista:** Foco en el contenido, espacios generosos, y líneas limpias.
- **Modo oscuro como base:** Ideal para un público desarrollador. El fondo debe ser profundo (casi negro) con contrastes suaves.
- **Composición centralizada y espaciada:** El contenido debe mantenerse alineado a un ancho máximo legible (entre 1100px y 1280px), con márgenes internos generosos.

---

## Ambientación Visual

- **Fondo con textura sutil:** Se puede usar un patrón de cuadrícula tenue, con un degradado radial que da profundidad sin distraer.
- **Sombras tenues y contornos suaves:** Para separar bloques sin necesidad de cajas visibles. La jerarquía se logra con luz, contraste y espaciado.
- **Animaciones ligeras:** Pequeñas transiciones para entradas o hover. Nada excesivo, todo debe sentirse profesional.
- **Separadores y líneas guía:** Líneas delgadas para dividir secciones, con un efecto de desenfoque suave si se aplica sobre fondos.

---

## Paleta de Colores

- **Fondo principal:** Negro profundo o gris muy oscuro
- **Textos principales:** Blanco puro
- **Textos secundarios:** Grises suaves
- **Color de acento:** Azul eléctrico o vibrante, usado con moderación
- **Estados activos / hover:** Variante más clara del acento
- **Bordes y detalles:** Grises muy oscuros o translúcidos

---

## Tipografía

- **Familia principal:** Sans-serif moderna, idealmente Geist Sans o alternativa técnica con excelente legibilidad
- **Títulos:** Pesados y grandes, sin serifas, con tracking ajustado
- **Texto de cuerpo:** Ligero, con interlineado amplio
- **Metadata o captions:** Más pequeños y en gris medio

---

## Header

- **Diseño inicial estático, transicionando a flotante:** El header debe comenzar como parte del flujo natural de la página, sin fijarse en la parte superior. Sin embargo, al hacer scroll hacia abajo, debe fijarse (sticky) en la parte superior con una animación de deslizamiento suave que indique el cambio de estado.
- **Fondo y bordes al fijarse:** Al volverse flotante, el fondo debe pasar a un tono semi-transparente con desenfoque (glassmorphism) y aparecer una línea inferior sutil para separación visual.
- **Distribución:** Logo a la izquierda, navegación centrada o alineada a la derecha.
- **Botón de llamada a la acción:** Contraste fuerte, con un pequeño efecto glow. En hover, animación de cambio de color y elevación leve.
- **Transiciones sugeridas:**
  - Aparición del header sticky: `slide down + fade in`
  - Hover en navegación: `color transition + underline fade`
  - Hover en botón CTA: `background glow + scale up sutil` y fijo en la parte superior:** Fondo semi-transparente con difuminado. Bordes inferiores sutiles.
- **Distribución:** Logo a la izquierda, navegación centrada o alineada a la derecha.
- **Botón de llamada a la acción:** Contraste fuerte, pequeño glow, forma rectangular con esquinas ligeramente redondeadas.

---

## Sección Hero

- **Altura completa de pantalla:** Con fondo animado o degradado suave.
- **Mensaje central:** Título grande en blanco con énfasis en palabras clave mediante color o peso.
- **Subtítulo:** Máximo dos líneas, tono claro y profesional.
- **Botones:** Principal y secundario. Distribución vertical u horizontal según tamaño de pantalla.
- **Mockup o video de demo:** Centrado, con sombra sutil. Debe mostrar uso real del producto en contexto.

---

## Sección de Features

- **Diseño en cuadrícula:** 3 o 4 columnas según ancho disponible.
- **Cada bloque:** Fondo gris oscuro, ícono visual destacado arriba, título corto y descripción breve.
- **Interacción:** Hover con sombra luminosa o contorno animado. Debe sentirse táctil.

---

## Sección How It Works

- **Tres pasos claros:** Dispuestos en horizontal o columna para móvil.
- **Cada paso:** Número visible, pequeño ícono o ilustración y explicación en pocas líneas.
- **Estilo:** Tarjetas limpias con separación por sombra o fondo ligeramente elevado.

---

## Sección de Casos de Uso

- **Distribución en dos columnas:** Títulos que apelan al usuario (p. ej. “Debug rápido”, “Documenta sin esfuerzo”)
- **Íconos pequeños y coloridos:** Junto a un breve texto explicativo.
- **Objetivo:** Mostrar para quién es útil sin necesidad de mucho texto.

---

## Sección del Equipo

- **Bloques personales con retrato o avatar:** Centrados o alineados en una cuadrícula.
- **Nombre y rol:** Bien diferenciados tipográficamente.
- **Links a perfiles públicos:** GitHub preferentemente. Estilo discreto pero accesible.

---

## Sección Call to Action

- **Fondo contrastado:** Puede ser más claro que el resto o usar un degradado invertido.
- **Mensaje contundente:** Una línea fuerte que invite a actuar.
- **Botón único:** Muy visible, centrado, con animación leve al pasar el mouse.

---

## Footer

- **Diseño minimalista y centrado:** Texto pequeño en gris, con íconos sociales o links útiles.
- **División visual:** Separado por una línea delgada o zona más clara.
- **Mensaje final:** Referencia a la comunidad o filosofía del producto.

---

## Detalles Técnicos (para desarrollo)

- **Framework visual:** Tailwind CSS
- **Componentes UI:** shadcn/ui
- **Animaciones:** framer-motion
- **Tipografía:** Geist Sans (a través de Vercel Fonts)
- **Íconos:** lucide-react

---

## Responsive & UX

- Pensar en móvil primero
- Diseños adaptables a diferentes anchos con rejillas fluidas
- Áreas clicables accesibles y visualmente claras
- Texto legible sin zoom
- Interacciones suaves con feedback inmediato (hover, focus, etc.)
- Accesibilidad visual: contraste suficiente y navegación con teclado

---

