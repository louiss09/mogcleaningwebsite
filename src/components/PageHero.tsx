import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface HeroBadge {
  icon?: LucideIcon;
  label: string;
}

interface HeroFeature {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface PageHeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  align?: 'left' | 'center';
  overlay?: 'blue' | 'teal' | 'slate';
  actions?: React.ReactNode;
  badges?: HeroBadge[];
  features?: HeroFeature[];
  className?: string;
  children?: React.ReactNode;
}

const overlayVariantMap: Record<NonNullable<PageHeroProps['overlay']>, string> = {
  blue: 'page-hero__overlay',
  teal: 'page-hero__overlay',
  slate: 'page-hero__overlay',
};

const overlayDataVariant: Record<NonNullable<PageHeroProps['overlay']>, 'blue' | 'teal' | 'slate'> = {
  blue: 'blue',
  teal: 'teal',
  slate: 'slate',
};

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  backgroundImage,
  backgroundPosition = 'center top',
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  align = 'left',
  overlay = 'blue',
  actions,
  badges,
  features,
  className = '',
  children,
}) => {
  const hasAside = Boolean(children);
  const copyAlign = align === 'center' && !hasAside ? 'center' : 'left';

  return (
    <section className={`page-hero hero-section-spacing ${className}`.trim()}>
      <div className="page-hero__media" aria-hidden={backgroundImage ? undefined : true}>
        {backgroundImage ? (
          <img src={backgroundImage} alt="" style={{ objectPosition: backgroundPosition }} />
        ) : (
          <div className="page-hero__overlay" data-variant={overlayDataVariant[overlay]} />
        )}
      </div>
      {backgroundImage && (
        <div className={overlayVariantMap[overlay]} data-variant={overlayDataVariant[overlay]} aria-hidden="true" />
      )}
      <div className="page-hero__pattern" aria-hidden="true" />
      <div className="page-hero__container container-max px-6">
        <div className="page-hero__layout" data-aside={hasAside ? 'true' : 'false'}>
          <div className="page-hero__copy" data-align={copyAlign}>
            {eyebrow && (
              <span className="hero-eyebrow">
                {EyebrowIcon && <EyebrowIcon className="h-4 w-4" />}
                {eyebrow}
              </span>
            )}
            <h1 className="page-hero__title">{title}</h1>
            <p className="page-hero__description">{description}</p>
            {actions && <div className="page-hero__actions">{actions}</div>}
            {badges && badges.length > 0 && (
              <div className="page-hero__badges">
                {badges.map((badge) => (
                  <span key={badge.label} className="page-hero__badge">
                    {badge.icon && <badge.icon className="h-4 w-4" />}
                    {badge.label}
                  </span>
                ))}
              </div>
            )}
            {features && features.length > 0 && (
              <div className="page-hero__features">
                {features.map((feature) => (
                  <div key={feature.title} className="page-hero__feature-card">
                    {feature.icon && (
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                    )}
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {hasAside && (
            <div className="page-hero__aside" data-align={align === 'center' ? 'center' : undefined}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
