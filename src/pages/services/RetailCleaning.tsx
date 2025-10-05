import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
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
      description: 'Structured sanitation for food, fashion and beauty retailers aligned with council standards.',
    },
    {
      icon: Clock,
      title: 'Trade-Ready Scheduling',
      description: 'Overnight cleans, split shifts and rapid response crews adapt to delivery windows and VM installs.',
    },
    {
      icon: CheckCircle,
      title: 'Reporting You Can Share',
      description: 'Photo logs, KPI summaries and issue escalation aligned with centre management expectations.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Presentation matters in retail and MOG Cleaning delivers. Shelving, floors and glass sparkle when we open, and customers notice.',
      name: 'Retail Store Manager',
      role: 'Brisbane Boutique',
    },
    {
      quote:
        'Fitting rooms stay inviting with mirrors polished and fragrance balanced. It helps our team maintain a premium experience.',
      name: 'Retail Director',
      role: 'Brisbane Fashion Precinct',
    },
    {
      quote:
        'They reset counters after late deliveries and keep entry glass streak free. The store feels clean, professional and ready for trade.',
      name: 'Centre Coordinator',
      role: 'Brisbane Retail Precinct',
    },
  ];

  const faqs = [
    {
      question: 'Can you clean multiple stores across Brisbane?',
      answer:
        'Yes. We service boutiques, shopping centre tenancies and pop-up activations with consolidated reporting for every location.',
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

  const heroHighlights = [
    {
      icon: ShoppingBag,
      title: 'Retail presentation experts',
      description: 'Fashion, beauty, tech and food retailers supported daily.',
    },
    {
      icon: Users,
      title: 'Customer-friendly experience',
      description: 'Fresh fitting rooms, streak-free glass and pristine POS areas.',
    },
    {
      icon: Phone,
      title: 'Rapid rollout support',
      description: 'On-call cleaning for overnight floor sets, refits and pop-ups.',
    },
  ];

  const pageTitle = 'Retail Cleaning Brisbane | Store & Shopping Centre Cleaners';
  const pageDescription =
    'Retail and showroom cleaning for Brisbane brands. Impeccable sales floors, fresh fitting rooms and after-hours crews that protect your customer experience.';
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
        imageAlt="Retail cleaner preparing a store"
        keywords={['retail cleaning Brisbane', 'store cleaners', 'shopping centre cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/retail-cleaning-background.jpg"
        overlay="charcoal"
        align="center"
        eyebrow="Retail cleaning"
        eyebrowIcon={ShoppingBag}
        title="Spotless retail spaces that convert every visit."
        description="Maintain showroom shine and guest-ready amenities with crews who flex around product launches and trade windows."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a site visit
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
        eyebrow="Store-ready crews"
        title="Request your retail cleaning quote"
        description="Share your store footprint, trading hours and merchandising priorities. We’ll send a tailored plan that keeps every display and fitting room pristine."
        bullets={[
          'After-hours and before-open schedules',
          'Care for fixtures, POS and fitting rooms',
          'Support for rollouts, refits and pop-ups',
        ]}
        formTitle="Tell us about your store"
        formSubtitle="We’ll respond within one business day with your proposal."
      />

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why retailers choose us</span>
            <h2 className="section-heading__title">Deliver flawless brand experiences</h2>
            <p className="section-heading__description">
              We keep sales floors, fitting rooms and back-of-house areas pristine so teams can focus on service and sales.
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
            <span className="section-heading__eyebrow">Retail inclusions</span>
            <h2 className="section-heading__title">Every customer touchpoint covered</h2>
            <p className="section-heading__description">
              Our documented checklist keeps your store sparkling from front window to stockroom.
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
            <h2 className="section-heading__title">Retailers who rely on us</h2>
            <p className="section-heading__description">
              Hear from Brisbane retail leaders who keep their stores immaculate with MOG Cleaning.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Explore more services</span>
            <h2 className="section-heading__title">Extend spotless presentation everywhere</h2>
            <p className="section-heading__description">
              Pair retail cleaning with other MOG programs to streamline facilities management across your brand.
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
            <h2 className="section-heading__title">Retail cleaning questions</h2>
            <p className="section-heading__description">
              Find out how we manage multi-site programs, late-night trade and consumables for your stores.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto" />
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane retailers
            </span>
            <h2 className="section-heading__title text-white">Ready for showroom-perfect presentation?</h2>
            <p className="section-heading__description text-white/80">
              Schedule a walkthrough and receive a tailored retail cleaning scope, schedule and quote within 24 hours.
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

export default RetailCleaning;
