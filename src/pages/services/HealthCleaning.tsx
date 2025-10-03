import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';
import SEO from '../../components/SEO';
import ServiceSidebar from '../../components/ServiceSidebar';
import QuoteForm from '../../components/QuoteForm';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';

const HealthCleaning: React.FC = () => {
  const inclusions = [
    "Clinical touchpoint disinfection aligned with QHealth and RACGP guidance",
    "Consult room, treatment bay and theatre sanitising with dwell times recorded",
    "Waiting room, reception and children's area presentation including upholstery cleaning",
    "Sterilisation support including instrument reprocessing coordination and storage hygiene",
    "Pathology, dental and imaging room turnover with waste segregation checks",
    "Washroom and staff amenities deep cleaning with infection-control consumables",
    "Floor care for vinyl, epoxy and carpet tiles with slip-resistant finishes",
    "Biohazard and sharps waste coordination with compliant manifests",
    "Out-of-hours terminal cleans for outbreak response and accreditation audits",
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
      description: 'Infection-control trained cleaners reduce cross-contamination and improve patient confidence.',
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
      quote: 'Treatment rooms smell neutral and surfaces stay sterile throughout the day. Their team understands our compliance requirements and it shows.',
      name: 'Practice Manager',
      role: 'Brisbane GP Clinic',
    },
    {
      quote: 'Recovery bays and waiting areas are dust free before doors open. They flag consumables early so we are never caught short.',
      name: 'Director of Nursing',
      role: 'Brisbane Day Hospital',
    },
    {
      quote: 'Sharps stations, sinks and rails present spotless at every inspection. Our clinicians trust MOG Cleaning to hold the standard.',
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

  const pageTitle = 'Medical Facility Cleaning Brisbane | Clinic & Healthcare Cleaners';
  const pageDescription = 'Medical-grade cleaning for Brisbane clinics, dental surgeries and allied health facilities. Infection-control trained teams, compliant reporting and flexible scheduling.';
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
        imageAlt="Medical clinic being professionally cleaned in Brisbane"
        keywords={['medical cleaning Brisbane', 'clinic cleaners', 'healthcare cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <section
        className="relative hero-section-spacing px-4 sm:px-6 lg:px-8 text-white overflow-hidden min-h-[70vh]"
        style={{
          backgroundImage: "url('/images/medical-cleaning-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container-max hero-content-area">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center mb-6">
                <Heart className="w-12 h-12 text-fresh-green mr-4" />
                <span className="text-fresh-green font-semibold text-lg">Medical Cleaning Brisbane</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Clinical-Grade Cleaning for Patient Confidence
              </h1>
              <p className="text-xl mb-6 text-white/90 drop-shadow-md">
                Deliver accreditation-ready Brisbane medical cleaning for clinics, dental surgeries and allied health practices with infection-control specialists who manage high-risk touchpoints, waste streams and patient areas.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {heroBadges.map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                    <badge.icon className="h-4 w-4 text-fresh-green" />
                    {badge.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary bg-fresh-green hover:bg-fresh-green/90">
                  Book a Clinical Audit
                </Link>
                <a href="tel:+61411820650" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal">
                  <Phone className="w-5 h-5 mr-2" /> Call 0411 820 650
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <QuoteForm className="max-w-md lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 bg-white/95 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Medical Cleaning Inclusions</h2>
            <p className="text-lg text-jet mb-6">
              Select the scope that matches your accreditation, patient load and specialist equipment. These are the tasks Brisbane healthcare clients rely on us for.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inclusions.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 mt-1 text-fresh-green shrink-0" />
                  <span className="text-charcoal leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <ServiceSidebar title="Medical Cleaning" description={pageDescription} />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Healthcare Providers Choose MOG</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              We understand accreditation timelines, patient privacy and infection-control documentation requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-white rounded-2xl shadow-md p-8 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <benefit.icon className="w-10 h-10 mx-auto text-celestial-blue-1 mb-6" />
                <h3 className="text-xl font-semibold text-charcoal mb-4">{benefit.title}</h3>
                <p className="text-jet leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-ash-gray/20">
        <div className="container-max">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What Clients Say</h2>
            <p className="text-lg text-jet max-w-3xl mx-auto">
              Healthcare leaders choose us to meet accreditation standards, safeguard patient wellbeing and deliver transparent cleaning reports across Brisbane facilities.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-5xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Medical Cleaning FAQs</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              Key information for practice managers, infection-control leads and healthcare executives.
            </p>
          </div>

          <FAQAccordion
            faqs={faqs}
            className="faq-stack-services"
            cardClassName="text-left"
            questionClassName="text-xl font-semibold text-charcoal"
            answerClassName="text-jet leading-relaxed"
          />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Explore Complementary Services</h2>
            <p className="text-lg text-jet">Maintain consistency across your entire healthcare network.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedLinks.map((link) => (
              <Link key={link.name} to={link.path} className="px-5 py-3 rounded-full border border-celestial-blue-1 text-celestial-blue-1 font-medium hover:bg-celestial-blue-1 hover:text-white transition">
                {link.name}
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Accreditation-Ready Cleaning?</h2>
            <p className="text-xl text-jet mb-8">
              Book a walkthrough with our clinical supervisors and receive a tailored scope, compliance documentation and proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get My Medical Cleaning Quote
              </Link>
              <Link to="/process" className="btn-secondary">
                See How Onboarding Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthCleaning;








