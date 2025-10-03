import React from 'react';
import AnimatedCounter from '../components/AnimatedCounter';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Clock } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const scrollToServices = useScrollToSection('services');
  const stats = [
    { value: 500, suffix: '+', label: 'Happy Clients', icon: Users },
    { value: 5, suffix: '+', label: 'Years Experience', icon: Clock },
    { value: 100, suffix: '%', label: 'Satisfaction Rate', icon: Award },
    { value: 24, suffix: '/7', label: 'Emergency Service', icon: Shield },
  ];

  const pageTitle = 'About MOG Cleaning | Brisbane Commercial Cleaning Experts';
  const pageDescription = 'Discover the story behind MOG Cleaning and how our Brisbane commercial cleaning specialists deliver dependable, high-quality cleaning for local businesses.';
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MOG Cleaning',
    url: 'https://mogcleaning.com.au/about',
    logo: 'https://mogcleaning.com.au/logo.svg',
    sameAs: ['https://www.instagram.com/mogclean'],
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+61 411 820 650',
      contactType: 'customer service',
      areaServed: 'AU',
      availableLanguage: ['English'],
    }],
  };

  return (
    <div className="pt-20">
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="article"
        jsonLd={organizationSchema}
      />
      <section className="subtle-hero section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MOG Cleaning</h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Your trusted partner for professional commercial cleaning services across Brisbane.
              Built on reliability, professionalism, and long-term relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  MOG Cleaning was founded with a simple mission: to provide Brisbane businesses with 
                  reliable, professional commercial cleaning services they can truly depend on.
                </p>
                <p>
                  After witnessing too many businesses struggle with inconsistent cleaning services, 
                  unreliable contractors, and subpar results, we knew there had to be a better way. 
                  We built our company on the principles that matter most to business owners: reliability, 
                  professionalism, and attention to detail.
                </p>
                <p>
                  Today, we proudly serve hundreds of businesses across Brisbane, from small offices to 
                  large commercial facilities. Our team of trained, police-checked professionals delivers 
                  consistent results that help businesses create clean, healthy environments for their 
                  employees and customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/#services" onClick={scrollToServices} className="btn-secondary">
                    Explore Our Services
                  </Link>
                  <Link to="/contact" className="btn-primary">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img src="/brisbane2.jpg" alt="Professional cleaning team" className="rounded-xl shadow-lg w-full" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-celestial-blue-1 to-celestial-blue-2 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-3xl md:text-4xl font-bold text-charcoal mb-2" />
                <div className="text-jet font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-jet max-w-3xl mx-auto">
              These values guide everything we do and help us build lasting relationships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-celestial-blue-1 to-celestial-blue-2 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-jet">
                We show up when promised and deliver consistent results every time.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-fresh-green to-celestial-blue-2 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Professionalism</h3>
              <p className="text-jet">
                Trained staff, proper uniforms, and courteous service at all times.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-celestial-blue-1 to-celestial-blue-2 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-jet">
                Attention to detail and high standards in every aspect of our service.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-fresh-green to-celestial-blue-2 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Commitment</h3>
              <p className="text-jet">
                Building long-term relationships through consistent, dependable service.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Brisbane Businesses Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="/brisbane.jpg" 
                alt="Professional office cleaning"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-celestial-blue-1 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fully Insured & Police Checked</h3>
                    <p className="text-jet">All our staff undergo thorough background checks and we carry comprehensive insurance coverage.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-celestial-blue-1 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trained Professional Team</h3>
                    <p className="text-jet">Our cleaners receive ongoing training in the latest cleaning techniques and safety protocols.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-celestial-blue-1 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                    <p className="text-jet">If you're not completely satisfied, we'll return and re-clean at no additional cost.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-celestial-blue-1 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                    <p className="text-jet">We work around your business hours to minimize disruption to your operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

