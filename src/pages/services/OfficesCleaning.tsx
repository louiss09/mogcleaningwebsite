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
import SEO from '../../components/SEO';
import FAQAccordion from '../../components/FAQAccordion';
import TestimonialCarousel from '../../components/TestimonialCarousel';
import PageHero from '../../components/PageHero';
import QuoteSection from '../../components/QuoteSection';
import HeroHighlightBand from '../../components/HeroHighlightBand';
import HowItWorks from '../../components/HowItWorks';
import ChecklistPreview from '../../components/ChecklistPreview';
import FeatureTicker from '../../components/FeatureTicker';

const OfficesCleaning: React.FC = () => {
  const checklistPreview = [
    {
      icon: Users,
      title: 'Workstations & collaboration',
      description: 'Keep hybrid teams productive and healthy every day.',
      items: [
        'Desk, workstation and hot-desk sanitising aligned to your roster',
        'Shared equipment, phones and touchpoints detailed between shifts',
        'Breakout zones and collaboration spaces reset throughout the week',
      ],
    },
    {
      icon: Building2,
      title: 'Client-facing areas',
      description: 'Reception and boardrooms ready for every visitor.',
      items: [
        'Reception, lobby and lounge presentation with dust-free finishes',
        'Boardroom and meeting room resets including AV wipe-downs',
        'Entry glass, lifts and corridors polished to impress stakeholders',
      ],
    },
    {
      icon: Sparkles,
      title: 'Kitchens & amenities',
      description: 'Spaces your team rely on all day long.',
      items: [
        'Kitchen, break room and staff amenity hygiene with appliance detailing',
        'Washroom deep cleaning with consumable restocking and touchpoint disinfection',
        'End-of-trip and wellness spaces sanitised to support wellbeing',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Floors, waste & logistics',
      description: 'Behind-the-scenes routines that keep your office effortless.',
      items: [
        'Hard floor mopping, buffing and entry mat maintenance for high-traffic zones',
        'Carpet vacuuming, spot treatments and soft furnishing dusting',
        'Waste, recycling and confidential bin rotation with consumable management',
      ],
    },
  ];

  const checklistHighlights = checklistPreview.flatMap((group) => group.items);

  const benefits = [
    {
      icon: Users,
      title: 'Support staff productivity',
      description: 'Healthy, tidy workspaces reduce sick days and keep your team focused on the work that matters.',
    },
    {
      icon: ShieldCheck,
      title: 'Impress clients & stakeholders',
      description: 'Reception areas, boardrooms and lifts stay presentation ready for every visitor walkthrough.',
    },
    {
      icon: Clock,
      title: 'Zero-disruption scheduling',
      description: 'After-hours cleans, weekend support and rapid response crews when trading hours shift.',
    },
    {
      icon: CheckCircle,
      title: 'Accountable reporting',
      description: 'Supervisor checklists, photo reporting and KPI reviews keep every visit measurable.',
    },
  ];

  const painPoints = [
    {
      icon: ClipboardList,
      title: 'Desks still dusty at 9am',
      description: 'Teams arrive to messy workstations and start the day frustrated before the first meeting.',
    },
    {
      icon: Clock,
      title: 'Slow turnaround on issues',
      description: 'Overflowing bins or spills linger because your current provider takes days to respond.',
    },
    {
      icon: Presentation,
      title: 'Embarrassing client walkthroughs',
      description: 'Boardrooms and reception areas aren’t inspection ready when investors or executives arrive.',
    },
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

  const relatedLinks = [
    { name: 'Medical Facility Cleaning', path: '/services/health' },
    { name: 'Retail & Showroom Cleaning', path: '/services/retail' },
    { name: 'About MOG Cleaning', path: '/about' },
  ];

  const heroHighlights = [
    {
      icon: Users,
      title: 'Office specialists',
      description: 'Teams who understand corporate access, presentation and executive areas.',
    },
    {
      icon: ClipboardCheck,
      title: 'Documented scope',
      description: 'Detailed checklists and KPI tracking for every workspace and floor.',
    },
    {
      icon: Phone,
      title: 'Rapid support line',
      description: 'Direct escalation channel for last-minute board meetings or visitors.',
    },
  ];

  const featureTickerItems = [
    {
      icon: CheckCircle,
      title: 'Week-one discovery',
      description: 'Walkthrough, scope build and stakeholder alignment completed in days.',
    },
    {
      icon: Users,
      title: 'Named supervisors',
      description: 'Dedicated crew leads for every floor plate and specialist zone.',
    },
    {
      icon: Clock,
      title: 'Hybrid-ready scheduling',
      description: 'Rhythms that align with early starts, lunch peaks and after-hours resets.',
    },
    {
      icon: ClipboardCheck,
      title: 'Documented QA',
      description: 'Photo reporting, KPI reviews and transparent visit tracking.',
    },
    {
      icon: Sparkles,
      title: 'High-touch finishes',
      description: 'Boardrooms, reception and amenities detailed before leadership arrives.',
    },
  ];

  const officePrograms = [
    {
      title: 'Executive & client floors',
      copy: 'High-touch presentation for boardrooms, lounges and private offices with premium finishes.',
    },
    {
      title: 'Hybrid work hubs',
      copy: 'Hot desks, collaboration zones and phone booths sanitised between booking rotations.',
    },
    {
      title: 'Support areas & logistics',
      copy: 'Mail rooms, loading docks and storage areas organised to keep operations flowing.',
    },
    {
      title: 'Facilities & wellness zones',
      copy: 'End-of-trip, wellness rooms and training spaces maintained for employee wellbeing.',
    },
  ];

  const pageTitle = 'Office Cleaning Brisbane | Professional Commercial Office Cleaners';
  const pageDescription =
    'Professional office cleaning in Brisbane tailored for corporate offices, coworking spaces, and business centres. Flexible schedules, trained staff, and consistent quality.';
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
      itemListElement: checklistHighlights.map((service) => ({
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

      <PageHero
        backgroundImage="/images/office-cleaning-background.jpg"
        backgroundPosition="center 42%"
        overlay="charcoal"
        align="center"
        eyebrow="Office cleaning"
        eyebrowIcon={Building2}
        title="Brisbane offices that look investor-ready every morning."
        description="Keep suites, meeting rooms and breakout spaces inspection-ready with a program tuned to your building."
        actions={
          <>
            <Link to="/contact" className="btn-primary">
              Book your site walkthrough
            </Link>
            <a href="tel:+61411820650" className="btn-secondary">
              Call 0411 820 650
            </a>
          </>
        }
      />

      <HeroHighlightBand items={heroHighlights} />

      <section className="section-shell" id="pain-points">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">What you’re feeling</span>
            <h2 className="section-heading__title">Facility teams call us when the basics keep slipping</h2>
            <p className="section-heading__description">
              If desks are still dusty at 9am or boardrooms aren’t investor ready, it’s costing you credibility. We step in when you
              need a partner who owns the presentation and the reporting.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {painPoints.map((item) => (
              <div key={item.title} className="feature-grid-card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-celestial-blue-1/12 text-celestial-blue-1">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="text-jet/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="plan">
        <div className="container-max mx-auto space-y-6">
          <div className="section-heading" data-align="center">
            <span className="section-heading__eyebrow">Always-on presentation</span>
            <h2 className="section-heading__title">The office program leaders notice</h2>
            <p className="section-heading__description">
              A lightweight feature bar showcasing the routines that keep suites, meeting rooms and breakout zones inspection ready
              every day.
            </p>
          </div>
          <FeatureTicker items={featureTickerItems} />
        </div>
      </section>

      <HowItWorks
        eyebrow="How we onboard"
        title="Four steps to a spotless corporate workspace"
        description="From first walkthrough to ongoing QA, every stage is mapped so you can track progress and raise feedback instantly."
      />

      <section className="section-shell section-shell--muted" id="office-programs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Tailored playbooks</span>
            <h2 className="section-heading__title">Coverage for every space in your building</h2>
            <p className="section-heading__description">
              Executive suites, hybrid hubs and wellness zones each receive their own scope so your entire workplace looks intentional.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {officePrograms.map((program) => (
              <div key={program.title} className="rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-charcoal">{program.title}</h3>
                <p className="mt-3 leading-relaxed text-jet/80">{program.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="results">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Proof that sticks</span>
            <h2 className="section-heading__title">Brisbane offices staying presentation-ready</h2>
            <p className="section-heading__description">
              See how facility teams describe the difference once MOG Cleaning takes over their corporate floors.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <QuoteSection
        eyebrow="Start your program"
        title="Request your office cleaning proposal"
        description="Share your floor count, key access notes and current pain points. We’ll prepare a tailored scope, onboarding timeline and pricing within 24 hours."
        bullets={[
          'Site walkthrough before the first clean',
          'Police-checked, uniformed crews',
          'Supervisor QA visits with photo reports',
        ]}
        formTitle="Tell us about your office"
        formSubtitle="Your dedicated workplace contact will reach out within one business day."
      />

      <section className="section-shell" id="benefits">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Why teams stay</span>
            <h2 className="section-heading__title">Outcomes for your people and presentation</h2>
            <p className="section-heading__description">
              We tailor programs that support productivity, impress stakeholders and keep your compliance documentation audit ready.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="feature-grid-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">{benefit.title}</h3>
                <p className="leading-relaxed text-jet/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChecklistPreview
        id="inclusions"
        eyebrow="What’s included"
        title="Office cleaning preview"
        description="A sample of the routines we tailor for corporate HQs, coworking hubs and towers."
        note="This is a preview of common inclusions. After our walkthrough we document a checklist around your floors, access requirements and reporting cadence."
        categories={checklistPreview}
      />

      <section className="section-shell" id="faqs">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">FAQs</span>
            <h2 className="section-heading__title">Office cleaning FAQs</h2>
            <p className="section-heading__description">
              Find out how we onboard security, manage keys and document every shift before confirming your contract.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="mx-auto max-w-4xl" />
        </div>
      </section>

      <section className="section-shell section-shell--muted" id="related">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Need something else?</span>
            <h2 className="section-heading__title">Explore related programs</h2>
            <p className="section-heading__description">
              We service a wide range of commercial environments with the same responsive, accountable approach.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.name} to={link.path} className="feature-grid-card">
                <h3 className="text-xl font-semibold text-charcoal">{link.name}</h3>
                <span className="link-arrow">
                  View service
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Trusted by Brisbane offices
            </span>
            <h2 className="section-heading__title text-white">Ready for a spotless workplace?</h2>
            <p className="section-heading__description text-white/80">
              Book a walkthrough and receive a tailored scope, pricing and onboarding plan within 24 hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link to="/contact" className="btn-primary">
                Get a quote
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

export default OfficesCleaning;
