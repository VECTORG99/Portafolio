# Portafolio — Diego Hernandez

[![Vercel](https://img.shields.io/badge/deploy-vercel-000?logo=vercel)](https://portafolio-ten-liard-50.vercel.app)

Portafolio web personal construido con **React 19 + Vite**. Animaciones scroll con Framer Motion, modo oscuro/claro, i18n ES/EN, datos desde Supabase + `src/data/` con fallback. Sin dependencias pesadas ni frameworks CSS.

## Stack

| Tecnología | Para qué se usa | Se nota en |
|-----------|----------------|------------|
| **React 19** | Componentes reutilizables (Hero, About, Projects, Contact, Navbar), estado global con Context (idioma, tema), ciclo de vida (useEffect para fetch de proyectos) | `src/components/*.jsx` — JSX, hooks, props |
| **Vite** | Servidor de desarrollo rápido (HMR), build con tree-shaking, plugin de React | `package.json` → scripts `dev`/`build`, `vite.config.js` |
| **Framer Motion** | Animaciones de entrada (scroll reveal), hover, transiciones suaves | Componentes con `motion.div`, `initial`/`whileInView` |
| **Supabase** | Backend serverless: formulario de contacto (insert), proyectos destacados (fetch con fallback local), sin necesidad de servidor propio | `src/lib/supabase.js` → cliente con degrade graceful |
| **CSS vanilla** | Layouts (flexbox/grid), modo oscuro/claro con variables CSS, responsivo sin frameworks | `src/index.css`, variables `--color-*`, media queries |

## Arquitectura

```
src/data/              ← textos, i18n ES/EN, perfil
src/lib/supabase.js    ← cliente Supabase con fetch de proyectos + graceful degradation
src/components/        ← componentes data-driven
public/cv/             ← CV en PDF (ES + EN)
```

Los proyectos destacados se cargan desde Supabase. Si no hay conexión, se usa `src/data/lang/es.js` / `en.js` como fallback.

El formulario funciona con Supabase. Si no hay `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`, se degrada a un mensaje informativo — no revienta.

## Setup local

```bash
cp .env.example .env   # agrega tus keys de Supabase (opcional)
npm install
npm run dev            # http://localhost:5173
npm run build          # dist/ listo para deploy
```

## Deploy (gratuito)

| Plataforma | URL | Setup |
|-----------|-----|-------|
| **Vercel** | `portafolio-ten-liard-50.vercel.app` | Importar repo, añadir env vars en dashboard |
| GitHub Pages | `vectorg99.github.io/Portafolio` | `base: '/Portafolio/'` en vite.config.js |
| Netlify | `portafolio.netlify.app` | Importar repo |

**Env vars necesarias** (opcionales, sin ellas el formulario se desactiva):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Costos

| Concepto | Gratis |
|----------|--------|
| Hosting | Vercel / Netlify / GitHub Pages |
| Formulario | Supabase (50k filas gratis) |
| Repositorio | GitHub |
| CI/CD | Vercel webhook (push a master → deploy automático) |
| **Total** | **$0** |

## Pendiente

Nada — todas las funcionalidades planificadas están implementadas.

| Feature | Estado |
|---------|--------|
| Foto personal en About | ✅ Foto real con glow |
| Badge "Disponible para trabajar" | ✅ Hero + About |
| Soporte multilenguaje ES/EN | ✅ Context + toggle en navbar |
| Proyectos desde Supabase | ✅ Fetch con fallback local |
| Scroll indicator animado | ✅ |
| SEO y Open Graph | ✅ OG/Twitter tags + robots + sitemap |
| Deploy automático | ✅ Push a master → Vercel webhook |
| Error boundary | ✅ |
