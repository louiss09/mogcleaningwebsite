import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ClipboardList,
  Trees,
  Brush,
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

const EducationCleaning: React.FC = () => {
  const checklistPreview = [
    {
      icon: BookOpen,
      title: 'Classrooms & learning labs',
      description: 'Daily resets that keep each space ready for the first bell.',
      items: [
        'Desk, chair and device sanitising before students arrive',
        'Whiteboard, AV and shared equipment wipe-downs',
        'Library, science and specialist room detailing',
      ],
    },
    {
      icon: Users,
      title: 'Student amenities & staff areas',
      description: 'Support spaces that feel fresh for teachers and students.',
      items: [
        'Toilet block deep cleans with consumable top-ups',
        'Staff rooms and admin offices reset before the day',
        'Sick bays and high-touch surfaces disinfected',
      ],
    },
    {
      icon: Trees,
      title: 'Grounds & community spaces',
      description: 'Shared zones parents and visitors notice first.',
      items: [
        'Playground, tuckshop and canteen presentation sweeps',
        'Assembly halls, gyms and performing arts venues prepared for events',
        'Outdoor eating areas maintained with litter removal',
      ],
    },
    {
      icon: Sparkles,
      title: 'Program extras',
      description: 'Seasonal and responsive support aligned to your calendar.',
      items: [
        'Holiday deep cleans and floor maintenance programs',
        'Rapid outbreak response disinfecting',
        'Eco-friendly product options aligned with school policies',
      ],
    },
  ];

  const checklistHighlights = checklistPreview.flatMap((group) => group.items);

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Safe learning spaces',
      description: 'Child-safe products and colour-coded systems protect students and staff.',
    },
    {
      icon: Users,
      title: 'Community confidence',
      description: 'Parents and teachers see spotless facilities that reflect your commitment to care.',
    },
    {
      icon: Clock,
      title: 'Flexible scheduling',
      description: 'Before-school, after-hours and weekend support keeps learning uninterrupted.',
    },
    {
      icon: CheckCircle,
      title: 'Transparent reporting',
      description: 'Supervisors share photo logs, incident reports and consumable usage summaries.',
    },
  ];

  const painPoints = [
    {
      icon: ClipboardList,
      title: 'Classrooms still dusty',
      description: 'Students arrive to cluttered desks and whiteboards, leaving teachers to clean before lessons start.',
    },
    {
      icon: Trees,
      title: 'Play spaces neglected',
      description: 'Outdoor areas and playground equipment collect debris, creating safety concerns.',
    },
    {
      icon: Brush,
      title: 'Holiday deep cleans missed',
      description: 'Floors, carpets and blinds aren’t refreshed during term breaks, impacting longevity.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Our classrooms feel fresher and the team proactively communicates any maintenance issues. Teachers notice the difference every morning.',
      name: 'Primary School Principal',
      role: 'Independent School Brisbane',
    },
    {
      quote:
        'Playground and hall areas are always ready for events. MOG Cleaning works around our schedule seamlessly.',
      name: 'Facilities Manager',
      role: 'Catholic College',
    },
    {
      quote:
        'Their outbreak response was fast and thorough. Parents appreciated the communication and results.',
      name: 'Childcare Director',
      role: 'Early Learning Centre',
    },
  ];

  const faqs = [
    {
      question: 'Do you work with childcare and schools?',
      answer:
        'Yes. We customise programs for childcare centres, primary schools, secondary schools and tertiary campuses across Brisbane.',
    },
    {
      question: 'What products do you use around children?',
      answer:
        'We use low-tox, child-safe products that meet your policies, with options for eco-certified or fragrance-free solutions.',
    },
    {
      question: 'Can you support school events and terms?',
      answer:
        'We schedule additional cleans for concerts, open days and graduations, plus deep cleans during holidays and outbreak responses when needed.',
    },
  ];

  const relatedLinks = [
    { name: 'Healthcare Cleaning', path: '/services/health' },
    { name: 'Hospitality Cleaning', path: '/services/hospitality' },
    { name: 'Contact MOG Cleaning', path: '/contact' },
  ];

  const heroHighlights = [
    {
      icon: BookOpen,
      title: 'Education specialists',
      description: 'Experienced crews for childcare, primary, secondary and tertiary campuses.',
    },
    {
      icon: ShieldCheck,
      title: 'Child-safe standards',
      description: 'Low-tox products and strict compliance with your policies and ratios.',
    },
    {
      icon: Clock,
      title: 'Responsive support',
      description: 'Rapid assistance during outbreaks, spills or unexpected events.',
    },
  ];

  const featureTickerItems = [
    {
      icon: CheckCircle,
      title: 'Week-one onboarding',
      description: 'Campus walkthrough, safety induction and scope finalised in the first week.',
    },
    {
      icon: Users,
      title: 'Precinct crew leads',
      description: 'Dedicated supervisors for classrooms, amenities and outdoor hubs.',
    },
    {
      icon: Clock,
      title: 'Term & event rhythms',
      description: 'Schedules built around bell times, excursions and community events.',
    },
    {
      icon: Brush,
      title: 'Holiday deep cleans',
      description: 'Floor care, high dusting and window detailing while students are away.',
    },
    {
      icon: Sparkles,
      title: 'Rapid outbreak response',
      description: 'Disinfection crews on standby for urgent hygiene support.',
    },
  ];

  const campusZones = [
    {
      title: 'Learning spaces',
      copy: 'Classrooms, libraries and laboratories with attention to technology, desks and teaching tools.',
    },
    {
      title: 'Community hubs',
      copy: 'Assembly halls, gyms and performing arts venues prepared for events and parent evenings.',
    },
    {
      title: 'Outdoor zones',
      copy: 'Playgrounds, sports courts and outdoor eating areas maintained with litter sweeps and pressure cleaning.',
    },
    {
      title: 'Support areas',
      copy: 'Administration, sick bays and staff rooms organised with consumables topped up before every shift.',
    },
  ];

  const pageTitle = 'School & Education Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'School cleaning services in Brisbane covering classrooms, playgrounds and specialist facilities. Child-safe products, flexible scheduling and transparent reporting.';
  const serviceUrl = 'https://mogcleaning.com.au/services/education';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Education Cleaning Services',
    serviceType: 'School Cleaning',
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
      name: 'Education cleaning inclusions',
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
        name: 'Education Cleaning',
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
        image="/images/school-cleaning-background.jpg"
        imageAlt="Brisbane school classroom being cleaned"
        keywords={['school cleaning Brisbane', 'education cleaning services', 'childcare cleaners Brisbane']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/classroom-cleaning-background.jpg"
        backgroundPosition="center"
        overlay="charcoal"
        align="center"
        eyebrow="Education cleaning"
        eyebrowIcon={GraduationCap}
        title="Show parents and staff a campus that feels cared for."
        description="Specialist education cleaners who protect student wellbeing, support your team and keep every wing presentation ready."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a campus walkthrough
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
            <span className="section-heading__eyebrow">Why schools switch</span>
            <h2 className="section-heading__title">When cleaning slips, your community notices</h2>
            <p className="section-heading__description">
              Principals and business managers call us when teachers arrive to messy classrooms or playgrounds look neglected. We bring order back fast.
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
        title="Four steps to a consistently clean campus"
        description="Every education partner follows our proven path, giving you visibility before the first bell of term."
      />

      <section className="section-shell section-shell--muted" id="campus-zones">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Campus coverage</span>
            <h2 className="section-heading__title">Programs tailored to every zone</h2>
            <p className="section-heading__description">
              From early learning rooms to performing arts centres, every area receives its own checklist and accountable crew.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {campusZones.map((zone) => (
              <div key={zone.title} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-charcoal">{zone.title}</h3>
                <p className="mt-3 leading-relaxed text-jet/80">{zone.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Proof for your board</span>
            <h2 className="section-heading__title">Queensland schools that rely on us</h2>
            <p className="section-heading__description">
              Hear how education leaders describe the uplift in presentation, communication and parent confidence.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <QuoteSection
        eyebrow="Start your program"
        title="Request your education cleaning proposal"
        description="Share your enrolments, number of buildings and current challenges. We’ll prepare a tailored scope, onboarding timeline and pricing within 24 hours."
        bullets={[
          'Child-safe products and induction-ready teams',
          'Term-by-term scheduling with event support',
          'Transparent reporting and parent-ready comms',
        ]}
        formTitle="Tell us about your campus"
        formSubtitle="Your dedicated education contact will reach out within one business day."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why schools stay</span>
            <h2 className="section-heading__title">Outcomes for your staff, students and families</h2>
            <p className="section-heading__description">
              Consistent presentation, safer environments and streamlined communication keep your community confident.
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
        title="Education cleaning preview"
        description="Here’s how a typical program keeps your campus ready day after day."
        note="This is a preview of common inclusions. After our walkthrough we tailor every checklist around your timetable, buildings and compliance needs."
        categories={checklistPreview}
      />

      <section className="section-shell" id="faqs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Education cleaning FAQs</h2>
            <p className="section-heading__description">
              Understand how we work around bells, events and compliance requirements before you commit.
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
              From healthcare to hospitality, we bring the same responsive support to every industry we serve.
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
              <Sparkles className="h-4 w-4" /> Trusted by Queensland schools
            </span>
            <h2 className="section-heading__title text-white">Ready to impress families this term?</h2>
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

export default EducationCleaning;
