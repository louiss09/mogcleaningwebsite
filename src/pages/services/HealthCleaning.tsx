import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Stethoscope,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ClipboardList,
  Syringe,
  FileWarning,
} from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const HealthCleaning: React.FC = () => {
  const inclusions = [
    'Treatment room turnover with TGA-approved disinfectants',
    'Waiting room presentation including touchpoint sanitising',
    'Zoned cleaning protocols separating clinical and admin areas',
    'Surgical suite and procedure room deep cleans',
    'Medical waste coordination and sharps bin checks',
    'Sterilisation bay detailing and spill management',
    'Air filtration and vent dusting for improved IAQ',
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Compliance-first processes',
      description: 'Programs align with QHealth, RACGP and infection control requirements.',
    },
    {
      icon: Users,
      title: 'Patient confidence',
      description: 'Pristine waiting rooms and treatment spaces reassure patients the moment they arrive.',
    },
    {
      icon: Clock,
      title: 'Rapid turnover support',
      description: 'Teams respond quickly to urgent cleans between procedures or after-hours incidents.',
    },
    {
      icon: CheckCircle,
      title: 'Audit-ready reporting',
      description: 'Detailed documentation, SWMS and chemical registers ready for inspections.',
    },
  ];

  const painPoints = [
    {
      icon: ClipboardList,
      title: 'Missed clinical touchpoints',
      description: 'Reception counters and treatment chairs show dust or fingerprints, raising concerns for patients.',
    },
    {
      icon: Syringe,
      title: 'Improper infection control',
      description: 'Current cleaners use household products and no zoning, risking cross-contamination.',
    },
    {
      icon: FileWarning,
      title: 'Paperwork gaps before audits',
      description: 'No evidence of training, inductions or chemical usage when accreditation visits occur.',
    },
  ];

  const testimonials = [
    {
      quote:
        'MOG Cleaning understands the compliance demands of our medical centre. They communicate proactively and keep every room ready for patients.',
      name: 'Practice Manager',
      role: 'Multi-site GP Clinic',
    },
    {
      quote:
        'The team follows strict zoning and handover protocols. We feel confident recommending them to other specialists.',
      name: 'Clinical Director',
      role: 'Specialist Healthcare Group',
    },
    {
      quote:
        'Accreditation used to cause stress. Now all documentation, SWMS and chemical registers are provided in minutes.',
      name: 'Operations Lead',
      role: 'Allied Health Network',
    },
  ];

  const faqs = [
    {
      question: 'Do you follow infection control guidelines?',
      answer:
        'Yes. Our teams complete infection control training, follow QHealth standards and document every product used for traceability.',
    },
    {
      question: 'Can you work around patient schedules?',
      answer:
        'We clean before opening, after closing and in-between appointments to minimise disruption. Rapid response crews support urgent sanitisation.',
    },
    {
      question: 'Do you provide proof of compliance?',
      answer:
        'We supply police checks, insurance, SWMS, inductions and chemical registers as part of onboarding and keep them updated.',
    },
  ];

  const relatedLinks = [
    { name: 'Office Cleaning', path: '/services/offices' },
    { name: 'Education Cleaning', path: '/services/education' },
    { name: 'Contact MOG Cleaning', path: '/contact' },
  ];

  const heroHighlights = [
    {
      icon: Stethoscope,
      title: 'Clinical specialists',
      description: 'Infection-control trained cleaners for GP, dental, allied health and specialist clinics.',
    },
    {
      icon: ShieldCheck,
      title: 'Zoned protocols',
      description: 'Strict separation of clinical, admin and public areas with colour-coded systems.',
    },
    {
      icon: Clock,
      title: 'Rapid response support',
      description: 'On-call supervisors for spill management and urgent room turnovers.',
    },
  ];

  const pageTitle = 'Medical & Healthcare Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'Healthcare cleaning in Brisbane for clinics, medical centres and allied health practices. Infection control protocols, zoning and compliance-ready documentation.';
  const serviceUrl = 'https://mogcleaning.com.au/services/health';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare Cleaning Services',
    serviceType: 'Medical Cleaning',
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
      name: 'Healthcare cleaning inclusions',
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
        name: 'Healthcare Cleaning',
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
        image="/images/medical-cleaning-background.jpg"
        imageAlt="Medical treatment room being cleaned"
        keywords={['medical cleaning Brisbane', 'clinic cleaners brisbane', 'healthcare cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/medical-cleaning-background.jpg"
        backgroundPosition="center 45%"
        overlay="charcoal"
        align="center"
        eyebrow="Healthcare cleaning"
        eyebrowIcon={Heart}
        title="Clinically clean spaces that protect patients and practitioners."
        description="Specialist crews maintain infection control, presentation and documentation for every appointment."
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
            <span className="section-heading__eyebrow">Risks to your practice</span>
            <h2 className="section-heading__title">Why clinics move to MOG Cleaning</h2>
            <p className="section-heading__description">
              Healthcare environments demand precision. We address the compliance and experience gaps that keep practice managers awake at night.
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
              src="/images/medical-cleaning-detail.jpg"
              alt="Healthcare cleaner preparing a treatment room"
              className="h-full w-full rounded-[32px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Our approach</span>
              <h2 className="section-heading__title">Infection control woven into every routine</h2>
              <p className="section-heading__description">
                From zoning maps to sealed chemical caddies, our cleaners follow strict procedures that protect staff and patients in every room.
              </p>
            </div>
            <ul className="space-y-4 text-jet/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Colour-coded cloths and mop systems for admin, public and clinical zones.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>TGA-approved disinfectants validated against bacteria and viruses common in healthcare.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Documented spill response and sharps incident procedures for full compliance.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Book a compliance walkthrough
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
        title="Four steps to a compliant healthcare cleaning program"
        description="A predictable onboarding keeps your infection control officer confident from the first visit."
      />

      <QuoteSection
        eyebrow="Start now"
        title="Request your healthcare cleaning proposal"
        description="Share your practice type, consultation room count and compliance requirements. We’ll send a tailored scope and onboarding plan within 24 hours."
        bullets={[
          'Infection-control trained cleaners',
          'Detailed zoning maps and checklists',
          'Audit-ready documentation supplied',
        ]}
        formTitle="Tell us about your clinic"
        formSubtitle="We’ll respond within one business day with next steps."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Benefits</span>
            <h2 className="section-heading__title">What you gain with MOG Cleaning</h2>
            <p className="section-heading__description">
              Precision cleaning protects patient trust, staff wellbeing and accreditation results.
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
            <h2 className="section-heading__title">Healthcare cleaning checklist</h2>
            <p className="section-heading__description">
              Each visit follows a documented sequence covering clinical and public areas to maintain compliance.
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
            <h2 className="section-heading__title">Feedback from healthcare leaders</h2>
            <p className="section-heading__description">
              Hear from practices that trust MOG Cleaning to support patient safety and accreditation outcomes.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto section-shell" />

      <section className="section-shell section-shell--muted" id="related">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Explore more support</span>
            <h2 className="section-heading__title">Consistent standards across every site</h2>
            <p className="section-heading__description">
              Extend the same level of care to your offices, classrooms or specialist facilities.
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
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane clinics
            </span>
            <h2 className="section-heading__title text-white">Ready for inspection-ready healthcare spaces?</h2>
            <p className="section-heading__description text-white/80">
              Book a walkthrough and receive a compliance-led cleaning proposal within 24 hours.
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

export default HealthCleaning;
