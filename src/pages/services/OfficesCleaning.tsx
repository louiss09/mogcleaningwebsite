import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
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

const OfficesCleaning: React.FC = () => {
  const inclusions = [
    'Daily and weekly presentation cleans aligned to your office hours',
    'Desk, workstation and hot-desk sanitising with detail on shared equipment',
    'Boardroom and meeting room resets including AV wipes and table dressing',
    'Kitchen, break room and staff amenity hygiene with appliance detailing',
    'Reception, lobby and client lounge presentation with dust-free surfaces',
    'Washroom deep cleaning, consumable restocking and touchpoint disinfection',
    'Hard floor mopping, buffing and entry mat maintenance for high-traffic zones',
    'Carpet vacuuming, spot treatments and soft furnishing dusting',
    'Waste, recycling and confidential bin rotation with consumable management',
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Support Staff Productivity',
      description: 'Healthy, tidy workspaces reduce sick days and help teams focus on the work that matters.',
    },
    {
      icon: ShieldCheck,
      title: 'Impress Clients & Stakeholders',
      description: 'Reception and boardrooms are presentation-ready for every meeting and visitor walk-through.',
    },
    {
      icon: Clock,
      title: 'Schedule Around You',
      description: 'After-hours, weekend and event cleans to avoid disruption and protect confidentiality.',
    },
    {
      icon: CheckCircle,
      title: 'Accountable Reporting',
      description: 'Supervisors provide digital checklists, photos and KPI reviews so you can see every clean.',
    },
  ];

const testimonials = [
    {
      quote: 'Our workplace looks presentation-ready every morning. MOG Cleaning is reliable, detail-focused and our team notices the difference.',
      name: 'Office Client',
      role: 'Brisbane Corporate HQ',
    },
    {
      quote: 'Lift lobbies, reception counters and glass stay dust free all day. Communication is proactive whenever supplies run low.',
      name: 'Facilities Manager',
      role: 'Brisbane Commercial Tower',
    },
    {
      quote: 'Kitchenettes and breakout areas smell fresh without being overpowering. Staff keep remarking on how consistently clean everything is.',
      name: 'People & Culture Lead',
      role: 'Brisbane Workplace Hub',
    },
  ];

  const faqs = [
    {
      question: 'How do you onboard a new office location?',
      answer:
        'We start with a walkthrough to capture your security requirements, compliance documents and preferred schedule. From there you receive a tailored scope of works, SWMS and a crew playbook before the first clean.',
    },
    {
      question: 'Do you supply consumables and bathroom supplies?',
      answer:
        'Yes. We can manage consumables such as bin liners, hand soap, paper products and sanitiser. Usage is tracked in your monthly report so budgets stay predictable.',
    },
    {
      question: 'Can you respond to urgent or one-off office cleans?',
      answer:
        'Our Brisbane team keeps after-hours crews on standby for events, floods, post-fitout cleans or rapid disinfection. Call the office hotline for same-day assistance.',
    },
  ];

  const relatedLinks = [
    { name: 'Medical Facility Cleaning', path: '/services/health' },
    { name: 'Retail & Showroom Cleaning', path: '/services/retail' },
    { name: 'About MOG Cleaning', path: '/about' },
  ];

  const heroBadges = [
    { icon: ShieldCheck, label: 'Certified cleaners & police checks' },
    { icon: Clock, label: 'After-hours & same-day support' },
    { icon: CheckCircle, label: 'QA inspections with photo reports' },
  ];

  const pageTitle = 'Office Cleaning Brisbane | Professional Commercial Office Cleaners';
  const pageDescription = 'Professional office cleaning in Brisbane tailored for corporate offices, coworking spaces, and business centres. Flexible schedules, trained staff, and consistent quality.';
  const serviceUrl = 'https://mogcleaning.com.au/services/offices';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Office Cleaning Services',
    serviceType: 'Office Cleaning',
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
      name: 'Office cleaning inclusions',
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
        name: 'Office Cleaning',
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
        image="/images/office-cleaning-background.jpg"
        imageAlt="Clean Brisbane office workspace"
        keywords={['office cleaning Brisbane', 'commercial office cleaners', 'corporate cleaning services Brisbane']}
        jsonLd={[breadcrumbSchema, serviceSchema]}
      />

      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/office-cleaning-background.jpg')",
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
                <Building2 className="w-12 h-12 text-fresh-green mr-4" />
                <span className="text-fresh-green font-semibold text-lg">Office Cleaning Brisbane</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Corporate & Coworking Spaces Kept Client-Ready
              </h1>
              <p className="text-xl mb-6 text-white/90 drop-shadow-md">
                Partner with Brisbane office cleaning specialists who layer compliance-driven checklists, detailed presentation standards and responsive communication into every visit.
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
                  Book a Site Walkthrough
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
            <h2 className="text-3xl font-bold text-charcoal mb-6">Detailed Office Cleaning Inclusions</h2>
            <p className="text-lg text-jet mb-6">
              Every office is different, so we tailor your checklist and deliverables. Below is a snapshot of what our Brisbane clients entrust us with each week.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inclusions.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 text-fresh-green shrink-0" />
                  <span className="text-charcoal leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <ServiceSidebar title="Office Cleaning" description={pageDescription} />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Facilities Managers Choose MOG</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              We integrate with your operations team, providing flexible scheduling, secure access management and proactive feedback loops across every Brisbane office we service.
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
              Brisbane facilities leaders trust our office cleaning teams to deliver presentation-ready spaces, responsive communication and transparent reporting every visit.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-5xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Office Cleaning FAQs</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              Answers to the questions we are asked most by Brisbane office and facilities managers.
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
            <h2 className="text-3xl font-bold text-charcoal mb-4">Explore More Cleaning Programs</h2>
            <p className="text-lg text-jet">Expand your facility support with our other specialist services.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Office Cleaning?</h2>
            <p className="text-xl text-jet mb-8">
              Book a free walkthrough and scope session with our Brisbane team. We'll map a cleaning program that protects your brand, staff wellbeing and workplace compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get My Tailored Quote
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

export default OfficesCleaning;











