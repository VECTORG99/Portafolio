import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const typeEmoji = {
  education: '🎓',
  community: '🤝',
  creator: '🎨',
  certification: '📜',
};

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Experience() {
  const { profile } = useLanguage();
  const containerRef = useRef(null);
  const [ref, isInView] = useScrollAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="experience" ref={containerRef} className="experience">
      <div className="container">
        <motion.div
          ref={ref}
          className="experience__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{profile.experience.label}</span>
          <h2 className="section-title">
            {profile.experience.title} <span className="gradient-text">{profile.experience.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="experience__timeline">
          <motion.div
            className="experience__line"
            style={{ height: lineHeight }}
          />

          <motion.div
            className="experience__items"
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {profile.experience.items.map((exp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="exp-card">
                <div className="exp-card__dot" />
                <div className="exp-card__content">
                  <span className="exp-card__period">{exp.period}</span>
                  <h3 className="exp-card__title">{exp.title}</h3>
                  <span className="exp-card__org">{exp.org}</span>
                  <p className="exp-card__desc">{exp.description}</p>
                  <span className={`exp-card__badge exp-card__badge--${exp.type}`}>
                    {typeEmoji[exp.type]} {exp.typeLabel}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
