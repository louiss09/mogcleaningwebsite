import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Sparkles,
} from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';

const FitnessCleaning: React.FC = () => {
  const inclusions = [
    'Equipment sanitising between sessions focusing on high-touch cardio and strength gear',
    'Locker room, shower and amenities deep cleaning with mould prevention',
    'Sauna, steam and recovery zone hygiene checks aligned to council compliance',
    'Group studio and reformer mat disinfecting with sweat and odour control',
    'Functional training zones, sled tracks and turf sweeps with disinfectant treatments',
    'Reception, member lounge and retail area presentation including glass and counters',
    'Daily waste, towel bin and laundry staging with odour neutralising solutions',
    'Air quality support with vent dusting and filter change reminders for facility managers',
    'Emergency spill, sweat and biohazard response with documented procedures',
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Protect Member Health',
      description: 'Hospital-grade disinfectants and ATP testing keep bacteria off shared equipment and mats.',
    },
    {
      icon: Users,
      title: 'Boost Member Retention',
      description: 'Fresh-smelling change rooms and spotless studios keep members renewing and referring.',
    },
    {
      icon: Clock,
      title: 'Class-Friendly Scheduling',
      description: 'Split crews work pre-dawn, between classes and overnight to keep your timetable uninterrupted.',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Compliance',
      description: 'Receive photo logs and sanitising schedules you can share with council inspectors and members.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Our weights floor and locker rooms stay spotless even between peak classes. Members regularly comment on how fresh the facility feels.',
      name: 'Studio Owner',
      role: 'Brisbane Fitness Studio',
    },
    {
      quote:
        'The crew arrives before dawn, wipes every touch point, and leaves the air smelling clean without overpowering scents.',
      name: 'Club Manager',
      role: '24/7 Gym Brisbane',
    },
    {
      quote:
        'They document each disinfectant cycle for turf, cardio and reformer zones. Passing hygiene audits has become stress free.',
      name: 'Regional Manager',
      role: 'Queensland Fitness Network',
    },
  ];

  const faqs = [
    {
      question: 'Can you clean while classes are running?',
      answer:
        'Yes. We structure mini-cleans between sessions and overnight deep cleans so equipment, mirrors and floors are ready for every booking.',
    },
    {
      question: 'Do you manage towel service and consumables?',
      answer:
        'We can collect used towels, stage laundry, restock amenities and maintain retail areas. Everything is logged in your monthly report.',
    },
    {
      question: 'What about high-risk areas like saunas or cold plunge rooms?',
      answer:
        'Our teams follow moisture and temperature protocols with specialised products to prevent mould, odours and slip hazards.',
    },
  ];

  const relatedLinks = [
    { name: 'Health & Medical Facility Cleaning', path: '/services/health' },
    { name: 'Hospitality Venue Cleaning', path: '/services/hospitality' },
    { name: 'Read About Our Process', path: '/process' },
  ];

  const heroBadges = [
    { icon: ShieldCheck, label: 'Hospital-grade disinfectants' },
    { icon: CheckCircle, label: 'Photo logs & QA reviews' },
  ];

  const heroHighlights = [
    {
      icon: Dumbbell,
      title: 'Gym-specific specialists',
      description: 'Sanitising plans for equipment, weights areas and functional zones.',
    },
    {
      icon: Users,
      title: 'Member-first amenities',
      description: 'Fresh change rooms, steam rooms and reception touchpoints.',
    },
    {
      icon: Phone,
      title: 'Rapid spill response',
      description: 'On-call support for sweat, biohazards and timetable changes.',
    },
  ];

  const pageTitle = 'Gym & Fitness Centre Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'Keep your Brisbane gym spotless with specialised fitness centre cleaning. Equipment sanitising, locker room deep cleans and flexible schedules from MOG Cleaning.';
  const serviceUrl = 'https://mogcleaning.com.au/services/fitness';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gym and Fitness Centre Cleaning',
    serviceType: 'Gym Cleaning',
    areaServed: {
      '@type': 'City',
      name: 'Brisbane',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'MOG Cleaning',
      url: 'https://mogcleaning.com.au',
      telephone: '+61 411 820 650',
    },
    description: pageDescription,
    url: serviceUrl,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fitness centre cleaning inclusions',
      itemListElement: inclusions.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AUD',
      availability: 'https://schema.org/InStock',
      url: 'https://mogcleaning.com.au/contact',
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Fitness Centre Cleaning',
        item: serviceUrl,
      },
    ],
  };

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="service"
        image="/images/fitness-cleaning-background.jpg"
        imageAlt="Gym cleaner sanitising equipment"
        keywords={['gym cleaning Brisbane', 'fitness centre cleaning', 'health club cleaners Brisbane']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/fitness-cleaning-background.jpg"
        variant="photo"
        align="center"
        eyebrow="Fitness centre cleaning"
        eyebrowIcon={Dumbbell}
        title={
          <>
            Spotless Brisbane fitness studios
            <br />
            that keep members inspired
          </>
        }
        description="Deliver a fresh, safe experience every session with routines built around your timetable, equipment mix and amenities."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Request a site visit
            </Link>
            <Link to="/process" className="btn-ghost">
              See onboarding steps
              <ArrowRight className="h-5 w-5" />
            </Link>
          </>
        }
        badges={heroBadges}
      />

      <section className="hero-highlight-band">
        <div className="container-max px-6">
          <div className="hero-highlight-band__grid">
            {heroHighlights.map((feature) => (
              <div key={feature.title} className="hero-highlight-card">
                <div className="hero-highlight-card__icon">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="hero-highlight-card__title">{feature.title}</div>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        eyebrow="Fast onboarding"
        title="Request your gym cleaning quote"
        description="Share your class schedule, floor plan and must-cover zones. We’ll send tailored pricing and onboarding steps within 24 hours."
        bullets={[
          'Equipment sanitising programs for every zone',
          'Locker room and amenities specialists',
          'Rapid spill and biohazard response on-call',
        ]}
        formTitle="Tell us about your facility"
        formSubtitle="We’ll reply within one business day with a proposal."
      />

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why gyms choose us</span>
            <h2 className="section-heading__title">Standards that protect your reputation</h2>
            <p className="section-heading__description">
              From boutique studios to 24/7 clubs, we deliver reliable crews who understand sweat management, member comfort and compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="feature-grid-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{benefit.title}</h3>
                <p className="text-jet/80 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Gym cleaning checklist</span>
            <h2 className="section-heading__title">Everything your members touch is covered</h2>
            <p className="section-heading__description">
              Our documented inclusions keep cardio, strength, recovery and amenity spaces safe, fresh and ready for the next class.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {inclusions.map((inclusion) => (
              <div key={inclusion} className="service-item p-6">
                <p className="text-charcoal font-medium">{inclusion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Client feedback</span>
            <h2 className="section-heading__title">Fitness operators who partner with us</h2>
            <p className="section-heading__description">
              Hear from studios and gyms that rely on MOG Cleaning for spotless spaces and responsive support.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Other services</span>
            <h2 className="section-heading__title">Need cleaners for another facility?</h2>
            <p className="section-heading__description">
              Explore our other commercial programs delivered with the same care and communication.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.name} to={link.path} className="feature-grid-card">
                <h3 className="text-xl font-semibold text-charcoal">{link.name}</h3>
                <span className="link-arrow">
                  View service
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Fitness cleaning questions answered</h2>
            <p className="section-heading__description">
              Learn how we handle scheduling, consumables and compliance across busy Brisbane gyms.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto" />
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane gyms
            </span>
            <h2 className="section-heading__title text-white">Ready for a cleaner training environment?</h2>
            <p className="section-heading__description text-white/80">
              Book a walkthrough today and receive a tailored fitness centre cleaning scope and quote within 24 hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link to="/contact" className="btn-primary">
                Request a quote
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

export default FitnessCleaning;
