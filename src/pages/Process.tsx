import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Eye, Play, CheckCircle, ArrowRight, ClipboardCheck, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Request Quote',
      description:
        "Share your facility details and preferred schedule via phone or our online form. We'll map a tailored, obligation-free proposal.",
      details: [
        'Initial consultation call',
        'Facility type and size assessment',
        'Cleaning frequency discussion',
        'Special requirements captured',
      ],
    },
    {
      number: '02',
      icon: Eye,
      title: 'Site Visit & Plan',
      description:
        'We visit your facility for a detailed walkthrough and create a customised cleaning plan aligned with your compliance needs.',
      details: [
        'Comprehensive walkthrough',
        'Risk assessment & SWMS updates',
        'Detailed quote & scope delivered',
        'Service agreement confirmed',
      ],
    },
    {
      number: '03',
      icon: Play,
      title: 'Cleaning Begins',
      description:
        'Your dedicated crew launches the schedule with inductions, presentation standards and consumable management in place.',
      details: [
        'Team introduction & orientation',
        'First service with supervisor on-site',
        'Consumables & equipment prepared',
        'Ongoing schedule confirmed',
      ],
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Quality Assurance',
      description:
        'We maintain standards with supervisor audits, feedback loops and continual improvement meetings with your team.',
      details: [
        'Regular quality inspections',
        'Client feedback sessions',
        'Photo reporting & KPI reviews',
        'Program refinements as needs evolve',
      ],
    },
  ];

  const milestones = [
    { label: 'Day 1', description: 'Quote request & consultation', icon: Phone },
    { label: 'Day 3', description: 'On-site assessment completed', icon: Eye },
    { label: 'Week 1', description: 'First clean & schedule launch', icon: Play },
    { label: 'Ongoing', description: 'Audit-ready reporting delivered', icon: ClipboardCheck },
  ];

  const pageTitle = 'Commercial Cleaning Process Brisbane | MOG Cleaning';
  const pageDescription = 'See how MOG Cleaning guides Brisbane businesses from first contact to ongoing commercial cleaning with a clear four-step process.';
  const baseUrl = 'https://mogcleaning.com.au';

  const howToSteps = steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.description,
    itemListElement: step.details.map((detail, detailIndex) => ({
      '@type': 'HowToDirection',
      position: detailIndex + 1,
      text: detail,
    })),
  }));

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to start commercial cleaning with MOG Cleaning',
    description: pageDescription,
    totalTime: 'P7D',
    supply: ['Cleaning requirements summary', 'Site walkthrough', 'Customized cleaning plan'],
    tool: ['Professional cleaning team', 'Eco-friendly products'],
    step: howToSteps,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Our Process',
        item: `${baseUrl}/process`,
      },
    ],
  };

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="article"
        keywords={['cleaning process Brisbane', 'commercial cleaning steps', 'how to start office cleaning service']}
        jsonLd={[breadcrumbSchema, howToSchema]}
      />

      <PageHero
        className="hero-extra-top"
        eyebrow="Our process"
        eyebrowIcon={Sparkles}
        title={
          <>
            Onboard your cleaning program
            <br />
            with four focused steps
          </>
        }
        description="Four clear steps to scope your facility, induct your crew and keep quality measurable from day one."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Start the process
            </Link>
            <Link to="/#services" className="btn-ghost">
              Explore services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </>
        }
      />

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Step-by-step</span>
            <h2 className="section-heading__title">A transparent onboarding journey</h2>
            <p className="section-heading__description">
              Every stage is designed to understand your facility, launch seamlessly and maintain the standards your business requires.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {steps.map((step) => (
              <div key={step.number} className="process-step">
                <div className="flex items-center gap-4">
                  <span className="pill-chip" data-variant="emerald">
                    Step {step.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                    <step.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-charcoal">{step.title}</h3>
                <p className="text-jet/80 leading-relaxed">{step.description}</p>
                <ul className="mt-4 space-y-2 text-jet/70 text-sm">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-celestial-blue-1"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Timeline</span>
            <h2 className="section-heading__title">What happens in the first week</h2>
            <p className="section-heading__description">
              From first enquiry to ongoing QA visits, you always know what to expect and who to contact.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((milestone) => (
              <div key={milestone.label} className="feature-grid-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-celestial-blue-1/12 text-celestial-blue-1">
                  <milestone.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{milestone.label}</h3>
                <p className="text-jet/80 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="glass-panel p-10" data-variant="frost">
            <h3 className="text-2xl font-semibold text-charcoal">Why our process works</h3>
            <p className="mt-4 text-jet/80 leading-relaxed">
              We invest in understanding your facility, documenting every requirement and communicating openly. That means no surprises for you or your team.
            </p>
            <ul className="mt-6 space-y-3 text-jet/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-celestial-blue-1"></span>
                Thorough site inductions for every cleaner.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-celestial-blue-1"></span>
                Supervisor audits with photographic reporting.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-celestial-blue-1"></span>
                Quarterly reviews to adapt to trading hours or new compliance needs.
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="section-heading" data-align="left">
              <span className="section-heading__eyebrow">Partnership mindset</span>
              <h2 className="section-heading__title">A cleaning team that feels in-house</h2>
              <p className="section-heading__description">
                We communicate with facilities managers, operations teams and tenants like colleagues, not contractors, so your standards stay protected.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-secondary">
                Meet the team
              </Link>
              <Link to="/contact" className="btn-primary">
                Schedule a walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Ready when you are
            </span>
            <h2 className="section-heading__title text-white">Let’s build your cleaning program</h2>
            <p className="section-heading__description text-white/80">
              Book a consultation to receive a tailored scope, launch plan and onboarding timeline for your facility.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link to="/contact" className="btn-primary">
                Request a consultation
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

export default Process;
