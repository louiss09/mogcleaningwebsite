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
import type { LucideIcon } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const FitnessCleaning: React.FC = () => {
  type InfoCard = {
    icon: LucideIcon;
    title: string;
    description: string;
  };

  const heroHighlights: InfoCard[] = [
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

  const challenges: InfoCard[] = [
    {
      icon: ClipboardList,
      title: 'Equipment still greasy after cleans',
      description:
        'Members complain about sweat residue and fingerprints on benches, cardio consoles and mats.',
    },
    {
      icon: Droplets,
      title: 'Changeroom odours return fast',
      description:
        'Poorly ventilated lockers and showers trap moisture without antibacterial deodorising routines.',
    },
    {
      icon: SprayCan,
      title: 'No proof for franchise audits',
      description:
        'National brands and councils ask for chemical registers, SWMS and evidence that sanitising actually happened.',
    },
  ];

  const solutionCards: InfoCard[] = [
    {
      icon: ShieldCheck,
      title: 'Hospital-grade hygiene',
      description: 'Colour-coded tools and TGA-approved disinfectants keep shared equipment safe to touch.',
    },
    {
      icon: Timer,
      title: 'Crewed around your timetable',
      description: 'Morning resets, midday refreshes and overnight details align with class and member traffic.',
    },
    {
      icon: Users,
      title: 'Supervisor accountability',
      description: 'A named contact manages reporting, consumables and rapid responses for spills or incidents.',
    },
    {
      icon: Sparkles,
      title: 'Member-ready presentation',
      description: 'Front desk, lounge and retail displays stay spotless so the experience matches your brand promise.',
    },
  ];

  const proofPoints: Array<InfoCard & { value: string }> = [
    {
      icon: Dumbbell,
      value: '12 min',
      title: 'Average class turnover',
      description: 'Studios reset between sessions without delaying instructors or members.',
    },
    {
      icon: Timer,
      value: '24/7',
      title: 'Rapid response window',
      description: 'Urgent spills or inspection prep handled within a day, even on weekends.',
    },
    {
      icon: Users,
      value: '40+',
      title: 'Fitness sites serviced',
      description: 'Boutique studios and national franchises rely on our inducted gym crews.',
    },
  ];

  const inclusions: string[] = [
    'Daily disinfecting of cardio, strength and functional zones',
    'Locker room, bathroom and shower sanitising with odour control',
    'Studio resets for reformer, yoga and group fitness spaces',
    'Front desk, lounge and retail presentation',
    'Towel service coordination and consumable restocking',
    'Scheduled deep cleans for rubber flooring and high-touch mats',
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

  const relatedLinks: Array<{ name: string; path: string; description: string }> = [
    {
      name: 'Hospitality Venues',
      path: '/services/hospitality',
      description: 'See how we handle fast turnarounds for venues with heavy foot traffic.',
    },
    {
      name: 'Office Programs',
      path: '/services/offices',
      description: 'Support your corporate head office or HQ alongside the gym.',
    },
    {
      name: 'Contact MOG Cleaning',
      path: '/contact',
      description: 'Book a walkthrough or request documentation for your next audit.',
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
  };

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="article"
        image="/images/fitness-cleaning-background.jpg"
        imageAlt="Brisbane gym equipment being sanitised"
        url={serviceUrl}
        jsonLd={serviceSchema}
        keywords={['gym cleaning Brisbane', 'fitness centre cleaning', 'studio cleaning services']}
      />

      <PageHero
        align="left"
        backgroundImage="/images/fitness-cleaning-background.jpg"
        backgroundPosition="center 48%"
        overlay="charcoal"
        eyebrow="Fitness centres"
        eyebrowIcon={Dumbbell}
        title="Keep members confident every workout"
        description="We manage the sweat, odours and fast turnovers so your team can focus on coaching and retention."
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
            <h2 className="section-heading__title">What slows gym teams down</h2>
            <p className="section-heading__description">
              From boutique studios to 24/7 franchises, we tackle the hygiene frustrations that impact member satisfaction.
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
            <h2 className="section-heading__title">Programs that match your member flow</h2>
            <p className="section-heading__description">
              We design daily routines, mid-shift refreshes and deep cleans around your timetable so the facility always feels new.
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
            <h2 className="section-heading__title">Member-focused metrics we deliver</h2>
            <p className="section-heading__description">
              Reporting and turnaround times keep franchise leaders, coaches and members aligned on cleanliness.
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
            <h2 className="section-heading__title">Gym &amp; studio cleaning checklist</h2>
            <p className="section-heading__description">
              Each service is built to protect equipment, reduce odours and keep members happy from entry to exit.
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
            <span className="section-heading__eyebrow">Trusted by gyms across Brisbane</span>
            <h2 className="section-heading__title">Client stories</h2>
            <p className="section-heading__description">
              Hear how studios and clubs keep memberships growing with a consistently clean environment.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <HowItWorks
        eyebrow="Onboarding roadmap"
        title="Launch your gym cleaning program in four steps"
        description="Our process locks in scope, documentation and schedules before the first session."
      />

      <QuoteSection
        className="section-shell--muted"
        eyebrow="Ready to refresh your facility?"
        title="Book a walkthrough for your fitness space"
        description="Tell us about your zones, timetable and member volume so we can design the ideal program."
        bullets={[
          'Colour-coded, equipment-safe cleaning systems',
          'Flexible scheduling around classes and 24/7 access',
          'Compliance-ready documentation for audits',
        ]}
        formTitle="Request your gym cleaning quote"
        formSubtitle="Share your class schedule and any franchise requirements. We’ll be in touch within one business day."
      />

      <section className="section-shell" id="faq">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Fitness cleaning questions answered</h2>
            <p className="section-heading__description">
              Explore how we handle shared equipment, odour control and compliance expectations in detail.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">More ways we help</span>
            <h2 className="section-heading__title">Keep momentum across your network</h2>
            <p className="section-heading__description">
              Pair your fitness program with other facility support or connect with us directly to plan next steps.
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

export default FitnessCleaning;
