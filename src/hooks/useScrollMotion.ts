import { useEffect } from 'react';

const useScrollMotion = () => {
  useEffect(() => {
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

    // Observe all motion-ready elements
    const motionElements = document.querySelectorAll('.motion-ready, [data-motion-stagger]');
    motionElements.forEach((element) => {
      observer.observe(element);
    });

    // Set up delay timing for motion-ready elements
    const motionReadyElements = document.querySelectorAll('.motion-ready');
    motionReadyElements.forEach((element, index) => {
      const delay = index * 100; // 100ms delay between elements
      (element as HTMLElement).style.setProperty('--motion-delay', `${delay}ms`);
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollMotion;