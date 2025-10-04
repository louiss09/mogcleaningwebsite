import React from 'react';
import { Link } from 'react-router-dom';
import {
  Hotel,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';
import SEO from '../../components/SEO';
import ServiceSidebar from '../../components/ServiceSidebar';
import QuoteForm from '../../components/QuoteForm';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';

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
      description: 'Overnight turnovers, split shifts and rapid response crews timed with check-in, service and event schedules.',
    },
    {
      icon: CheckCircle,
      title: 'Accountable Crew Reporting',
      description: 'Photo logs, incident escalation and stock tracking so you know what was cleaned every shift.',
    },
  ];

const testimonials = [
    {
      quote: 'Night audit receives photos after each turnover and guest rooms feel fresh without heavy fragrances. Housekeeping knows arrivals will see polished bathrooms and linen.',
      name: 'Front Office Manager',
      role: 'Brisbane Hotel',
    },
    {
      quote: 'Bar tops, pass areas and dining floors gleam after service. The team alerts us to maintenance issues before diners notice a thing.',
      name: 'Food & Beverage Manager',
      role: 'Brisbane Restaurant',
    },
    {
      quote: 'Conference spaces are reset overnight with clean carpets and balanced airflow. Chefs mention the prep areas stay safe for early shifts.',
      name: 'Operations Manager',
      role: 'Brisbane Conference Venue',
    },
  ];

  const faqs = [
    {
      question: 'Can you work alongside our in-house housekeeping team?',
      answer:
        'Yes. We agree on handover notes, shared checklists and radio channels so our crew supports, not duplicates, your existing housekeeping roster.',
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

  const heroBadges = [
    { icon: ShieldCheck, label: 'Food-safe products & HACCP awareness' },
    { icon: Clock, label: 'Overnight turnovers available' },
    { icon: CheckCircle, label: 'Photo reports every shift' },
  ];

  const pageTitle = 'Hospitality Cleaning Brisbane | Hotel & Venue Cleaning Services';
  const pageDescription = 'Professional hospitality cleaning for Brisbane hotels, restaurants, bars and event venues. Overnight crews, food-safe practices and detailed reporting that keep guests returning.';
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
        imageAlt="Housekeeper making a hotel bed in Brisbane"
        keywords={['hospitality cleaning Brisbane', 'hotel cleaning services', 'restaurant cleaners Brisbane']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <section
        className="relative hero-section-spacing px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/hotel-cleaning-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container-max hero-content-area">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center mb-6">
                <Hotel className="w-12 h-12 text-fresh-green mr-4" />
                <span className="text-fresh-green font-semibold text-lg">Hospitality Cleaning Brisbane</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Hotel, Restaurant & Venue Cleaning That Keeps Guests Returning
              </h1>
              <p className="text-xl mb-6 text-white/90 drop-shadow-md">
                Partner with crews who understand housekeeping schedules, food safety requirements and late-night turnovers. We support hotels, bars and event spaces across Brisbane.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {heroBadges.map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                    <badge.icon className="h-4 w-4 text-fresh-green" />
                    {badge.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary bg-fresh-green hover:bg-fresh-green/90">
                  Book a Site Walkthrough
                </Link>
                <a href="tel:+61411820650" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal">
                  <Phone className="w-5 h-5 mr-2" /> Call 0411 820 650
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <QuoteForm className="max-w-md lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 bg-white/95 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Hospitality Cleaning Inclusions</h2>
            <p className="text-lg text-jet mb-6">
              Choose the tasks that protect your guest experience, food safety standards and event turnover times. Here is what Brisbane venues trust us with every shift.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inclusions.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 mt-1 text-fresh-green shrink-0" />
                  <span className="text-charcoal leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <ServiceSidebar title="Hospitality Cleaning" description={pageDescription} />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Hospitality Teams Choose Us</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              We work in lockstep with your front office, food and beverage and events teams so every guest touchpoint looks and feels ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-white rounded-2xl shadow-md p-8 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <benefit.icon className="w-10 h-10 mx-auto text-celestial-blue-1 mb-6" />
                <h3 className="text-xl font-semibold text-charcoal mb-4">{benefit.title}</h3>
                <p className="text-jet leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-ash-gray/20">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Brisbane Hospitality Clients Say</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              Honest feedback from the hotels, restaurants and venues who rely on us every week.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-5xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hospitality Cleaning FAQs</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              Practical answers for general managers, food and beverage leads and housekeeping teams across Brisbane.
            </p>
          </div>

          <FAQAccordion
            faqs={faqs}
            className="faq-stack-services"
            cardClassName="text-left"
            questionClassName="text-xl font-semibold text-charcoal"
            answerClassName="text-jet leading-relaxed"
          />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Explore More Cleaning Programs</h2>
            <p className="text-lg text-jet">Build a multi-site support plan with our wider specialist services.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedLinks.map((link) => (
              <Link key={link.name} to={link.path} className="px-5 py-3 rounded-full border border-celestial-blue-1 text-celestial-blue-1 font-medium hover:bg-celestial-blue-1 hover:text-white transition">
                {link.name}
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Hospitality Cleaning Partner?</h2>
            <p className="text-xl text-jet mb-8">
              Book a walkthrough with our Brisbane team. We will map a cleaning program that supports housekeeping, F&B and events without disrupting guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get My Tailored Quote
              </Link>
              <Link to="/process" className="btn-secondary">
                See How Onboarding Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalityCleaning;







