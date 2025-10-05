import React from 'react';
import { Link } from 'react-router-dom';

interface StickyCTABarProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const StickyCTABar: React.FC<StickyCTABarProps> = ({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) => {
  const renderAction = (label: string, href: string, variant: 'primary' | 'secondary') => {
    const baseClasses =
      variant === 'primary'
        ? 'inline-flex items-center justify-center rounded-full bg-celestial-blue-1 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-celestial-blue-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-celestial-blue-1/60 focus-visible:ring-offset-2'
        : 'inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2';

    if (href.startsWith('/')) {
      return (
        <Link to={href} className={baseClasses}>
          {label}
        </Link>
      );
    }

    return (
      <a href={href} className={baseClasses}>
        {label}
      </a>
    );
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-charcoal/95 py-4 shadow-lg backdrop-blur">
      <div className="container-max mx-auto flex flex-col items-center gap-3 px-4 text-center text-white sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{title}</p>
          {description ? <p className="mt-1 text-base text-white/80">{description}</p> : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {renderAction(primaryLabel, primaryHref, 'primary')}
          {secondaryLabel && secondaryHref
            ? renderAction(secondaryLabel, secondaryHref, 'secondary')
            : null}
        </div>
      </div>
    </div>
  );
};

export default StickyCTABar;
