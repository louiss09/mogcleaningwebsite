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
import ChecklistPreview from '../../components/ChecklistPreview';
import FeatureTicker from '../../components/FeatureTicker';

const RetailCleaning: React.FC = () => {
  const checklistPreview = [
    {
      icon: ShoppingBag,
      title: 'Sales floor polish',
      description: 'Keep displays and pathways camera-ready every day.',
      items: [
        'Shelving, fixtures and product plinths dusted and detailed',
        'High-gloss floors vacuumed, mopped or buffed for a showroom shine',
        'Glass, mirrors and display cases polished streak-free',
      ],
    },
    {
      icon: Sparkles,
      title: 'Fitting rooms & amenities',
      description: 'Spaces that turn browsers into buyers.',
      items: [
        'Change rooms sanitised and restocked with consumables',
        'Restrooms cleaned with odour control and amenity checks',
        'Fragrance-neutral treatments keep enclosed areas inviting',
      ],
    },
    {
      icon: Package,
      title: 'Back-of-house & logistics',
      description: 'Support replenishment, click-and-collect and deliveries.',
      items: [
        'Stockrooms organised with floors swept and benches sanitised',
        'Waste dock coordination, recycling and cardboard breakdown',
        'High dusting for lighting, signage and storage mezzanines',
      ],
    },
    {
      icon: Tag,
      title: 'Trading rhythms & campaigns',
      description: 'Flexible support for launches, sales and extended trading.',
      items: [
        'After-hours cleans aligned to trade and visual merchandising refreshes',
        'Seasonal deep cleans, carpet care and window polishing',
        'Day-porters or extra crews for sales events and holiday queues',
      ],
    },
  ];

  const checklistHighlights = checklistPreview.flatMap((group) => group.items);

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

  const featureTickerItems = [
    {
      icon: CheckCircle,
      title: 'Visual merchandising walkthrough',
      description: 'Capture fixtures, finishes and launch schedules with VM and store leads.',
    },
    {
      icon: Users,
      title: 'Zone-specific crews',
      description: 'Dedicated teams for sales floors, fitting rooms and back-of-house areas.',
    },
    {
      icon: Clock,
      title: 'After-hours & day porters',
      description: 'Support launches, sales events and extended trading without disruption.',
    },
    {
      icon: Package,
      title: 'Logistics-ready support',
      description: 'Stockrooms, docks and click-and-collect areas stay organised and hygienic.',
    },
    {
      icon: Sparkles,
      title: 'Launch-ready finishes',
      description: 'Streak-free windows, polished floors and refreshed change rooms daily.',
    },
  ];

  const retailSupport = [
    {
      name: 'Flagship & concept stores',
      description: 'Large-format spaces with multiple display zones, event activations and VIP areas.',
    },
    {
      name: 'Boutique retailers',
      description: 'Detail cleaning for premium fittings, delicate materials and limited storage back rooms.',
    },
    {
      name: 'Shopping centre tenancies',
      description: 'Coordinated access with centre management, waste docks and security requirements.',
    },
    {
      name: 'Automotive & lifestyle showrooms',
      description: 'High-gloss flooring, product plinths and customer lounges maintained for high-value purchases.',
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
      itemListElement: checklistHighlights.map((item) => ({
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
        imageAlt="Retail store being cleaned before opening"
        keywords={['retail cleaning Brisbane', 'store cleaners', 'showroom cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/retail-cleaning-background.jpg"
        backgroundPosition="center"
        overlay="charcoal"
        align="center"
        eyebrow="Retail cleaning"
        eyebrowIcon={ShoppingBag}
        title="Keep every display, fitting room and back room retail ready."
        description="Retail-trained cleaners who protect your visual merchandising, support staff and keep brand standards consistent."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a store walkthrough
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
            <span className="section-heading__eyebrow">Why retailers switch</span>
            <h2 className="section-heading__title">Dust, streaks and clutter cost conversions</h2>
            <p className="section-heading__description">
              Retail leaders contact us when presentation slips or stockrooms become chaos. We restore showroom polish without slowing trade.
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

      <FeatureTicker items={featureTickerItems} />

      <HowItWorks
        eyebrow="How onboarding works"
        title="Four steps to retail-ready presentation"
        description="From scope capture to live reporting, our process keeps store managers and head office aligned."
      />

      <section className="section-shell section-shell--muted" id="retail-support">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Store formats</span>
            <h2 className="section-heading__title">Programs for every retail footprint</h2>
            <p className="section-heading__description">
              Flagship stores, boutiques and showrooms all receive tailored checklists, access plans and reporting cadence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {retailSupport.map((support) => (
              <div key={support.name} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-charcoal">{support.name}</h3>
                <p className="mt-3 leading-relaxed text-jet/80">{support.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Proof for your retail ops team</span>
            <h2 className="section-heading__title">Brands that trust MOG Cleaning</h2>
            <p className="section-heading__description">
              Hear how multi-site managers describe the uplift in store presentation and communication.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <QuoteSection
        eyebrow="Start your program"
        title="Request your retail cleaning proposal"
        description="Share your store count, trading hours and current challenges. We’ll deliver a tailored scope, onboarding plan and pricing within 24 hours."
        bullets={[
          'Retail-trained crews with security clearances',
          'After-hours rosters and day porter options',
          'Photo reporting for head office visibility',
        ]}
        formTitle="Tell us about your stores"
        formSubtitle="Your dedicated retail contact will respond within one business day."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why retailers stay</span>
            <h2 className="section-heading__title">Outcomes for your team, customers and brand</h2>
            <p className="section-heading__description">
              Consistent presentation, organised back rooms and confident staff keep conversion rates and NPS high.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="feature-grid-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{benefit.title}</h3>
                <p className="leading-relaxed text-jet/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChecklistPreview
        id="inclusions"
        eyebrow="What’s included"
        title="Retail cleaning preview"
        description="Highlights from the tailored programs we deliver for boutiques, multi-site retailers and showrooms."
        note="This preview shows popular inclusions. After our walkthrough we build a checklist around your trading hours, merchandising calendar and back-of-house workflow."
        categories={checklistPreview}
      />

      <section className="section-shell" id="faqs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Retail cleaning FAQs</h2>
            <p className="section-heading__description">
              Learn how we coordinate with centre management, access requirements and after-hours schedules before you engage us.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <section className="section-shell section-shell--muted" id="related">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Need something else?</span>
            <h2 className="section-heading__title">Explore other services</h2>
            <p className="section-heading__description">
              From hospitality to offices, we bring the same attentive crews and transparent reporting to every site.
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
              <Sparkles className="h-4 w-4" /> Trusted by national retailers
            </span>
            <h2 className="section-heading__title text-white">Ready to unlock higher conversion rates?</h2>
            <p className="section-heading__description text-white/80">
              Book a walkthrough and receive a tailored scope, pricing and onboarding plan within 24 hours.
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
