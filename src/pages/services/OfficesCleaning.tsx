import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  ClipboardCheck,
  Sparkles,
  ClipboardList,
  Presentation,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const OfficesCleaning: React.FC = () => {
  type InfoCard = {
    icon: LucideIcon;
    title: string;
    description: string;
  };

  const heroHighlights: InfoCard[] = [
    {
      icon: Users,
      title: 'Support productive teams',
      description: 'Healthy, tidy workspaces reduce sick days and keep your staff focused.',
    },
    {
      icon: ShieldCheck,
      title: 'Impress every visitor',
      description: 'Reception, boardrooms and lifts stay presentation ready for stakeholders.',
    },
    {
      icon: Clock,
      title: 'Zero-disruption scheduling',
      description: 'After-hours crews and rapid responses flex around hybrid workplace hours.',
    },
  ];

  const challenges: InfoCard[] = [
    {
      icon: ClipboardList,
      title: 'Desks still dusty at 9am',
      description:
        'Teams arrive to messy workstations and lose time tidying instead of starting the day strong.',
    },
    {
      icon: Clock,
      title: 'Slow turnaround on issues',
      description:
        'Overflowing bins or spills linger because your current provider takes days to respond.',
    },
    {
      icon: Presentation,
      title: 'Embarrassing client walkthroughs',
      description:
        'Boardrooms and reception areas aren’t inspection ready when executives arrive unexpectedly.',
    },
  ];

  const solutionCards: InfoCard[] = [
    {
      icon: Sparkles,
      title: 'Detail-first daily resets',
      description: 'Workstations, collaboration zones and breakout spaces restored before the first meeting.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance-ready onboarding',
      description: 'Insurance, SWMS, inductions and security protocols handled prior to launch.',
    },
    {
      icon: Clock,
      title: 'Flexible cadence',
      description: 'Nightly, alternate-day or weekend rotations plus rapid-response crews when plans change.',
    },
    {
      icon: ClipboardCheck,
      title: 'Accountable reporting',
      description: 'Supervisors deliver photo checklists, KPI reviews and monthly performance summaries.',
    },
  ];

  const proofPoints: Array<InfoCard & { value: string }> = [
    {
      icon: Sparkles,
      value: '94%',
      title: 'Staff satisfaction rating',
      description: 'Employees report cleaner workspaces and fewer hygiene complaints after onboarding.',
    },
    {
      icon: Clock,
      value: '30 min',
      title: 'Average response window',
      description: 'Issues raised during business hours receive an acknowledgement within thirty minutes.',
    },
    {
      icon: Phone,
      value: '24/7',
      title: 'Operations support line',
      description: 'Reach supervisors anytime to adjust schedules, add services or report incidents.',
    },
  ];

  const inclusions: string[] = [
    'Desk and workstation sanitising including hot-desk rotations',
    'Boardroom and meeting room resets with AV touchpoint cleaning',
    'Kitchen, breakout and amenity detailing with consumable management',
    'Reception and lobby presentation including glass, plants and décor',
    'Washroom deep cleaning, touchpoint disinfection and odour control',
    'Hard floor care, carpet vacuuming and high-traffic spot treatments',
  ];

  const testimonials = [
    {
      quote:
        'Our workplace looks presentation-ready every morning. MOG Cleaning is reliable, detail-focused and our team notices the difference.',
      name: 'Office Client',
      role: 'Brisbane Corporate HQ',
    },
    {
      quote:
        'Lift lobbies, reception counters and glass stay dust free all day. Communication is proactive whenever supplies run low.',
      name: 'Facilities Manager',
      role: 'Brisbane Commercial Tower',
    },
    {
      quote:
        'Kitchenettes and breakout areas smell fresh without being overpowering. Staff keep remarking on how consistently clean everything is.',
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

  const relatedLinks: Array<{ name: string; path: string; description: string }> = [
    {
      name: 'Medical Facilities',
      path: '/services/health',
      description: 'Extend consistent cleaning standards to your clinical or wellness areas.',
    },
    {
      name: 'Retail & Showroom',
      path: '/services/retail',
      description: 'Keep customer-facing spaces aligned with your corporate experience.',
    },
    {
      name: 'About MOG Cleaning',
      path: '/about',
      description: 'Learn more about the team, training and supervisors behind every program.',
    },
  ];

  const pageTitle = 'Office Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'Office cleaning services in Brisbane with presentation-ready workspaces, flexible scheduling and accountable reporting.';
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
  };

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="article"
        image="/images/office-cleaning-background.jpg"
        imageAlt="Brisbane office being cleaned after hours"
        url={serviceUrl}
        jsonLd={serviceSchema}
        keywords={['office cleaning Brisbane', 'commercial office cleaners', 'corporate cleaning services']}
      />

      <PageHero
        align="left"
        backgroundImage="/images/office-cleaning-background.jpg"
        backgroundPosition="center 36%"
        overlay="charcoal"
        eyebrow="Office programs"
        eyebrowIcon={Building2}
        title="Keep every workspace inspection ready"
        description="Reliable commercial cleaning that supports your hybrid teams, stakeholders and clients."
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
            <span className="section-heading__eyebrow">Pain points we remove</span>
            <h2 className="section-heading__title">What frustrates facilities teams</h2>
            <p className="section-heading__description">
              We eliminate the cleaning gaps that cause complaints, lost productivity and awkward client visits.
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
            <h2 className="section-heading__title">Office cleaning built for hybrid workplaces</h2>
            <p className="section-heading__description">
              We coordinate with your facilities team to keep every zone spotless and adaptable to changing schedules.
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
            <h2 className="section-heading__title">Metrics facilities managers rely on</h2>
            <p className="section-heading__description">
              We measure satisfaction, responsiveness and communication so stakeholders stay informed.
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
            <h2 className="section-heading__title">Comprehensive office cleaning checklist</h2>
            <p className="section-heading__description">
              Core services you can rely on every visit, with space to add specialty tasks when needed.
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
            <span className="section-heading__eyebrow">Trusted by Brisbane offices</span>
            <h2 className="section-heading__title">Client stories</h2>
            <p className="section-heading__description">
              Corporate teams stay with MOG Cleaning for reliable communication and measurable results.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <HowItWorks
        eyebrow="Onboarding roadmap"
        title="Launch your office cleaning program in four steps"
        description="We align expectations, documentation and schedules before the first clean."
      />

      <QuoteSection
        className="section-shell--muted"
        eyebrow="Ready for a better office experience?"
        title="Book a walkthrough for your workplace"
        description="Tell us about your floors, staff count and service frequency so we can prepare a tailored proposal."
        bullets={[
          'Hybrid workplace scheduling expertise',
          'Dedicated supervisor and reporting cadence',
          'Flexible scope for executive and shared spaces',
        ]}
        formTitle="Request your office cleaning quote"
        formSubtitle="Share your site details and priorities. We’ll respond within one business day."
      />

      <section className="section-shell" id="faq">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Office cleaning questions answered</h2>
            <p className="section-heading__description">
              Learn how we work with facilities teams, manage consumables and support urgent requests.
            </p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">More ways we help</span>
            <h2 className="section-heading__title">Keep momentum across your portfolio</h2>
            <p className="section-heading__description">
              Pair your office program with other facilities or learn more about our team before you book.
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

export default OfficesCleaning;
