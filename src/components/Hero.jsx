import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profile from '../data/profile.js';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section id="hero" ref={ref} className="hero">
      <motion.div className="hero__bg" style={{ y, opacity }}>
        <div className="hero__gradient" />
        <div className="hero__grid" />
      </motion.div>

      <motion.div className="hero__content" style={{ scale }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero__badge"
        >
          <span className="hero__badge-dot" />
          {profile.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero__title"
        >
          {profile.hero.greeting}{' '}
          <span className="gradient-text">{profile.hero.highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero__subtitle"
        >
          {profile.hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero__desc"
        >
          {profile.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero__actions"
        >
          <a href={profile.hero.ctaPrimary.href} className="btn btn--primary">
            {profile.hero.ctaPrimary.text}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href={profile.hero.ctaSecondary.href} className="btn btn--ghost">
            {profile.hero.ctaSecondary.text}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero__scroll"
        >
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-ball" />
          </div>
          <span>{profile.hero.scrollLabel}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
