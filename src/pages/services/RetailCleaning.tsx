import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
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

const RetailCleaning: React.FC = () => {
  const inclusions = [
    'Daily sales floor detailing with fixture dusting and merchandising care',
    'Change room, fitting area and mirror sanitising between trading sessions',
    'Point-of-sale counter, EFTPOS and kiosk disinfection for customer touchpoints',
    'Back-of-house stockroom organisation and sweep/vacuum rotations',
    'Glass storefront, display cabinet and lightbox polishing',
    'Restroom deep cleaning, consumable restocking and odour control',
    'Hard floor scrubbing, buffing and entrance mat upkeep for high-traffic areas',
    'Food court or cafe tenancy support including table resets and hygiene wipes',
    'Waste, recycling and cardboard baler support with compliance documentation',
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Convert Browsers into Buyers',
      description: 'Spotless displays, mirrors and registers reinforce your brand and extend dwell time.',
    },
    {
      icon: ShieldCheck,
      title: 'Protect Health & Compliance',
      description: 'Structured sanitation program for food, fashion and beauty retailers aligned with council standards.',
    },
    {
      icon: Clock,
      title: 'Trade-Ready Scheduling',
      description: 'Overnight cleans, split shifts and rapid response crews that adapt to delivery windows and VM installs.',
    },
    {
      icon: CheckCircle,
      title: 'Reporting You Can Share',
      description: 'Photo logs, KPI summaries and issue escalation aligned with centre management expectations.',
    },
  ];

const testimonials = [
    {
      quote: 'Presentation matters in retail and MOG Cleaning delivers. Shelving, floors and glass sparkle when we open, and customers notice.',
      name: 'Retail Store Manager',
      role: 'Brisbane Boutique',
    },
    {
      quote: 'Fitting rooms stay inviting with mirrors polished and fragrance balanced. It helps our team maintain a premium experience.',
      name: 'Retail Director',
      role: 'Brisbane Fashion Precinct',
    },
    {
      quote: 'They reset counters after late deliveries and keep entry glass streak free. The store feels clean, professional and ready for trade.',
      name: 'Centre Coordinator',
      role: 'Brisbane Retail Precinct',
    },
  ];

  const faqs = [
    {
      question: 'Can you clean multiple stores across Brisbane?',
      answer:
        'Yes. We service boutiques, shopping centre tenancies and pop-up activations. You receive a single point of contact and consolidated reporting for every location.',
    },
    {
      question: 'Do you work around late-night trade or floor set changes?',
      answer:
        'We schedule crews after trading, before VIP events or alongside visual merchandising resets so your store is immaculate before doors open.',
    },
    {
      question: 'Do you manage consumables and waste contracts?',
      answer:
        'We can replenish restroom supplies, provide eco-aligned chemicals and handle cardboard or waste staging with compliant manifests.',
    },
  ];

  const relatedLinks = [
    { name: 'Hospitality Venue Cleaning', path: '/services/hospitality' },
    { name: 'Office & Corporate Cleaning', path: '/services/offices' },
    { name: 'Book a Strategy Session', path: '/contact' },
  ];

  const heroBadges = [
    { icon: ShieldCheck, label: 'Centre-compliant presentation standards' },
    { icon: Clock, label: 'After-hours crews for rollouts & refits' },
    { icon: CheckCircle, label: 'Visual merchandising friendly detailing' },
  ];

  const pageTitle = 'Retail Cleaning Brisbane | Store & Shopping Centre Cleaners';
  const pageDescription = 'Retail and showroom cleaning for Brisbane brands. Impeccable sales floors, fresh fitting rooms and after-hours crews that protect your customer experience.';
  const serviceUrl = 'https://mogcleaning.com.au/services/retail';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Retail Cleaning Services',
    serviceType: 'Retail Cleaning',
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
      name: 'Retail cleaning inclusions',
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
        name: 'Retail Cleaning',
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
        image="/images/retail-cleaning-background.jpg"
        imageAlt="Retail employee preparing a Brisbane boutique for opening"
        keywords={['retail cleaning Brisbane', 'store cleaners Brisbane', 'shopping centre cleaning']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <section
        className="relative hero-section-spacing px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/retail-cleaning-background.jpg')",
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
                <ShoppingBag className="w-12 h-12 text-fresh-green mr-4" />
                <span className="text-fresh-green font-semibold text-lg">Retail Cleaning Brisbane</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Keep Your Store Floor Always On-Brand
              </h1>
              <p className="text-xl mb-6 text-white/90 drop-shadow-md">
                Keep Brisbane boutiques, showrooms and shopping centre tenancies perfectly merchandised with retail cleaning specialists focused on touchpoints, displays and high-traffic floors.
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
                  Book a Store Walkthrough
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Retail Cleaning Inclusions</h2>
            <p className="text-lg text-jet mb-6">
              Choose the tasks that protect your visual merchandising, customer experience and centre compliance. Here's what Brisbane retailers trust us with.
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

          <ServiceSidebar title="Retail Cleaning" description={pageDescription} />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Retailers Choose MOG</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              We integrate with store management, centre operations and brand teams to deliver dependable standards every trade day.
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
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What Clients Say</h2>
            <p className="text-lg text-jet max-w-3xl mx-auto">
              Store and centre managers count on us for display-ready floors, immaculate fitting rooms and responsive after-hours cleaning.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-5xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Retail Cleaning FAQs</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              Answers for store managers, visual merchandisers and centre teams coordinating Brisbane retail sites.
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
            <h2 className="text-3xl font-bold text-charcoal mb-4">Explore Complementary Services</h2>
            <p className="text-lg text-jet">Create a cohesive presentation strategy across every customer touchpoint.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Retail Experience?</h2>
            <p className="text-xl text-jet mb-8">
              Let's build a cleaning schedule that protects your brand, supports staff productivity and keeps customers returning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get My Retail Cleaning Quote
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

export default RetailCleaning;











