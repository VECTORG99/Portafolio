# Agent Guidelines — Portafolio

## Commits

- **No añadir el co-author de Devin** (`Co-Authored-By: Devin <...>`) ni la línea `Generated with [Devin](https://devin.ai)` en los mensajes de commit. Los commits deben llevar únicamente el mensaje descriptivo del cambio.
- Mantener el estilo de commits existente: `type: descripción breve` (español o inglés según el contexto del cambio).

## Ramas y PRs

- `master` está protegida: todo cambio debe entrar vía Pull Request desde una rama `feat/*`, `fix/*` o similar.
- Antes de abrir un PR, verificar que `npm run build` pase.

## Stack

- React 19 + Vite, Supabase (tabla `projects` con columnas `title, description, tags, github, stars, featured`).
- i18n con fallbacks en `src/data/lang/{es,en}.js`. Cualquier nuevo proyecto debe añadirse en `supabase/seed.sql` y en ambos archivos de idioma.
