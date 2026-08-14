import { Component } from 'react';
import es from '../data/lang/es';
import en from '../data/lang/en';

const langs = { es, en };

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      let lang = 'es';
      try { lang = localStorage.getItem('lang') || 'es'; } catch {}
      const t = (langs[lang] || langs.es).errorBoundary;
      return (
        <div className="error-fallback">
          <h1>{t.title}</h1>
          <p>{t.message}</p>
          <button onClick={() => window.location.reload()} className="btn btn--primary">
            {t.button}
          </button>
          <pre>{this.state.error?.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
