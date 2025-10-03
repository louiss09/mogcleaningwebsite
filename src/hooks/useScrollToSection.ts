import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SCROLL_OPTIONS: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' };

const highlightSection = (element: HTMLElement) => {
  element.classList.add('scroll-highlight');
  window.setTimeout(() => {
    element.classList.remove('scroll-highlight');
  }, 1200);
};

export const useScrollToSection = (sectionId: string) => {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (event?: React.MouseEvent<HTMLAnchorElement>) => {
      event?.preventDefault();

      if (location.pathname !== '/') {
        navigate(`/#${sectionId}`);
        return;
      }

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView(SCROLL_OPTIONS);
        highlightSection(section);
        if (window.location.hash !== `#${sectionId}`) {
          window.history.replaceState(null, '', `/#${sectionId}`);
        }
      }
    },
    [location.pathname, navigate, sectionId]
  );
};
