#!/usr/bin/env node

/**
 * Script de Diagnóstico de Carbono para Landing Pages React
 * 
 * Este script analiza tu proyecto React con Vite y te dice exactamente
 * qué está causando emisiones altas de carbono y cómo arreglarlo.
 * 
 * INSTRUCCIONES DE USO:
 * 1. Copia este archivo a la raíz de tu proyecto (junto a package.json)
 * 2. Dale permisos de ejecución: chmod +x diagnostico-carbono.js
 * 3. Ejecuta: node diagnostico-carbono.js
 */

const fs = require('fs');
const path = require('path');

console.log('\n🌱 DIAGNÓSTICO DE EMISIONES DE CARBONO - GAIA CONSULTORES\n');
console.log('='.repeat(70));

// Colores para consola
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  bold: '\x1b[1m'
};

let problemas = [];
let recomendaciones = [];
let impactoEstimado = 0;

// Función para mostrar problemas con colores
function reportarProblema(severidad, titulo, descripcion, impacto, solucion) {
  const color = severidad === 'ALTO' ? colors.red : severidad === 'MEDIO' ? colors.yellow : colors.green;
  problemas.push({ severidad, titulo, descripcion, impacto, solucion });
  console.log(`\n${color}${colors.bold}[${severidad}] ${titulo}${colors.reset}`);
  console.log(`${descripcion}`);
  console.log(`💡 Impacto en reducción: ${impacto}%`);
  impactoEstimado += parseInt(impacto);
}

function reportarSolucion(titulo, pasos) {
  recomendaciones.push({ titulo, pasos });
}

// 1. ANALIZAR index.css - Buscar imports de Google Fonts
console.log('\n📋 1. Analizando importación de fuentes...\n');

try {
  const indexCssPath = path.join(process.cwd(), 'src', 'index.css');
  if (fs.existsSync(indexCssPath)) {
    const cssContent = fs.readFileSync(indexCssPath, 'utf-8');
    
    // Buscar @import de Google Fonts
    const googleFontsImport = cssContent.match(/@import\s+url\(['"]?https:\/\/fonts\.googleapis\.com[^)]+\)/gi);
    
    if (googleFontsImport) {
      const numImports = googleFontsImport.length;
      reportarProblema(
        'ALTO',
        `${numImports} importación(es) de Google Fonts detectadas`,
        `Cada fuente de Google puede añadir 200-400KB. Esto es el problema #1 más común en emisiones altas.`,
        40,
        'Reemplazar con fuentes del sistema'
      );
      
      console.log(`\n   Fuentes encontradas:`);
      googleFontsImport.forEach(imp => {
        console.log(`   - ${imp.substring(0, 80)}...`);
      });
      
      reportarSolucion(
        'SOLUCIÓN #1: Reemplazar Google Fonts con fuentes del sistema',
        [
          '1. Abre src/index.css',
          '2. ELIMINA todas las líneas que digan @import url("https://fonts.googleapis.com/...")',
          '3. Busca donde defines font-family en tus estilos',
          '4. Reemplaza con: font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;',
          '5. Para serif (títulos): font-family: Georgia, "Times New Roman", Times, serif;',
          '6. Esto reduce 300-400KB inmediatamente'
        ]
      );
    } else {
      console.log(`${colors.green}✓ No se encontraron imports de Google Fonts en index.css${colors.reset}`);
    }
  } else {
    console.log(`${colors.yellow}⚠ No se encontró src/index.css${colors.reset}`);
  }
} catch (err) {
  console.log(`${colors.red}✗ Error al leer index.css: ${err.message}${colors.reset}`);
}

// 2. ANALIZAR App.jsx - Verificar code splitting
console.log('\n📋 2. Analizando code splitting en React...\n');

try {
  const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');
  if (fs.existsSync(appJsxPath)) {
    const appContent = fs.readFileSync(appJsxPath, 'utf-8');
    
    // Buscar imports normales de componentes
    const normalImports = appContent.match(/import\s+\w+\s+from\s+['"]\.\/pages\/\w+['"]/g);
    const lazyImports = appContent.match(/React\.lazy\s*\(/g);
    
    if (normalImports && !lazyImports) {
      reportarProblema(
        'ALTO',
        'Code splitting no implementado',
        `Detectamos ${normalImports.length} páginas cargándose sin lazy loading. Esto significa que el navegador descarga código de todas las páginas aunque el usuario solo vea una.`,
        25,
        'Implementar React.lazy() y Suspense'
      );
      
      console.log(`\n   Imports detectados:`);
      normalImports.forEach(imp => {
        console.log(`   - ${imp}`);
      });
      
      reportarSolucion(
        'SOLUCIÓN #2: Implementar code splitting',
        [
          '1. Abre src/App.jsx',
          '2. REEMPLAZA los imports normales como: import Home from "./pages/Home"',
          '3. CON imports lazy como: const Home = React.lazy(() => import("./pages/Home"))',
          '4. Envuelve tus <Routes> con <Suspense fallback={<div>Cargando...</div>}>',
          '5. Asegúrate de importar Suspense: import { Suspense } from "react"',
          '6. Esto reduce 200-300KB en la carga inicial'
        ]
      );
    } else if (lazyImports) {
      console.log(`${colors.green}✓ Code splitting implementado correctamente${colors.reset}`);
    } else {
      console.log(`${colors.yellow}⚠ No se detectaron imports de páginas${colors.reset}`);
    }
  } else {
    console.log(`${colors.yellow}⚠ No se encontró src/App.jsx${colors.reset}`);
  }
} catch (err) {
  console.log(`${colors.red}✗ Error al leer App.jsx: ${err.message}${colors.reset}`);
}

// 3. ANALIZAR imágenes en assets
console.log('\n📋 3. Analizando imágenes...\n');

try {
  const assetsPath = path.join(process.cwd(), 'src', 'assets');
  if (fs.existsSync(assetsPath)) {
    const files = fs.readdirSync(assetsPath, { recursive: true });
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f));
    
    if (imageFiles.length > 0) {
      console.log(`   Encontradas ${imageFiles.length} imágenes:\n`);
      
      let imagenesPesadas = 0;
      let totalSizeKB = 0;
      
      imageFiles.forEach(file => {
        const filePath = path.join(assetsPath, file);
        const stats = fs.statSync(filePath);
        const sizeKB = (stats.size / 1024).toFixed(2);
        totalSizeKB += parseFloat(sizeKB);
        
        const color = sizeKB > 200 ? colors.red : sizeKB > 100 ? colors.yellow : colors.green;
        console.log(`   ${color}${file}: ${sizeKB} KB${colors.reset}`);
        
        if (sizeKB > 100) imagenesPesadas++;
      });
      
      if (imagenesPesadas > 0) {
        reportarProblema(
          'MEDIO',
          `${imagenesPesadas} imagen(es) pueden optimizarse`,
          `Algunas imágenes pesan más de 100KB. El objetivo es que ninguna imagen supere 150KB para web.`,
          15,
          'Comprimir y convertir a WebP'
        );
        
        reportarSolucion(
          'SOLUCIÓN #3: Optimizar imágenes',
          [
            '1. Visita https://squoosh.app/',
            '2. Arrastra cada imagen pesada (>100KB)',
            '3. Elige formato WebP con calidad 75-85%',
            '4. Descarga y reemplaza la imagen original',
            '5. O instala vite-plugin-imagemin para automatizar:',
            '   npm install vite-plugin-imagemin @vite-plugin-imagemin/webp -D',
            `6. Total de imágenes: ${totalSizeKB.toFixed(2)} KB`
          ]
        );
      } else {
        console.log(`\n${colors.green}✓ Todas las imágenes están en tamaño óptimo${colors.reset}`);
      }
    } else {
      console.log(`${colors.yellow}⚠ No se encontraron imágenes en src/assets${colors.reset}`);
    }
  }
} catch (err) {
  console.log(`${colors.red}✗ Error al analizar imágenes: ${err.message}${colors.reset}`);
}

// 4. ANALIZAR package.json - Dependencias
console.log('\n📋 4. Analizando dependencias de npm...\n');

try {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    // Dependencias comunes que añaden mucho peso
    const pesadas = {
      'moment': { size: '200KB', alternativa: 'date-fns o Day.js' },
      'lodash': { size: '70KB', alternativa: 'lodash-es (con imports específicos)' },
      'axios': { size: '15KB', alternativa: 'fetch nativo del navegador' },
      'jquery': { size: '90KB', alternativa: 'Vanilla JS o React' }
    };
    
    const dependenciasPesadasEncontradas = Object.keys(dependencies).filter(dep => pesadas[dep]);
    
    if (dependenciasPesadasEncontradas.length > 0) {
      reportarProblema(
        'MEDIO',
        `${dependenciasPesadasEncontradas.length} dependencia(s) pesada(s) detectadas`,
        'Algunas librerías que usas tienen alternativas más ligeras.',
        10,
        'Evaluar alternativas más ligeras'
      );
      
      console.log(`\n   Dependencias pesadas:`);
      dependenciasPesadasEncontradas.forEach(dep => {
        const info = pesadas[dep];
        console.log(`   ${colors.yellow}- ${dep} (~${info.size}) → Alternativa: ${info.alternativa}${colors.reset}`);
      });
    } else {
      console.log(`${colors.green}✓ No se detectaron dependencias obviamente pesadas${colors.reset}`);
    }
    
    console.log(`\n   Total de dependencias: ${Object.keys(packageJson.dependencies || {}).length}`);
  }
} catch (err) {
  console.log(`${colors.red}✗ Error al leer package.json: ${err.message}${colors.reset}`);
}

// 5. VERIFICAR .htaccess
console.log('\n📋 5. Verificando configuración del servidor...\n');

try {
  const htaccessPath = path.join(process.cwd(), 'public', '.htaccess');
  if (fs.existsSync(htaccessPath)) {
    const htaccessContent = fs.readFileSync(htaccessPath, 'utf-8');
    
    const tieneGzip = htaccessContent.includes('mod_deflate') || htaccessContent.includes('gzip');
    const tieneCache = htaccessContent.includes('mod_expires') || htaccessContent.includes('Cache-Control');
    
    if (!tieneGzip) {
      reportarProblema(
        'MEDIO',
        'Compresión Gzip no configurada',
        'Los archivos se están enviando sin comprimir, lo que duplica el tamaño de transferencia.',
        15,
        'Agregar configuración de compresión en .htaccess'
      );
      
      reportarSolucion(
        'SOLUCIÓN #4: Activar compresión Gzip',
        [
          '1. Abre public/.htaccess',
          '2. Agrega al final:',
          '',
          '<IfModule mod_deflate.c>',
          '  AddOutputFilterByType DEFLATE text/html text/css text/javascript',
          '  AddOutputFilterByType DEFLATE application/javascript application/json',
          '  AddOutputFilterByType DEFLATE image/svg+xml',
          '</IfModule>',
          '',
          '3. Sube el archivo actualizado al servidor',
          '4. Esto reduce automáticamente 50-70% del tamaño de transferencia'
        ]
      );
    } else {
      console.log(`${colors.green}✓ Compresión Gzip configurada${colors.reset}`);
    }
    
    if (!tieneCache) {
      reportarProblema(
        'BAJO',
        'Caché del navegador no optimizado',
        'Los archivos estáticos no tienen configuración de caché, causando descargas repetidas.',
        8,
        'Configurar caché en .htaccess'
      );
    } else {
      console.log(`${colors.green}✓ Caché del navegador configurado${colors.reset}`);
    }
  } else {
    console.log(`${colors.yellow}⚠ No se encontró public/.htaccess${colors.reset}`);
    console.log('   Considera crear uno para optimizar compresión y caché.');
  }
} catch (err) {
  console.log(`${colors.red}✗ Error al leer .htaccess: ${err.message}${colors.reset}`);
}

// RESUMEN FINAL
console.log('\n' + '='.repeat(70));
console.log(`\n${colors.bold}📊 RESUMEN DEL DIAGNÓSTICO${colors.reset}\n`);

if (problemas.length === 0) {
  console.log(`${colors.green}${colors.bold}¡Excelente! No se detectaron problemas obvios.${colors.reset}`);
  console.log('Si aún tienes calificación F, el problema podría estar en:');
  console.log('- Archivos compilados muy grandes (verifica con npm run build)');
  console.log('- Scripts de terceros (analytics, chatbots, etc.)');
} else {
  console.log(`${colors.red}Se detectaron ${problemas.length} problema(s):${colors.reset}\n`);
  
  problemas.forEach((p, i) => {
    const color = p.severidad === 'ALTO' ? colors.red : p.severidad === 'MEDIO' ? colors.yellow : colors.green;
    console.log(`${i + 1}. ${color}[${p.severidad}]${colors.reset} ${p.titulo}`);
    console.log(`   Reducción potencial: ${p.impacto}%\n`);
  });
  
  console.log(`${colors.bold}Reducción total estimada: ${impactoEstimado}%${colors.reset}`);
  
  if (impactoEstimado >= 65) {
    console.log(`\n${colors.green}${colors.bold}Si implementas todas las soluciones, podrías pasar de F a B o mejor.${colors.reset}`);
  } else {
    console.log(`\n${colors.yellow}Estas optimizaciones te ayudarán a mejorar, pero revisa también:${colors.reset}`);
    console.log('- El tamaño del bundle final (npm run build, luego revisa dist/)');
    console.log('- Scripts de terceros que puedas eliminar');
  }
}

// PLAN DE ACCIÓN
if (recomendaciones.length > 0) {
  console.log('\n' + '='.repeat(70));
  console.log(`\n${colors.bold}🎯 PLAN DE ACCIÓN PASO A PASO${colors.reset}\n`);
  
  recomendaciones.forEach((rec, i) => {
    console.log(`\n${colors.blue}${colors.bold}${rec.titulo}${colors.reset}\n`);
    rec.pasos.forEach(paso => {
      console.log(`   ${paso}`);
    });
  });
}

// PRÓXIMOS PASOS
console.log('\n' + '='.repeat(70));
console.log(`\n${colors.bold}📝 PRÓXIMOS PASOS CRÍTICOS${colors.reset}\n`);
console.log('1. Implementa las soluciones en el orden de impacto (ALTO → MEDIO → BAJO)');
console.log('2. Después de cada cambio, ejecuta: npm run build');
console.log('3. Sube los archivos de la carpeta dist/ a tu servidor');
console.log('4. Limpia el caché del navegador (Ctrl+Shift+R)');
console.log('5. Vuelve a probar en https://www.websitecarbon.com/');
console.log('\n¡IMPORTANTE! Los cambios solo se aplican después de hacer build y deploy.\n');

console.log('='.repeat(70));
console.log(`\n${colors.green}Diagnóstico completado. ¡Buena suerte optimizando! 🌱${colors.reset}\n`);
