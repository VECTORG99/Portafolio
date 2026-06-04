# Portafolio — Diego Hernandez

Portafolio web personal desarrollado con React + Vite. Diseño interactivo con animaciones al hacer scroll, modo oscuro/claro y responsive.

## Stack

- React 19 + Vite
- Framer Motion (animaciones)
- CSS vanilla (variables, flexbox, grid)

## Cómo usar

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa del build
npm run preview
```

## Despliegue (gratuito)

### Opción A — Vercel (recomendada)

1. Ve a [vercel.com](https://vercel.com) y crea cuenta con GitHub
2. Haz clic en **Add New → Project**
3. Importa el repo `VECTORG99/Portafolio`
4. Vercel detecta Vite automáticamente → **Deploy**
5. Tu sitio queda en: `portafolio.vercel.app`

### Opción B — GitHub Pages

1. En `vite.config.js`, agrega: `base: '/Portafolio/'`
2. Ejecuta `npm run build`
3. Sube la carpeta `dist/` al branch `gh-pages`
4. Actívalo en repo → Settings → Pages → Source: `gh-pages`
5. Tu sitio queda en: `vectorg99.github.io/Portafolio`

### Opción C — Netlify

1. Ve a [netlify.com](https://netlify.com) y crea cuenta con GitHub
2. **Add new site → Import from GitHub**
3. Selecciona el repo y haz clic en **Deploy**
4. Tu sitio queda en: `portafolio.netlify.app`

## Dominio personalizado (opcional)

Compras un dominio `.cl` en:

- **NIC Chile** (~$10/año)
- **Cloudflare** (~$9-10/año, incluye privacidad)
- **Namecheap** (~$9-12/año)

### Si no puedes pagar el dominio un año

**No pasa nada.** Las opciones gratuitas funcionan perfectamente:

- `portafolio.vercel.app`
- `vectorg99.github.io/Portafolio`
- `portafolio.netlify.app`

Son URLs profesionales, con HTTPS incluido. Puedes usarlas siempre sin pagar nada. Cuando quieras, agregas el dominio personalizado más adelante sin cambiar el código.

## Costos reales

| Concepto | Alternativa gratis | Alternativa paga |
|----------|------------------|------------------|
| Hosting | Vercel / Netlify / GitHub Pages ($0) | — |
| Formulario | Formspree / EmailJS (200 msgs/mes) | — |
| Dominio | `*.vercel.app` o `*.github.io` ($0) | `.cl` (~$10/año) |
| Repositorio | GitHub ($0) | — |
| CI/CD | GitHub Actions ($0) | — |
| **Total** | **$0** | **~$10/año** |

## Issues pendientes

Los siguientes issues están abiertos en GitHub para mejorar el portafolio:

1. Reemplazar placeholder con foto real
2. Agregar proyectos reales
3. Formulario de contacto funcional
4. Botón para descargar CV en PDF
5. Soporte multilenguaje (ES/EN)
6. Optimizar imágenes y rendimiento
7. SEO y Open Graph
8. Deploy automático con GitHub Actions
