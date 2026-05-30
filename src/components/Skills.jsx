import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'TailwindCSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Express', 'REST APIs', 'SQL/NoSQL'],
  },
  {
    title: 'IA & Datos',
    skills: ['Machine Learning', 'Python ML', 'Data Analysis', 'LLMs', 'Prompt Engineering'],
  },
  {
    title: 'Herramientas',
    skills: ['Git/GitHub', 'Docker', 'VS Code', 'Linux', 'Figma'],
  },
];

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
            Habilidades
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
            }}
            className="section-title"
          >
            Stack técnico
          </motion.h2>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((cat, idx) => (
            <motion.div key={cat.title} variants={cardVariants} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon">
                  {['{ }', '</>', '⚙', '🛠'][idx]}
                </span>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>
              <div className="skill-card__list">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={skillVariants}
                    className="skill-card__tag"
                  >
                    {skill}
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
