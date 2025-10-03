import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
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
      title: 'Align with Child Safety Standards',
      description: 'Low-tox products, documented procedures and Blue Card checked staff.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Before-school, after-hours and school holiday deep cleans tailored to your timetable.',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Communication',
      description: 'Supervisors provide checklists, photos and alerts so principals and business managers stay informed.',
    },
  ];

const testimonials = [
    {
      quote: 'Classrooms sparkle each morning and the air feels fresh for students. MOG Cleaning follows our checklist exactly and keeps high-touch areas immaculate.',
      name: 'School Operations Manager',
      role: 'Brisbane Primary School',
    },
    {
      quote: 'They turn playgrounds and amenities around quickly after sports days. Families often remark on how tidy and hygienic everything is at pickup.',
      name: 'Centre Director',
      role: 'Brisbane Early Learning Campus',
    },
    {
      quote: 'During term breaks they deep-clean labs, libraries and cafeterias, so we reopen to spotless spaces without rushing our own staff.',
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

  const heroBadges = [
    { icon: ShieldCheck, label: 'Blue Card & child-safe inducted crew' },
    { icon: Clock, label: 'Before-school, after-hours & holiday schedules' },
    { icon: CheckCircle, label: 'Low-tox products with QA inspections' },
  ];

  const pageTitle = 'Education Cleaning Brisbane | School & Childcare Cleaners';
  const pageDescription = 'Education cleaning for Brisbane schools, childcare centres and training colleges. Low-tox products, flexible scheduling and reporting for leadership teams.';
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
        imageAlt="School classroom being cleaned in Brisbane"
        keywords={['school cleaning Brisbane', 'childcare cleaners', 'education cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/classroom-cleaning-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-12 h-12 text-fresh-green mr-4" />
                <span className="text-fresh-green font-semibold text-lg">Education Cleaning Brisbane</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Cleaner Classrooms, Happier Students
              </h1>
              <p className="text-xl mb-6 text-white/90 drop-shadow-md">
                Support Brisbane schools, childcare centres and training colleges with low-tox commercial cleaning that keeps classrooms, amenities and playgrounds hygienic, safe and parent-ready.
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
                  Book a Campus Walkthrough
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Education Cleaning Inclusions</h2>
            <p className="text-lg text-jet mb-6">
              Choose the checklist that suits your timetable, student numbers and campus footprint. Here's what Brisbane educators rely on us for.
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

          <ServiceSidebar title="Education Cleaning" description={pageDescription} />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Schools Choose MOG</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              We collaborate with principals, business managers and facility teams to keep campuses safe, welcoming and inspection-ready.
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
              Principals and centre directors partner with us to keep classrooms, playgrounds and amenities parent-ready every day.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-5xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Education Cleaning FAQs</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              Answers for principals, business managers and operations teams across Brisbane.
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
            <p className="text-lg text-jet">Keep every campus touchpoint consistent with MOG Cleaning.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Cleaner Classrooms?</h2>
            <p className="text-xl text-jet mb-8">
              Book a walkthrough with our education specialists. We'll map out a child-safe cleaning plan, schedule and budget you can take to leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get My Education Cleaning Quote
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

export default EducationCleaning;








