-- Seed projects from profile data
insert into public.projects (title, description, tags, github_url, stars, featured) values
(
  'Proyecto Alsort',
  'Gestor inteligente de playlists de Spotify. Extrae canciones favoritas, las enriquece con características de audio y géneros, y permite filtrar con lógica AND/OR (11 tipos de filtro) y ordenar por múltiples criterios para crear playlists directamente en Spotify.',
  array['Python', 'FastAPI', 'React', 'TypeScript', 'Docker', 'SQLite', 'CI/CD'],
  'https://github.com/VECTORG99/Proyecto_Alsort',
  1,
  true
),
(
  'DataGestor — London Crime',
  'Plataforma end-to-end de inteligencia territorial. Procesa ~3 millones de registros de criminalidad de Londres mediante pipeline ETL de 10 etapas, modelos ML scikit-learn, API FastAPI y dashboard React con Chart.js.',
  array['Python', 'BigQuery', 'Supabase', 'FastAPI', 'React', 'Docker'],
  'https://github.com/VECTORG99/DataGestor',
  3,
  false
),
(
  'Yap — AI Agent Local',
  'Asistente de IA local para entornos Linux educativos con recursos limitados (CPU-only). Clasificación de intención vía LLM, apertura controlada de apps, webfetch por whitelist, y 3 ramas de configuración para distintos presupuestos de RAM.',
  array['Python', 'Llama 3.2', 'llama.cpp', 'Bash', 'Debian'],
  'https://github.com/VECTORG99/Yap',
  2,
  false
),
(
  'omarchy-frutiger-aero',
  'Tema Frutiger Aero completo para Omarchy/Hyprland. Variantes light/dark, 6 widgets EWW, pantalla de login SDDM glassmorphism, 14 wallpapers 4K e instalador automatizado. Destacado en Awesome Omarchy.',
  array['SCSS', 'Bash', 'EWW', 'Hyprland', 'Lua', 'Linux'],
  'https://github.com/VECTORG99/omarchy-frutiger-aero',
  7,
  true
);
