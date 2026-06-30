# Deepwork — Portafolio Apple-Scroll

Started: 2026-06-20
Status: ALL PHASES COMPLETE — awaiting final review

## Progress

| Phase | Status | Result |
|-------|--------|--------|
| 0 — Data layer | ✅ Complete | `src/data/profile.js`, CV moved to `public/cv/`, `.env` in gitignore |
| 1 — Supabase local | ✅ Complete | Migration + seed SQL, `src/lib/supabase.js` with env-var guard, `.env.example` |
| 2 — Navbar | ✅ Complete | Data-driven links, logo from profile |
| 3 — Hero | ✅ Complete | All text from profile.hero, parallax preserved |
| 4 — About | ✅ Complete | Stats from profile, simple GitHub/LinkedIn links (no preview cards) |
| 5 — Experience | ✅ Complete | Timeline items from profile.experience.items, 4 entries |
| 6 — Projects | ✅ Complete | Supabase fetch → fallback to profile, try/catch error handling, skeleton loading |
| 7 — Skills + Footer | ✅ Complete | Skills categories from profile, footer from profile.site |
| 8 — Contact + CTA | ✅ Complete | Form with 5 states (idle/sending/success/error/no-supabase), social lookup map, CV download |
| 9 — Integration | ✅ Complete | Build passes (234ms, 473 modules), dev server verified |

## Key decisions
- Zero hardcoded strings in any component. All content from `src/data/profile.js`.
- Supabase null-guard: `hasSupabase = !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY)`
- CV served from `public/cv/cv.html` (Vercel static file serving)
- Oracle feedback applied: no tag coloring, no preview cards, no useScrollDirection, proper env var guard, .env in gitignore, form states

## Build output
```
dist/index.html                   0.90 kB
dist/assets/index-D0JW_JU3.css   16.53 kB
dist/assets/index-CIaPKAhb.js   351.93 kB
```
