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
import ChecklistPreview from '../../components/ChecklistPreview';

const HealthCleaning: React.FC = () => {
  const checklistPreview = [
    {
      icon: Stethoscope,
      title: 'Clinical room turnovers',
      description: 'Protect patients and practitioners between appointments.',
      items: [
        'Treatment beds, chairs and touchpoints sanitised with TGA-approved products',
        'Zoned protocols separating clinical and admin areas',
        'Procedure and consult rooms reset with fresh consumables',
      ],
    },
    {
      icon: Users,
      title: 'Waiting & reception presentation',
      description: 'Front-of-house spaces that build patient confidence.',
      items: [
        'Waiting room seating, counters and check-in screens disinfected',
        'Glass, doors and high-touch surfaces polished throughout the day',
        'Air filtration vents dusted to support healthy airflow',
      ],
    },
    {
      icon: Syringe,
      title: 'Sterilisation & waste control',
      description: 'Support your compliance and infection control protocols.',
      items: [
        'Sterilisation bay detailing and spill management',
        'Sharps bin checks and medical waste coordination',
        'Documentation updates for SWMS, chemical registers and audits',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Enhanced support & deep cleans',
      description: 'Specialised programs for higher-risk spaces.',
      items: [
        'Surgical suite and procedure room deep cleans scheduled after lists',
        'Rapid response sanitisation for outbreaks or incidents',
        'Custom reporting aligned with accreditation frameworks',
      ],
    },
  ];

  const checklistHighlights = checklistPreview.flatMap((group) => group.items);

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

  const clinicalSpaces = [
    {
      name: 'General practice & allied health',
      detail: 'Treatment rooms, consult spaces and waiting areas with zoned protocols.',
    },
    {
      name: 'Day surgery & procedure suites',
      detail: 'Turnover cleans, theatre deep cleans and sterilisation bay detailing.',
    },
    {
      name: 'Dental & specialist clinics',
      detail: 'Chairside sanitisation, suction line maintenance and lab support spaces.',
    },
    {
      name: 'Community health hubs',
      detail: 'Shared amenities, outreach rooms and admin offices supported with flexible rosters.',
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
        image="/images/healthcare-cleaning-background.jpg"
        imageAlt="Clean Brisbane medical clinic"
        keywords={['healthcare cleaning Brisbane', 'medical centre cleaners', 'infection control cleaning']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/medical-cleaning-background.jpg"
        backgroundPosition="center"
        overlay="charcoal"
        align="center"
        eyebrow="Healthcare cleaning"
        eyebrowIcon={Heart}
        title="Keep every clinic space patient-ready and audit confident."
        mobileTitle="Patient-ready, audit-safe clinics."
        description="Infection-control trained crews who align with your compliance requirements and deliver spotless clinical environments."
        mobileDescription="Infection-control crews align with your compliance and keep clinics spotless."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a compliance consult
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
            <span className="section-heading__eyebrow">When clinics reach out</span>
            <h2 className="section-heading__title">You can’t risk missed touchpoints or paperwork gaps</h2>
            <p className="section-heading__description">
              Practice managers come to us when the basics aren’t being met—smudged reception counters, no zoning, or missing SWMS before accreditation.
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
        title="Four steps from first call to audit-ready cleaning"
        description="Every healthcare client follows the same proven process so you stay in control of infection protocols and reporting."
      />

      <section className="section-shell section-shell--muted" id="spaces">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Clinical spaces</span>
            <h2 className="section-heading__title">Detailed support for every wing</h2>
            <p className="section-heading__description">
              No two healthcare facilities are the same. We tailor checklists for every clinical space you manage.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {clinicalSpaces.map((space) => (
              <div key={space.name} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-charcoal">{space.name}</h3>
                <p className="mt-3 leading-relaxed text-jet/80">{space.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Proof that matters</span>
            <h2 className="section-heading__title">Healthcare teams that trust MOG Cleaning</h2>
            <p className="section-heading__description">
              Hear from medical centres that rely on us for compliant cleaning and patient-ready spaces.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <QuoteSection
        eyebrow="Start your program"
        title="Request your healthcare cleaning proposal"
        description="Tell us about your clinical areas, zoning requirements and key compliance needs. We’ll craft a program, onboarding plan and pricing within 24 hours."
        bullets={[
          'Infection-control trained cleaners',
          'Zoned protocols and PPE ready',
          'Documentation supplied for audits',
        ]}
        formTitle="Tell us about your facility"
        formSubtitle="Your dedicated healthcare contact will respond within one business day."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why healthcare leaders choose us</span>
            <h2 className="section-heading__title">Outcomes for your teams and patients</h2>
            <p className="section-heading__description">
              Precision cleaning, infection control protocols and detailed reporting keep your practice running smoothly.
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
        title="Healthcare cleaning preview"
        description="A look at the priorities we cover in medical, allied health and specialist clinics."
        note="This preview covers frequent priorities. After our site visit we document a checklist aligned with your infection control and accreditation requirements."
        categories={checklistPreview}
      />

      <section className="section-shell" id="faqs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Healthcare cleaning FAQs</h2>
            <p className="section-heading__description">
              Learn how we handle infection control, patient schedules and compliance documentation.
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
              From office buildings to schools, we deliver the same detail-focused approach across Brisbane.
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
              <Sparkles className="h-4 w-4" /> Trusted by healthcare practices
            </span>
            <h2 className="section-heading__title text-white">Ready for a compliant, patient-ready clinic?</h2>
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

export default HealthCleaning;
