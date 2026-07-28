-- Seed projects from profile data
insert into public.projects (title, description, tags, github, stars, featured) values
(
  'Artemisa',
  'Generador stateless y determinista de bundles de configuración para agentes de desarrollo compatibles con 6+ plataformas (Kiro, Cursor, Claude Code, etc.). Un árbol de decisiones explicable de 32 preguntas produce artefactos reproducibles (AGENTS.md, .kiro/, .cursorrules, mcp.json, skills) con hashes SHA-256. Construido para el Hackathon Kiro x Código Facilito 2026 con Kiro como IDE agentic. Backend en DigitalOcean App Platform, frontend en Netlify.',
  array['TypeScript', 'Next.js', 'Express', 'Node.js', 'Kiro', 'MCP', 'DigitalOcean', 'Netlify', 'AI Agents'],
  'https://github.com/VECTORG99/Artemisa',
  0,
  true
),
(
  'HomeDir',
  'Plataforma Quarkus para comunidades DevRel y Open Source. Más de 28 PRs mergeados en producción enfocados en seguridad, accesibilidad, internacionalización y toolchain.',
  array['Java', 'Quarkus', 'Docker', 'GitHub Actions', 'CI/CD', 'PostgreSQL', 'Linux'],
  'https://github.com/os-santiago/homedir',
  28,
  true
),
(
  'DataGestor — London Crime',
  'Plataforma end-to-end de inteligencia territorial. Procesa ~3 millones de registros de criminalidad de Londres mediante pipeline ETL de 10 etapas, modelos ML scikit-learn, API FastAPI y dashboard React con Chart.js.',
  array['Python', 'BigQuery', 'Supabase', 'FastAPI', 'React', 'Docker'],
  'https://github.com/VECTORG99/DataGestor',
  3,
  true
),
(
  'Yap — AI Agent Local',
  'Asistente de IA local para entornos Linux educativos con recursos limitados (CPU-only). Clasificación de intención vía LLM, apertura controlada de apps, webfetch por whitelist, y 3 ramas de configuración para distintos presupuestos de RAM.',
  array['Python', 'Llama 3.2', 'llama.cpp', 'Bash', 'Debian'],
  'https://github.com/VECTORG99/Yap',
  2,
  true
),
(
  'Proyecto Alsort',
  'Gestor inteligente de playlists de Spotify. Extrae canciones favoritas, las enriquece con características de audio y géneros, y permite filtrar con lógica AND/OR (11 tipos de filtro) y ordenar por múltiples criterios para crear playlists directamente en Spotify.',
  array['Python', 'FastAPI', 'React', 'TypeScript', 'Docker', 'SQLite', 'CI/CD'],
  'https://github.com/VECTORG99/Proyecto_Alsort',
  1,
  false
),
(
  'omarchy-frutiger-aero',
  'Tema Frutiger Aero completo para Omarchy/Hyprland. Variantes light/dark, 6 widgets EWW, pantalla de login SDDM glassmorphism, 14 wallpapers 4K e instalador automatizado. Destacado en Awesome Omarchy.',
  array['SCSS', 'Bash', 'EWW', 'Hyprland', 'Lua', 'Linux'],
  'https://github.com/VECTORG99/omarchy-frutiger-aero',
  7,
  false
);
