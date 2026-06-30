import { createContext, useContext, useState, useEffect } from 'react';
import es from '../data/lang/es';
import en from '../data/lang/en';

const langs = { es, en };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'es'; }
    catch { return 'es'; }
  });

  useEffect(() => {
    try { localStorage.setItem('lang', lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const profile = langs[lang] || langs.es;
  const toggleLang = () => setLang(l => (l === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, profile, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be inside <LanguageProvider>');
  return ctx;
}
