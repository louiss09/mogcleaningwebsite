import React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface HeroHighlightItem {
  icon?: LucideIcon;
  title: string;
  description?: string;
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
    <section className={`hero-highlight-band motion-ready ${className}`.trim()} data-motion="fade">
      <div className="container-max px-6">
        <div className="hero-highlight-band__grid" data-motion-stagger="true">
          {items.map((item) => (
            <div key={item.title} className="hero-highlight-card motion-child">
              {item.icon && (
                <div className="hero-highlight-card__icon">
                  <item.icon className="h-5 w-5" />
                </div>
              )}
              <div className="hero-highlight-card__title">{item.title}</div>
              {item.description && <p>{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroHighlightBand;
