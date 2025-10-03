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

const FAQStack: React.FC<FAQStackProps> = ({
  items = [],
  className = '',
  cardClassName = '',
  questionClassName = 'text-xl font-semibold text-charcoal',
  answerClassName = 'text-jet leading-relaxed',
}) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(current => (current === index ? null : index));
  };

  if (!items || items.length === 0) {
    return (
      <div className={`faq-stack ${className}`}>
        <div className="faq-card">
          <h3 className={questionClassName}>No FAQs available</h3>
          <p className={answerClassName}>Please check back soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`faq-stack motion-ready ${className}`.trim()} data-motion="rise" data-stagger="true">
      <div className="faq-accordion" role="list">
        {items.map((faq, index) => {
          const isOpen = openIndex === index;
          const triggerId = `faq-trigger-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <article
              key={faq.question}
              className={`faq-card motion-child ${cardClassName}`.trim()}
              data-state={isOpen ? 'open' : 'closed'}
              role="listitem"
            >
              <div className="faq-card__glow" aria-hidden="true" />
              <button
                type="button"
                className="faq-card__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                id={triggerId}
                onClick={() => toggleItem(index)}
              >
                <span className={`faq-card__question ${questionClassName}`.trim()}>{faq.question}</span>
                <span className="faq-card__icon" aria-hidden="true">
                  <span className="faq-card__icon-bar" />
                  <span className="faq-card__icon-bar" />
                </span>
              </button>
              <div
                id={panelId}
                className="faq-card__content"
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isOpen}
              >
                <p className={`faq-card__answer ${answerClassName}`.trim()}>{faq.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default FAQStack;