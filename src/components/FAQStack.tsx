import React from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQStackProps = {
  items: FAQItem[];
  className?: string;
  cardClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const FAQStack: React.FC<FAQStackProps> = ({
  items,
  className = '',
  cardClassName = '',
  questionClassName = 'text-xl font-semibold text-charcoal mb-3',
  answerClassName = 'text-jet leading-relaxed',
}) => {
  const stackRef = React.useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Animate on scroll
  React.useEffect(() => {
    const node = stackRef.current;
    if (!node) return;

    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const start = viewport * 0.75;
      const end = viewport * 0.1;
      const range = rect.height + start - end;
      const distance = start - rect.top;
      const progress = clamp(distance / range, 0, 1);
      const calculatedIndex = clamp(Math.round(progress * (items.length - 1)), 0, items.length - 1);
      setActiveIndex(calculatedIndex);
    };

    const handleScroll = () => {
      if (rafId === null) rafId = window.requestAnimationFrame(update);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [items.length]);

  // Optional: Clicking a card brings it to the top
  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    // Optionally scroll to the FAQ stack for context
    stackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div
      ref={stackRef}
      className={`faq-stack motion-ready ${className}`.trim()}
      data-motion="rise"
      data-stagger="true"
    >
      {items.map((faq, index) => {
        const position =
          index === activeIndex
            ? 'active'
            : index < activeIndex
            ? 'past'
            : 'upcoming';

        return (
          <article
            key={faq.question}
            className={`faq-card motion-child ${cardClassName}`.trim()}
            data-state={position}
            style={{ '--stack-index': index } as React.CSSProperties & { '--stack-index': number }}
            tabIndex={0}
            aria-current={index === activeIndex}
            onClick={() => handleCardClick(index)}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') handleCardClick(index);
            }}
          >
            <div className="faq-card__glow" aria-hidden="true" />
            <h3 className={questionClassName}>{faq.question}</h3>
            <p className={answerClassName}>{faq.answer}</p>
          </article>
        );
      })}
    </div>
  );
};

export default FAQStack;
