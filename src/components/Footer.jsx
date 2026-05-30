export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__logo">
            {'<'}<span className="gradient-text">V</span>{'/>'}
          </span>
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Diego Hernandez. Todos los derechos reservados.
          </p>
          <p className="footer__tagline">
            Construido con React + Vite ✦ Diseño interactivo
          </p>
        </div>
      </div>
    </footer>
  );
}
