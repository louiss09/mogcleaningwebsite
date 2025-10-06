import React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface HeroHighlightItem {
  icon?: LucideIcon;
  title: string;
  description?: string;
  mobileDescription?: string;
}

interface HeroHighlightBandProps {
  items: HeroHighlightItem[];
  className?: string;
}

const HeroHighlightBand: React.FC<HeroHighlightBandProps> = ({ items, className = '' }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={`hero-highlight-band ${className}`.trim()}>
      <div className="container-max px-6">
        <div className="hero-highlight-band__grid">
          {items.map((item) => (
            <div key={item.title} className="hero-highlight-card">
              {item.icon && (
                <div className="hero-highlight-card__icon">
                  <item.icon className="h-5 w-5" />
                </div>
              )}
              <div className="hero-highlight-card__title">{item.title}</div>
              {item.description && (
                <p>
                  <span className="hidden sm:inline">{item.description}</span>
                  <span className="sm:hidden">{item.mobileDescription ?? item.description}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroHighlightBand;
