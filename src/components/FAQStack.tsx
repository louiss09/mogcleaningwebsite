import React, { useState } from 'react';

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
  items,
  className = '',
  cardClassName = '',
  questionClassName = 'text-xl font-semibold text-charcoal',
  answerClassName = 'text-jet leading-relaxed',
}) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(items.length > 0 ? 0 : null);
  const instanceId = React.useId();

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className={`faq-stack ${className}`.trim()}>
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const questionId = `${instanceId}-faq-${index}-question`;
        const answerId = `${instanceId}-faq-${index}-answer`;

        return (
          <article
            key={faq.question}
            className={`faq-card ${isOpen ? 'is-open' : ''} ${cardClassName}`.trim()}
          >
            <span className="faq-card__accent" aria-hidden="true" />
            <button
              type="button"
              id={questionId}
              className="faq-card__button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => handleToggle(index)}
            >
              <span className="faq-card__button-inner">
                <span className="faq-card__label">Question {index + 1}</span>
                <span className={`faq-card__question ${questionClassName}`.trim()}>
                  {faq.question}
                </span>
              </span>
              <span className={`faq-card__icon ${isOpen ? 'open' : ''}`.trim()} aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false" role="presentation">
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              aria-hidden={!isOpen}
              className={`faq-card__answer ${isOpen ? 'open' : ''}`.trim()}
            >
              <div className="faq-card__answer-inner">
                <p className={answerClassName}>{faq.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default FAQStack;