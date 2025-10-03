import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const getScrollBehavior = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'smooth' as ScrollBehavior;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
};

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const behavior = getScrollBehavior();

    if (hash) {
      requestAnimationFrame(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior, block: 'start' });
          el.classList.add('scroll-highlight');
          window.setTimeout(() => {
            el.classList.remove('scroll-highlight');
          }, 1200);
        } else {
          window.scrollTo({ top: 0, behavior });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
