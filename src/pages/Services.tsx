import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Dumbbell,
  Heart,
  GraduationCap,
  Hotel,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Users,
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import HeroHighlightBand from '../components/HeroHighlightBand';
import QuoteSection from '../components/QuoteSection';
import HowItWorks from '../components/HowItWorks';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building2,
      name: 'Office Cleaning',
      path: '/services/offices',
      description:
        'Presentation-ready office spaces with workstation sanitising, meeting room resets and amenity care for corporate teams.',
      image: '/images/office-cleaning-background.jpg',
      highlights: ['Executive suite detailing', 'Boardroom resets', 'Desk & workstation care'],
    },
    {
      icon: Dumbbell,
      name: 'Fitness Centres',
      path: '/services/fitness',
      description: 'Equipment sanitising, odour control and locker room detailing to keep members returning.',
      image: '/images/fitness-cleaning-background.jpg',
      highlights: ['Equipment disinfecting', 'Locker room hygiene', 'Odour neutralisation'],
    },
    {
      icon: Heart,
      name: 'Medical Facilities',
      path: '/services/health',
      description: 'Clinical-grade disinfection, zoning and waiting room presentation aligned to QHealth standards.',
      image: '/images/medical-cleaning-background.jpg',
      highlights: ['Treatment room turnover', 'Zoned cleaning protocols', 'Compliance-ready reporting'],
    },
    {
      icon: GraduationCap,
      name: 'Education',
      path: '/services/education',
      description: 'Low-tox classroom cleaning, playground detailing and holiday deep cleans for schools and childcare.',
      image: '/images/classroom-cleaning-background.jpg',
      highlights: ['Child-safe products', 'Holiday deep cleans', 'Playground presentation'],
    },
    {
      icon: Hotel,
      name: 'Hospitality',
      path: '/services/hospitality',
      description: 'Front-of-house sparkle, kitchen compliance and rapid event turnarounds.',
      image: '/images/hotel-cleaning-background.jpg',
      highlights: ['HACCP-aligned cleaning', 'Event turnaround crews', 'Guest-ready presentation'],
    },
    {
      icon: ShoppingBag,
      name: 'Retail Spaces',
      path: '/services/retail',
      description: 'Dust-free displays, pristine change rooms and efficient back-of-house support.',
      image: '/images/retail-cleaning-background.jpg',
      highlights: ['Visual merchandising care', 'Change room sanitising', 'After-hours cleans'],
    },
  ];

  const differentiators = [
    {
      icon: Shield,
      title: 'Industry specialists',
      description: 'Dedicated crews per sector ensure your standards and compliance needs are always met.',
    },
    {
      icon: Clock,
      title: 'Responsive scheduling',
      description: 'After-hours, overnight and rapid-response support keeps your operations running smoothly.',
    },
    {
      icon: Users,
      title: 'Supervisor accountability',
      description: 'Named supervisors deliver photo reports, KPI reviews and proactive communication.',
    },
  ];

  const pageTitle = 'Commercial Cleaning Services Brisbane | MOG Cleaning';
  const pageDescription =
    'Explore commercial cleaning services from MOG Cleaning for offices, gyms, medical facilities, education, hospitality, and retail businesses across Brisbane.';
  const baseSiteUrl = 'https://mogcleaning.com.au';
  const serviceCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Cleaning Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'MOG Cleaning',
      url: baseSiteUrl,
    },
    areaServed: 'Brisbane, Queensland',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industry-specific commercial cleaning',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        url: baseSiteUrl + service.path,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="website"
        image="/images/office-cleaning-background.jpg"
        imageAlt="Commercial cleaning team servicing a Brisbane office"
        keywords={['Brisbane commercial cleaning services', 'industry specific cleaners', 'MOG Cleaning services']}
        jsonLd={serviceCatalogSchema}
      />

      <PageHero
        className="hero-extra-top"
        backgroundImage="/images/retail-cleaning-background.jpg"
        backgroundPosition="center 44%"
        overlay="charcoal"
        eyebrow="Services"
        eyebrowIcon={Sparkles}
        title="Every service is shaped around your facility."
        mobileTitle="Services shaped around your facility."
        description="Choose the industry pathway that matches your facility. Each page dives into pain points, proof and the steps to get started."
        mobileDescription="Choose the pathway for your facility to see pain points, proof and next steps."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Get a quote
            </Link>
            <a href="tel:+61411820650" className="btn-secondary">
              Call 0411 820 650
            </a>
          </>
        }
      />

      <HeroHighlightBand items={differentiators} />

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Explore by industry</span>
            <h2 className="section-heading__title">Pick the service page that matches your needs</h2>
            <p className="section-heading__description">
              Each service page is designed to show proof, outline the process and give you clear ways to book for your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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
                  <span className="service-card__eyebrow">Industry spotlight</span>
                  <h3 className="service-card__title">{service.name}</h3>
                  <p className="service-card__description">{service.description}</p>
                  <ul className="service-card__list">
                    {service.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <span className="service-card__cta">
                    View service page
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks
        eyebrow="What every program includes"
        title="Four steps we follow no matter your industry"
        description="From enquiry to launch, your experience stays consistent—so you always know the next action."
      />

      <QuoteSection
        eyebrow="Ready to move forward?"
        title="Tell us which services you need"
        description="Combine multiple programs or focus on one facility. Either way we respond fast with pricing, onboarding dates and supervisor details."
        bullets={[
          'Mix-and-match industry programs',
          'Dedicated supervisor for every site',
          'Photo reporting and KPI reviews',
        ]}
        formTitle="Request your tailored proposal"
        formSubtitle="Complete the form and we’ll call you within one business day."
      />

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> End-to-end cleaning support
            </span>
            <h2 className="section-heading__title text-white">Need help choosing the right program?</h2>
            <p className="section-heading__description text-white/80">
              Talk with our specialists and map the ideal combination of services for your facilities in a single conversation.
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

export default Services;
