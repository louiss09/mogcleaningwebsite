import React from 'react';
import { Link } from 'react-router-dom';
import {
  Hotel,
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
import HeroHighlightBand from '../../components/HeroHighlightBand';

const HospitalityCleaning: React.FC = () => {
  const inclusions = [
    'Guest room turnovers with linen refresh, amenity restock and minibar check',
    'Lobby, concierge and reception desk detailing with fingerprint removal',
    'Restaurant, cafe and bar wipe-downs including menus, POS and table resets',
    'Commercial kitchen degreasing, pass cleaning and floor scrubbing after service',
    'Function and conference room flips with furniture staging and AV touchpoint wipes',
    'Pool, spa and gym sanitation with slip reporting and towel station resets',
    'Restroom deep cleaning, consumable restocking and odour control',
    'Back-of-house service corridors, loading docks and service lifts sweep and mop',
    'Night audit support with waste removal, glass collection and recycling separation',
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Keep Guests Talking Positively',
      description: 'Front and back of house stay presentation-ready so reviews focus on service, not cleanliness lapses.',
    },
    {
      icon: ShieldCheck,
      title: 'Meet Hygiene Standards',
      description: 'Food safety, pool testing and housekeeping checkpoints aligned with Queensland health requirements.',
    },
    {
      icon: Clock,
      title: 'Work Around Your Roster',
      description: 'Overnight turnovers, split shifts and rapid response crews timed with check-in, service and events.',
    },
    {
      icon: CheckCircle,
      title: 'Accountable Crew Reporting',
      description: 'Photo logs, incident escalation and stock tracking so you know what was cleaned every shift.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Night audit receives photos after each turnover and guest rooms feel fresh without heavy fragrances. Housekeeping trusts arrivals will see polished bathrooms and linen.',
      name: 'Front Office Manager',
      role: 'Brisbane Hotel',
    },
    {
      quote:
        'Bar tops, pass areas and dining floors gleam after service. The team alerts us to maintenance issues before diners notice a thing.',
      name: 'Food & Beverage Manager',
      role: 'Brisbane Restaurant',
    },
    {
      quote:
        'Conference spaces are reset overnight with clean carpets and balanced airflow. Chefs mention the prep areas stay safe for early shifts.',
      name: 'Operations Manager',
      role: 'Brisbane Conference Venue',
    },
  ];

  const faqs = [
    {
      question: 'Can you work alongside our in-house housekeeping team?',
      answer:
        'Yes. We agree on handover notes, shared checklists and radio channels so our crew supports, not duplicates, your existing roster.',
    },
    {
      question: 'Do you handle commercial kitchens to council requirements?',
      answer:
        'We manage nightly degreasing, temperature checks, exhaust filter swaps and record the chemicals used so you are audit ready at any time.',
    },
    {
      question: 'How fast can you turn a function space?',
      answer:
        'Most ballrooms are reset within two hours. We stage furniture to your run sheet, wipe surfaces and flag maintenance issues before the next booking.',
    },
  ];

  const relatedLinks = [
    { name: 'Office Cleaning', path: '/services/offices' },
    { name: 'Retail & Showroom Cleaning', path: '/services/retail' },
    { name: 'About MOG Cleaning', path: '/about' },
  ];

  const heroHighlights = [
    {
      icon: Hotel,
      title: 'Hospitality specialists',
      description: 'Guest rooms, dining, bars and event spaces kept guest-ready.',
    },
    {
      icon: Users,
      title: 'Front and back of house support',
      description: 'Coordinated routines for kitchens, concierge desks and amenities.',
    },
    {
      icon: Phone,
      title: 'Rapid changeover teams',
      description: 'On-call crews for late check-outs, VIP arrivals and events.',
    },
  ];

  const pageTitle = 'Hospitality Cleaning Brisbane | Hotel & Venue Cleaning Services';
  const pageDescription =
    'Professional hospitality cleaning for Brisbane hotels, restaurants, bars and event venues. Overnight crews, food-safe practices and detailed reporting that keep guests returning.';
  const serviceUrl = 'https://mogcleaning.com.au/services/hospitality';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hospitality Cleaning Services',
    serviceType: 'Hospitality Cleaning',
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
      name: 'Hospitality cleaning inclusions',
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
        name: 'Hospitality Cleaning',
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
        image="/images/hotel-cleaning-background.jpg"
        imageAlt="Hospitality cleaner preparing a venue"
        keywords={['hospitality cleaning Brisbane', 'hotel cleaners', 'restaurant cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/hotel-cleaning-background.jpg"
        backgroundPosition="center 45%"
        overlay="charcoal"
        align="center"
        eyebrow="Hospitality cleaning"
        eyebrowIcon={Hotel}
        title="Immaculate venues ready for every guest."
        description="Deliver flawless rooms, dining spaces and event venues with crews who flex to every service window."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Schedule a walkthrough
            </Link>
            <Link to="/process" className="btn-ghost">
              See onboarding steps
              <ArrowRight className="h-5 w-5" />
            </Link>
          </>
        }
      />

      <HeroHighlightBand items={heroHighlights} />

      <QuoteSection
        eyebrow="Guest-ready crews"
        title="Request your hospitality cleaning quote"
        description="Tell us about your rooms, service areas and event spaces. We’ll deliver a program that keeps both front and back of house presentation-ready."
        bullets={[
          'Overnight and split-shift scheduling',
          'Food-safe cleaning products and protocols',
          'Changeover teams for events and VIP arrivals',
        ]}
        formTitle="Tell us about your venue"
        formSubtitle="We’ll respond within one business day with tailored pricing."
      />

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why venues choose us</span>
            <h2 className="section-heading__title">Create five-star impressions front and back of house</h2>
            <p className="section-heading__description">
              We partner with hospitality leaders to keep guest experiences flawless while supporting your in-house teams.
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
            <span className="section-heading__eyebrow">Hospitality inclusions</span>
            <h2 className="section-heading__title">A scope that covers every guest touchpoint</h2>
            <p className="section-heading__description">
              From rooms and restaurants to back-of-house corridors, our documented checklist keeps service seamless.
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
            <h2 className="section-heading__title">Brisbane hospitality partners</h2>
            <p className="section-heading__description">
              Hear from hotels and venues that rely on MOG Cleaning to impress guests and support their teams.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Explore more services</span>
            <h2 className="section-heading__title">Support every part of your venue</h2>
            <p className="section-heading__description">
              Combine hospitality cleaning with other MOG programs to streamline your facilities management.
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
            <h2 className="section-heading__title">Hospitality cleaning questions</h2>
            <p className="section-heading__description">
              Learn how we integrate with your team, meet council requirements and handle quick changeovers.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto" />
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane hospitality venues
            </span>
            <h2 className="section-heading__title text-white">Ready for five-star presentation?</h2>
            <p className="section-heading__description text-white/80">
              Book a consultation to receive a tailored hospitality cleaning scope, schedule and quote within 24 hours.
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

export default HospitalityCleaning;
