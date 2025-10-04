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
  Award,
  Sparkles,
} from 'lucide-react';
import SEO from '../components/SEO';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { useScrollToSection } from '../hooks/useScrollToSection';
import FAQAccordion from '../components/FAQAccordion';
import PageHero from '../components/PageHero';
import HeroHighlightBand from '../components/HeroHighlightBand';

const Home: React.FC = () => {
  const scrollToServices = useScrollToSection('services');

  const heroHighlights = [
    {
      icon: Shield,
      title: 'Police-checked crews',
      description: 'Every cleaner is inducted to your site standards before the first shift.',
    },
    {
      icon: Clock,
      title: '24-hour responses',
      description: 'Direct access to our operations team when schedules or needs change.',
    },
    {
      icon: Sparkles,
      title: 'Presentation-first detailing',
      description: 'Detail-driven routines that keep workspaces feeling calm, fresh and client-ready.',
    },
  ];

  const heroBadges = [
    { icon: Award, label: 'Trusted by 60+ Brisbane sites' },
    { icon: Users, label: 'Dedicated site supervisors' },
  ];

  const trustSignals = [
    {
      icon: Star,
      value: '5.0/5',
      label: 'Average client rating',
      description: 'Consistently reviewed by Brisbane partners across quarterly surveys and public testimonials.',
    },
    {
      icon: Award,
      value: '60+',
      label: 'Active commercial sites',
      description: 'From CBD offices to medical practices, fitness studios and multi-site retailers across South East Queensland.',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Police-checked team',
      description: 'Documented inductions, SWMS and TGA-approved products ready for your compliance files.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Verified & Insured Crews',
      description: 'Fully insured teams with police checks, site inductions and PPE tailored to your facility.',
    },
    {
      icon: Users,
      title: 'Industry Specialists',
      description: 'Dedicated cleaners for offices, gyms, hospitality, retail and health to uphold the right standards.',
    },
    {
      icon: Clock,
      title: 'Disruption-Free Scheduling',
      description: 'After-hours cleans, weekend support and fast responses when trading hours or events shift.',
    },
    {
      icon: CheckCircle,
      title: 'Measured Quality Control',
      description: 'Supervisors complete audits, photo reporting and KPI reviews to keep every visit accountable.',
    },
  ];

  const services = [
    {
      icon: Building2,
      name: 'Office Cleaning',
      path: '/services/offices',
      description:
        'Presentation-ready office spaces with workstation sanitising, meeting room resets and kitchenette care.',
      image: '/images/office-cleaning-background.jpg',
    },
    {
      icon: Dumbbell,
      name: 'Fitness Centres',
      path: '/services/fitness',
      description: 'Equipment sanitising, odour control and locker room detailing to keep members renewing.',
      image: '/images/fitness-cleaning-background.jpg',
    },
    {
      icon: Heart,
      name: 'Medical Facilities',
      path: '/services/health',
      description: 'QHealth-aligned disinfecting with strict zoning, waiting room presentation and treatment room turnover.',
      image: '/images/medical-cleaning-background.jpg',
    },
    {
      icon: GraduationCap,
      name: 'Educational',
      path: '/services/education',
      description: 'Low-tox classroom cleaning, playground tidying and deep cleans for schools and childcare centres.',
      image: '/images/classroom-cleaning-background.jpg',
    },
    {
      icon: Hotel,
      name: 'Hospitality',
      path: '/services/hospitality',
      description: 'Front-of-house sparkle, back-of-house compliance and fast turnarounds between events and seatings.',
      image: '/images/hotel-cleaning-background.jpg',
    },
    {
      icon: ShoppingBag,
      name: 'Retail Spaces',
      path: '/services/retail',
      description: 'Dust-free displays, immaculate change rooms and stockroom care that protect the shopper experience.',
      image: '/images/retail-cleaning-background.jpg',
    },
  ];

  const crossLinks: Array<{
    title: string;
    description: string;
    to: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  }> = [
    {
      title: 'See Our Onboarding Process',
      description: 'Understand the walkthrough from site assessment to QA visits before your first clean.',
      to: '/process',
    },
    {
      title: 'Meet the Team Behind the Mop',
      description: 'Discover our story, leadership and the training programs that keep standards consistent.',
      to: '/about',
    },
    {
      title: 'Compare Industry Programs',
      description: 'Explore inclusions for offices, gyms, medical and hospitality services in one place.',
      to: '/#services',
      onClick: scrollToServices,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Request Your Quote',
      description: 'Share your facility details online or by phone for a tailored, obligation-free proposal.',
    },
    {
      step: '02',
      title: 'On-Site Assessment',
      description: 'We walk your site, capture access notes, risk assessments and build a customised scope of works.',
    },
    {
      step: '03',
      title: 'Launch Your Program',
      description: 'Your dedicated crew starts with presentation checklists, consumable management and reporting.',
    },
    {
      step: '04',
      title: 'Quality Assured',
      description: 'Supervisors complete audits, review KPIs with you and adapt the program as needs evolve.',
    },
  ];

  const faqs = [
    {
      question: 'How quickly can you start cleaning our site?',
      answer:
        'After your quote is accepted we can schedule onboarding within 5–7 business days. This includes a site walkthrough, inductions for your crew and confirmation of access requirements.',
    },
    {
      question: 'Do you bring all cleaning products and equipment?',
      answer:
        'Yes. Our teams arrive with commercial-grade equipment, colour-coded microfibre systems and TGA-approved disinfectants. We can also use client-supplied consumables to meet brand or sustainability policies.',
    },
    {
      question: 'Can cleans happen outside of trading hours?',
      answer:
        'Absolutely. Evening, overnight and early-morning schedules are part of our standard service. We coordinate with your security and facilities teams so access, alarms and lock-up procedures are followed.',
    },
    {
      question: 'How do you maintain consistent quality?',
      answer:
        'Every account has a supervisor who performs regular audits, uses photo checklists and meets with you quarterly to review KPIs. Any issues trigger corrective actions within the same shift or the next visit.',
    },
    {
      question: 'Are you covered for insurance and compliance?',
      answer:
        'We hold full public liability insurance, workers compensation, up-to-date police checks and industry certifications. All documentation is provided during onboarding and kept ready for compliance reviews.',
    },
  ];

  const testimonials = [
    {
      quote:
        'MOG Cleaning has transformed our workplace. The crew is reliable, thorough, and our office feels refreshed after every visit.',
      name: 'Office Client',
      role: 'Brisbane Corporate Suite',
    },
    {
      quote:
        'Running a busy fitness centre means hygiene is everything. With MOG Cleaning, members walk into a clean, fresh environment that strengthens trust in our brand.',
      name: 'Gym Owner',
      role: 'Brisbane Fitness Centre',
    },
    {
      quote:
        'We operate under strict clinical standards, and MOG Cleaning consistently delivers. Their communication gives our team total peace of mind.',
      name: 'Practice Manager',
      role: 'Brisbane Medical Facility',
    },
  ];

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mogcleaning.com.au/#business',
    name: 'MOG Cleaning',
    description:
      'Professional commercial cleaning services in Brisbane for offices, gyms, medical, education, hospitality, and retail businesses.',
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
    <div>
      <SEO
        title="Commercial Cleaning Brisbane | MOG Cleaning"
        description="Professional commercial cleaning services for offices, gyms, medical facilities, education, hospitality, and retail businesses across Brisbane."
        image="/images/office-cleaning-background.jpg"
        imageAlt="Commercial cleaner wiping office desk in Brisbane"
        keywords={['Brisbane commercial cleaning', 'office cleaning Brisbane', 'professional cleaners Brisbane']}
        jsonLd={[businessSchema, websiteSchema, breadcrumbSchema]}
      />

      <PageHero
        variant="photo"
        backgroundImage="/images/office-cleaning-background.jpg"
        overlay="slate"
        align="center"
        eyebrow="Trusted Brisbane partner"
        eyebrowIcon={Shield}
        title={
          <>
            Your Commercial Cleaning Partner
            <br />
            in Brisbane
          </>
        }
        description="Tailored programs for offices, gyms and clinics — delivered by vetted crews who keep every space calm, polished and client-ready."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a consultation
            </Link>
            <Link to="/#services" onClick={scrollToServices} className="btn-ghost">
              Explore services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </>
        }
        badges={heroBadges}
      />

      <HeroHighlightBand items={heroHighlights} />

      <section className="section-shell section-shell--muted" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Proof in numbers</span>
            <h2 className="section-heading__title">Brisbane businesses rely on our crew every week</h2>
            <p className="section-heading__description">
              From corporate towers to independent retailers, facility managers stay with MOG Cleaning for predictable results and
              responsive communication.
            </p>
          </div>
          <div className="stat-grid" data-columns="3">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="stat-card" data-align="center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                  <signal.icon className="h-7 w-7" />
                </div>
                <div className="stat-card__value">{signal.value}</div>
                <div className="stat-card__label">{signal.label}</div>
                <p className="stat-card__description">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why choose us</span>
            <h2 className="section-heading__title">Commercial cleaning shaped around your facility</h2>
            <p className="section-heading__description">
              We combine responsive communication, trained specialists and measurable reporting so you can focus on running your business.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="feature-grid-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="text-jet/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="services">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Industry programs</span>
            <h2 className="section-heading__title">Tailored cleaning for every Brisbane site</h2>
            <p className="section-heading__description">
              Explore the inclusions we deliver for each sector. Every program adapts to your access, trading hours and compliance needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link key={service.name} to={service.path} className="service-card group">
                <div className="service-card__frame">
                  <div className="service-card__surface">
                    <div className="service-card__visual">
                      <img
                        src={service.image}
                        alt={`${service.name} cleaning in Brisbane`}
                        className="service-card__image"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="service-card__label">
                        <service.icon className="h-4 w-4" />
                        {service.name}
                      </span>
                    </div>
                    <div className="service-card__content">
                      <h3 className="service-card__title">{service.name}</h3>
                      <p className="service-card__description">{service.description}</p>
                      <span className="service-card__cta">
                        Explore program
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-jet leading-relaxed">{service.description}</p>
                <span className="link-arrow">
                  View program
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Client stories</span>
            <h2 className="section-heading__title">What Brisbane businesses say about us</h2>
            <p className="section-heading__description">
              Reliable crews, consistent quality and proactive communication are the reasons our partners stay with MOG Cleaning.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-5xl" />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Plan your next step</span>
            <h2 className="section-heading__title">Compare, meet and get started</h2>
            <p className="section-heading__description">
              Use these resources to understand our onboarding, meet the leadership team and compare programs before you book your first clean.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {crossLinks.map((item) => (
              <Link key={item.title} to={item.to} onClick={item.onClick} className="feature-grid-card group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-celestial-blue-1/10 text-celestial-blue-1">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-charcoal">{item.title}</h3>
                <p className="text-jet/80 leading-relaxed">{item.description}</p>
                <span className="link-arrow">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Our process</span>
            <h2 className="section-heading__title">From first call to ongoing QA reviews</h2>
            <p className="section-heading__description">
              We make onboarding effortless and keep communication proactive so every clean stays on brief.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="process-step">
                <div className="flex items-center gap-4">
                  <span className="pill-chip" data-variant="emerald">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-charcoal">{step.title}</h3>
                <p className="text-jet/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/process" className="btn-secondary">
              See the full onboarding map
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Answers for facility managers and business owners</h2>
            <p className="section-heading__description">
              Still have questions about scheduling, onboarding or compliance? Start with these common answers.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto" />
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane businesses
            </span>
            <h2 className="section-heading__title text-white">Ready for a cleaner, smarter workplace?</h2>
            <p className="section-heading__description text-white/80">
              Partner with MOG Cleaning for reliable crews, proactive communication and audit-ready reporting.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link to="/contact" className="btn-primary">
                Get My Free Quote
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

export default Home;
