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
import type { LucideIcon } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const EducationCleaning: React.FC = () => {
  type InfoCard = {
    icon: LucideIcon;
    title: string;
    description: string;
  };

  const heroHighlights: InfoCard[] = [
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

  const challenges: InfoCard[] = [
    {
      icon: ClipboardList,
      title: 'Classrooms still dusty before the bell',
      description:
        'Teachers waste prep time re-setting rooms because previous cleaners rush or skip the detail work.',
    },
    {
      icon: Trees,
      title: 'Outdoor spaces fall behind',
      description:
        'Playgrounds and lunch areas collect rubbish and hazards without a team that understands daily student use.',
    },
    {
      icon: Brush,
      title: 'Holiday deep cleans get missed',
      description:
        'Floors, carpets and blinds are overlooked during breaks, so term restarts never feel fresh or ready.',
    },
  ];

  const solutionCards: InfoCard[] = [
    {
      icon: ShieldCheck,
      title: 'Child-first protocols',
      description: 'Colour-coded tools, child-safe chemistry and inducted crews protect every age group.',
    },
    {
      icon: Clock,
      title: 'Schedules built around the school day',
      description: 'Before-school resets, in-day touch-ups and holiday blitz cleans keep learning uninterrupted.',
    },
    {
      icon: Users,
      title: 'Dedicated campus supervisors',
      description: 'Named supervisors manage communication, compliance paperwork and quality audits for you.',
    },
    {
      icon: BookOpen,
      title: 'Transparent reporting',
      description: 'Photo logs, incident alerts and consumable tracking land in your inbox after every visit.',
    },
  ];

  const proofPoints: Array<InfoCard & { value: string } > = [
    {
      icon: Sparkles,
      value: '98%',
      title: 'Teacher satisfaction',
      description: 'Surveyed teaching teams rate classrooms presentation-ready when the bell rings.',
    },
    {
      icon: Clock,
      value: '24 hrs',
      title: 'Response to requests',
      description: 'Outbreak or event support confirmed within a business day so you can reassure families fast.',
    },
    {
      icon: GraduationCap,
      value: '30+',
      title: 'Campuses in SEQ',
      description: 'Independent, public and childcare sites rely on our inducted education cleaning crews.',
    },
  ];

  const inclusions: string[] = [
    'Daily classroom, admin and staff area resets',
    'Library, lab and specialist room detailing',
    'Playground, hall and outdoor zone upkeep',
    'Consumable monitoring and replenishment',
    'Holiday deep cleans and floor care programs',
    'Rapid outbreak response and disinfection',
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

  const relatedLinks: Array<{ name: string; path: string; description: string }> = [
    {
      name: 'Medical Facilities',
      path: '/services/health',
      description: 'See how we manage compliance-heavy clinical spaces with similar standards.',
    },
    {
      name: 'Hospitality Venues',
      path: '/services/hospitality',
      description: 'Discover our approach for high-traffic venues and rapid event turnarounds.',
    },
    {
      name: 'Contact MOG Cleaning',
      path: '/contact',
      description: 'Start a conversation about your school calendar and onboarding timeline.',
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
  };

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="article"
        image="/images/classroom-cleaning-background.jpg"
        imageAlt="Brisbane classroom prepared for the school day"
        url={serviceUrl}
        jsonLd={serviceSchema}
        keywords={['school cleaning Brisbane', 'childcare cleaning', 'education cleaning services']}
      />

      <PageHero
        align="left"
        backgroundImage="/images/classroom-cleaning-background.jpg"
        backgroundPosition="center 32%"
        overlay="charcoal"
        eyebrow="Education facilities"
        eyebrowIcon={GraduationCap}
        title="Keep every classroom learning-ready"
        description="Purpose-built cleaning programs that reassure parents, protect students and help staff focus on teaching."
        actions={
          <div className="hero-minimal__cta-group">
            <Link to="/contact" className="btn-primary">
              Request a quote
            </Link>
            <a href="tel:+61411820650" className="btn-secondary">
              Call 0411 820 650
            </a>
          </div>
        }
      />

      <HeroHighlightBand items={heroHighlights} />

      <section className="section-shell section-shell--muted" id="challenges">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">Common pain points</span>
            <h2 className="section-heading__title">The issues we solve for school teams</h2>
            <p className="section-heading__description">
              From prep rooms to senior campuses, we remove the cleaning headaches that distract principals, business managers and facility staff.
            </p>
          </div>
          <div className="feature-grid" data-columns="3">
            {challenges.map((item) => (
              <div key={item.title} className="feature-grid-card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-celestial-blue-1/12 text-celestial-blue-1">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="text-jet/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="solutions">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">How we respond</span>
            <h2 className="section-heading__title">A cleaning playbook tailored to your bell times</h2>
            <p className="section-heading__description">
              Each program is mapped to your timetable, compliance requirements and community expectations so nothing slips through the cracks.
            </p>
          </div>
          <div className="feature-grid" data-columns="4">
            {solutionCards.map((item) => (
              <div key={item.title} className="feature-grid-card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fresh-green/15 text-fresh-green">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="text-jet/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="proof">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Proof &amp; reassurance</span>
            <h2 className="section-heading__title">Metrics principals and parents care about</h2>
            <p className="section-heading__description">
              Transparent reporting keeps your community informed and confident in the hygiene of every learning space.
            </p>
          </div>
          <div className="stat-grid" data-columns="3">
            {proofPoints.map((point) => (
              <div key={point.title} className="stat-card" data-align="center">
                <div className="stat-card__icon">
                  <point.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="stat-card__value">{point.value}</div>
                <div className="stat-card__label">{point.title}</div>
                <p className="stat-card__description">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--brand" id="inclusions">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">What&apos;s included</span>
            <h2 className="section-heading__title">Education cleaning checklist</h2>
            <p className="section-heading__description">
              Every program includes the following core tasks with the flexibility to add specialty services during busy periods.
            </p>
          </div>
          <ul className="checklist-grid">
            {inclusions.map((item) => (
              <li key={item} className="checklist-grid__item">
                <CheckCircle aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell" id="testimonials">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Trusted by education leaders</span>
            <h2 className="section-heading__title">Hear from Brisbane schools</h2>
            <p className="section-heading__description">
              Principals and centre directors stay with MOG Cleaning because we communicate fast and deliver spotless results.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <HowItWorks
        eyebrow="Onboarding roadmap"
        title="Four steps to launch your school cleaning program"
        description="From your quote request to the first bell, we guide you through a transparent, accountable process."
      />

      <QuoteSection
        className="section-shell--muted"
        eyebrow="Ready for a walkthrough?"
        title="Let’s map your school cleaning plan"
        description="Share your campus details and preferred schedule so we can prepare a tailored quote and onboarding timeline."
        bullets={[
          'Child-safe products and inducted crews',
          'Flexible schedules across terms and holidays',
          'Photo reporting and compliance documentation',
        ]}
        formTitle="Request your education cleaning quote"
        formSubtitle="Tell us about your classrooms, enrolments and priorities. We’ll respond within one business day."
      />

      <section className="section-shell" id="faq">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Education cleaning questions answered</h2>
            <p className="section-heading__description">
              Still curious about how we work with your staff and students? Explore the most common questions we receive.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">More ways we help</span>
            <h2 className="section-heading__title">Explore other programs or get in touch</h2>
            <p className="section-heading__description">
              Whether you manage multiple sites or need complementary services, these pages will keep the momentum going.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.name} to={link.path} className="feature-grid-card group">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-lg font-semibold text-charcoal">{link.name}</span>
                  <ArrowRight className="h-5 w-5 text-celestial-blue-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
                <p className="text-sm leading-relaxed text-jet/80">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationCleaning;
