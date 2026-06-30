import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import profile from '../data/profile';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const skillVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.05, ease: 'easeOut' },
  }),
};

export default function Skills() {
  const [ref, isInView] = useScrollAnimation();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="skills__header"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="section-label"
          >
            {profile.skills.label}
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
            }}
            className="section-title"
          >
            {profile.skills.title}
          </motion.h2>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {profile.skills.categories.map((cat) => (
            <motion.div key={cat.name} variants={cardVariants} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon">{cat.icon}</span>
                <h3 className="skill-card__title">{cat.name}</h3>
              </div>
              <div className="skill-card__list">
                {cat.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    custom={i}
                    variants={skillVariants}
                    className="skill-card__tag"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
