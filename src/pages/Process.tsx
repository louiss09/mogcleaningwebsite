import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Eye, Play, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Request Quote',
      description: "Contact us via phone or our online form. We'll discuss your cleaning needs, facility size, and schedule requirements.",
      details: [
        'Initial consultation call',
        'Facility type and size assessment',
        'Cleaning frequency discussion',
        'Special requirements noted',
      ],
    },
    {
      number: '02',
      icon: Eye,
      title: 'Site Visit & Plan',
      description: 'We visit your facility for a detailed assessment and create a customized cleaning plan tailored to your specific needs.',
      details: [
        'Comprehensive facility walkthrough',
        'Custom cleaning checklist created',
        'Detailed quote provided',
        'Service agreement finalized',
      ],
    },
    {
      number: '03',
      icon: Play,
      title: 'Cleaning Begins',
      description: 'Our trained professionals start your regular cleaning schedule with meticulous attention to detail and consistency.',
      details: [
        'Team introduction and orientation',
        'First cleaning service completed',
        'Regular schedule commences',
        'Initial feedback collected',
      ],
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: "Ongoing monitoring, regular inspections, and feedback systems ensure we consistently exceed your expectations.",
      details: [
        'Regular quality inspections',
        'Client feedback sessions',
        'Continuous improvement',
        'Long-term relationship building',
      ],
    },
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
    supply: [
      'Cleaning requirements summary',
      'Site walkthrough',
      'Customized cleaning plan',
    ],
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
    <div className="pt-20">
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="article"
        keywords={['cleaning process Brisbane', 'commercial cleaning steps', 'how to start office cleaning service']}
        jsonLd={[breadcrumbSchema, howToSchema]}
      />
      <section className="subtle-hero section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Simple Process</h1>
            <p className="text-xl md:text-2xl text-gray-700">
              From initial contact to ongoing service, we make professional commercial cleaning simple,
              transparent, and stress-free for Brisbane businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`animate-slide-in-left ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-6xl font-bold text-gray-200 mb-2">{step.number}</div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h2>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8">{step.description}</p>

                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center">
                        <ArrowRight className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`animate-slide-in-right ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-100 rounded-2xl p-12 text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-8">
                      <span className="text-4xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600">
                      {index === 0 && 'Get started with a simple phone call or online form submission.'}
                      {index === 1 && 'We assess your facility and create a personalized cleaning plan.'}
                      {index === 2 && 'Professional cleaning services begin according to your schedule.'}
                      {index === 3 && 'Continuous quality monitoring ensures exceptional results.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining content unchanged */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Day 1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Contact</h3>
              <p className="text-gray-600">Quote request and consultation call</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Day 2-3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Site Assessment</h3>
              <p className="text-gray-600">Facility visit and customized plan</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Week 1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Service Begins</h3>
              <p className="text-gray-600">First cleaning and schedule start</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Ongoing</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Monitoring</h3>
              <p className="text-gray-600">Regular inspections and feedback</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Our Process Works</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Thorough Assessment</h3>
                  <p className="text-gray-600">
                    We take time to understand your specific needs, ensuring our service is perfectly tailored to your facility.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                  <p className="text-gray-600">
                    No cookie-cutter approaches. Each cleaning plan is designed specifically for your business requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consistent Communication</h3>
                  <p className="text-gray-600">
                    Regular check-ins and feedback sessions ensure we're always meeting your expectations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                  <p className="text-gray-600">
                    We constantly refine our processes based on feedback and industry best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/4099368/pexels-photo-4099368.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Professional cleaning consultation" className="rounded-xl shadow-lg w-full" loading="lazy" decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Take the first step toward reliable, professional commercial cleaning.
              Contact us today for your free consultation and customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-teal-500 hover:bg-teal-600">
                Start the Process
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
