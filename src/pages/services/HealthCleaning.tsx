import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Sparkles,
} from 'lucide-react';
import SEO from '../../components/SEO';
import QuoteForm from '../../components/QuoteForm';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';

const HealthCleaning: React.FC = () => {
  const inclusions = [
    'Clinical touchpoint disinfection aligned with QHealth and RACGP guidance',
    'Consult room, treatment bay and theatre sanitising with dwell times recorded',
    "Waiting room, reception and children's area presentation including upholstery cleaning",
    'Sterilisation support including instrument reprocessing coordination and storage hygiene',
    'Pathology, dental and imaging room turnover with waste segregation checks',
    'Washroom and staff amenities deep cleaning with infection-control consumables',
    'Floor care for vinyl, epoxy and carpet tiles with slip-resistant finishes',
    'Biohazard and sharps waste coordination with compliant manifests',
    'Out-of-hours terminal cleans for outbreak response and accreditation audits',
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Compliance Built In',
      description: 'Detailed scopes referencing NSQHS, RACGP and healthcare requirements for audits and accreditation.',
    },
    {
      icon: Users,
      title: 'Protect Patients & Staff',
      description: 'Infection-control trained cleaners reduce cross-contamination and support patient confidence.',
    },
    {
      icon: Clock,
      title: 'Minimal Disruption',
      description: 'After-hours cleans, surgical turnovers and rapid response teams keep clinics running on schedule.',
    },
    {
      icon: CheckCircle,
      title: 'Trackable Quality',
      description: 'Audit-ready reporting with checklists, ATP testing options and incident logs delivered after each visit.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Treatment rooms smell neutral and surfaces stay sterile throughout the day. Their team understands our compliance requirements and it shows.',
      name: 'Practice Manager',
      role: 'Brisbane GP Clinic',
    },
    {
      quote:
        'Recovery bays and waiting areas are dust free before doors open. They flag consumables early so we are never caught short.',
      name: 'Director of Nursing',
      role: 'Brisbane Day Hospital',
    },
    {
      quote:
        'Sharps stations, sinks and rails present spotless at every inspection. Our clinicians trust MOG Cleaning to hold the standard.',
      name: 'Clinical Director',
      role: 'Brisbane Allied Health Centre',
    },
  ];

  const faqs = [
    {
      question: 'Do you follow specific infection-control standards?',
      answer:
        'Yes. Our cleaners are trained on NSQHS, RACGP and aged-care standards. We provide SWMS, chemical registers and SDS files as part of onboarding.',
    },
    {
      question: 'Can you assist during outbreak or terminal cleans?',
      answer:
        'We have rapid response teams for infection control events. We supply PPE, manage waste streams and provide reports suitable for health authorities.',
    },
    {
      question: 'How do you handle sensitive equipment and privacy?',
      answer:
        'Team members sign confidentiality agreements, undergo police checks and follow documented procedures for handling clinical records and equipment.',
    },
  ];

  const relatedLinks = [
    { name: 'Office & Corporate Cleaning', path: '/services/offices' },
    { name: 'Education Facility Cleaning', path: '/services/education' },
    { name: 'About Our Team', path: '/about' },
  ];

  const heroBadges = [
    { icon: ShieldCheck, label: 'NSQHS & RACGP-aligned protocols' },
    { icon: Clock, label: 'After-hours & outbreak response crews' },
    { icon: CheckCircle, label: 'Audit-ready reporting packs' },
  ];

  const heroFeatures = [
    {
      icon: Heart,
      title: 'Healthcare compliance experts',
      description: 'Cleaners inducted on infection-control, confidentiality and patient experience protocols.',
    },
    {
      icon: Users,
      title: 'Dedicated clinical supervisors',
      description: 'Site leads coordinate turnover times, dwell periods and consumable ordering with your team.',
    },
    {
      icon: Phone,
      title: 'Rapid outbreak support',
      description: 'On-call crews deliver terminal cleans, PPE deployment and documentation for auditors.',
    },
  ];

  const pageTitle = 'Medical Facility Cleaning Brisbane | Clinic & Healthcare Cleaners';
  const pageDescription =
    'Medical-grade cleaning for Brisbane clinics, dental surgeries and allied health facilities. Infection-control trained teams, compliant reporting and flexible scheduling.';
  const serviceUrl = 'https://mogcleaning.com.au/services/health';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Medical Facility Cleaning Services',
    serviceType: 'Healthcare Cleaning',
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
      name: 'Medical cleaning inclusions',
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
        name: 'Medical Facility Cleaning',
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
        imageAlt="Healthcare cleaner sanitising a treatment room"
        keywords={['medical cleaning Brisbane', 'clinic cleaners', 'healthcare cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/medical-cleaning-background.jpg"
        overlay="teal"
        eyebrow="Medical facility cleaning"
        eyebrowIcon={Heart}
        title="Clinical environments kept accreditation ready"
        description="Infection-control trained cleaners protect patients, clinicians and compliance standards across Brisbane healthcare facilities."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a compliance walkthrough
            </Link>
            <Link to="/process" className="btn-ghost">
              See our onboarding
              <ArrowRight className="h-5 w-5" />
            </Link>
          </>
        }
        badges={heroBadges}
        features={heroFeatures}
      >
        <div className="flex flex-col items-center gap-5 lg:items-stretch">
          <span className="pill-chip" data-variant="emerald">
            <Clock className="h-4 w-4" /> Rapid outbreak support
          </span>
          <QuoteForm className="relative z-[1]" />
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why clinics choose us</span>
            <h2 className="section-heading__title">Protection for patients, teams and accreditation</h2>
            <p className="section-heading__description">
              We align cleaning protocols with your infection-control procedures, delivering peace of mind for practice managers and clinicians alike.
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

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Healthcare checklist</span>
            <h2 className="section-heading__title">Every zone covered by documented scopes</h2>
            <p className="section-heading__description">
              From theatres and imaging rooms to waiting areas and staff amenities, every inclusion is recorded for your compliance files.
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

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Clinical partners</span>
            <h2 className="section-heading__title">Healthcare providers who rely on us</h2>
            <p className="section-heading__description">
              Hear from practices and day hospitals that trust MOG Cleaning to uphold clinical standards.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Related services</span>
            <h2 className="section-heading__title">Support across your wider facility</h2>
            <p className="section-heading__description">
              Pair medical cleaning with other MOG programs to keep every part of your organisation spotless.
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

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Healthcare cleaning questions</h2>
            <p className="section-heading__description">
              Learn how we approach infection control, terminal cleans and sensitive equipment handling.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto" />
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane healthcare teams
            </span>
            <h2 className="section-heading__title text-white">Ready for audit-ready medical cleaning?</h2>
            <p className="section-heading__description text-white/80">
              Schedule a walkthrough and receive a tailored scope, compliance documentation and quote within 24 hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link to="/contact" className="btn-primary">
                Request a quote
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
