# Gaia Consultores - Landing Page

Landing page oficial de **Gaia Consultores** - Transformación sostenible y regenerativa.

## 🛠️ Stack Tecnológico

- **React 18.3.1** - Biblioteca de UI
- **Vite 5.4.11** - Build tool y dev server
- **React Router DOM 6.28** - Enrutamiento SPA
- **CSS Modules** - Estilos modulares y scoped

## 📁 Estructura del Proyecto

```
gaia_consultors_web/
├── public/
│   ├── .htaccess          # Configuración Apache para GreenGeeks
│   └── vite.svg
├── src/
│   ├── assets/            # Imágenes, fuentes, etc.
│   ├── components/        # Componentes reutilizables
│   ├── pages/             # Páginas de la aplicación
│   │   ├── Home.jsx       # Página principal
│   │   ├── About.jsx      # Página "Nosotros"
│   │   └── Contact.jsx    # Página "Contacto"
│   ├── styles/            # Estilos globales y utilidades
│   ├── App.jsx            # Componente principal con routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Estilos globales y variables CSS
├── package.json
└── vite.config.js
```

## 🚀 Comandos Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173`

### Build para Producción
```bash
npm run build
```
Genera los archivos optimizados en la carpeta `dist/`

### Preview de Producción
```bash
npm run preview
```
Previsualiza el build de producción localmente

### Linting
```bash
npm run lint
```
Ejecuta ESLint para verificar la calidad del código

## 🎨 Sistema de Diseño

El proyecto incluye un sistema de variables CSS en `src/index.css`:

- **Paleta de colores "Gaia"**: Tonos tierra y naturales
  - `--color-primary`: Verde bosque profundo
  - `--color-secondary`: Arena/Beige
  - `--color-accent`: Oro terroso/Terracota
  - `--color-background`: Crema/Off-white
  
- **Tipografía**: Inter (sans-serif) + Merriweather (serif para headings)
- **Espaciado**: Sistema de spacing consistente (xs, sm, md, lg, xl)
- **Border Radius**: Valores predefinidos (sm, md, lg)

## 🌐 Despliegue en GreenGeeks

El archivo `public/.htaccess` está configurado para manejar el enrutamiento SPA en Apache:

1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu hosting
3. El archivo `.htaccess` se copiará automáticamente y manejará las rutas

## 📋 Rutas Configuradas

- `/` - Página principal (Home)
- `/nosotros` - Acerca de Gaia Consultores
- `/contacto` - Formulario de contacto

## 🔧 Compatibilidad

- **Node.js**: v18.18.2 (versión actual del proyecto)
- **npm**: 10.2.1
- Todas las dependencias son compatibles con Node 18

## 📝 Notas

- El proyecto usa **CSS Modules** para estilos scoped por componente
- La configuración de `.htaccess` es crítica para que las rutas funcionen en producción
- El build está optimizado y listo para producción
