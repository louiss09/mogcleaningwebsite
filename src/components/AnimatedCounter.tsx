import React from 'react';

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 900,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const spanRef = React.useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = React.useState(() => `${prefix}0${suffix}`);
  const hasAnimatedRef = React.useRef(false);

  React.useEffect(() => {
    const node = spanRef.current;
    if (!node || hasAnimatedRef.current) {
      return;
    }

    let frameId: number | null = null;
    const startValue = 0;

    const animate = () => {
      const start = performance.now();

      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const currentValue = Math.round(startValue + eased * (value - startValue));
        setDisplay(`${prefix}${currentValue.toLocaleString()}${suffix}`);

        if (progress < 1) {
          frameId = window.requestAnimationFrame(step);
        }
      };

      frameId = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animate();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [duration, prefix, suffix, value]);

  return (
    <span ref={spanRef} className={className} data-counter>
      {display}
    </span>
  );
};

export default AnimatedCounter;
