import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { supabase, hasSupabase } from '../lib/supabase.js';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Projects() {
  const { profile } = useLanguage();
  const [projects, setProjects] = useState(null);
  const [ref, isInView] = useScrollAnimation();

  useEffect(() => {
    async function loadProjects() {
      if (hasSupabase) {
        try {
          const { data } = await supabase
            .from('projects')
            .select('*')
            .order('featured', { ascending: false });
          if (data?.length) {
            setProjects(data.map(p => ({
              ...p,
              github: p.github_url,
              metrics: p.metrics ?? (p.stars != null ? [`${p.stars} ★`] : undefined),
            })));
            return;
          }
        } catch {
          // silent fallback
        }
      }
      setProjects(profile.projects.items);
    }
    loadProjects();
  }, []);

  const isLoading = projects === null;
  const { label, title, titleHighlight } = profile.projects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">{label}</span>
          <h2 className="section-title">
            {title} <span className="gradient-text">{titleHighlight}</span>
          </h2>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {isLoading ? (
            Array.from({ length: profile.projects.items.length }).map((_, i) => (
              <div key={i} className="project-card project-card--skeleton">
                <div className="project-card__visual" />
                <div className="project-card__body">
                  <div className="project-card__skeleton-line project-card__skeleton-line--title" />
                  <div className="project-card__skeleton-line project-card__skeleton-line--text" />
                  <div className="project-card__skeleton-line project-card__skeleton-line--text" />
                  <div className="project-card__skeleton-line project-card__skeleton-line--short" />
                </div>
              </div>
            ))
          ) : projects.length === 0 ? (
            null
          ) : (
            projects.map((project, idx) => (
              <motion.div
                key={project.id ?? idx}
                variants={cardVariants}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              >
                <div className="project-card__visual">
                  {project.featured && (
                    <span className="project-card__featured-badge">⭐ Destacado</span>
                  )}
                </div>
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="project-card__metrics">
                      {project.metrics.map((metric) => (
                        <span key={metric} className="project-card__metric">{metric}</span>
                      ))}
                    </div>
                  )}
                  <div className="project-card__footer">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--small"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
