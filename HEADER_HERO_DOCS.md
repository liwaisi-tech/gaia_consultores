# 🎨 Header y Hero - Mobile First

## ✅ Componentes Implementados

### 1. **Header Component** (`src/components/Header.jsx`)
- ✅ **Mobile-first design** con menú hamburguesa
- ✅ **Navegación responsive** que se convierte en horizontal en desktop
- ✅ **Logo integrado** desde assets
- ✅ **Animaciones suaves** para el menú móvil
- ✅ **Active state** en las rutas actuales
- ✅ **Overlay** para cerrar el menú al hacer click fuera

**Rutas configuradas:**
- Home (`/`)
- Servicios (`/servicios`)
- Impacto (`/impacto`)
- Contacto (`/contacto`)

### 2. **Hero Component** (`src/components/Hero.jsx`)
- ✅ **Full viewport height** con imagen de fondo
- ✅ **Overlay gradient** para mejor legibilidad
- ✅ **Texto principal** adaptado del diseño
- ✅ **CTA buttons** (Contáctanos + Conoce servicios)
- ✅ **Video placeholder** con botón de play animado
- ✅ **Scroll indicator** con animación bounce
- ✅ **Animaciones fade-in** escalonadas

### 3. **Assets Incluidos**
- ✅ `src/assets/logo.png` - Logo de Gaia Consultores
- ✅ `src/assets/hero-bg.png` - Imagen de fondo (naturaleza)

## 📱 Breakpoints Responsivos

```css
Mobile: < 768px (diseño base)
Tablet: >= 768px
Desktop: >= 1024px
```

## 🎨 Características de Diseño

### Mobile (Prioridad)
- Menú hamburguesa con animación
- Navegación lateral deslizante
- Botones CTA apilados verticalmente
- Tipografía optimizada para lectura móvil

### Desktop
- Navegación horizontal en el header
- Hover effects con underline animado
- Botones CTA en fila
- Tipografía más grande

## 🚀 Cómo Visualizar

### Desarrollo
```bash
npm run dev
```
Abre `http://localhost:5173` en tu navegador

### Build para Producción
```bash
npm run build
```
Los archivos optimizados estarán en `dist/` listos para GreenGeeks

## 📦 Assets en el Build

Las imágenes están correctamente importadas y se incluirán en el build:
- `dist/assets/logo-[hash].png`
- `dist/assets/hero-bg-[hash].png`

Vite automáticamente optimiza y hashea los assets para cache busting.

## 🎯 Próximos Pasos Sugeridos

1. **Sección "Cómo lo hacemos"** - Metodología
2. **Sección de Servicios** - Cards con iconos
3. **Testimonios/Casos de éxito**
4. **Footer** con información de contacto
5. **Formulario de contacto** funcional

## 🔧 Personalización

### Cambiar colores
Edita las variables en `src/index.css`:
```css
--color-primary: #2E5C46;
--color-accent: #C48A4B;
```

### Cambiar logo
Reemplaza `src/assets/logo.png` con tu logo

### Cambiar imagen hero
Reemplaza `src/assets/hero-bg.png` con tu imagen
