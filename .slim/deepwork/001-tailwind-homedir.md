# Deepwork Session: Fix HomeDir link + Remove TailwindCSS from skills

## Current State
- HomeDir GitHub button in Projects shows user's personal GitHub (`VECTORG99`) instead of `os-santiago/homedir`
- The local data files (`es.js`/`en.js`) already have the correct URL, but **Supabase overrides** them
- `supabase/seed.sql` still has the old `VECTORG99` URL for HomeDir
- TailwindCSS listed as a skill tag in `src/data/lang/es.js` and `en.js` under Frontend category

## Root Cause
Projects.jsx fetches from Supabase first (line 26-42). Supabase row for HomeDir has `github = 'https://github.com/VECTORG99'`. The seed.sql is also stale.

## Changes Made

### Phase 1 — Fix HomeDir GitHub link
- Updated `supabase/seed.sql`: column `github` → `github_url` (mismatch with migration schema), URL `VECTORG99` → `os-santiago/homedir`
- Fixed `src/components/Projects.jsx`: `p.github` → `p.github_url` (DB column is `github_url`, not `github` — this was a **critical bug** caught by oracle review where the GitHub button would never render for Supabase data)
- Removed dead `demo: p.demo_url` mapping (component doesn't use `project.demo`)
- Cleaned up unused `error` variable, `data && data.length > 0` → `data?.length`, `||` → `??`

### Phase 2 — Remove TailwindCSS from skills
- Removed `"TailwindCSS"` from Frontend tags in both `src/data/lang/es.js` and `src/data/lang/en.js`

### Phase 3 — Validate
- ✅ TailwindCSS: 0 occurrences in both language files
- ✅ seed.sql has correct `os-santiago/homedir` URL
- ✅ `p.github_url` used in Projects.jsx
- Pending: Run UPDATE SQL on Supabase Dashboard to fix existing production row

## Remaining
- User must run UPDATE SQL in Supabase Dashboard → SQL Editor:
  ```sql
  UPDATE public.projects SET github_url = 'https://github.com/os-santiago/homedir' WHERE title = 'HomeDir';
  ```
- Then refresh the site
