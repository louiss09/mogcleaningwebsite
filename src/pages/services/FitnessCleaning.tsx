import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  Droplets,
  Timer,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  SprayCan,
  ClipboardList,
} from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const FitnessCleaning: React.FC = () => {
  const inclusions = [
    'Daily equipment sanitising with focus on high-contact surfaces',
    'Locker room and shower disinfecting with odour control treatments',
    'Reception, retail and lounge presentation including mirrors and glass',
    'Group fitness studio resets with mat and prop sanitising',
    'Air handling vents dusting and deodorising',
    'Towel service coordination and consumable restocking',
    'Steam cleaning schedules for rubber flooring and high-traffic mats',
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Health-first hygiene',
      description: 'Hospital-grade disinfectants and colour-coded systems reduce cross-contamination risk.',
    },
    {
      icon: Users,
      title: 'Member experience focus',
      description: 'Front-of-house stays inviting so members feel confident renewing their memberships.',
    },
    {
      icon: Timer,
      title: 'Always on time',
      description: 'Nightly, early morning or split-shift cleans cover peak class and training schedules.',
    },
    {
      icon: CheckCircle,
      title: 'Documented compliance',
      description: 'SWMS, chemical registers and inspection reports ready for council or franchise reviews.',
    },
  ];

  const painPoints = [
    {
      icon: ClipboardList,
      title: 'Equipment still greasy',
      description: 'Members complain about sweat marks and residue left on benches and cardio machines.',
    },
    {
      icon: Droplets,
      title: 'Lingering odours in changerooms',
      description: 'Poor ventilation and inconsistent sanitising leave bathrooms smelling unpleasant.',
    },
    {
      icon: SprayCan,
      title: 'No proof of sanitisation',
      description: 'Franchise audits demand evidence of disinfectants used and cleaning frequency.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Our members constantly comment on how fresh the gym smells. Equipment is spotless and the changerooms are maintained better than ever.',
      name: 'Gym Owner',
      role: 'Boutique Fitness Studio',
    },
    {
      quote:
        'We run classes back-to-back and need fast turnovers. MOG Cleaning’s crew works around our timetable without disrupting instructors.',
      name: 'Studio Manager',
      role: 'Pilates & Barre Studio',
    },
    {
      quote:
        'Council inspections are a breeze now. The documentation and chemical registers are always up to date.',
      name: 'Franchise Operations Lead',
      role: 'National Gym Brand',
    },
  ];

  const faqs = [
    {
      question: 'Can you clean during off-peak windows?',
      answer:
        'Yes. We schedule around your class timetable, offering early morning, midday lull and overnight cleans so members always arrive to a fresh space.',
    },
    {
      question: 'Do you manage sweat odour control?',
      answer:
        'We implement ventilation cleaning, deodorising treatments and antibacterial products that neutralise odours without overpowering fragrances.',
    },
    {
      question: 'How do you handle shared equipment hygiene?',
      answer:
        'Our colour-coded system separates cardio, strength and studio equipment. We disinfect between sessions and provide photo documentation for franchise audits.',
    },
  ];

  const relatedLinks = [
    { name: 'Hospitality Cleaning', path: '/services/hospitality' },
    { name: 'Office Cleaning', path: '/services/offices' },
    { name: 'Contact MOG Cleaning', path: '/contact' },
  ];

  const heroHighlights = [
    {
      icon: Droplets,
      title: 'Sweat-neutralising routines',
      description: 'Deodorising and antibacterial treatments tailored to changerooms and studios.',
    },
    {
      icon: Timer,
      title: 'Schedule flexibility',
      description: 'Crews operate around late closes, early opens and weekend competitions.',
    },
    {
      icon: Sparkles,
      title: 'Equipment-safe products',
      description: 'Gym-friendly solutions that protect rubber flooring, chrome and upholstery.',
    },
  ];

  const memberJourney = [
    {
      title: 'Pre-dawn reset',
      description: 'Equipment sanitised, cardio screens polished and bins cleared before the first 5am class.',
    },
    {
      title: 'Midday refresh',
      description: 'Changerooms deodorised, towels replenished and mirrors detailed between peak waves.',
    },
    {
      title: 'Evening turnover',
      description: 'Studios reset, sweat marks removed and mats sanitised ready for the late-night crew.',
    },
  ];

  const studioPrograms = [
    {
      name: 'Strength & cardio floors',
      detail: 'Wipe-down schedules for benches, plates and cardio consoles with anti-corrosion products.',
    },
    {
      name: 'Group fitness & reformer studios',
      detail: 'Between-class resets for mats, reformers and props plus ventilation purges.',
    },
    {
      name: 'Aquatic & recovery zones',
      detail: 'Pool deck sweeping, spa wipe-downs and treatment room sanitisation with moisture-resistant chemicals.',
    },
    {
      name: 'Reception & retail',
      detail: 'Point-of-sale touchpoints sanitised with merch displays, supplement bars and consultation rooms presentation ready.',
    },
  ];

  const pageTitle = 'Gym & Fitness Centre Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'Gym cleaning services in Brisbane that keep equipment sanitised, changerooms fresh and members confident. Flexible schedules, odour control and compliance-ready reporting.';
  const serviceUrl = 'https://mogcleaning.com.au/services/fitness';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fitness Centre Cleaning Services',
    serviceType: 'Gym Cleaning',
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
      name: 'Fitness cleaning inclusions',
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
        name: 'Fitness Cleaning',
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
        image="/images/fitness-cleaning-background.jpg"
        imageAlt="Cleaner sanitising gym equipment in Brisbane"
        keywords={['gym cleaning Brisbane', 'fitness centre cleaners', 'studio cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/fitness-cleaning-background.jpg"
        backgroundPosition="center 38%"
        overlay="charcoal"
        align="center"
        eyebrow="Fitness cleaning"
        eyebrowIcon={Dumbbell}
        title="Keep members coming back to a spotless gym."
        description="Professional cleaning that eliminates odours, sanitises equipment and keeps every studio presentation ready."
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

      <section className="section-shell" id="member-journey">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Member experience lens</span>
            <h2 className="section-heading__title">We clean in rhythm with your daily traffic peaks</h2>
            <p className="section-heading__description">
              Timetables, casual entries and PT sessions all influence how we stage our crews so members notice constant freshness.
            </p>
          </div>
          <ol className="flex flex-col gap-6 md:flex-row md:gap-8">
            {memberJourney.map((phase, index) => (
              <li
                key={phase.title}
                className="flex-1 rounded-[32px] border border-white/40 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-celestial-blue-1/70">
                  Step {index + 1}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-charcoal">{phase.title}</h3>
                <p className="mt-3 text-jet/80 leading-relaxed">{phase.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell" id="pain-points">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">What’s not working now?</span>
            <h2 className="section-heading__title">The gym cleaning frustrations we solve</h2>
            <p className="section-heading__description">
              When hygiene slips, member reviews and retention suffer. We remove the friction so your team can focus on experience and growth.
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
              src="/images/fitness-cleaning-background.jpg"
              alt="Cleaner wiping down gym equipment"
              className="h-full w-full rounded-[32px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Our approach</span>
              <h2 className="section-heading__title">High-touch hygiene for high-traffic fitness centres</h2>
              <p className="section-heading__description">
                Dedicated crews handle your studios, changerooms and front desk with precision and speed so members notice the difference immediately.
              </p>
            </div>
            <ul className="space-y-4 text-jet/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Colour-coded systems prevent cross-contamination between equipment zones.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Odour control treatments keep changerooms and studios smelling clean, not perfumed.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Reporting dashboards document every clean for franchise and council checks.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Book a hygiene assessment
              </Link>
              <a href="tel:+61411820650" className="btn-secondary">
                Call 0411 820 650
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--muted" id="programs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Spaces we transform</span>
            <h2 className="section-heading__title">Tailored programs for every area of your club</h2>
            <p className="section-heading__description">
              From reformer studios to pool decks, each zone receives a dedicated checklist, chemical plan and inspection cycle.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {studioPrograms.map((program) => (
              <div key={program.name} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-charcoal">{program.name}</h3>
                <p className="mt-3 text-jet/80 leading-relaxed">{program.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks
        eyebrow="How onboarding works"
        title="Four steps to launch your gym cleaning program"
        description="A structured process keeps your team in the loop from quote to first workout-ready clean."
      />

      <QuoteSection
        eyebrow="Start today"
        title="Request your gym cleaning quote"
        description="Tell us about your equipment mix, membership volume and cleaning schedule. We’ll return a tailored proposal within 24 hours."
        bullets={[
          'Flexible scheduling around peak times',
          'Certified disinfectants for shared equipment',
          'Real-time communication with supervisors',
        ]}
        formTitle="Tell us about your fitness space"
        formSubtitle="We’ll be in touch within one business day."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Benefits</span>
            <h2 className="section-heading__title">Why Brisbane gyms choose MOG Cleaning</h2>
            <p className="section-heading__description">
              Confidence in hygiene keeps members loyal and reviews positive. Our crews protect your reputation daily.
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
            <h2 className="section-heading__title">Gym & studio cleaning checklist</h2>
            <p className="section-heading__description">
              A detailed program covering equipment, changerooms and member touchpoints keeps every visit predictable.
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
            <h2 className="section-heading__title">What Brisbane fitness leaders say</h2>
            <p className="section-heading__description">
              Hear from gym owners and franchise teams who rely on MOG Cleaning to protect their brand standards.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <section className="section-shell" id="faqs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Fitness cleaning FAQs</h2>
            <p className="section-heading__description">
              Learn how we coordinate after-hours cleans, equipment sanitising and membership area resets for your venue.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto" />
        </div>
      </section>

      <section className="section-shell section-shell--muted" id="related">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Explore more programs</span>
            <h2 className="section-heading__title">Support for every part of your business</h2>
            <p className="section-heading__description">
              Keep brand consistency across offices, hospitality venues and customer spaces with MOG Cleaning.
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
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane gyms
            </span>
            <h2 className="section-heading__title text-white">Ready to lift your hygiene standards?</h2>
            <p className="section-heading__description text-white/80">
              Schedule a walkthrough to receive a tailored plan, pricing and onboarding timeline within 24 hours.
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

export default FitnessCleaning;
