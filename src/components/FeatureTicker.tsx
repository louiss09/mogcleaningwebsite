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
    <div
      className={[
        'overflow-hidden rounded-[999px] border border-white/70 bg-white/80 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="feature-ticker relative">
        <div className="feature-ticker__track flex w-max items-center gap-6">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="feature-ticker__item flex min-w-[260px] shrink-0 items-center gap-3 px-6 py-4"
            >
              <div className="feature-ticker__icon flex h-10 w-10 items-center justify-center rounded-full bg-celestial-blue-1/12 text-celestial-blue-1">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold uppercase tracking-wide text-charcoal">{item.title}</p>
                {item.description && (
                  <p className="text-sm leading-snug text-jet/80">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureTicker;
