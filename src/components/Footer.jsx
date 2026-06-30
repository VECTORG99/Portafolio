import profile from '../data/profile';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__logo">
            {'<'}<span className="gradient-text">{profile.dev.firstName.charAt(0)}</span>{'/>'}
          </span>
          <p className="footer__copy">
            {profile.site.copyright}
          </p>
          <p className="footer__tagline">
            {profile.site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
