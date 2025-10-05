import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  ClipboardCheck,
  Sparkles,
  ClipboardList,
  Presentation,
} from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const OfficesCleaning: React.FC = () => {
  const inclusions = [
    'Daily and weekly presentation cleans aligned to your office hours',
    'Desk, workstation and hot-desk sanitising with detail on shared equipment',
    'Boardroom and meeting room resets including AV wipes and table dressing',
    'Kitchen, break room and staff amenity hygiene with appliance detailing',
    'Reception, lobby and client lounge presentation with dust-free surfaces',
    'Washroom deep cleaning, consumable restocking and touchpoint disinfection',
    'Hard floor mopping, buffing and entry mat maintenance for high-traffic zones',
    'Carpet vacuuming, spot treatments and soft furnishing dusting',
    'Waste, recycling and confidential bin rotation with consumable management',
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Support staff productivity',
      description: 'Healthy, tidy workspaces reduce sick days and keep your team focused on the work that matters.',
    },
    {
      icon: ShieldCheck,
      title: 'Impress clients & stakeholders',
      description: 'Reception areas, boardrooms and lifts stay presentation ready for every visitor walkthrough.',
    },
    {
      icon: Clock,
      title: 'Zero-disruption scheduling',
      description: 'After-hours cleans, weekend support and rapid response crews when trading hours shift.',
    },
    {
      icon: CheckCircle,
      title: 'Accountable reporting',
      description: 'Supervisor checklists, photo reporting and KPI reviews keep every visit measurable.',
    },
  ];

  const painPoints = [
    {
      icon: ClipboardList,
      title: 'Desks still dusty at 9am',
      description: 'Teams arrive to messy workstations and start the day frustrated before the first meeting.',
    },
    {
      icon: Clock,
      title: 'Slow turnaround on issues',
      description: 'Overflowing bins or spills linger because your current provider takes days to respond.',
    },
    {
      icon: Presentation,
      title: 'Embarrassing client walkthroughs',
      description: 'Boardrooms and reception areas aren’t inspection ready when investors or executives arrive.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Our workplace looks presentation-ready every morning. MOG Cleaning is reliable, detail-focused and our team notices the difference.',
      name: 'Office Client',
      role: 'Brisbane Corporate HQ',
    },
    {
      quote:
        'Lift lobbies, reception counters and glass stay dust free all day. Communication is proactive whenever supplies run low.',
      name: 'Facilities Manager',
      role: 'Brisbane Commercial Tower',
    },
    {
      quote:
        'Kitchenettes and breakout areas smell fresh without being overpowering. Staff keep remarking on how consistently clean everything is.',
      name: 'People & Culture Lead',
      role: 'Brisbane Workplace Hub',
    },
  ];

  const faqs = [
    {
      question: 'How do you onboard a new office location?',
      answer:
        'We start with a walkthrough to capture your security requirements, compliance documents and preferred schedule. From there you receive a tailored scope of works, SWMS and a crew playbook before the first clean.',
    },
    {
      question: 'Do you supply consumables and bathroom supplies?',
      answer:
        'Yes. We can manage consumables such as bin liners, hand soap, paper products and sanitiser. Usage is tracked in your monthly report so budgets stay predictable.',
    },
    {
      question: 'Can you respond to urgent or one-off office cleans?',
      answer:
        'Our Brisbane team keeps after-hours crews on standby for events, floods, post-fitout cleans or rapid disinfection. Call the office hotline for same-day assistance.',
    },
  ];

  const relatedLinks = [
    { name: 'Medical Facility Cleaning', path: '/services/health' },
    { name: 'Retail & Showroom Cleaning', path: '/services/retail' },
    { name: 'About MOG Cleaning', path: '/about' },
  ];

  const heroHighlights = [
    {
      icon: Users,
      title: 'Office specialists',
      description: 'Teams who understand corporate access, presentation and executive areas.',
    },
    {
      icon: ClipboardCheck,
      title: 'Documented scope',
      description: 'Detailed checklists and KPI tracking for every workspace and floor.',
    },
    {
      icon: Phone,
      title: 'Rapid support line',
      description: 'Direct escalation channel for last-minute board meetings or visitors.',
    },
  ];

  const pageTitle = 'Office Cleaning Brisbane | Professional Commercial Office Cleaners';
  const pageDescription =
    'Professional office cleaning in Brisbane tailored for corporate offices, coworking spaces, and business centres. Flexible schedules, trained staff, and consistent quality.';
  const serviceUrl = 'https://mogcleaning.com.au/services/offices';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Office Cleaning Services',
    serviceType: 'Office Cleaning',
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
      name: 'Office cleaning inclusions',
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
        name: 'Office Cleaning',
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
        image="/images/office-cleaning-background.jpg"
        imageAlt="Clean Brisbane office workspace"
        keywords={['office cleaning Brisbane', 'commercial office cleaners', 'corporate cleaning services Brisbane']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/office-cleaning-background.jpg"
        backgroundPosition="center 42%"
        overlay="charcoal"
        align="center"
        eyebrow="Office cleaning"
        eyebrowIcon={Building2}
        title="Brisbane offices that look investor-ready every morning."
        description="Keep suites, meeting rooms and breakout spaces inspection-ready with a program tuned to your building."
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
            <span className="section-heading__eyebrow">Your challenges</span>
            <h2 className="section-heading__title">The reasons facility managers switch to us</h2>
            <p className="section-heading__description">
              Office managers come to MOG Cleaning when inconsistency, poor presentation and slow responses start costing them credibility.
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
              src="/images/cleaning-team.jpg"
              alt="Office cleaners detailing a Brisbane boardroom"
              className="h-full w-full rounded-[32px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Our solution</span>
              <h2 className="section-heading__title">Structured office cleaning that protects your reputation</h2>
              <p className="section-heading__description">
                Dedicated corporate crews, supervisor audits and photo reporting keep your leadership team confident the moment they walk into the building.
              </p>
            </div>
            <ul className="space-y-4 text-jet/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Custom scope by floor, including executive suites and shared amenities.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>After-hours scheduling that keeps your staff productive and undisturbed.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Inductions, SWMS and insurance certificates supplied before the first shift.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Book your walkthrough
              </Link>
              <a href="tel:+61411820650" className="btn-secondary">
                Call 0411 820 650
              </a>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks
        eyebrow="Your onboarding path"
        title="Four steps from quote request to quality assured cleaning"
        description="Every office client follows the same proven process so you know exactly what happens before day one."
      />

      <QuoteSection
        eyebrow="Start here"
        title="Request your office cleaning proposal"
        description="Share your floor count, key access notes and current pain points. We’ll prepare a tailored scope, onboarding timeline and pricing within 24 hours."
        bullets={[
          'Site walkthrough before the first clean',
          'Police-checked, uniformed crews',
          'Supervisor QA visits with photo reports',
        ]}
        formTitle="Tell us about your office"
        formSubtitle="We’ll respond within one business day with next steps."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why businesses switch to us</span>
            <h2 className="section-heading__title">Outcomes for your people and presentation</h2>
            <p className="section-heading__description">
              We tailor programs that support productivity, impress stakeholders and keep your compliance documentation audit ready.
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
            <h2 className="section-heading__title">Comprehensive office cleaning checklist</h2>
            <p className="section-heading__description">
              Every visit follows a documented scope so reception, workspaces and amenities stay spotless without chasing your cleaners.
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

      <section className="section-shell" id="results">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Client stories</span>
            <h2 className="section-heading__title">Brisbane offices that trust MOG Cleaning</h2>
            <p className="section-heading__description">
              Hear from corporate partners who rely on us for consistent presentation and responsive support.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto section-shell" />

      <section className="section-shell section-shell--muted" id="related">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Need something else?</span>
            <h2 className="section-heading__title">Explore related programs</h2>
            <p className="section-heading__description">
              We service a wide range of commercial environments with the same responsive, accountable approach.
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
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane offices
            </span>
            <h2 className="section-heading__title text-white">Ready for a spotless workplace?</h2>
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

export default OfficesCleaning;
