import React from 'react';
import type { LucideIcon } from 'lucide-react';

type HeroAlign = 'left' | 'center';
type HeroOverlay = 'slate' | 'spruce' | 'charcoal';

interface PageHeroProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  mobileTitle?: React.ReactNode;
  mobileDescription?: React.ReactNode;
  backgroundImage: string;
  backgroundPosition?: string;
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  align?: HeroAlign;
  overlay?: HeroOverlay;
  actions?: React.ReactNode;
  className?: string;
}

const overlayToneMap: Record<HeroOverlay, string> = {
  slate: 'slate',
  spruce: 'spruce',
  charcoal: 'charcoal',
};

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  mobileTitle,
  mobileDescription,
  backgroundImage,
  backgroundPosition = 'center',
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  align = 'center',
  overlay = 'slate',
  actions,
  className = '',
}) => {
  const resolvedAlign: HeroAlign = align;
  const overlayTone = overlayToneMap[overlay] ?? 'slate';

  return (
    <section
      className={[`hero-minimal hero-section-spacing`, className].filter(Boolean).join(' ')}
      data-align={resolvedAlign}
      data-overlay={overlayTone}
    >
      <div className="hero-minimal__media" aria-hidden="true">
        <img src={backgroundImage} alt="" style={{ objectPosition: backgroundPosition }} />
      </div>
      <div className="hero-minimal__scrim" data-overlay={overlayTone} aria-hidden="true" />
      <div className="hero-minimal__container container-max">
        <div className="hero-minimal__content motion-ready" data-align={resolvedAlign} data-motion="rise">
          {eyebrow && (
            <span className="hero-minimal__eyebrow">
              {EyebrowIcon && <EyebrowIcon className="h-4 w-4" />}
              {eyebrow}
            </span>
          )}

          <h1 className="hero-minimal__title">
            {mobileTitle ? (
              <>
                <span className="hidden sm:[display:contents]">{title}</span>
                <span className="[display:contents] sm:hidden">{mobileTitle}</span>
              </>
            ) : (
              title
            )}
          </h1>
          {description && (
            <p className="hero-minimal__description">
              {mobileDescription ? (
                <>
                  <span className="hidden sm:[display:contents]">{description}</span>
                  <span className="[display:contents] sm:hidden">{mobileDescription}</span>
                </>
              ) : (
                description
              )}
            </p>
          )}

          {actions && (
            <div className="hero-minimal__actions motion-ready" data-motion="fade">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
