import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ theme, toggleTheme }) {
  const { profile, toggleLang } = useLanguage();
  const navLinks = [
    { href: '#about', label: profile.about.label },
    { href: '#skills', label: profile.skills.label },
    { href: '#experience', label: profile.experience.label },
    { href: '#projects', label: profile.projects.label },
    { href: '#contact', label: profile.contact.label },
    { href: profile.contact.cvUrl, label: 'CV' },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          {'<'}
          <span className="gradient-text">{profile.dev.firstName.charAt(0)}</span>
          {'/>'}
        </a>

        <div className="navbar__desktop">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="navbar__lang-btn"
            aria-label={`Switch to ${profile.site.langSwitch}`}
          >
            {profile.site.langSwitch}
          </button>
          <button
            onClick={toggleTheme}
            className="navbar__theme-btn"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="navbar__mobile"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button onClick={toggleLang} className="navbar__lang-btn mobile">
              {profile.site.langSwitch}
            </button>
            <button onClick={toggleTheme} className="navbar__theme-btn mobile">
              {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
