import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Tag,
  Sparkles,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  ClipboardList,
  Package,
  Camera,
} from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const RetailCleaning: React.FC = () => {
  const inclusions = [
    'Sales floor detailing with dust-free fixtures and polished floors',
    'Change room and restroom sanitising with consumable restocking',
    'Glass, display case and mirror cleaning for streak-free presentation',
    'Back-of-house storage and stockroom organisation support',
    'High dusting for lighting, signage and visual merchandising',
    'After-hours cleaning to protect shopper experiences',
    'Periodic deep cleans, carpet care and window polishing',
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: 'Visual merchandising ready',
      description: 'Displays, mirrors and fitting rooms stay pristine to convert browsing into sales.',
    },
    {
      icon: ShieldCheck,
      title: 'Brand-standard presentation',
      description: 'National retailers and boutiques get consistent finishes across every store.',
    },
    {
      icon: Clock,
      title: 'Flexible scheduling',
      description: 'After-hours and split shifts avoid disrupting trading or visual merchandising resets.',
    },
    {
      icon: CheckCircle,
      title: 'Accountable reporting',
      description: 'Photo logs and supervisor check-ins keep support offices in the loop.',
    },
  ];

  const painPoints = [
    {
      icon: ClipboardList,
      title: 'Dusty shelves & fixtures',
      description: 'Product displays quickly collect dust, dulling the impact of your visual merchandising.',
    },
    {
      icon: Package,
      title: 'Back rooms overlooked',
      description: 'Stockrooms become cluttered and unhygienic, slowing replenishment and online order fulfilment.',
    },
    {
      icon: Camera,
      title: 'Inconsistent brand image',
      description: 'Multi-site managers see different results each store visit, making it hard to enforce standards.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Store presentation has improved dramatically. The team respects our displays and communicates issues quickly.',
      name: 'Retail State Manager',
      role: 'National Fashion Brand',
    },
    {
      quote:
        'Our change rooms and back-of-house areas have never looked better. The crew works around deliveries seamlessly.',
      name: 'Store Manager',
      role: 'Flagship Retail Store',
    },
    {
      quote:
        'Window displays remain streak free, even during busy promo periods. It supports our conversion goals.',
      name: 'Marketing Lead',
      role: 'Luxury Retailer',
    },
  ];

  const faqs = [
    {
      question: 'Do you service shopping centres and standalone stores?',
      answer:
        'Yes. We work with large shopping centre retailers, boutiques and multi-site brands across Brisbane and South East Queensland.',
    },
    {
      question: 'Can you clean after trading hours?',
      answer:
        'Absolutely. Our crews operate after closing, before opening and during stocktake nights to keep stores ready without interrupting customers.',
    },
    {
      question: 'Do you provide consumable restocking?',
      answer:
        'We manage consumables for change rooms and restrooms, including paper goods, hand wash and sanitiser, tracked via your monthly report.',
    },
  ];

  const relatedLinks = [
    { name: 'Hospitality Cleaning', path: '/services/hospitality' },
    { name: 'Office Cleaning', path: '/services/offices' },
    { name: 'Contact MOG Cleaning', path: '/contact' },
  ];

  const heroHighlights = [
    {
      icon: Tag,
      title: 'Retail presentation experts',
      description: 'We understand visual merchandising requirements for national and boutique brands.',
    },
    {
      icon: ShieldCheck,
      title: 'Careful with fixtures',
      description: 'Trained crews protect your displays, props and premium finishes.',
    },
    {
      icon: Clock,
      title: 'After-hours crews',
      description: 'Cleaners operate around trading, pack-down and promotional changeovers.',
    },
  ];

  const pageTitle = 'Retail & Showroom Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'Retail cleaning for boutiques, shopping centre stores and showrooms across Brisbane. Pristine displays, spotless change rooms and efficient back-of-house support.';
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
      itemListElement: inclusions.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item,
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
        imageAlt="Retail store being cleaned after hours"
        keywords={['retail cleaning Brisbane', 'store cleaners brisbane', 'showroom cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/retail-cleaning-background.jpg"
        backgroundPosition="center 40%"
        overlay="charcoal"
        align="center"
        eyebrow="Retail cleaning"
        eyebrowIcon={ShoppingBag}
        title="Retail spaces that sell more with every spotless detail."
        description="Protect your brand experience with crews who understand visual merchandising, customer flow and stockroom needs."
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

      <HeroHighlightBand items={heroHighlights} />

      <section className="section-shell" id="pain-points">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">What’s at stake</span>
            <h2 className="section-heading__title">Retail cleaning frustrations we solve</h2>
            <p className="section-heading__description">
              From boutique stores to national brands, MOG Cleaning steps in when presentation and operations can’t afford to slip.
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
        <div className="container-max mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="glass-panel" data-variant="frost">
            <img
              src="/images/retail-cleaning-detail.jpg"
              alt="Cleaner wiping down retail display"
              className="h-full w-full rounded-[32px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Our approach</span>
              <h2 className="section-heading__title">Brand-aligned cleaning for stores and showrooms</h2>
              <p className="section-heading__description">
                We work with your retail operations team to keep displays, fitting rooms and stock areas running smoothly while you focus on customers.
              </p>
            </div>
            <ul className="space-y-4 text-jet/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Detailed scopes for front-of-house, fitting rooms and back-of-house operations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>After-hours scheduling and key management keep stores secure and ready for opening.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Reporting includes photo logs for head office visibility.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Book a store walkthrough
              </Link>
              <a href="tel:+61411820650" className="btn-secondary">
                Call 0411 820 650
              </a>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks
        eyebrow="Implementation"
        title="Four steps to launch your retail cleaning program"
        description="A streamlined process keeps your support office, store managers and operations team aligned."
      />

      <QuoteSection
        eyebrow="Start today"
        title="Request your retail cleaning proposal"
        description="Tell us about your store footprint, trading hours and compliance expectations. We’ll provide a tailored scope within 24 hours."
        bullets={[
          'After-hours crews for uninterrupted trading',
          'Store-specific checklists and reporting',
          'Support for visual merchandising resets',
        ]}
        formTitle="Tell us about your store"
        formSubtitle="We’ll respond within one business day with next steps."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Benefits</span>
            <h2 className="section-heading__title">Why retail brands choose MOG Cleaning</h2>
            <p className="section-heading__description">
              We help store teams focus on sales by removing cleaning headaches and protecting brand standards.
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

      <section className="section-shell section-shell--muted" id="inclusions">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">What’s included</span>
            <h2 className="section-heading__title">Retail cleaning checklist</h2>
            <p className="section-heading__description">
              Every service is mapped to your store layout so presentation, change rooms and stock areas stay on point.
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

      <section className="section-shell" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Results</span>
            <h2 className="section-heading__title">What Brisbane retailers say</h2>
            <p className="section-heading__description">
              Hear from state and store managers who rely on MOG Cleaning to keep stores customer-ready.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto section-shell" />

      <section className="section-shell section-shell--muted" id="related">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Explore more programs</span>
            <h2 className="section-heading__title">Extend spotless standards everywhere</h2>
            <p className="section-heading__description">
              Keep your entire brand ecosystem aligned by partnering with MOG Cleaning across venues and offices.
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

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane retailers
            </span>
            <h2 className="section-heading__title text-white">Ready to keep shoppers impressed?</h2>
            <p className="section-heading__description text-white/80">
              Book a walkthrough and receive a tailored retail cleaning program within 24 hours.
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

export default RetailCleaning;
