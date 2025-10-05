import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Clock, Sparkles, HeartHandshake } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { useScrollToSection } from '../hooks/useScrollToSection';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const About: React.FC = () => {
  const scrollToServices = useScrollToSection('services');

  const stats = [
    { value: 500, suffix: '+', label: 'Happy Clients', icon: Users },
    { value: 5, suffix: '+', label: 'Years Experience', icon: Clock },
    { value: 100, suffix: '%', label: 'Satisfaction Rate', icon: Award },
    { value: 24, suffix: '/7', label: 'Emergency Support', icon: Shield },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Reliability First',
      description: 'We turn up when promised, follow your site rules to the letter and document every clean for transparency.',
    },
    {
      icon: Users,
      title: 'People Powered',
      description: 'Our Brisbane-based team receives continual training, PPE refreshers and mentoring from experienced supervisors.',
    },
    {
      icon: Award,
      title: 'Quality Obsessed',
      description: 'Detailed checklists, photographic reporting and KPI reviews keep standards consistently high across every site.',
    },
    {
      icon: HeartHandshake,
      title: 'Partnership Mindset',
      description: 'We build long-term relationships with facility managers and owners to support evolving cleaning needs.',
    },
  ];

  const storyPoints = [
    'Started to solve inconsistent commercial cleaning for Brisbane businesses in 2019.',
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
        description="Discover the story behind MOG Cleaning and how our Brisbane commercial cleaning specialists deliver dependable, high-quality cleaning for local businesses."
        type="article"
        jsonLd={organizationSchema}
      />

      <PageHero
        backgroundImage="/brisbane2.jpg"
        overlay="spruce"
        align="center"
        className="hero-extra-top"
        eyebrow="About MOG Cleaning"
        eyebrowIcon={Sparkles}
        title="Meet the team behind MOG Cleaning."
        description="We’re a Brisbane-founded crew of supervisors and cleaners delivering accountable results for the workplaces you rely on."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Meet with our team
            </Link>
            <Link to="/#services" onClick={scrollToServices} className="btn-ghost">
              Explore services
            </Link>
          </>
        }
      />

      <section className="section-shell">
        <div className="container-max mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Our story</span>
              <h2 className="section-heading__title">Building a trustworthy cleaning partner for Brisbane</h2>
              <p className="section-heading__description">
                We launched MOG Cleaning after seeing too many businesses struggle with inconsistent results, revolving door crews and
                poor communication. Today we deliver tailored programs backed by transparent reporting and friendly, reliable people.
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
                Explore Services
              </Link>
              <Link to="/process" className="btn-primary">
                How We Onboard
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

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">What we stand for</span>
            <h2 className="section-heading__title">Values that guide every clean</h2>
            <p className="section-heading__description">
              These principles shape our hiring, training and the way we care for your facilities every day.
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

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="glass-panel p-10" data-variant="frost">
            <h3 className="text-2xl font-semibold text-charcoal">Why Brisbane chooses MOG Cleaning</h3>
            <p className="mt-4 text-jet/80 leading-relaxed">
              Facility managers stay with us because we combine detailed cleaning with proactive communication and fast support when
              needs change. We collaborate with your team to protect your brand every day.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-charcoal">Rapid response support</p>
                <p className="text-jet/70 text-sm">After-hours assistance for spills, events and surprise inspections.</p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Transparent reporting</p>
                <p className="text-jet/70 text-sm">Photo logs and checklists delivered after every scheduled clean.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Our commitment</span>
              <h2 className="section-heading__title">A partner invested in your presentation</h2>
              <p className="section-heading__description">
                We treat your facility like our own, aligning with your brand standards and communicating every step of the way.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/process" className="btn-secondary">
                View Our Process
              </Link>
              <Link to="/contact" className="btn-primary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
