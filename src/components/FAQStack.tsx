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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className={className}>
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const questionId = `faq-${index}-question`;
        const answerId = `faq-${index}-answer`;

        return (
          <article
            key={faq.question}
            className={cardClassName}
          >
            <button
              type="button"
              id={questionId}
              className="faq-card__button"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => handleToggle(index)}
            >
              <span className={questionClassName}>{faq.question}</span>
              <svg
                className={`faq-card__icon ${isOpen ? 'open' : ''}`.trim()}
                viewBox="0 0 24 24"
                role="presentation"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              aria-hidden={!isOpen}
              className={`faq-card__answer ${isOpen ? 'open' : ''}`.trim()}
            >
              <p className={answerClassName}>{faq.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default FAQStack;
