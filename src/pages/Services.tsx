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
  Shield,
  Clock,
  Users,
  Sparkles,
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building2,
      name: 'Office Cleaning',
      path: '/services/offices',
      description:
        'Presentation-ready office spaces with workstation sanitising, meeting room resets and amenity care for corporate teams.',
      image: '/images/office-cleaning-background.jpg',
      highlights: ['Daily/weekly schedules', 'Desk & shared space sanitising', 'Meeting room presentation'],
    },
    {
      icon: Dumbbell,
      name: 'Fitness Centres',
      path: '/services/fitness',
      description: 'Equipment sanitising, odour control and locker room detailing to keep members returning.',
      image: '/images/fitness-cleaning-background.jpg',
      highlights: ['Equipment disinfecting', 'Locker room deep cleans', 'Sweat & odour control'],
    },
    {
      icon: Heart,
      name: 'Medical Facilities',
      path: '/services/health',
      description: 'Clinical-grade disinfection, zoning and waiting room presentation aligned to QHealth standards.',
      image: '/images/medical-cleaning-background.jpg',
      highlights: ['Medical-grade disinfection', 'Treatment room turnover', 'Biohazard waste handling'],
    },
    {
      icon: GraduationCap,
      name: 'Educational',
      path: '/services/education',
      description: 'Low-tox classroom cleaning, playground tidying and scheduled deep cleans for schools and childcare.',
      image: '/images/classroom-cleaning-background.jpg',
      highlights: ['Classroom hygiene', 'Library & lab care', 'Playground presentation'],
    },
    {
      icon: Hotel,
      name: 'Hospitality',
      path: '/services/hospitality',
      description: 'Front-of-house sparkle, kitchen compliance and fast turnarounds between events and seatings.',
      image: '/images/hotel-cleaning-background.jpg',
      highlights: ['Guest area detailing', 'Commercial kitchen cleans', 'Event turnaround support'],
    },
    {
      icon: ShoppingBag,
      name: 'Retail Spaces',
      path: '/services/retail',
      description: 'Dust-free displays, immaculate fitting rooms and after-hours cleans that protect the shopper experience.',
      image: '/images/retail-cleaning-background.jpg',
      highlights: ['Display & stockroom care', 'Fitting room sanitising', 'After-hours scheduling'],
    },
  ];

  const inclusions = [
    {
      title: 'Professional Equipment',
      description: 'Commercial-grade tools, HEPA filtration and eco-friendly products for spotless finishes.',
    },
    {
      title: 'Flexible Scheduling',
      description: 'Daily, weekly or ad-hoc cleans to match trading hours, events and seasonal needs.',
    },
    {
      title: 'Quality Assurance',
      description: 'Supervisor audits, photo reporting and KPI reviews so every clean meets your standards.',
    },
    {
      title: 'Trained & Vetted Staff',
      description: 'Uniformed, police-checked cleaners who complete site-specific inductions and PPE refreshers.',
    },
    {
      title: 'Full Insurance Cover',
      description: 'Comprehensive liability coverage and up-to-date compliance documentation supplied on onboarding.',
    },
    {
      title: 'Rapid Support',
      description: '24/7 assistance for spill clean-ups, emergency disinfection or last-minute presentation cleans.',
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
        title="Programs built for every Brisbane facility."
        description="Pick a ready-to-run program, then tune the scope, schedule and reporting to your site."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a consultation
            </Link>
            <Link to="/process" className="btn-ghost">
              See how onboarding works
            </Link>
          </>
        }
      />

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Industry expertise</span>
            <h2 className="section-heading__title">Choose the program that matches your facility</h2>
            <p className="section-heading__description">
              Each service includes a customised scope, onboarding plan and reporting cadence so you always know what happens and when.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                  <span className="service-card__eyebrow">Program overview</span>
                  <h3 className="service-card__title">{service.name}</h3>
                  <p className="service-card__description">{service.description}</p>
                  <ul className="service-card__list">
                    {service.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
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

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Every program includes</span>
            <h2 className="section-heading__title">Consistent standards across every visit</h2>
            <p className="section-heading__description">
              No matter the industry, you receive the same professionalism, communication and compliance documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {inclusions.map((item) => (
              <div key={item.title} className="feature-grid-card">
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="text-jet/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Brisbane-wide coverage
            </span>
            <h2 className="section-heading__title text-white">Ready to craft your cleaning scope?</h2>
            <p className="section-heading__description text-white/80">
              Tell us about your facility and we’ll prepare a tailored scope, onboarding timeline and pricing within 24 hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link to="/contact" className="btn-primary">
                Request a tailored proposal
              </Link>
              <Link to="/process" className="btn-secondary">
                See how onboarding works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
