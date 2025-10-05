import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Sparkles,
} from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';

const EducationCleaning: React.FC = () => {
  const inclusions = [
    'Classroom and laboratory cleaning with attention to desks, tech and experiment benches',
    'Playground, sandpit and outdoor equipment sanitising and litter control',
    'Library, resource and breakout space presentation including upholstery cleaning',
    'Admin office and staff room hygiene with shared equipment sanitising',
    'Canteen, kitchen and food technology room cleaning aligned to food safety guidelines',
    'Toilet block deep cleans, consumable management and graffiti removal',
    'Assembly halls, gymnasiums and multipurpose courts floor care and line protection',
    'Vacation care and school holiday deep cleans with floor sealing and high dusting',
    'Emergency spill, biohazard and outbreak response with documentation for leadership teams',
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Support Student Wellbeing',
      description: 'Clean, healthy learning environments reduce absenteeism and reassure parents.',
    },
    {
      icon: ShieldCheck,
      title: 'Child-Safe Practices',
      description: 'Low-tox products, Blue Card checked staff and documented procedures for peace of mind.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Before-school, after-hours and holiday deep cleans tailored to your timetable.',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Communication',
      description: 'Supervisors provide checklists, photos and alerts so leadership teams stay informed.',
    },
  ];

  const testimonials = [
    {
      quote:
        'Classrooms sparkle each morning and the air feels fresh for students. MOG Cleaning follows our checklist exactly and keeps high-touch areas immaculate.',
      name: 'School Operations Manager',
      role: 'Brisbane Primary School',
    },
    {
      quote:
        'They turn playgrounds and amenities around quickly after sports days. Families often remark on how tidy and hygienic everything is at pickup.',
      name: 'Centre Director',
      role: 'Brisbane Early Learning Campus',
    },
    {
      quote:
        'During term breaks they deep-clean labs, libraries and cafeterias so we reopen to spotless spaces without rushing our own staff.',
      name: 'Facilities Coordinator',
      role: 'Brisbane College',
    },
  ];

  const faqs = [
    {
      question: 'Are your staff cleared to work around children?',
      answer:
        'Yes. Every team member holds a current Blue Card/Working With Children Check, police clearance and receives ongoing training in child-safe practices.',
    },
    {
      question: 'Do you offer school holiday deep cleans?',
      answer:
        'We schedule intensive cleans during term breaks covering floor restoration, high dusting, furniture shampooing and maintenance support.',
    },
    {
      question: 'Can you help during illness outbreaks?',
      answer:
        'We provide rapid disinfecting crews for classrooms, playgrounds and shared areas with documentation suitable for parent communications.',
    },
  ];

  const relatedLinks = [
    { name: 'Retail & Showroom Cleaning', path: '/services/retail' },
    { name: 'Medical Facility Cleaning', path: '/services/health' },
    { name: 'Contact Our Team', path: '/contact' },
  ];

  const heroHighlights = [
    {
      icon: GraduationCap,
      title: 'Education specialists',
      description: 'Classrooms, labs, playgrounds and admin spaces cleaned to child-safe standards.',
    },
    {
      icon: Users,
      title: 'Leadership-friendly reporting',
      description: 'Transparent updates for principals, business managers and facility teams.',
    },
    {
      icon: Phone,
      title: 'Holiday deep cleans',
      description: 'Plan restorations, steam cleans and high dusting over school breaks.',
    },
  ];

  const pageTitle = 'Education Cleaning Brisbane | School & Childcare Cleaners';
  const pageDescription =
    'Education cleaning for Brisbane schools, childcare centres and training colleges. Low-tox products, flexible scheduling and reporting for leadership teams.';
  const serviceUrl = 'https://mogcleaning.com.au/services/education';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Education Cleaning Services',
    serviceType: 'Education Cleaning',
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
        imageAlt="Classroom being cleaned"
        keywords={['school cleaning Brisbane', 'childcare cleaners', 'education cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <PageHero
        backgroundImage="/images/classroom-cleaning-background.jpg"
        overlay="charcoal"
        align="center"
        eyebrow="Education cleaning"
        eyebrowIcon={GraduationCap}
        title="Safe, inspiring campuses across Brisbane."
        description="Create calm classrooms and spotless amenities with child-safe cleaning programs aligned to your timetable."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Arrange a site visit
            </Link>
            <Link to="/process" className="btn-ghost">
              See onboarding steps
              <ArrowRight className="h-5 w-5" />
            </Link>
          </>
        }
      />

      <HeroHighlightBand items={heroHighlights} />

      <QuoteSection
        eyebrow="Supportive onboarding"
        title="Request your education cleaning quote"
        description="Tell us about your classrooms, play areas and specialist spaces. We’ll map a low-tox cleaning program that keeps students safe and facilities inspection-ready."
        bullets={[
          'Blue Card accredited cleaning teams',
          'On-site walkthrough before term start',
          'Reporting aligned to school compliance',
        ]}
        formTitle="Tell us about your campus"
        formSubtitle="We’ll respond within one business day with a tailored proposal."
      />

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why educators choose us</span>
            <h2 className="section-heading__title">Healthy learning environments every day</h2>
            <p className="section-heading__description">
              From kindy rooms to college labs, we deliver low-tox cleaning that supports student wellbeing and leadership confidence.
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
            <span className="section-heading__eyebrow">Education inclusions</span>
            <h2 className="section-heading__title">Documented checklist for leadership teams</h2>
            <p className="section-heading__description">
              Every space on campus is covered so teachers, students and parents can focus on learning, not cleaning.
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
            <span className="section-heading__eyebrow">Testimonials</span>
            <h2 className="section-heading__title">Schools and centres that trust us</h2>
            <p className="section-heading__description">
              Hear from Brisbane education leaders who rely on MOG Cleaning for spotless classrooms and facilities.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Other services</span>
            <h2 className="section-heading__title">Keep every campus area immaculate</h2>
            <p className="section-heading__description">
              Combine education cleaning with other MOG programs for a cohesive facilities experience.
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
            <h2 className="section-heading__title">Education cleaning questions answered</h2>
            <p className="section-heading__description">
              Find out how we support child-safe practices, school holiday deep cleans and outbreak response.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto" />
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane schools
            </span>
            <h2 className="section-heading__title text-white">Ready for spotless learning spaces?</h2>
            <p className="section-heading__description text-white/80">
              Book a walkthrough to receive a tailored cleaning scope, schedule and pricing within 24 hours.
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

export default EducationCleaning;
