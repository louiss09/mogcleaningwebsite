import React from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Star, Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  highlight?: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
  className?: string;
  autoAdvanceMs?: number;
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  className = '',
  autoAdvanceMs = 10000,
}) => {
  const slides = React.useMemo(
    () => testimonials.filter((item) => item.quote.trim().length > 0),
    [testimonials],
  );

  const slideCount = slides.length;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const timerRef = React.useRef<number | null>(null);

  const clearTimer = React.useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = React.useCallback(() => {
    if (slideCount <= 1) {
      return;
    }

    timerRef.current = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, autoAdvanceMs);
  }, [autoAdvanceMs, slideCount]);

  React.useEffect(() => {
    if (slideCount === 0) {
      clearTimer();
      return;
    }

    clearTimer();
    startTimer();

    return clearTimer;
  }, [activeIndex, clearTimer, startTimer, slideCount]);

  React.useEffect(() => () => clearTimer(), [clearTimer]);

  React.useEffect(() => {
    if (slideCount === 0) {
      setActiveIndex(0);
      return;
    }

    if (activeIndex >= slideCount) {
      setActiveIndex(0);
    }
  }, [activeIndex, slideCount]);

  const goTo = React.useCallback(
    (index: number) => {
      if (slideCount <= 1) {
        return;
      }

      clearTimer();

      if (index === activeIndex) {
        startTimer();
        return;
      }

      setActiveIndex(index);
    },
    [activeIndex, clearTimer, slideCount, startTimer],
  );

  const goNext = React.useCallback(() => {
    if (slideCount <= 1) {
      return;
    }

    clearTimer();
    setActiveIndex((prev) => (prev + 1) % slideCount);
  }, [clearTimer, slideCount]);

  const goPrev = React.useCallback(() => {
    if (slideCount <= 1) {
      return;
    }

    clearTimer();
    setActiveIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [clearTimer, slideCount]);

  if (slideCount === 0) {
    return null;
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br from-white via-white to-celestial-blue-1/12 p-8 sm:p-12 shadow-2xl backdrop-blur-sm ${className}`}
    >
      <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-celestial-blue-1/15 blur-3xl" aria-hidden="true"></div>
      <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-fresh-green/12 blur-3xl" aria-hidden="true"></div>

      <div className="relative z-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-celestial-blue-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`star-${index}`} className="h-5 w-5 fill-celestial-blue-1 text-celestial-blue-1" />
            ))}
            <span className="text-sm font-semibold text-celestial-blue-1/80">Trusted by Brisbane businesses</span>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <div className="rounded-full bg-white/80 p-3 shadow-inner">
              <MessageCircle className="h-6 w-6 text-celestial-blue-1" />
            </div>
            <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.24em] text-celestial-blue-1/70">
              Client Stories
            </span>
          </div>
        </div>

        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live="polite"
        >
          {slides.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="min-w-full flex-shrink-0 basis-full px-2">
              <div className="mx-auto flex max-w-3xl flex-col justify-between px-2 sm:px-6 text-center md:text-left">
                {testimonial.highlight && (
                  <span className="mb-6 inline-block rounded-full bg-celestial-blue-1/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-celestial-blue-1/70">
                    {testimonial.highlight}
                  </span>
                )}
                <div className="mb-6 flex justify-center md:justify-start">
                  <Quote className="h-8 w-8 text-celestial-blue-1/40" />
                </div>
                <p className="text-lg sm:text-2xl text-charcoal leading-relaxed mb-8">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-jet/80">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {slideCount > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="hidden sm:flex items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 shadow-lg border border-ash-gray/40 text-charcoal hover:bg-celestial-blue-1 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="hidden sm:flex items-center justify-center absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 shadow-lg border border-ash-gray/40 text-charcoal hover:bg-celestial-blue-1 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="mt-10 flex justify-center gap-3">
              {slides.map((testimonial, index) => (
                <button
                  type="button"
                  key={`${testimonial.name}-dot-${index}`}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'bg-celestial-blue-1 w-8 shadow-md shadow-celestial-blue-1/30' : 'bg-ash-gray/40 w-3'}`}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                ></button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
