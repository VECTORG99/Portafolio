# Portafolio — Diego Hernandez

Portafolio web personal. React + Vite, animaciones scroll, modo oscuro/claro, datos desde `src/data/profile.js` (cero strings hardcodeados en componentes).

## Stack

- React 19 + Vite
- Framer Motion (animaciones)
- Supabase (formulario de contacto)
- CSS vanilla (variables, flexbox, grid)

## Arquitectura

```
src/data/profile.js    ← fuente única de datos (9 secciones)
src/lib/supabase.js    ← cliente Supabase con graceful degradation
src/components/        ← componentes puramente data-driven
public/cv/cv.html      ← CV estático (Ctrl+P → PDF)
```

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
| **Vercel** | `portafolio.vercel.app` | Importar repo, añadir env vars en dashboard |
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
| CI/CD | GitHub Actions |
| **Total** | **$0** |

## Pendiente

Nada — todas las funcionalidades planificadas están implementadas.

| Feature | Estado |
|---------|--------|
| Foto/sección visual en About | ✅ Placeholder con inicial y glow |
| Soporte multilenguaje ES/EN | ✅ Context + toggle en navbar |
| SEO y Open Graph | ✅ OG/Twitter tags + robots + sitemap |
| Deploy automático con GitHub Actions | ✅ Workflow a Vercel |
| Error boundary | ✅ |
| Cleanup de assets muertos | ✅ |
