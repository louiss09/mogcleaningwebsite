import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Building2,
  Dumbbell,
  Heart,
  GraduationCap,
  Hotel,
  ShoppingBag,
  Award
} from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Home: React.FC = () => {
  const services = [
    {
      icon: Building2,
      name: 'Office Cleaning',
      path: '/services/offices',
      description: 'Daily presentation cleans, shared-desk sanitising, meeting room resets and kitchen care for corporate teams.',
      backgroundImage: '/images/office-cleaning-background.jpg',
    },
    {
      icon: Dumbbell,
      name: 'Fitness Centres',
      path: '/services/fitness',
      description: 'Equipment disinfecting, sweat and odour control, and spotless amenities that keep members renewing.',
      backgroundImage: '/images/fitness-cleaning-background.jpg',
    },
    {
      icon: Heart,
      name: 'Medical Facilities',
      path: '/services/health',
      description: 'QHealth-aligned surface disinfection, waiting room presentation and treatment room turnover support.',
      backgroundImage: '/images/medical-cleaning-background.jpg',
    },
    {
      icon: GraduationCap,
      name: 'Educational',
      path: '/services/education',
      description: 'Low-tox classroom cleaning, playground tidying and scheduled deep cleans for schools and childcare.',
      backgroundImage: '/images/classroom-cleaning-background.jpg',
    },
    {
      icon: Hotel,
      name: 'Hospitality',
      path: '/services/hospitality',
      description: 'Front-of-house sparkle, back-of-house compliance cleans and quick event turnarounds for venues.',
      backgroundImage: '/images/hotel-cleaning-background.jpg',
    },
    {
      icon: ShoppingBag,
      name: 'Retail Spaces',
      path: '/services/retail',
      description: 'Dust-free displays, entryways and stockrooms that protect merchandise and shopper experience.',
      backgroundImage: '/images/retail-cleaning-background.jpg',
    },
  ];

  const scrollToServices = useScrollToSection('services');

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Verified & Compliant',
      description: 'Fully insured, police-checked cleaners following Safe Work Method Statements and TGA-approved products.',
    },
    {
      icon: Users,
      title: 'Industry Specialists',
      description: 'Dedicated teams for offices, gyms, medical and hospitality sites so standards align with your sector.',
    },
    {
      icon: Clock,
      title: 'Zero-Disruption Scheduling',
      description: 'After-hours cleans, rapid response crews and proactive communication around key trading times.',
    },
    {
      icon: CheckCircle,
      title: 'Measured Quality Control',
      description: 'Supervisor checklists, photo reporting and KPI reviews keep every visit accountable.',
    },
  ];

  const trustSignals = [
    {
      icon: Star,
      value: '5.0/5',
      label: 'Average client rating',
      description: 'Based on Google reviews and quarterly satisfaction surveys with Brisbane partners.',
    },
    {
      icon: Award,
      value: '60+',
      label: 'Sites cleaned weekly',
      description: 'Across CBD offices, medical suites, fitness studios and multi-site retailers.',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Police-checked team',
      description: 'Documented inductions, PPE and compliance files ready for your onboarding.',
    },
  ];

const testimonials = [
  {
    quote: 'MOG Cleaning has transformed our workplace. The crew is reliable, thorough, and our office feels genuinely refreshed after every visit.',
    name: 'Office Client',
    role: 'Brisbane Corporate Suite',
  },
  {
    quote: 'Running a busy fitness centre means hygiene is everything. With MOG Cleaning, members walk into a clean, fresh environment that strengthens trust in our brand.',
    name: 'Gym Owner',
    role: 'Brisbane Fitness Centre',
  },
  {
    quote: 'We operate under strict clinical standards, and MOG Cleaning consistently delivers. Their professional communication gives our team total peace of mind.',
    name: 'Practice Manager',
    role: 'Brisbane Medical Facility',
  },
];

  const crossLinks: Array<{
    title: string;
    description: string;
    to: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }> = [
    {
      title: 'How Our Onboarding Works',
      description: 'See the walkthrough from site assessment to ongoing QA visits before your first clean.',
      to: '/process',
    },
    {
      title: 'Meet the Team Behind the Mop',
      description: 'Discover our story, leadership and the training that keeps standards high.',
      to: '/about',
    },
    {
      title: 'Compare Cleaning Programs',
      description: 'Review detailed inclusions for every industry-specific service we deliver - right on our home page.',
      to: '/#services',
      onClick: scrollToServices,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Request Quote',
      description: 'Share your facility details online or over the phone for a quick, tailored proposal.',
    },
    {
      step: '02',
      title: 'Site Visit & Plan',
      description: 'We inspect your site, capture risk assessments and set a customised scope of works.',
    },
    {
      step: '03',
      title: 'Cleaning Begins',
      description: 'Your dedicated crew delivers scheduled cleans with detailed checklists and photo logs.',
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Supervisors complete audits, review KPIs with you and adjust scope as needs evolve.',
    },
  ];

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mogcleaning.com.au/#business',
    name: 'MOG Cleaning',
    description: 'Professional commercial cleaning services in Brisbane for offices, gyms, medical, education, hospitality, and retail spaces.',
    url: 'https://mogcleaning.com.au',
    image: 'https://mogcleaning.com.au/logo.svg',
    telephone: '+61 411 820 650',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Brisbane Metro Area',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      postalCode: '4000',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.4698,
      longitude: 153.0251,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '14:00',
      },
    ],
    sameAs: ['https://www.instagram.com/mogclean'],
    makesOffer: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
      url: 'https://mogcleaning.com.au' + service.path,
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mogcleaning.com.au/#website',
    url: 'https://mogcleaning.com.au',
    name: 'MOG Cleaning',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mogcleaning.com.au/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
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
    ],
  };

  return (
    <div className="pt-20">
      <SEO
        title="Commercial Cleaning Brisbane | MOG Cleaning"
        description="Professional commercial cleaning services for offices, gyms, medical facilities, education, hospitality, and retail businesses across Brisbane."
        image="/images/office-cleaning-background.jpg"
        imageAlt="Commercial cleaner wiping office desk in Brisbane"
        keywords={['Brisbane commercial cleaning', 'office cleaning Brisbane', 'professional cleaners Brisbane']}
        jsonLd={[businessSchema, websiteSchema, breadcrumbSchema]}
      />

      <section className="relative gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                Brisbane Commercial Cleaning That Protects Your Reputation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white font-medium drop-shadow-md max-w-2xl">
                Trusted by offices, gyms, clinics, educators and hospitality venues across Brisbane. Our vetted team delivers
                consistent, audit-ready cleans so your staff, clients and compliance checks are always impressed.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 mr-2 text-fresh-green" />
                  <span className="text-sm font-medium">Fully Insured</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 mr-2 text-fresh-green" />
                  <span className="text-sm font-medium">Police Checked</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 mr-2 text-fresh-green" />
                  <span className="text-sm font-medium">5-Star Client Rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get My Free Quote
                </Link>
                <Link to="/process" className="btn-secondary">
                  See Our Process
                </Link>
                <Link to="/about" className="btn-secondary">
                  Meet the Team
                </Link>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <QuoteForm className="max-w-md lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 bg-white/95 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y border-ash-gray/20">
        <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-10">
          {trustSignals.map((signal, index) => (
            <div key={signal.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-celestial-blue-1/10 flex items-center justify-center">
                <signal.icon className="w-7 h-7 text-celestial-blue-1" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">{signal.value}</div>
              <div className="text-charcoal font-semibold">{signal.label}</div>
              <p className="text-jet/80 text-sm mt-2">{signal.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Brisbane Businesses Choose Us</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              We partner with facility managers who need responsive communication, accountable crews and measurable results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="text-center animate-slide-up p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-celestial-blue-1 to-celestial-blue-2 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-charcoal">{item.title}</h3>
                <p className="text-jet leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-ash-gray/20">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proof from Brisbane Clients</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              Real feedback from the businesses who trust us with their facilities every week.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-5xl" />
        </div>
      </section>
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24 md:scroll-mt-28 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              Explore tailored programs for your sector and see exactly what our crews handle on every visit.
            </p>
            <p className="text-jet mt-4">
              Need something specific? Bookmark this section or <Link to="/contact" className="text-celestial-blue-1 underline font-medium">request a tailored walkthrough</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link
                key={service.name}
                to={service.path}
                className="service-card animate-slide-up p-8 relative overflow-hidden group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  backgroundImage: service.backgroundImage ? `url(${service.backgroundImage})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {service.backgroundImage && (
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                )}

                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br from-celestial-blue-1 to-celestial-blue-2 rounded-lg flex items-center justify-center mb-6 ${service.backgroundImage ? 'bg-white/10 backdrop-blur-sm' : ''}`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${service.backgroundImage ? 'text-white' : 'text-charcoal'}`}>{service.name}</h3>
                  <p className={`mb-6 leading-relaxed ${service.backgroundImage ? 'text-white/90' : 'text-jet'}`}>{service.description}</p>
                  <div className={`flex items-center font-medium ${service.backgroundImage ? 'text-white' : 'text-celestial-blue-1'}`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Plan Your Next Step</h2>
            <p className="text-lg text-jet">Explore the resources that help you compare, meet and get started with MOG Cleaning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {crossLinks.map((item, index) => (
              <Link
                key={item.title}
                to={item.to}
                onClick={item.onClick}
                className="bg-white rounded-2xl shadow-md p-8 transition-transform hover:-translate-y-1 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{item.title}</h3>
                <p className="text-jet leading-relaxed mb-6">{item.description}</p>
                <span className="inline-flex items-center font-semibold text-celestial-blue-1">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="container-max">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Simple Process</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              From the first walkthrough to ongoing QA reviews, we make professional commercial cleaning simple and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step, index) => (
              <div key={step.title} className="process-step animate-slide-up text-center p-8" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-celestial-blue-1 to-celestial-blue-2 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-charcoal">{step.title}</h3>
                <p className="text-jet leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/process" className="btn-primary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-celestial-blue-1/12 via-white to-white text-charcoal">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Cleaner, Smarter Workplace?</h2>
            <p className="text-xl mb-8 text-jet">
              Join Brisbane businesses who partner with us for reliable cleaning, responsive communication and audit-ready reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get My Free Quote
              </Link>
              <a href="tel:+61411820650" className="btn-secondary border-charcoal text-charcoal hover:bg-charcoal hover:text-white">
                Call 0411 820 650
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


























