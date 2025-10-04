import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import QuoteForm from '../components/QuoteForm';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '0411 820 650',
      subtext: 'Mon-Fri 7AM-6PM',
      action: 'tel:+61411820650',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@mogcleaning.com.au',
      subtext: 'Response within 24 hours',
      action: 'mailto:info@mogcleaning.com.au',
    },
    {
      icon: MessageCircle,
      title: 'Emergency Service',
      details: '0411 820 650',
      subtext: '24/7 Emergency Line',
      action: 'tel:+61411820650',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Brisbane Metro Area',
      subtext: 'All suburbs covered',
      action: null,
    },
  ];

  const faqs = [
    {
      question: 'What areas of Brisbane do you service?',
      answer: 'We provide commercial cleaning services across the entire Brisbane metropolitan area, including CBD, inner suburbs, and outer areas.',
    },
    {
      question: 'Do you provide cleaning supplies and equipment?',
      answer: 'Yes, we provide all cleaning supplies, equipment, and consumables as part of our service. We use professional-grade, eco-friendly products.',
    },
    {
      question: 'How do you ensure quality and consistency?',
      answer: 'We conduct regular quality inspections, maintain detailed checklists, and have a feedback system to ensure consistent, high-quality results.',
    },
    {
      question: 'Can you work around our business hours?',
      answer: 'Absolutely. We offer flexible scheduling including after-hours, early morning, and weekend cleaning to minimize disruption to your business.',
    },
    {
      question: 'Are your staff insured and background checked?',
      answer: 'Yes, all our cleaning staff undergo police background checks and we carry comprehensive liability insurance for your peace of mind.',
    },
    {
      question: "What if we're not satisfied with the cleaning?",
      answer: 'We guarantee our work. If you are not completely satisfied, we will return and re-clean the area at no additional cost.',
    },
  ];

  const pageTitle = 'Contact MOG Cleaning | Commercial Cleaning Quotes Brisbane';
  const pageDescription = 'Request a free commercial cleaning quote in Brisbane. Call 0411 820 650 or email info@mogcleaning.com.au to schedule a site visit.';
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
      <section
        className="relative hero-section-spacing px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/accounting-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Your Free Quote Today</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light mb-8">
              Ready for reliable, professional commercial cleaning? Contact us for a free consultation
              and customized cleaning plan for your Brisbane business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61411820650" className="btn-primary bg-teal-500 hover:bg-teal-600">
                <Phone className="w-5 h-5 mr-2" />
                Call 0411 820 650
              </a>
              <a href="mailto:info@mogcleaning.com.au" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. We're here to help with all your commercial cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={method.title} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                {method.action ? (
                  <a href={method.action} className="text-lg text-blue-900 hover:text-teal-500 transition-colors font-medium">
                    {method.details}
                  </a>
                ) : (
                  <p className="text-lg text-blue-900 font-medium">{method.details}</p>
                )}
                <p className="text-gray-500 mt-1">{method.subtext}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in-left">
              <QuoteForm
                title="Request a Free Commercial Cleaning Quote"
                subtitle="Tell us about your facility and we'll reply within 24 hours."
              />
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gray-50 rounded-2xl p-10 h-full border border-ash-gray/30">
                <h3 className="text-2xl font-bold mb-6">What To Expect After Contacting Us</h3>
                <ol className="space-y-4 text-gray-700 list-decimal list-inside">
                  <li>
                    <span className="font-semibold text-charcoal">Consultation call within 24 hours</span>
                    <p className="text-gray-600">We'll confirm your needs and arrange a convenient time for a site walkthrough.</p>
                  </li>
                  <li>
                    <span className="font-semibold text-charcoal">On-site assessment</span>
                    <p className="text-gray-600">A detailed inspection to build a customised cleaning checklist for your facility.</p>
                  </li>
                  <li>
                    <span className="font-semibold text-charcoal">Tailored proposal</span>
                    <p className="text-gray-600">Receive a written proposal with scope, schedule, and investment.</p>
                  </li>
                  <li>
                    <span className="font-semibold text-charcoal">Service kick-off</span>
                    <p className="text-gray-600">Once approved, we lock in your schedule and introduce your cleaning team.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="w-8 h-8 text-teal-500 mr-3" />
                Business Hours
              </h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-600">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="font-medium text-red-600">Emergency Service</span>
                  <span className="text-red-600">24/7 Available</span>
                </div>
                <span>info@mogcleaning.com.au</span>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-teal-500 mr-3" />
                Service Areas
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>Brisbane CBD</div>
                <div>South Brisbane</div>
                <div>New Farm</div>
                <div>Fortitude Valley</div>
                <div>Spring Hill</div>
                <div>West End</div>
                <div>Kangaroo Point</div>
                <div>Woolloongabba</div>
                <div>Milton</div>
                <div>Paddington</div>
                <div>Toowong</div>
                <div>St Lucia</div>
              </div>
              <p className="text-gray-600 mt-4">
                <strong>Plus all other Brisbane metropolitan suburbs.</strong> Contact us to confirm service availability in your specific area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our commercial cleaning services.
            </p>
          </div>

          <FAQAccordion
            faqs={faqs}
            className="max-w-4xl mx-auto"
            questionClassName="text-xl font-semibold text-celestial-blue-1"
            answerClassName="text-gray-600 leading-relaxed"
          />

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see your question answered?</p>
            <a href="tel:+61411820650" className="btn-primary">
              Call Us for More Information
            </a>
          </div>
        </div>
      </section>

      <section className="gradient-bg text-white hero-section-spacing px-4 sm:px-6 lg:px-8">
        <div className="container-max text-center hero-content-area">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of satisfied Brisbane businesses who trust us with their commercial cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61411820650" className="btn-primary bg-teal-500 hover:bg-teal-600">
                <Phone className="w-5 h-5 mr-2" />
                Call Now for Immediate Service
              </a>
              <a href="mailto:info@mogcleaning.com.au" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                <Mail className="w-5 h-5 mr-2" />
                Email for Detailed Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

