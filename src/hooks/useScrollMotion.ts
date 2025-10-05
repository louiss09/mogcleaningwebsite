import { useEffect } from 'react';

type MotionKind = 'fade' | 'rise' | 'slide-left' | 'slide-right' | 'zoom';

const autoMotionTargets: Array<{ selector: string; motion?: MotionKind }> = [
  { selector: '.hero-minimal__content', motion: 'rise' },
  { selector: '.hero-minimal__actions', motion: 'fade' },
  { selector: '.section-heading', motion: 'rise' },
  { selector: '.feature-grid-card', motion: 'fade' },
  { selector: '.hero-highlight-card', motion: 'fade' },
  { selector: '.stat-card', motion: 'zoom' },
  { selector: '.quote-section__copy', motion: 'slide-right' },
  { selector: '.quote-section__form', motion: 'slide-left' },
  { selector: '.faq-card', motion: 'rise' },
];

const autoStaggerTargets = ['.hero-highlight-band__grid', '.stat-grid', '.quote-section__list', '.faq-stack', '.testimonial-carousel__slides'];

const useScrollMotion = (key?: string) => {
  useEffect(() => {
    const ensureStaggerGroup = (group: HTMLElement | null) => {
      if (!group) {
        return;
      }

      group.setAttribute('data-motion-stagger', 'true');
      group.querySelectorAll<HTMLElement>(':scope > *').forEach((child) => {
        child.classList.add('motion-child');
        child.classList.remove('motion-child-visible');
      });
    };

    const prepareMotionTargets = () => {
      autoMotionTargets.forEach(({ selector, motion }) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
          element.classList.add('motion-ready');
          if (motion && !element.dataset.motion) {
            element.dataset.motion = motion;
          }
          element.classList.remove('motion-visible');

          if (selector === '.feature-grid-card') {
            ensureStaggerGroup(element.parentElement);
          }
        });
      });

      autoStaggerTargets.forEach((selector) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((group) => {
          ensureStaggerGroup(group);
        });
      });
    };

    prepareMotionTargets();

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        
        if (entry.isIntersecting) {
          // Handle motion-ready elements
          if (element.classList.contains('motion-ready')) {
            element.classList.add('motion-visible');
          }
          
          // Handle staggered motion children
          if (element.hasAttribute('data-motion-stagger')) {
            const children = element.querySelectorAll('.motion-child');
            children.forEach((child, index) => {
              const childElement = child as HTMLElement;
              childElement.style.setProperty('--motion-child-index', index.toString());
              setTimeout(() => {
                childElement.classList.add('motion-child-visible');
              }, index * 110);
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const observeMotionElements = () => {
      const motionElements = document.querySelectorAll('.motion-ready, [data-motion-stagger]');
      motionElements.forEach((element) => {
        observer.observe(element);
      });

      const motionReadyElements = document.querySelectorAll('.motion-ready');
      motionReadyElements.forEach((element, index) => {
        const delay = index * 90;
        (element as HTMLElement).style.setProperty('--motion-delay', `${delay}ms`);
      });
    };

    observeMotionElements();

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [key]);
};

export default useScrollMotion;