import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
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

const FitnessCleaning: React.FC = () => {
  const inclusions = [
    'Equipment sanitising between sessions with a focus on high-touch cardio and strength gear',
    'Locker room, shower and amenities deep cleaning with mould prevention',
    'Sauna, steam and recovery zone hygiene checks aligned to council compliance',
    'Group studio and reformer Pilates mat disinfecting with sweat and odour control',
    'Functional training zones, sled tracks and turf sweeps with disinfectant treatments',
    'Reception, member lounge and retail area presentation including glass and counters',
    'Daily waste, towel bin and laundry staging with odour neutralising solutions',
    'Air quality support with vent dusting and filter change reminders for facility managers',
    'Emergency spill, sweat and biohazard response with documented procedures',
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Protect Member Health',
      description: 'Hospital-grade disinfectants and ATP-tested protocols keep germs off shared equipment.',
    },
    {
      icon: Users,
      title: 'Boost Member Retention',
      description: 'Fresh-smelling change rooms and spotless studios are the difference between renewals and cancellations.',
    },
    {
      icon: Clock,
      title: 'Schedule Around Classes',
      description: 'Split crews handle pre-dawn, between-class and overnight cleans to keep you trading without interruption.',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Reporting',
      description: 'Receive photo logs, compliance checklists and sanitising schedules you can share with members.',
    },
  ];

const testimonials = [
    {
      quote: 'Our weights floor and locker rooms stay spotless even between peak classes. Members regularly comment on how fresh the facility feels.',
      name: 'Studio Owner',
      role: 'Brisbane Fitness Studio',
    },
    {
      quote: 'The crew arrives before dawn, wipes every touch point, and leaves the air smelling clean without overpowering scents. It keeps our brand standards high.',
      name: 'Club Manager',
      role: '24/7 Gym Brisbane',
    },
    {
      quote: 'They document each disinfectant cycle for turf, cardio and reformer zones. Passing hygiene audits has become stress free.',
      name: 'Regional Manager',
      role: 'Queensland Fitness Network',
    },
  ];

  const faqs = [
    {
      question: 'Can you clean while classes are running?',
      answer:
        'Yes. We structure mini-cleans between sessions and overnight deep cleans so equipment, mirrors and floors are ready for every booking.',
    },
    {
      question: 'Do you manage towel service and consumables?',
      answer:
        'We can handle used towel collection, laundry staging, restock of amenities and retail cleaning. Everything is logged in your monthly report.',
    },
    {
      question: 'What about high-risk areas like saunas or cold plunge rooms?',
      answer:
        'Our teams follow moisture and temperature protocols with specialised products to prevent mould, odours and slip hazards.',
    },
  ];

  const relatedLinks = [
    { name: 'Health & Medical Facility Cleaning', path: '/services/health' },
    { name: 'Hospitality Venue Cleaning', path: '/services/hospitality' },
    { name: 'Read About Our Process', path: '/process' },
  ];

  const heroBadges = [
    { icon: ShieldCheck, label: 'Hospital-grade disinfectants & ATP testing' },
    { icon: Clock, label: 'Split-shift cleans around class timetables' },
    { icon: CheckCircle, label: 'Photo logs and compliance-ready reporting' },
  ];

  const pageTitle = 'Gym & Fitness Centre Cleaning Brisbane | MOG Cleaning';
  const pageDescription = 'Keep your Brisbane gym spotless with specialised fitness centre cleaning. Equipment sanitising, locker room deep cleans and flexible schedules from MOG Cleaning.';
  const serviceUrl = 'https://mogcleaning.com.au/services/fitness';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gym and Fitness Centre Cleaning',
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
      name: 'Fitness centre cleaning inclusions',
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
        name: 'Fitness Centre Cleaning',
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
        imageAlt="Fitness centre undergoing professional cleaning in Brisbane"
        keywords={['gym cleaning Brisbane', 'fitness centre cleaners', 'health club cleaning services']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <section
        className="relative hero-section-spacing px-4 sm:px-6 lg:px-8 text-white overflow-hidden min-h-[70vh]"
        style={{
          backgroundImage: "url('/images/fitness-cleaning-background.jpg')",
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
                <Dumbbell className="w-12 h-12 text-fresh-green mr-4" />
                <span className="text-fresh-green font-semibold text-lg">Fitness Cleaning Brisbane</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Fresh, Sanitised Studios That Keep Members Coming Back
              </h1>
              <p className="text-xl mb-6 text-white/90 drop-shadow-md">
                Keep your Brisbane gym, studio or wellness club inspection-ready with fitness centre cleaning specialists who sanitise equipment, control odours and protect member health between every session.
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
                  Book a Gym Walkthrough
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Fitness Cleaning Inclusions</h2>
            <p className="text-lg text-jet mb-6">
              Every gym layout is different. Choose the inclusions that keep your timetable running smoothly and members feeling confident about hygiene.
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

          <ServiceSidebar title="Fitness Cleaning" description={pageDescription} />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Gyms Choose MOG</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              We align cleaning crews with your class timetable, brand experience and member retention goals.
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
              Brisbane fitness operators rely on us to keep studios fresh between classes, protect member hygiene and provide transparent reporting for every location.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-5xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Fitness Cleaning FAQs</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              Your most common questions answered for gyms, studios and wellness hubs across Brisbane.
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
            <p className="text-lg text-jet">Create a cohesive experience across every customer touchpoint.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Lift Your Facility Standards?</h2>
            <p className="text-xl text-jet mb-8">
              Let's design a cleaning program that supports member retention, hygiene compliance and premium brand experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get My Fitness Cleaning Quote
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

export default FitnessCleaning;








