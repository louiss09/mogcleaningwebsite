import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import PageHero from '../components/PageHero';
import QuoteSection from '../components/QuoteSection';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call us',
      details: '0411 820 650',
      subtext: 'Mon–Fri 7am – 6pm',
      action: 'tel:+61411820650',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@mogcleaning.com.au',
      subtext: 'Replies within 24 hours',
      action: 'mailto:info@mogcleaning.com.au',
    },
    {
      icon: MessageCircle,
      title: 'SMS / WhatsApp',
      details: '0411 820 650',
      subtext: 'Rapid responses for urgent cleans',
      action: 'sms:+61411820650',
    },
    {
      icon: MapPin,
      title: 'Service area',
      details: 'Brisbane Metro',
      subtext: 'All suburbs covered',
      action: null,
    },
  ];

  const faqs = [
    {
      question: 'What areas of Brisbane do you service?',
      answer:
        'We provide commercial cleaning across Brisbane CBD, inner suburbs and surrounding metro areas including northside and southside business precincts.',
    },
    {
      question: 'Do you provide cleaning supplies and equipment?',
      answer:
        'Yes. Our teams arrive with commercial-grade equipment and eco-friendly products. We can also manage consumables like bin liners, soap and paper goods.',
    },
    {
      question: 'How do you ensure quality and consistency?',
      answer:
        'Supervisors conduct scheduled inspections, maintain photo checklists and review KPIs with you so every visit meets your expectations.',
    },
    {
      question: 'Can you work around our business hours?',
      answer:
        'Absolutely. We clean after-hours, overnight, early mornings and weekends to keep your operations running smoothly.',
    },
    {
      question: 'Are your staff insured and background checked?',
      answer:
        'All cleaners are police-checked, fully insured and inducted to your site-specific WHS requirements before starting.',
    },
    {
      question: "What if we're not satisfied with a clean?",
      answer:
        'If something needs attention we return promptly to re-clean at no extra cost and update our checklist to prevent repeats.',
    },
  ];

  const pageTitle = 'Contact MOG Cleaning | Commercial Cleaning Quotes Brisbane';
  const pageDescription =
    'Request a free commercial cleaning quote in Brisbane. Call 0411 820 650 or email info@mogcleaning.com.au to schedule a site visit.';
  const baseUrl = 'https://mogcleaning.com.au';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact MOG Cleaning',
    description: pageDescription,
    url: `${baseUrl}/contact`,
    breadcrumb: {
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
          name: 'Contact',
          item: `${baseUrl}/contact`,
        },
      ],
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MOG Cleaning',
    url: baseUrl,
    email: 'info@mogcleaning.com.au',
    telephone: '+61 411 820 650',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Brisbane Metro Area',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      postalCode: '4000',
      addressCountry: 'AU',
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
    areaServed: {
      '@type': 'City',
      name: 'Brisbane',
    },
    sameAs: ['https://www.instagram.com/mogclean'],
  };

  return (
    <div>
      <SEO
        title={pageTitle}
        description={pageDescription}
        image="/images/accounting-background.jpg"
        imageAlt="Brisbane office being cleaned"
        keywords={['contact commercial cleaners Brisbane', 'request cleaning quote Brisbane', 'MOG Cleaning phone number']}
        jsonLd={[localBusinessSchema, contactPageSchema, faqSchema]}
      />

      <PageHero
        backgroundImage="/images/accounting-background.jpg"
        backgroundPosition="center 40%"
        overlay="charcoal"
        align="center"
        className="hero-extra-top"
        eyebrow="Contact"
        eyebrowIcon={Sparkles}
        title="Fast, tailored quotes that keep your operations moving."
        description="Share your facility details and we’ll reply within 24 hours with pricing, onboarding dates and your dedicated supervisor."
        actions={
          <>
            <a href="tel:+61411820650" className="btn-primary">
              Call 0411 820 650
            </a>
            <a href="mailto:info@mogcleaning.com.au" className="btn-secondary">
              Email our team
            </a>
          </>
        }
      />

      <QuoteSection
        eyebrow="Start here"
        title="Tell us about your facility"
        description="Use the form to tell us about your facility. We’ll review the requirements and respond with pricing, scope and onboarding steps."
        bullets={['Tailored proposals for your industry', 'Dedicated supervisor for every site', 'Flexible scheduling across Brisbane']}
        formTitle="Request your tailored quote"
        formSubtitle="We’ll reply within one business day with your proposal."
      />

      <section className="section-shell">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Prefer to talk right now?</span>
            <h2 className="section-heading__title">Choose how you’d like to connect</h2>
            <p className="section-heading__description">
              Call, email or send a quick message. Our Brisbane-based team is ready to support your commercial cleaning needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map((method) => {
              const content = (
                <div className="feature-grid-card h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-celestial-blue-1/12 text-celestial-blue-1">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{method.title}</h3>
                  <p className="text-lg font-semibold text-charcoal">{method.details}</p>
                  <p className="text-jet/70 text-sm">{method.subtext}</p>
                </div>
              );

              if (method.action) {
                return (
                  <a key={method.title} href={method.action} className="h-full">
                    {content}
                  </a>
                );
              }

              return (
                <div key={method.title} className="h-full">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">What happens after you enquire</span>
            <h2 className="section-heading__title">From first contact to ongoing support</h2>
            <p className="section-heading__description">
              Every enquiry moves through a structured process so you know exactly what to expect next.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="feature-grid-card">
              <span className="pill-chip" data-variant="emerald">
                Step 01
              </span>
              <h3 className="text-xl font-semibold text-charcoal">Share your details</h3>
              <p className="text-jet/80 leading-relaxed">
                Provide your facility type, size, current frustrations and timing requirements via the form or phone.
              </p>
            </div>
            <div className="feature-grid-card">
              <span className="pill-chip" data-variant="emerald">
                Step 02
              </span>
              <h3 className="text-xl font-semibold text-charcoal">Site walkthrough</h3>
              <p className="text-jet/80 leading-relaxed">
                We schedule an on-site visit to capture access, compliance and scope details before finalising your proposal.
              </p>
            </div>
            <div className="feature-grid-card">
              <span className="pill-chip" data-variant="emerald">
                Step 03
              </span>
              <h3 className="text-xl font-semibold text-charcoal">Proposal & onboarding</h3>
              <p className="text-jet/80 leading-relaxed">
                Receive pricing, schedule and supervisor introductions, then confirm your start date for the first clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Frequently asked</span>
            <h2 className="section-heading__title">Need more details before you book?</h2>
            <p className="section-heading__description">
              Start with the answers below or contact us directly if you have a unique requirement.
            </p>
          </div>
          <FAQAccordion faqs={faqs} className="max-w-4xl mx-auto" />
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Fast, responsive support
            </span>
            <h2 className="section-heading__title text-white">Ready to start your cleaning program?</h2>
            <p className="section-heading__description text-white/80">
              Reach out today and we’ll deliver your tailored proposal, onboarding schedule and supervisor introduction within 24 hours.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a href="tel:+61411820650" className="btn-primary">
                Call 0411 820 650
              </a>
              <a href="mailto:info@mogcleaning.com.au" className="btn-secondary">
                Email our team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
