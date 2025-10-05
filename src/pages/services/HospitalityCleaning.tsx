import React from 'react';
import { Link } from 'react-router-dom';
import {
  Hotel,
  Wine,
  Sparkles,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  ClipboardList,
  Utensils,
  Bell,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const HospitalityCleaning: React.FC = () => {
  type InfoCard = {
    icon: LucideIcon;
    title: string;
    description: string;
  };

  const heroHighlights: InfoCard[] = [
    {
      icon: Sparkles,
      title: 'Show-stopping presentation',
      description: 'Guests arrive to polished lobbies, restaurants and event spaces every time.',
    },
    {
      icon: ShieldCheck,
      title: 'Food safety compliance',
      description: 'HACCP-aligned kitchen routines with photo logs, SWMS and chemical registers ready to share.',
    },
    {
      icon: Clock,
      title: 'Rapid turnarounds',
      description: 'Crews on standby for double sittings, late check-outs and event resets.',
    },
  ];

  const challenges: InfoCard[] = [
    {
      icon: ClipboardList,
      title: 'Front-of-house misses',
      description:
        'Fingerprints on glass, dusty décor and smudged mirrors undo all the effort you invest in guest experience.',
    },
    {
      icon: Utensils,
      title: 'Kitchen hygiene gaps',
      description:
        'Grease build-up and weak documentation leave chefs exposed to failed inspections and fines.',
    },
    {
      icon: Bell,
      title: 'Slow event turnovers',
      description:
        'Back-to-back bookings run late because the space isn’t reset fast enough between seatings or conferences.',
    },
  ];

  const solutionCards: InfoCard[] = [
    {
      icon: Sparkles,
      title: 'Signature guest presentation',
      description: 'Entrance, lobby and dining spaces detailed nightly so first impressions stay flawless.',
    },
    {
      icon: ShieldCheck,
      title: 'HACCP-aligned kitchen cleans',
      description: 'Equipment breakdowns, degreasing and chemical logs that satisfy executive chefs and auditors.',
    },
    {
      icon: Clock,
      title: 'Turnaround crews on call',
      description: 'Flexible teams handle early mornings, overnights and between-service resets without fuss.',
    },
    {
      icon: Users,
      title: 'Supervisor communication',
      description: 'Dedicated contact supplies photo reports, incident escalation and consumable oversight.',
    },
  ];

  const proofPoints: Array<InfoCard & { value: string }> = [
    {
      icon: Wine,
      value: '4.9★',
      title: 'Average guest review uplift',
      description: 'Venues report higher cleanliness scores after switching to MOG Cleaning.',
    },
    {
      icon: Clock,
      value: '15 min',
      title: 'Event reset average',
      description: 'Ballrooms and function rooms ready for the next booking in fifteen minutes.',
    },
    {
      icon: Users,
      value: '60+',
      title: 'Hospitality partners',
      description: 'Hotels, restaurants and venues across Brisbane and the Gold Coast.',
    },
  ];

  const inclusions: string[] = [
    'Front-of-house detailing for lobbies, dining rooms and guest areas',
    'HACCP-aligned kitchen and back-of-house deep cleans',
    'Event turnover crews for conferences, banquets and weddings',
    'Restroom hygiene with consumable management and odour control',
    'High dusting, glass polishing and specialty floor maintenance',
    'After-hours and overnight services that protect guest experiences',
  ];

  const testimonials = [
    {
      quote:
        'Our hotel lobby and restaurant look impeccable every day. The crew understands our brand and delivers without reminders.',
      name: 'Hotel Operations Manager',
      role: 'Luxury Hotel Brisbane',
    },
    {
      quote:
        'MOG Cleaning helps our kitchen pass audits confidently. The team handles grease, floors and equipment with precision.',
      name: 'Head Chef',
      role: 'Award-winning Restaurant',
    },
    {
      quote:
        'Event turnovers are seamless now. Rooms are reset fast, and the team communicates clearly with our coordinators.',
      name: 'Events Director',
      role: 'Conference Centre',
    },
  ];

  const faqs = [
    {
      question: 'Do you handle late-night or overnight cleans?',
      answer:
        'Yes. We work after closing hours, between seatings and overnight to ensure guests arrive to pristine spaces without disruption.',
    },
    {
      question: 'Can you provide kitchen compliance documentation?',
      answer:
        'We supply chemical registers, SWMS, photo reports and temperature logs to support HACCP and council inspections.',
    },
    {
      question: 'How quickly can you support events?',
      answer:
        'We coordinate crews for rapid turnovers between events, including additional staff for large functions and conferences.',
    },
  ];

  const relatedLinks: Array<{ name: string; path: string; description: string }> = [
    {
      name: 'Retail Programs',
      path: '/services/retail',
      description: 'Keep your front-of-house retail spaces aligned with the hospitality brand.',
    },
    {
      name: 'Office Support',
      path: '/services/offices',
      description: 'Manage back-office or corporate spaces with the same high standards.',
    },
    {
      name: 'Contact MOG Cleaning',
      path: '/contact',
      description: 'Book a site visit to plan kitchen, venue and event cleaning coverage.',
    },
  ];

  const pageTitle = 'Hospitality & Venue Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'Hospitality cleaning services in Brisbane for hotels, restaurants and venues. HACCP-aligned routines, rapid event turnarounds and premium presentation.';
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
  };

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="article"
        image="/images/hotel-cleaning-background.jpg"
        imageAlt="Hospitality venue being cleaned between events"
        url={serviceUrl}
        jsonLd={serviceSchema}
        keywords={['hospitality cleaning Brisbane', 'restaurant cleaning services', 'hotel cleaning company']}
      />

      <PageHero
        align="left"
        backgroundImage="/images/hotel-cleaning-background.jpg"
        backgroundPosition="center 42%"
        overlay="charcoal"
        eyebrow="Hospitality venues"
        eyebrowIcon={Hotel}
        title="Deliver five-star spaces every service"
        description="From lobby shine to HACCP-ready kitchens, we keep your venue guest-ready and compliant."
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
            <h2 className="section-heading__title">Where venue cleaning falls short</h2>
            <p className="section-heading__description">
              We fix the missed details that trigger negative reviews, failed inspections and stressed-out staff.
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
            <h2 className="section-heading__title">Hospitality programs that protect your reputation</h2>
            <p className="section-heading__description">
              We choreograph cleaning around guest flow, kitchen operations and event schedules so every space impresses.
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
            <h2 className="section-heading__title">Metrics venue managers track</h2>
            <p className="section-heading__description">
              We back every clean with reporting and results your operations and culinary teams can count on.
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
            <h2 className="section-heading__title">Hospitality cleaning checklist</h2>
            <p className="section-heading__description">
              Core services that keep front-of-house sparkling and back-of-house audit ready every shift.
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
            <span className="section-heading__eyebrow">Trusted by Brisbane venues</span>
            <h2 className="section-heading__title">Client stories</h2>
            <p className="section-heading__description">
              Hospitality leaders rely on MOG Cleaning for presentation, compliance and fast communication.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <HowItWorks
        eyebrow="Onboarding roadmap"
        title="Launch your hospitality cleaning program in four steps"
        description="We map schedules, compliance and event support before your first service."
      />

      <QuoteSection
        className="section-shell--muted"
        eyebrow="Ready to impress every guest?"
        title="Schedule a hospitality cleaning walkthrough"
        description="Tell us about your venue, trading hours and peak seasons so we can prepare a detailed proposal."
        bullets={[
          'HACCP documentation and supervisor oversight',
          'Turnaround crews for events and double sittings',
          'Front and back-of-house presentation every shift',
        ]}
        formTitle="Request your hospitality cleaning quote"
        formSubtitle="Share your venue layout and priorities. We’ll respond within one business day."
      />

      <section className="section-shell" id="faq">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Hospitality cleaning questions answered</h2>
            <p className="section-heading__description">
              Understand how we integrate with your kitchen crew, concierge team and event coordinators.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">More ways we help</span>
            <h2 className="section-heading__title">Connect your venues and beyond</h2>
            <p className="section-heading__description">
              Extend the same level of care to supporting spaces or contact us directly to start planning.
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

export default HospitalityCleaning;
