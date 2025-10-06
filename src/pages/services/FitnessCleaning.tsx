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
import ChecklistPreview from '../../components/ChecklistPreview';

const FitnessCleaning: React.FC = () => {
  const checklistPreview = [
    {
      icon: Dumbbell,
      title: 'Member floor reset',
      description: 'Keep cardio and strength areas spotless between peak sessions.',
      items: [
        'Daily equipment sanitising focused on high-contact surfaces',
        'Console screens, handles and benches polished to a streak-free finish',
        'Steam cleaning rotations for rubber flooring and high-traffic mats',
      ],
    },
    {
      icon: Timer,
      title: 'Studios & class changeovers',
      description: 'Fast turnovers so every class walks into a fresh space.',
      items: [
        'Group fitness studios reset with mats and props sanitised',
        'Pilates, yoga and reformer equipment disinfected between sessions',
        'Air handling vents dusted and deodorised to keep airflow fresh',
      ],
    },
    {
      icon: Droplets,
      title: 'Changerooms & amenities',
      description: 'Moisture-prone zones that demand extra attention.',
      items: [
        'Locker rooms and showers disinfected with odour control treatments',
        'Towel service coordination and consumable restocking',
        'Mould prevention and moisture management for high-use areas',
      ],
    },
    {
      icon: Users,
      title: 'Front-of-house experience',
      description: 'Keep first impressions aligned with your brand.',
      items: [
        'Reception, retail and lounge presentation with glass and mirrors detailed',
        'Daily waste removal and merchandising touch-ups',
        'Compliance-ready documentation and chemical registers maintained',
      ],
    },
  ];

  const checklistHighlights = checklistPreview.flatMap((group) => group.items);

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
        imageAlt="Clean Brisbane gym with sanitised equipment"
        keywords={['gym cleaning Brisbane', 'fitness centre cleaners', 'health club cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/fitness-cleaning-background.jpg"
        backgroundPosition="center"
        overlay="charcoal"
        align="center"
        eyebrow="Fitness cleaning"
        eyebrowIcon={Dumbbell}
        title="Keep members motivated with spotless, sweat-free spaces."
        description="Specialist gym cleaners who protect your brand reputation, support compliance and keep every touchpoint fresh."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a club walkthrough
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
            <span className="section-heading__eyebrow">When gyms call us</span>
            <h2 className="section-heading__title">Member complaints usually start with the basics</h2>
            <p className="section-heading__description">
              Owners reach out when equipment feels oily, changerooms smell stale or inspectors ask for documentation. We eliminate those distractions.
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

      <HowItWorks
        eyebrow="How onboarding works"
        title="Four steps from first call to fan-favourite feedback"
        description="From hygiene audit to live reporting, every step keeps your members confident and your brand compliant."
      />

      <section className="section-shell section-shell--muted" id="studio-programs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Zone coverage</span>
            <h2 className="section-heading__title">Programs tuned to each area of your club</h2>
            <p className="section-heading__description">
              Strength floors, reformer studios and recovery zones each receive a tailored scope with equipment-safe products.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {studioPrograms.map((program) => (
              <div
                key={program.name}
                className="rounded-[28px] bg-white p-6 shadow-sm sm:rounded-[32px] sm:p-8"
              >
                <h3 className="text-2xl font-semibold text-charcoal">{program.name}</h3>
                <p className="mt-3 leading-relaxed text-jet/80">{program.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Social proof</span>
            <h2 className="section-heading__title">Fitness brands that count on MOG Cleaning</h2>
            <p className="section-heading__description">
              Hear from gym owners and franchise leaders who’ve lifted member satisfaction by keeping hygiene front of mind.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <QuoteSection
        eyebrow="Start your program"
        title="Request your fitness centre cleaning proposal"
        description="Tell us about your membership size, class timetable and hygiene challenges. We’ll send a tailored scope, onboarding plan and pricing within 24 hours."
        bullets={[
          'Gym-trained crews with police checks',
          'Odour control and moisture management plans',
          'Compliance-ready reporting and photo logs',
        ]}
        formTitle="Tell us about your club"
        formSubtitle="Your dedicated fitness contact will respond within one business day."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why clubs stay</span>
            <h2 className="section-heading__title">Outcomes for your members, staff and brand</h2>
            <p className="section-heading__description">
              Consistent presentation, healthier air quality and easy compliance keep retention high and complaints low.
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
        title="Fitness centre cleaning preview"
        description="The essentials we cover to keep members happy, equipment protected and audits satisfied."
        note="This preview showcases common requests. After our walkthrough we tailor the checklist to your timetable, zones and franchise requirements."
        categories={checklistPreview}
      />

      <section className="section-shell" id="faqs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Fitness cleaning FAQs</h2>
            <p className="section-heading__description">
              Get answers on scheduling, odour control and compliance before you confirm your contract.
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
              Offices, hospitality venues and retail stores enjoy the same responsive communication and spotless finish.
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
            <h2 className="section-heading__title text-white">Ready to wow members at every visit?</h2>
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

export default FitnessCleaning;
