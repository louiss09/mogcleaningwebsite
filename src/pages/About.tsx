import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Clock, Sparkles, HeartHandshake, CheckCircle, Phone } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { useScrollToSection } from '../hooks/useScrollToSection';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import QuoteSection from '../components/QuoteSection';

const About: React.FC = () => {
  const scrollToServices = useScrollToSection('services');

  const stats = [
    { value: 500, suffix: '+', label: 'Facilities serviced', icon: Users },
    { value: 5, suffix: '+', label: 'Years in operation', icon: Clock },
    { value: 24, suffix: '/7', label: 'Rapid response line', icon: Shield },
    { value: 100, suffix: '%', label: 'Police-checked crew', icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability first',
      description: 'We turn up when promised, follow your site rules to the letter and document every clean for transparency.',
    },
    {
      icon: Users,
      title: 'People powered',
      description: 'Our Brisbane-based team receives continual training, PPE refreshers and mentoring from experienced supervisors.',
    },
    {
      icon: Award,
      title: 'Quality obsessed',
      description: 'Detailed checklists, photographic reporting and KPI reviews keep standards consistently high across every site.',
    },
    {
      icon: HeartHandshake,
      title: 'Partnership mindset',
      description: 'We build long-term relationships with facility managers and owners to support evolving cleaning needs.',
    },
  ];

  const trustSignals = [
    {
      title: 'Compliance ready',
      description: 'Police checks, insurance, SWMS and inductions supplied before day one.',
    },
    {
      title: 'Supervisor accountability',
      description: 'Named contacts provide photo reports and monthly reviews.',
    },
    {
      title: 'Transparent pricing',
      description: 'Scope, schedule and investment mapped clearly with no surprises.',
    },
  ];

  const storyPoints = [
    'Founded in 2019 to solve inconsistent commercial cleaning for Brisbane businesses.',
    'Grew from a small after-hours crew to a full-service, multi-sector team across the metro region.',
    'Invest heavily in training, induction and compliance so every cleaner represents your brand professionally.',
  ];

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MOG Cleaning',
    url: 'https://mogcleaning.com.au/about',
    logo: 'https://mogcleaning.com.au/logo.svg',
    sameAs: ['https://www.instagram.com/mogclean'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+61 411 820 650',
        contactType: 'customer service',
        areaServed: 'AU',
        availableLanguage: ['English'],
      },
    ],
  };

  return (
    <div>
      <SEO
        title="About MOG Cleaning | Brisbane Commercial Cleaning Experts"
        description="Discover who is behind MOG Cleaning and how our Brisbane commercial cleaning specialists deliver dependable, high-quality results for local businesses."
        type="article"
        jsonLd={organizationSchema}
      />

      <PageHero
        backgroundImage="/brisbane2.jpg"
        backgroundPosition="center 46%"
        overlay="spruce"
        align="center"
        className="hero-extra-top"
        eyebrow="About MOG Cleaning"
        eyebrowIcon={Sparkles}
        title="The reliable team behind Brisbane’s high-converting cleaning programs."
        description="Meet the supervisors, systems and values that keep your sites spotless and your team confident."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book a consultation
            </Link>
            <Link to="/#services" onClick={scrollToServices} className="btn-secondary">
              View services
            </Link>
          </>
        }
      />

      <section className="section-shell">
        <div className="container-max mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Who we are</span>
              <h2 className="section-heading__title">Building a trustworthy cleaning partner for Brisbane</h2>
              <p className="section-heading__description">
                We launched MOG Cleaning after seeing too many businesses struggle with inconsistent results, revolving door crews and poor communication. Today we deliver tailored programs backed by transparent reporting and friendly, reliable people.
              </p>
            </div>
            <ul className="space-y-4 text-jet/80">
              {storyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-celestial-blue-1"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/#services" onClick={scrollToServices} className="btn-secondary">
                Explore services
              </Link>
              <Link to="/process" className="btn-primary">
                See our process
              </Link>
            </div>
          </div>
          <div className="glass-panel" data-variant="frost">
            <img
              src="/brisbane.jpg"
              alt="Professional cleaning team in Brisbane"
              className="h-full w-full rounded-[32px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why clients stay</span>
            <h2 className="section-heading__title">Credibility built on responsiveness and results</h2>
            <p className="section-heading__description">
              We treat your facility like our own, aligning with your brand standards and communicating every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="feature-grid-card">
                <h3 className="text-xl font-semibold text-charcoal">{signal.title}</h3>
                <p className="text-jet/80 leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">By the numbers</span>
            <h2 className="section-heading__title">Growing with Brisbane businesses</h2>
            <p className="section-heading__description">
              Our success is measured in lasting relationships, spotless facilities and the trust of hundreds of local clients.
            </p>
          </div>
          <div className="stat-grid" data-columns="4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card" data-align="center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                  <stat.icon className="h-7 w-7" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} className="stat-card__value" />
                <div className="stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--muted" id="services">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">How we operate</span>
            <h2 className="section-heading__title">Values that shape every clean</h2>
            <p className="section-heading__description">
              These principles guide our hiring, training and the way we care for your facilities every day.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="feature-grid-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{value.title}</h3>
                <p className="text-jet/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection
        eyebrow="Ready to take the next step?"
        title="Let’s design your cleaning program"
        description="Tell us about your facility and we’ll respond with a tailored quote, onboarding plan and supervisor introduction."
        bullets={['Industry-specific crews', 'Transparent reporting', 'Rapid response support']}
        formTitle="Request your tailored quote"
        formSubtitle="Complete the form and our team will call within one business day."
      />

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Your next cleaning partner
            </span>
            <h2 className="section-heading__title text-white">Talk directly with our leadership team</h2>
            <p className="section-heading__description text-white/80">
              We’ll walk you through our onboarding, introduce your supervisor and map the first clean together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link to="/contact" className="btn-primary">
                Get a quote
              </Link>
              <a href="tel:+61411820650" className="btn-secondary">
                <Phone className="h-4 w-4" /> Call 0411 820 650
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
