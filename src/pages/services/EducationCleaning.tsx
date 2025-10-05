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

const EducationCleaning: React.FC = () => {
  const inclusions = [
    'Daily classroom cleaning with desk, chair and technology sanitising',
    'Library, science lab and specialist room detailing',
    'Playground, tuckshop and canteen presentation',
    'Toilet block deep cleaning with consumable management',
    'Holiday deep cleans and floor maintenance programs',
    'Disinfection protocols for outbreaks and high-risk seasons',
    'Eco-friendly product options to suit school policies',
  ];

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
        image="/images/classroom-cleaning-background.jpg"
        imageAlt="Cleaner tidying a Brisbane classroom"
        keywords={['school cleaning Brisbane', 'education cleaners', 'childcare cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/classroom-cleaning-background.jpg"
        backgroundPosition="center 44%"
        overlay="charcoal"
        align="center"
        eyebrow="Education cleaning"
        eyebrowIcon={GraduationCap}
        title="Learning environments that stay healthy and welcoming."
        description="Reliable crews care for classrooms, playgrounds and specialist facilities with child-safe products."
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
            <span className="section-heading__eyebrow">Why schools switch</span>
            <h2 className="section-heading__title">Cleaning frustrations we eliminate</h2>
            <p className="section-heading__description">
              From childcare centres to universities, education leaders choose MOG Cleaning when presentation, hygiene and communication need a reset.
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
              src="/images/education-cleaning-detail.jpg"
              alt="Cleaner sanitising classroom desks"
              className="h-full w-full rounded-[32px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Our approach</span>
              <h2 className="section-heading__title">A structured routine for every campus zone</h2>
              <p className="section-heading__description">
                We combine daily presentation, outbreak response and deep cleaning schedules so classrooms, halls and playgrounds stay ready for learning.
              </p>
            </div>
            <ul className="space-y-4 text-jet/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Detailed scopes for classrooms, specialist rooms and administrative areas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Holiday deep cleans cover floors, windows, carpets and high dusting.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-celestial-blue-1" />
                <span>Rapid communication when maintenance issues or incidents are spotted.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Book a school walkthrough
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
        title="Four steps to launch your education cleaning program"
        description="A guided onboarding keeps school leadership confident from the first bell."
      />

      <QuoteSection
        eyebrow="Start planning"
        title="Request your school cleaning proposal"
        description="Share your campus size, cleaning frequency and key concerns. We’ll provide a tailored scope, pricing and timeline within 24 hours."
        bullets={[
          'Child-safe, low-tox products',
          'Holiday deep clean scheduling',
          'Dedicated supervisor communication',
        ]}
        formTitle="Tell us about your school"
        formSubtitle="We’ll respond within one business day with next steps."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Benefits</span>
            <h2 className="section-heading__title">Why education leaders choose MOG Cleaning</h2>
            <p className="section-heading__description">
              We help facilities teams deliver safe, welcoming environments that showcase your school’s standards.
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
            <h2 className="section-heading__title">Education cleaning checklist</h2>
            <p className="section-heading__description">
              Every service is backed by documented checklists covering classrooms, common areas and outdoor spaces.
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
            <h2 className="section-heading__title">What Brisbane education leaders say</h2>
            <p className="section-heading__description">
              Hear from principals and facility managers who rely on MOG Cleaning to keep students safe and impressed.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto section-shell" />

      <section className="section-shell section-shell--muted" id="related">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Explore more programs</span>
            <h2 className="section-heading__title">Consistent standards across your facilities</h2>
            <p className="section-heading__description">
              Extend MOG Cleaning across clinics, hospitality venues or administration offices for a unified experience.
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
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane schools
            </span>
            <h2 className="section-heading__title text-white">Ready to upgrade your campus presentation?</h2>
            <p className="section-heading__description text-white/80">
              Schedule a walkthrough and receive a detailed cleaning proposal within 24 hours.
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
