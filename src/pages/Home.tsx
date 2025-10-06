import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  ArrowLeft,
  ArrowRight,
  Building2,
  Dumbbell,
  Heart,
  GraduationCap,
  Hotel,
  ShoppingBag,
  Award,
  Sparkles,
  PhoneCall,
  ClipboardCheck,
  ShieldCheck,
  ClipboardList,
} from 'lucide-react';
import SEO from '../components/SEO';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { useScrollToSection } from '../hooks/useScrollToSection';
import FAQAccordion from '../components/FAQAccordion';
import PageHero from '../components/PageHero';
import HeroHighlightBand from '../components/HeroHighlightBand';
import QuoteSection from '../components/QuoteSection';
import HowItWorks from '../components/HowItWorks';

const Home: React.FC = () => {
  const scrollToServices = useScrollToSection('services');
  const servicesCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollServicesCarousel = (direction: 'previous' | 'next') => {
    const node = servicesCarouselRef.current;
    if (!node) {
      return;
    }

    const scrollAmount = node.clientWidth * 0.88;
    node.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const heroHighlights = [
    {
      icon: Shield,
      title: 'Police-checked crews',
      description: 'Uniformed cleaners inducted to your standards before the first shift.',
    },
    {
      icon: Clock,
      title: 'Fast responses',
      description: 'Operations team on call when schedules change or urgent cleans pop up.',
    },
    {
      icon: Sparkles,
      title: 'Presentation-first',
      description: 'Detail-driven routines that impress visitors and reassure staff.',
    },
  ];

  const trustSignals = [
    {
      icon: Star,
      value: '5.0/5',
      label: 'Average rating',
      description: 'Facility managers review us across quarterly surveys and public testimonials.',
    },
    {
      icon: Award,
      value: '60+',
      label: 'Active sites',
      description: 'Across offices, clinics, gyms, hospitality venues and multi-site retailers in SEQ.',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Police-checked team',
      description: 'Documented inductions, SWMS and TGA-approved products ready for compliance.',
    },
  ];

  const painPoints = [
    {
      icon: ClipboardList,
      title: 'Chasing inconsistent cleaners',
      description: 'Missed bins, dusty desks and rushed bathrooms keep you firefighting instead of focusing on your role.',
    },
    {
      icon: Clock,
      title: 'Slow responses when something breaks',
      description: 'Last-minute events and spills need action now – not a call back days later.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance paperwork gaps',
      description: 'Auditors want proof of inductions, SWMS and police checks on demand.',
    },
  ];

  const solutionPillars = [
    {
      icon: Users,
      title: 'Specialists for every industry',
      description: 'Dedicated crews for offices, gyms, healthcare, hospitality and retail understand the nuances of each space.',
    },
    {
      icon: CheckCircle,
      title: 'Measured quality control',
      description: 'Supervisor audits, photo checklists and KPI reviews make every visit accountable.',
    },
    {
      icon: PhoneCall,
      title: 'Direct line to operations',
      description: 'Reach the decision makers who can adjust schedules, add services or send rapid-response crews.',
    },
    {
      icon: ClipboardCheck,
      title: 'Compliance-ready onboarding',
      description: 'We deliver inductions, insurance certificates and safe work method statements before we begin.',
    },
  ];

  const services = [
    {
      icon: Building2,
      name: 'Office Cleaning',
      path: '/services/offices',
      description:
        'Presentation-ready office spaces with workstation sanitising, meeting room resets and amenity care for corporate teams.',
      image: '/images/office-cleaning-background.jpg',
    },
    {
      icon: Dumbbell,
      name: 'Fitness Centres',
      path: '/services/fitness',
      description: 'Equipment sanitising, odour control and locker room detailing to keep members returning.',
      image: '/images/fitness-cleaning-background.jpg',
    },
    {
      icon: Heart,
      name: 'Medical Facilities',
      path: '/services/health',
      description: 'Clinical-grade disinfection, zoning and waiting room presentation aligned to QHealth standards.',
      image: '/images/medical-cleaning-background.jpg',
    },
    {
      icon: GraduationCap,
      name: 'Educational',
      path: '/services/education',
      description: 'Low-tox classroom cleaning, playground tidying and scheduled deep cleans for schools and childcare.',
      image: '/images/classroom-cleaning-background.jpg',
    },
    {
      icon: Hotel,
      name: 'Hospitality',
      path: '/services/hospitality',
      description: 'Front-of-house sparkle, kitchen compliance and fast turnarounds between events and seatings.',
      image: '/images/hotel-cleaning-background.jpg',
    },
    {
      icon: ShoppingBag,
      name: 'Retail Spaces',
      path: '/services/retail',
      description: 'Dust-free displays, immaculate fitting rooms and after-hours cleans that protect the shopper experience.',
      image: '/images/retail-cleaning-background.jpg',
    },
  ];

  const faqs = [
    {
      question: 'How quickly can you start cleaning our site?',
      answer:
        'After your quote is accepted we can schedule onboarding within 5–7 business days. This includes a site walkthrough, inductions for your crew and confirmation of access requirements.',
    },
    {
      question: 'Do you bring all cleaning products and equipment?',
      answer:
        'Yes. Our teams arrive with commercial-grade equipment, colour-coded microfibre systems and TGA-approved disinfectants. We can also use client-supplied consumables to meet brand or sustainability policies.',
    },
    {
      question: 'Can cleans happen outside of trading hours?',
      answer:
        'Absolutely. Evening, overnight and early-morning schedules are part of our standard service. We coordinate with your security and facilities teams so access, alarms and lock-up procedures are followed.',
    },
    {
      question: 'How do you maintain consistent quality?',
      answer:
        'Every account has a supervisor who performs regular audits, uses photo checklists and meets with you quarterly to review KPIs. Any issues trigger corrective actions within the same shift or the next visit.',
    },
    {
      question: 'Are you covered for insurance and compliance?',
      answer:
        'We hold full public liability insurance, workers compensation, up-to-date police checks and industry certifications. All documentation is provided during onboarding and kept ready for compliance reviews.',
    },
  ];

  const testimonials = [
    {
      quote:
        'MOG Cleaning has transformed our workplace. The crew is reliable, thorough, and our office feels refreshed after every visit.',
      name: 'Office Client',
      role: 'Brisbane Corporate Suite',
    },
    {
      quote:
        'Running a busy fitness centre means hygiene is everything. With MOG Cleaning, members walk into a clean, fresh environment that strengthens trust in our brand.',
      name: 'Gym Owner',
      role: 'Brisbane Fitness Centre',
    },
    {
      quote:
        'We operate under strict clinical standards, and MOG Cleaning consistently delivers. Their communication gives our team total peace of mind.',
      name: 'Practice Manager',
      role: 'Brisbane Medical Facility',
    },
  ];

  const industriesServed = [
    'Corporate offices',
    'Medical & allied health',
    'Fitness & recreation',
    'Hospitality venues',
    'Retail & showrooms',
    'Education providers',
  ];

  const crossLinks: Array<{
    title: string;
    description: string;
    to: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }> = [
    {
      title: 'See our step-by-step onboarding',
      description: 'Understand every milestone from your quote request to the first quality audit.',
      to: '/process',
    },
    {
      title: 'Meet the team keeping Brisbane spotless',
      description: 'Get to know our supervisors, training and the values behind MOG Cleaning.',
      to: '/about',
    },
    {
      title: 'Pick the program for your facility',
      description: 'Explore detailed inclusions for offices, gyms, clinics and venues.',
      to: '/#services',
      onClick: scrollToServices,
    },
  ];

  const servicesForSchema = services.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.name,
      description: service.description,
    },
    url: 'https://mogcleaning.com.au' + service.path,
  }));

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mogcleaning.com.au/#business',
    name: 'MOG Cleaning',
    description:
      'Professional commercial cleaning services for offices, gyms, medical, education, hospitality, and retail businesses across Brisbane.',
    url: 'https://mogcleaning.com.au',
    image: 'https://mogcleaning.com.au/logo.svg',
    telephone: '+61 411 820 650',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Brisbane Metro Area',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      postalCode: '4000',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.4698,
      longitude: 153.0251,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '14:00',
      },
    ],
    sameAs: ['https://www.instagram.com/mogclean'],
    makesOffer: servicesForSchema,
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mogcleaning.com.au/#website',
    url: 'https://mogcleaning.com.au',
    name: 'MOG Cleaning',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mogcleaning.com.au/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mogcleaning.com.au/',
      },
    ],
  };

  return (
    <div>
      <SEO
        title="Commercial Cleaning Brisbane | MOG Cleaning"
        description="Commercial cleaning in Brisbane built as a high-touch partnership. Request your quote and launch a compliant, presentation-ready program fast."
        image="/images/office-cleaning-background.jpg"
        imageAlt="Commercial cleaner wiping office desk in Brisbane"
        keywords={['Brisbane commercial cleaning', 'office cleaning Brisbane', 'professional cleaners Brisbane']}
        jsonLd={[businessSchema, websiteSchema, breadcrumbSchema]}
      />

      <PageHero
        className="hero-minimal--home"
        backgroundImage="/images/office-cleaning-background.jpg"
        backgroundPosition="center 42%"
        overlay="charcoal"
        align="center"
        eyebrow="Trusted Brisbane partner"
        eyebrowIcon={Shield}
        title={
          <>
            <span className="hero-minimal__title-line">Your Commercial Cleaning</span>
            <span className="hero-minimal__title-line">Partner in Brisbane</span>
          </>
        }
        description={
          <>
            Specialist crews for offices, gyms and clinics who keep every shift{' '}
            <span className="text-gradient">polished and on-brand</span>.
          </>
        }
        actions={
          <div className="hero-minimal__cta-group">
            <div className="hero-minimal__cta-buttons">
              <Link to="/contact" className="btn-primary btn-primary--elevated">
                Book a consultation
              </Link>
              <Link to="/#services" onClick={scrollToServices} className="btn-ghost">
                Explore services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="hero-minimal__cta-note">
              <Sparkles className="h-4 w-4" />
              Site walkthrough & tailored quote within 24 hours
            </div>
            <div className="hero-minimal__assurances">
              <span className="hero-minimal__assurance">
                <Shield className="h-4 w-4" /> Fully insured crews
              </span>
              <span className="hero-minimal__assurance">
                <Clock className="h-4 w-4" /> Flexible scheduling
              </span>
              <span className="hero-minimal__assurance">
                <CheckCircle className="h-4 w-4" /> QA photo reports
              </span>
            </div>
          </div>
        }
      />

      <HeroHighlightBand items={heroHighlights} />

      <section className="section-shell section-shell--muted" id="proof">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why Brisbane trusts us</span>
            <h2 className="section-heading__title">Numbers that prove the partnership works</h2>
            <p className="section-heading__description">
              Facility managers stay with MOG Cleaning because communication is fast, the results are visible and the paperwork is always ready for audits.
            </p>
          </div>
          <div className="stat-grid" data-columns="3">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="stat-card" data-align="center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                  <signal.icon className="h-7 w-7" />
                </div>
                <div className="stat-card__value">{signal.value}</div>
                <div className="stat-card__label">{signal.label}</div>
                <p className="stat-card__description">{signal.description}</p>
              </div>
            ))}
          </div>
          <div className="industries-pills mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium uppercase tracking-wide text-jet/70">
            {industriesServed.map((industry) => (
              <span key={industry} className="pill-chip bg-white text-charcoal">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="pain-points">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">We get the frustration</span>
            <h2 className="section-heading__title">Does your current cleaning program keep letting you down?</h2>
            <p className="section-heading__description">
              Most new clients come to us after dealing with slow responses, inconsistent standards and missing compliance files. Sound familiar?
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {painPoints.map((item) => (
              <div key={item.title} className="feature-grid-card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-celestial-blue-1/12 text-celestial-blue-1">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="text-jet/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="solution">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Our promise</span>
            <h2 className="section-heading__title">We remove the cleaning headaches for good</h2>
            <p className="section-heading__description">
              Every engagement is designed to make life easier for facility managers and business owners, not create more follow-up work.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutionPillars.map((pillar) => (
              <div key={pillar.title} className="feature-grid-card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-celestial-blue-1/12 text-celestial-blue-1">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{pillar.title}</h3>
                <p className="text-jet/80 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="services">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Services</span>
            <h2 className="section-heading__title">Pick your pathway to a spotless facility</h2>
            <p className="section-heading__description">
              Choose the program tailored to your industry. Each page highlights the specifics, results and pricing guidance you need.
            </p>
          </div>
          <div className="services-carousel md:hidden" aria-label="Swipeable list of cleaning service programs">
            <div className="services-carousel__header">
              <div className="services-carousel__copy">
                <h3 className="services-carousel__title">Explore our specialist programs</h3>
                <p className="services-carousel__description">
                  Swipe or tap the arrows to open the cleaning pathway tailored to your facility.
                </p>
              </div>
              <div className="services-carousel__controls" role="group" aria-label="Service carousel controls">
                <button
                  type="button"
                  className="services-carousel__control"
                  aria-label="View previous service"
                  onClick={() => scrollServicesCarousel('previous')}
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="services-carousel__control"
                  aria-label="View next service"
                  onClick={() => scrollServicesCarousel('next')}
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div
              ref={servicesCarouselRef}
              className="services-carousel__track"
              aria-live="polite"
            >
              {services.map((service) => (
                <Link key={service.name} to={service.path} className="service-card group services-carousel__card">
                  <div className="service-card__visual">
                    <img
                      src={service.image}
                      alt={`${service.name} cleaning in Brisbane`}
                      className="service-card__image"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="service-card__badge">
                      <service.icon className="h-4 w-4" aria-hidden="true" />
                      {service.name}
                    </span>
                  </div>
                  <div className="service-card__body">
                    <span className="service-card__eyebrow">Tailored program</span>
                    <h3 className="service-card__title">{service.name}</h3>
                    <p className="service-card__description">{service.description}</p>
                    <span className="service-card__cta">
                      Explore program
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link key={service.name} to={service.path} className="service-card group">
                <div className="service-card__visual">
                  <img
                    src={service.image}
                    alt={`${service.name} cleaning in Brisbane`}
                    className="service-card__image"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="service-card__badge">
                    <service.icon className="h-4 w-4" aria-hidden="true" />
                    {service.name}
                  </span>
                </div>
                <div className="service-card__body">
                  <span className="service-card__eyebrow">Tailored program</span>
                  <h3 className="service-card__title">{service.name}</h3>
                  <p className="service-card__description">{service.description}</p>
                  <span className="service-card__cta">
                    Explore program
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks
        eyebrow="What happens next"
        title="Four steps from hello to high-performing cleaning"
        description="Every page on this site guides you toward the same goal: a tailored quote, transparent onboarding and dependable crews."
      />

      <QuoteSection
        eyebrow="Start the conversation"
        title="Tell us about your facility and we’ll build your plan"
        description="We respond fast with pricing, onboarding dates and the supervisor who will own your account."
        bullets={[
          '24-hour response on business days',
          'Police-checked cleaners with full insurance',
          'Photo reporting and KPI reviews every month',
        ]}
        formTitle="Request your tailored quote"
        formSubtitle="Complete the form and we’ll call you within one business day."
      />

      <section className="section-shell" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Social proof</span>
            <h2 className="section-heading__title">Brisbane leaders who rely on MOG Cleaning</h2>
            <p className="section-heading__description">
              Testimonials and renewals from clients across offices, gyms and clinics prove we deliver consistent outcomes.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <section className="section-shell section-shell--muted" id="faqs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Before you enquire</span>
            <h2 className="section-heading__title">Commercial cleaning FAQs</h2>
            <p className="section-heading__description">
              If you still have questions before requesting a quote, the answers below will help you move forward confidently.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto" />
        </div>
      </section>

      <section className="section-shell section-shell--muted" id="next-steps">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Keep the momentum going</span>
            <h2 className="section-heading__title">Choose your next best step</h2>
            <p className="section-heading__description">
              Dive deeper into our services, meet the people behind the brand or see exactly how onboarding unfolds.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {crossLinks.map((link) => {
              const content = (
                <>
                  <h3 className="text-xl font-semibold text-charcoal">{link.title}</h3>
                  <p className="text-jet/80 leading-relaxed">{link.description}</p>
                  <span className="link-arrow">
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </>
              );

              if (link.onClick) {
                return (
                  <a key={link.title} href={link.to} onClick={link.onClick} className="feature-grid-card">
                    {content}
                  </a>
                );
              }

              return (
                <Link key={link.title} to={link.to} className="feature-grid-card">
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Ready when you are
            </span>
            <h2 className="section-heading__title text-white">Book your walkthrough and secure your crew</h2>
            <p className="section-heading__description text-white/80">
              Talk with our team today and receive a tailored proposal, onboarding plan and supervisor introduction within 24 hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link to="/contact" className="btn-primary">
                Get a quote
              </Link>
              <a href="tel:+61411820650" className="btn-secondary">
                Call 0411 820 650
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
