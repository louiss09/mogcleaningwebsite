import React from 'react';
import { ChevronDown } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQ[];
  className?: string;
  defaultOpenIndex?: number | null;
  cardClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  className = '',
  defaultOpenIndex = 0,
  cardClassName = '',
  questionClassName = '',
  answerClassName = '',
}) => {
  const contentRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = React.useState<number[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    faqs.length > 0 && defaultOpenIndex !== null && defaultOpenIndex >= 0 && defaultOpenIndex < faqs.length
      ? defaultOpenIndex
      : null,
  );

  React.useEffect(() => {
    const updateHeights = () => {
      contentRefs.current = contentRefs.current.slice(0, faqs.length);
      setHeights(faqs.map((_, index) => contentRefs.current[index]?.scrollHeight ?? 0));
    };

    updateHeights();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateHeights);
      return () => window.removeEventListener('resize', updateHeights);
    }

    return undefined;
  }, [faqs]);

  React.useEffect(() => {
    if (faqs.length === 0) {
      setActiveIndex(null);
      return;
    }

    if (activeIndex !== null && activeIndex < faqs.length) {
      return;
    }

    if (defaultOpenIndex !== null && defaultOpenIndex >= 0 && defaultOpenIndex < faqs.length) {
      setActiveIndex(defaultOpenIndex);
    } else {
      setActiveIndex(null);
    }
  }, [faqs, activeIndex, defaultOpenIndex]);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  if (!faqs || faqs.length === 0) {
    return (
      <div className={`faq-accordion ${className}`.trim()}>
        <div className="faq-accordion-card" data-open="false">
          <button type="button" className="faq-accordion-trigger" disabled>
            <span className="faq-accordion-question">FAQs are on their way.</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`faq-accordion ${className}`.trim()}>
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        const measuredHeight = contentRefs.current[index]?.scrollHeight ?? 0;
        const maxHeight = isOpen ? heights[index] ?? measuredHeight : 0;

        return (
          <article
            key={faq.question}
            className={`faq-accordion-card ${cardClassName}`.trim()}
            data-open={isOpen}
          >
            <button
              type="button"
              className="faq-accordion-trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
            >
              <span className={`faq-accordion-question ${questionClassName}`.trim()}>{faq.question}</span>
              <span className="faq-accordion-icon" aria-hidden="true">
                <ChevronDown size={22} strokeWidth={2.4} />
              </span>
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              className="faq-accordion-answer"
              style={{ maxHeight: `${maxHeight}px` }}
            >
              <div
                className="faq-accordion-answer-inner"
                ref={(node) => {
                  contentRefs.current[index] = node;
                }}
              >
                <p className={answerClassName}>{faq.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
