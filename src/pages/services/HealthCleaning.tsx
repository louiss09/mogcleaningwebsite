import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Stethoscope,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ClipboardList,
  Syringe,
  FileWarning,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';

const HealthCleaning: React.FC = () => {
  type InfoCard = {
    icon: LucideIcon;
    title: string;
    description: string;
  };

  const heroHighlights: InfoCard[] = [
    {
      icon: ShieldCheck,
      title: 'Compliance-first teams',
      description: 'Infection control trained cleaners with police checks and medical inductions.',
    },
    {
      icon: Clock,
      title: 'Rapid clinical response',
      description: 'Support for spills, outbreaks and procedure turnovers within tight windows.',
    },
    {
      icon: Sparkles,
      title: 'Patient-ready presentation',
      description: 'Waiting rooms, reception counters and bathrooms that reassure on arrival.',
    },
  ];

  const challenges: InfoCard[] = [
    {
      icon: ClipboardList,
      title: 'Critical touchpoints missed',
      description:
        'Dust on reception counters or fingerprints on treatment chairs erodes patient confidence instantly.',
    },
    {
      icon: Syringe,
      title: 'Poor infection control',
      description:
        'Household products and no zoning between clinical and admin areas raise cross-contamination risks.',
    },
    {
      icon: FileWarning,
      title: 'Incomplete compliance records',
      description:
        'Accreditation visits stall when cleaners can’t supply inductions, SWMS, MSDS or audit logs.',
    },
  ];

  const solutionCards: InfoCard[] = [
    {
      icon: ShieldCheck,
      title: 'Documented infection control',
      description: 'TGA-approved products, PPE and zoning protocols aligned with QHealth and RACGP standards.',
    },
    {
      icon: Clock,
      title: 'Turnovers timed to appointments',
      description: 'Teams coordinate with practice managers to prepare rooms between patients without delays.',
    },
    {
      icon: Users,
      title: 'Named clinical supervisors',
      description: 'Dedicated contacts deliver photo reports, respond to incidents and manage audit readiness.',
    },
    {
      icon: Stethoscope,
      title: 'Patient experience focus',
      description: 'Reception, bathrooms and staff areas remain calm, organised and confidence-inspiring.',
    },
  ];

  const proofPoints: Array<InfoCard & { value: string }> = [
    {
      icon: ShieldCheck,
      value: '100%',
      title: 'Inducted medical crews',
      description: 'Police checks, vaccinations and compliance training verified before day one.',
    },
    {
      icon: Clock,
      value: '2 hrs',
      title: 'Average urgent response',
      description: 'Outbreak cleans or biohazard incidents addressed within a two-hour window.',
    },
    {
      icon: Users,
      value: '45+',
      title: 'Healthcare sites supported',
      description: 'GP clinics, specialists and allied health practices across South East Queensland.',
    },
  ];

  const inclusions: string[] = [
    'Treatment room turnovers with TGA-approved disinfectants',
    'Zoned cleaning separating clinical, admin and staff areas',
    'Waiting room and reception presentation with touchpoint focus',
    'Sterilisation bay detailing and spill management support',
    'Medical waste coordination and consumable restocking',
    'Air filtration, vent dusting and bathroom sanitising',
  ];

  const testimonials = [
    {
      quote:
        'MOG Cleaning understands the compliance demands of our medical centre. They communicate proactively and keep every room ready for patients.',
      name: 'Practice Manager',
      role: 'Multi-site GP Clinic',
    },
    {
      quote:
        'The team follows strict zoning and handover protocols. We feel confident recommending them to other specialists.',
      name: 'Clinical Director',
      role: 'Specialist Healthcare Group',
    },
    {
      quote:
        'Accreditation used to cause stress. Now all documentation, SWMS and chemical registers are provided in minutes.',
      name: 'Operations Lead',
      role: 'Allied Health Network',
    },
  ];

  const faqs = [
    {
      question: 'Do you follow infection control guidelines?',
      answer:
        'Yes. Our teams complete infection control training, follow QHealth standards and document every product used for traceability.',
    },
    {
      question: 'Can you work around patient schedules?',
      answer:
        'We clean before opening, after closing and in-between appointments to minimise disruption. Rapid response crews support urgent sanitisation.',
    },
    {
      question: 'Do you provide proof of compliance?',
      answer:
        'We supply police checks, insurance, SWMS, inductions and chemical registers as part of onboarding and keep them updated.',
    },
  ];

  const relatedLinks: Array<{ name: string; path: string; description: string }> = [
    {
      name: 'Office Programs',
      path: '/services/offices',
      description: 'Support your head office or corporate clinic with the same accountable approach.',
    },
    {
      name: 'Education Facilities',
      path: '/services/education',
      description: 'See how we care for campuses that also demand strict hygiene controls.',
    },
    {
      name: 'Contact MOG Cleaning',
      path: '/contact',
      description: 'Book a walkthrough and receive compliance documentation for your review.',
    },
  ];

  const pageTitle = 'Medical & Healthcare Cleaning Brisbane | MOG Cleaning';
  const pageDescription =
    'Clinical cleaning services for Brisbane healthcare providers with infection control, rapid response support and audit-ready reporting.';
  const serviceUrl = 'https://mogcleaning.com.au/services/health';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Healthcare Cleaning Services',
    serviceType: 'Medical Cleaning',
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
        image="/images/medical-cleaning-background.jpg"
        imageAlt="Medical treatment room being disinfected"
        url={serviceUrl}
        jsonLd={serviceSchema}
        keywords={['medical cleaning Brisbane', 'healthcare cleaning services', 'infection control cleaning']}
      />

      <PageHero
        align="left"
        backgroundImage="/images/medical-cleaning-background.jpg"
        backgroundPosition="center 45%"
        overlay="charcoal"
        eyebrow="Healthcare facilities"
        eyebrowIcon={Heart}
        title="Keep every patient space compliant"
        description="Specialist medical cleaning programs that protect patients, practitioners and your accreditation."
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
            <h2 className="section-heading__title">Where medical cleaning often breaks down</h2>
            <p className="section-heading__description">
              We solve the recurring frustrations that put accreditation, patient trust and staff morale at risk.
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
            <h2 className="section-heading__title">Clinical cleaning built for accreditation</h2>
            <p className="section-heading__description">
              Our playbook covers infection control, reporting and communication so your team can focus on patient care.
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
            <h2 className="section-heading__title">Compliance metrics that matter</h2>
            <p className="section-heading__description">
              Track response times, crew training and documentation so you’re always audit ready.
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
            <h2 className="section-heading__title">Healthcare cleaning checklist</h2>
            <p className="section-heading__description">
              Tailor the scope to your practice while keeping these compliance essentials every visit.
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
            <span className="section-heading__eyebrow">Trusted by Brisbane practitioners</span>
            <h2 className="section-heading__title">Client stories</h2>
            <p className="section-heading__description">
              Medical leaders partner with MOG Cleaning for reliable communication and compliance support.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <HowItWorks
        eyebrow="Onboarding roadmap"
        title="Launch your clinical cleaning program in four steps"
        description="We capture compliance requirements, documentation and schedules before a single shift."
      />

      <QuoteSection
        className="section-shell--muted"
        eyebrow="Need compliant support?"
        title="Request a healthcare cleaning consultation"
        description="Tell us about your practice size, modalities and accreditation requirements so we can prepare a detailed proposal."
        bullets={[
          'Infection control trained, police-checked crews',
          'Comprehensive documentation pack for audits',
          'Rapid response support for spills and outbreaks',
        ]}
        formTitle="Request your healthcare cleaning quote"
        formSubtitle="Share your clinic layout and compliance needs. We’ll respond within one business day."
      />

      <section className="section-shell" id="faq">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Healthcare cleaning questions answered</h2>
            <p className="section-heading__description">
              Learn how we integrate with your clinical team and maintain strict infection control standards.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading" data-align="left">
            <span className="section-heading__eyebrow">More ways we help</span>
            <h2 className="section-heading__title">Expand support across your network</h2>
            <p className="section-heading__description">
              Combine medical cleaning with other facilities or speak to our team about onboarding multiple sites.
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

export default HealthCleaning;
