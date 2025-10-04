import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface HeroBadge {
  icon?: LucideIcon;
  label: string;
}

interface HeroFeature {
  icon?: LucideIcon;
  title: string;
  description?: string;
}

type HeroVariant = 'centered' | 'photo';
type HeroAlign = 'left' | 'center';

interface PageHeroProps {
  title: React.ReactNode;
  description: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  align?: HeroAlign;
  overlay?: 'blue' | 'teal' | 'slate';
  variant?: HeroVariant;
  actions?: React.ReactNode;
  badges?: HeroBadge[];
  features?: HeroFeature[];
  className?: string;
  children?: React.ReactNode;
}

const themeMap: Record<string, string> = {
  blue: 'spruce',
  teal: 'evergreen',
  slate: 'charcoal',
};

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  backgroundImage,
  backgroundPosition = 'center',
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  align,
  overlay = 'blue',
  variant = 'centered',
  actions,
  badges,
  features,
  className = '',
  children,
}) => {
  const resolvedAlign: HeroAlign = align ?? (variant === 'centered' ? 'center' : 'left');
  const resolvedTheme = themeMap[overlay] ?? 'spruce';
  const showBackdrop = variant === 'photo' && backgroundImage;

  return (
    <section
      className={`hero-shell hero-section-spacing ${className}`.trim()}
      data-theme={resolvedTheme}
      data-align={resolvedAlign}
      data-variant={variant}
      data-has-image={showBackdrop ? 'true' : 'false'}
    >
      {showBackdrop && (
        <div className="hero-shell__backdrop" aria-hidden="true">
          <img src={backgroundImage} alt="" style={{ objectPosition: backgroundPosition }} />
        </div>
      )}

      <div className="hero-shell__container container-max px-6">
        <div className="hero-shell__inner">
          <div className="hero-shell__copy" data-align={resolvedAlign}>
            {eyebrow && (
              <span className="hero-eyebrow">
                {EyebrowIcon && <EyebrowIcon className="h-4 w-4" />}
                {eyebrow}
              </span>
            )}

            <h1 className="hero-shell__title">{title}</h1>
            <p className="hero-shell__description">{description}</p>

            {actions && <div className="hero-shell__actions">{actions}</div>}

            {badges && badges.length > 0 && (
              <div className="hero-shell__badges">
                {badges.map((badge) => (
                  <span key={badge.label} className="hero-shell__badge">
                    {badge.icon && <badge.icon className="h-4 w-4" />}
                    {badge.label}
                  </span>
                ))}
              </div>
            )}

            {features && features.length > 0 && (
              <div className="hero-shell__features">
                {features.map((feature) => (
                  <div key={feature.title} className="hero-shell__feature">
                    {feature.icon && (
                      <div className="hero-shell__feature-icon">
                        <feature.icon className="h-5 w-5" />
                      </div>
                    )}
                    <div className="hero-shell__feature-copy">
                      <span className="hero-shell__feature-title">{feature.title}</span>
                      {feature.description && <p>{feature.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {children && <div className="hero-shell__extra">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
