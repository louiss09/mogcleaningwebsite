import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface FeatureTickerItem {
  icon: LucideIcon;
  title: string;
  description?: string;
}

interface FeatureTickerProps {
  items: FeatureTickerItem[];
  className?: string;
}

const FeatureTicker: React.FC<FeatureTickerProps> = ({ items, className }) => {
  if (!items.length) {
    return null;
  }

  const duplicatedItems = [...items, ...items];

  return (
    <div className={['feature-ticker', className].filter(Boolean).join(' ')}>
      <div className="feature-ticker__viewport">
        <div className="feature-ticker__track">
          {duplicatedItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className="feature-ticker__item">
              <div className="feature-ticker__icon">
                <item.icon className="feature-ticker__icon-mark" />
              </div>
              <div className="feature-ticker__copy">
                <p className="feature-ticker__title">{item.title}</p>
                {item.description && <p className="feature-ticker__description">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureTicker;
