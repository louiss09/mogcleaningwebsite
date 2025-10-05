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
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';
import StickyCTABar from '../../components/StickyCTABar';

const HospitalityCleaning: React.FC = () => {
  const inclusions = [
    'Front-of-house detailing for lobbies, dining rooms and guest areas',
    'Kitchen and back-of-house deep cleans meeting HACCP standards',
    'Event turnover support with rapid reset crews',
    'Function room setup, chair/table polishing and glassware detailing',
    'Restroom hygiene with consumable management and odour control',
    'High-dusting, window cleaning and floor maintenance schedules',
    'After-hours and overnight cleans to protect guest experiences',
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: 'Show-stopping presentation',
      description: 'Guests arrive to polished spaces, spotless surfaces and premium ambience.',
    },
    {
      icon: ShieldCheck,
      title: 'Food safety compliance',
      description: 'Kitchen teams are supported with HACCP-aligned cleaning routines and documentation.',
    },
    {
      icon: Clock,
      title: 'Fast turnarounds',
      description: 'Events, double sittings and late check-outs are covered with flexible crews.',
    },
    {
      icon: CheckCircle,
      title: 'Proactive communication',
      description: 'Supervisors provide nightly reporting, photos and escalations when needed.',
    },
  ];

  const painPoints = [
    {
      icon: ClipboardList,
      title: 'Front-of-house misses',
      description: 'Fingerprints on glass doors, smudged mirrors and dusty décor impact guest reviews.',
    },
    {
      icon: Utensils,
      title: 'Back-of-house hygiene gaps',
      description: 'Kitchens fail inspections due to grease build-up and poor documentation.',
    },
    {
      icon: Bell,
      title: 'Slow response between events',
      description: 'Dining rooms and function spaces aren’t reset fast enough for back-to-back bookings.',
    },
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

  const relatedLinks = [
    { name: 'Retail Cleaning', path: '/services/retail' },
    { name: 'Office Cleaning', path: '/services/offices' },
    { name: 'Contact MOG Cleaning', path: '/contact' },
  ];

  const heroHighlights = [
    {
      icon: Wine,
      title: 'Guest-first mindset',
      description: 'Detail-focused crews who understand brand standards for hotels, venues and restaurants.',
    },
    {
      icon: ShieldCheck,
      title: 'Kitchen ready',
      description: 'Compliance-aligned cleaning routines to support chefs and food safety audits.',
    },
    {
      icon: Clock,
      title: 'Rapid resets',
      description: 'Flexible crews deliver fast turnarounds between events and services.',
    },
  ];

  const serviceWindows = [
    {
      name: 'After last seating',
      detail: 'Dining rooms, bars and restrooms detailed between dinner close and breakfast prep.',
    },
    {
      name: 'Split-shift resets',
      detail: 'Lunchtime touchpoints refreshed before evening service resumes.',
    },
    {
      name: 'Event turnovers',
      detail: 'Rapid crews flip ballrooms, conference rooms and marquees between bookings.',
    },
  ];

  const venueBoards = [
    {
      title: 'Hotels & resorts',
      body: 'Lobby ambience, guest corridors and lifts presented to five-star standards with discreet overnight crews.',
    },
    {
      title: 'Restaurants & bars',
      body: 'Front-of-house sparkle, kitchen degreasing and pass coordination to keep reviews glowing.',
    },
    {
      title: 'Event & function centres',
      body: 'Room flips, chair/table polishing and AV wipe-downs completed on precise timelines.',
    },
    {
      title: 'Clubs & entertainment venues',
      body: 'Gaming floors, lounges and amenities maintained with security aware teams.',
    },
  ];

  const pageTitle = 'Hospitality & Venue Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'Hospitality cleaning services for hotels, restaurants and venues in Brisbane. Front-of-house presentation, kitchen compliance and rapid event turnarounds.';
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
        name: 'Hospitality Cleaning',
        item: serviceUrl,
      },
    ],
  };

  return (
    <div className="pb-32">
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="service"
        image="/images/hospitality-cleaning-background.jpg"
        imageAlt="Luxury hospitality venue being cleaned"
        keywords={['hospitality cleaning Brisbane', 'hotel cleaners Brisbane', 'restaurant cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/hospitality-cleaning-background.jpg"
        backgroundPosition="center"
        overlay="charcoal"
        align="center"
        eyebrow="Hospitality cleaning"
        eyebrowIcon={Hotel}
        title="Deliver five-star moments from lobby to last seating."
        description="Detail-focused crews who protect your guest experience, support your chefs and reset venues fast between events."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a venue walkthrough
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
            <span className="section-heading__eyebrow">When operators call us</span>
            <h2 className="section-heading__title">Guest reviews drop when presentation slips</h2>
            <p className="section-heading__description">
              Hospitality leaders reach out when fingerprints, grease or slow turnovers start impacting revenue. We restore polish and pace.
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

      <section className="section-shell" id="plan">
        <div className="container-max mx-auto grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Your plan</span>
              <h2 className="section-heading__title">30 days to reviews that rave about cleanliness</h2>
              <p className="section-heading__description">
                We map your service windows, document HACCP requirements and onboard hospitality-trained teams. Nightly reporting keeps managers informed without chasing updates.
              </p>
            </div>
            <ul className="space-y-4 text-jet/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-celestial-blue-1" />
                <span>Kick-off walkthrough capturing front and back-of-house priorities plus compliance needs.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 text-celestial-blue-1" />
                <span>Dedicated supervisors coordinate with your duty managers before and after every shift.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-celestial-blue-1" />
                <span>Flexible rosters covering late closes, breakfast turnover and rapid event resets.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule my venue tour
              </Link>
              <a href="tel:+61411820650" className="btn-secondary">
                Speak with hospitality support
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {serviceWindows.map((window) => (
              <div key={window.name} className="rounded-[32px] border border-white/40 bg-white p-6 text-center shadow-sm">
                <h3 className="text-lg font-semibold text-charcoal">{window.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-jet/80">{window.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks
        eyebrow="How onboarding works"
        title="Four steps to five-star presentation"
        description="From compliance audit to live reporting, our process keeps GMs, chefs and event teams aligned from day one."
      />

      <section className="section-shell section-shell--muted" id="venues">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Venue coverage</span>
            <h2 className="section-heading__title">Programs tuned to every hospitality environment</h2>
            <p className="section-heading__description">
              Hotels, fine dining and event centres receive dedicated crews, tailored checklists and reporting that suits their brand standards.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {venueBoards.map((board) => (
              <div key={board.title} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-charcoal">{board.title}</h3>
                <p className="mt-3 leading-relaxed text-jet/80">{board.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Proof for owners & chefs</span>
            <h2 className="section-heading__title">Hospitality brands that trust MOG Cleaning</h2>
            <p className="section-heading__description">
              Hear from operators who now enjoy glowing guest feedback, easier inspections and faster event flips.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <QuoteSection
        eyebrow="Start your program"
        title="Request your hospitality cleaning proposal"
        description="Share your service windows, kitchen requirements and event schedule. We’ll send a tailored scope, onboarding plan and pricing within 24 hours."
        bullets={[
          'HACCP-aligned cleaning documentation',
          'Front and back-of-house presentation teams',
          'Rapid response crews for events and VIPs',
        ]}
        formTitle="Tell us about your venue"
        formSubtitle="Your dedicated hospitality contact will respond within one business day."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why venues stay</span>
            <h2 className="section-heading__title">Outcomes for your guests, chefs and coordinators</h2>
            <p className="section-heading__description">
              Consistent presentation, compliant kitchens and rapid resets increase guest satisfaction and repeat bookings.
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

      <section className="section-shell section-shell--muted" id="inclusions">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">What’s included</span>
            <h2 className="section-heading__title">Hospitality cleaning checklist</h2>
            <p className="section-heading__description">
              Every visit follows a documented scope so front-of-house sparkle and kitchen hygiene never slip.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {inclusions.map((inclusion) => (
              <div key={inclusion} className="service-item p-6">
                <p className="font-medium text-charcoal">{inclusion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="faqs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Hospitality cleaning FAQs</h2>
            <p className="section-heading__description">
              Clarify how we work around service times, manage compliance and support events before you onboard.
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
              From offices to retail, our teams deliver the same polished experience across Brisbane.
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
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane venues
            </span>
            <h2 className="section-heading__title text-white">Ready to elevate every guest touchpoint?</h2>
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

      <StickyCTABar
        title="Lock in five-star cleanliness"
        description="Schedule a walkthrough today and secure your tailored hospitality program."
        primaryLabel="Book my walkthrough"
        primaryHref="/contact"
        secondaryLabel="Call 0411 820 650"
        secondaryHref="tel:+61411820650"
      />
    </div>
  );
};

export default HospitalityCleaning;
