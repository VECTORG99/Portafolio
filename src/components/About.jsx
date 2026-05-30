import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const containerRef = useRef(null);
  const [ref, isInView] = useScrollAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="about">
      <div className="container">
        <div className="about__grid" ref={ref}>
          <motion.div
            style={{ x }}
            className="about__content"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Sobre mí
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
            >
              Transformando ideas en{' '}
              <span className="gradient-text">experiencias digitales</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Soy estudiante de Ingeniería en Informática con mención en Inteligencia
              Artificial en DUOC UC. Me apasiona construir software que resuelva
              problemas reales, combinando desarrollo fullstack con visión de IA.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Actualmente certificado como Desarrollador Fullstack y miembro activo
              de la comunidad open-source Santiago. Busco constantemente aprender
              nuevas tecnologías y contribuir a proyectos que marquen la diferencia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="about__stats"
            >
              <div className="about__stat">
                <span className="about__stat-number gradient-text">2+</span>
                <span className="about__stat-label">Años estudiando</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number gradient-text">10+</span>
                <span className="about__stat-label">Proyectos</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number gradient-text">3</span>
                <span className="about__stat-label">Certificaciones</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about__visual"
            style={{ y: imageParallax }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about__image-wrapper"
            >
              <div className="about__image-placeholder">
                <span>VG</span>
              </div>
              <div className="about__image-glow" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
