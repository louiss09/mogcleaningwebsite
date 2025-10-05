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
import type { LucideIcon } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const RetailCleaning: React.FC = () => {
  type InfoCard = {
    icon: LucideIcon;
    title: string;
    description: string;
  };

  const heroHighlights: InfoCard[] = [
    {
      icon: Sparkles,
      title: 'Visual merchandising ready',
      description: 'Displays, mirrors and fitting rooms stay pristine to convert browsing into sales.',
    },
    {
      icon: ShieldCheck,
      title: 'Brand-standard presentation',
      description: 'Boutiques and national retailers get consistent finishes across every store.',
    },
    {
      icon: Clock,
      title: 'Flexible scheduling',
      description: 'After-hours crews work around deliveries, stocktake and trading peaks.',
    },
  ];

  const challenges: InfoCard[] = [
    {
      icon: ClipboardList,
      title: 'Dusty shelves & fixtures',
      description:
        'Product displays quickly collect dust, dulling the impact of your visual merchandising.',
    },
    {
      icon: Package,
      title: 'Back rooms overlooked',
      description:
        'Stockrooms become cluttered and unhygienic, slowing replenishment and online order fulfilment.',
    },
    {
      icon: Camera,
      title: 'Inconsistent brand image',
      description:
        'Multi-site managers see different results store-to-store, making it hard to enforce standards.',
    },
  ];

  const solutionCards: InfoCard[] = [
    {
      icon: Sparkles,
      title: 'Sales floor shine',
      description: 'Shelving, flooring and visual merchandising detailed nightly to keep shoppers inspired.',
    },
    {
      icon: ShieldCheck,
      title: 'Brand playbooks for every site',
      description: 'Store-specific checklists, photo reporting and handover notes keep consistency high.',
    },
    {
      icon: Clock,
      title: 'Trading-friendly schedules',
      description: 'Late-night, early-morning or split shifts ensure no disruption to staff or customers.',
    },
    {
      icon: Users,
      title: 'Supervisor partnership',
      description: 'One contact manages stocktake nights, promo launches and rapid response call-outs.',
    },
  ];

  const proofPoints: Array<InfoCard & { value: string }> = [
    {
      icon: Tag,
      value: '+18%',
      title: 'VM compliance uplift',
      description: 'Retail partners report higher mystery shop scores after onboarding.',
    },
    {
      icon: Clock,
      value: '7 days',
      title: 'Rollout window',
      description: 'Multi-site launches scheduled within a week across South East Queensland.',
    },
    {
      icon: Users,
      value: '50+',
      title: 'Stores serviced',
      description: 'From flagship boutiques to high-volume big-box retailers.',
    },
  ];

  const inclusions: string[] = [
    'Sales floor detailing with dust-free fixtures and polished floors',
    'Change room and restroom sanitising with consumable restocking',
    'Glass, display case and mirror cleaning for streak-free presentation',
    'Back-of-house storage and stockroom organisation support',
    'High dusting for lighting, signage and visual merchandising',
    'Periodic deep cleans, carpet care and window polishing',
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

  const relatedLinks: Array<{ name: string; path: string; description: string }> = [
    {
      name: 'Hospitality Venues',
      path: '/services/hospitality',
      description: 'Align your dining or bar spaces with retail brand standards.',
    },
    {
      name: 'Office Support',
      path: '/services/offices',
      description: 'Keep HQ showrooms or support offices spotless alongside your stores.',
    },
    {
      name: 'Contact MOG Cleaning',
      path: '/contact',
      description: 'Book a rollout consultation and plan your next campaign clean.',
    },
  ];

  const pageTitle = 'Retail & Showroom Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'Retail cleaning services that keep sales floors, fitting rooms and stockrooms immaculate with flexible schedules and brand-standard reporting.';
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
  };

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="article"
        image="/images/retail-cleaning-background.jpg"
        imageAlt="Retail store being detailed after hours"
        url={serviceUrl}
        jsonLd={serviceSchema}
        keywords={['retail cleaning Brisbane', 'store cleaning services', 'showroom cleaning company']}
      />

      <PageHero
        align="left"
        backgroundImage="/images/retail-cleaning-background.jpg"
        backgroundPosition="center 48%"
        overlay="charcoal"
        eyebrow="Retail &amp; showrooms"
        eyebrowIcon={ShoppingBag}
        title="Keep every store on-brand and spotless"
        description="We protect the shopper experience with detailed cleaning that supports merchandising and conversion."
        actions={
          <div className="hero-minimal__cta-group">
            <Link to="/contact" className="btn-primary">
              Request a quote
            </Link>
            <a href="tel:+61411820650" className="btn-secondary">
              Call 0411 820 650
            </a>
          </div>
        }
      />

      <HeroHighlightBand items={heroHighlights} />

      <section className="section-shell section-shell--muted" id="challenges">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">Pain points we remove</span>
            <h2 className="section-heading__title">What slows retail teams down</h2>
            <p className="section-heading__description">
              We eliminate the cleaning gaps that dent brand perception, slow replenishment and hurt conversion.
            </p>
          </div>
          <div className="feature-grid" data-columns="3">
            {challenges.map((item) => (
              <div key={item.title} className="feature-grid-card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-celestial-blue-1/12 text-celestial-blue-1">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="text-jet/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="solutions">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">How we respond</span>
            <h2 className="section-heading__title">Retail cleaning that amplifies your brand</h2>
            <p className="section-heading__description">
              From the sales floor to the stockroom, we align routines with your merchandising calendar and service expectations.
            </p>
          </div>
          <div className="feature-grid" data-columns="4">
            {solutionCards.map((item) => (
              <div key={item.title} className="feature-grid-card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fresh-green/15 text-fresh-green">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="text-jet/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="proof">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Proof &amp; reassurance</span>
            <h2 className="section-heading__title">Metrics retail leaders track</h2>
            <p className="section-heading__description">
              Consistent reporting keeps head office confident every store is delivering the same experience.
            </p>
          </div>
          <div className="stat-grid" data-columns="3">
            {proofPoints.map((point) => (
              <div key={point.title} className="stat-card" data-align="center">
                <div className="stat-card__icon">
                  <point.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="stat-card__value">{point.value}</div>
                <div className="stat-card__label">{point.title}</div>
                <p className="stat-card__description">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--brand" id="inclusions">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">What&apos;s included</span>
            <h2 className="section-heading__title">Retail cleaning checklist</h2>
            <p className="section-heading__description">
              Every visit covers these essentials with the option to layer in campaign-specific requirements.
            </p>
          </div>
          <ul className="checklist-grid">
            {inclusions.map((item) => (
              <li key={item} className="checklist-grid__item">
                <CheckCircle aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Trusted by Brisbane retailers</span>
            <h2 className="section-heading__title">Client stories</h2>
            <p className="section-heading__description">
              Retail operations teams choose MOG Cleaning for detail, communication and flexibility.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <HowItWorks
        eyebrow="Onboarding roadmap"
        title="Launch your retail cleaning rollout in four steps"
        description="We capture store specifics, merchandising calendars and reporting needs before launch."
      />

      <QuoteSection
        className="section-shell--muted"
        eyebrow="Ready for a store refresh?"
        title="Book a retail cleaning consultation"
        description="Share your store formats, trading hours and campaign schedule so we can prepare a rollout plan."
        bullets={[
          'Store-specific playbooks and photo reporting',
          'Flexible after-hours and stocktake support',
          'Dedicated supervisor for multi-site communication',
        ]}
        formTitle="Request your retail cleaning quote"
        formSubtitle="Tell us about your network and goals. We’ll respond within one business day."
      />

      <section className="section-shell" id="faq">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Retail cleaning questions answered</h2>
            <p className="section-heading__description">
              Find out how we support retail teams, from shopping centres to boutiques and pop-ups.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">More ways we help</span>
            <h2 className="section-heading__title">Coordinate every touchpoint</h2>
            <p className="section-heading__description">
              Keep shoppers, diners and staff delighted across your entire footprint or reach out to plan next steps.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.name} to={link.path} className="feature-grid-card group">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-lg font-semibold text-charcoal">{link.name}</span>
                  <ArrowRight className="h-5 w-5 text-celestial-blue-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
                <p className="text-sm leading-relaxed text-jet/80">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailCleaning;
