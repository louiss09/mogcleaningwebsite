import React from 'react';
import { CheckCircle } from 'lucide-react';
import QuoteForm from './QuoteForm';

interface QuoteSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  formTitle?: string;
  formSubtitle?: string;
  className?: string;
}

const QuoteSection: React.FC<QuoteSectionProps> = ({
  eyebrow,
  title,
  description,
  bullets,
  formTitle,
  formSubtitle,
  className = '',
}) => {
  return (
    <section className={`section-shell ${className}`.trim()}>
      <div className="container-max mx-auto">
        <div className="quote-section">
          <div className="quote-section__copy motion-ready" data-motion="slide-right">
            {eyebrow && <span className="quote-section__eyebrow">{eyebrow}</span>}
            <h2 className="quote-section__title">{title}</h2>
            <p className="quote-section__description">{description}</p>
            {bullets && bullets.length > 0 && (
              <ul className="quote-section__list" data-motion-stagger="true">
                {bullets.map((bullet) => (
                  <li key={bullet} className="motion-child">
                    <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <QuoteForm
            className="quote-section__form motion-ready"
            title={formTitle ?? 'Request a tailored quote'}
            subtitle={formSubtitle ?? 'Share your requirements and we will reply within 24 hours.'}
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
