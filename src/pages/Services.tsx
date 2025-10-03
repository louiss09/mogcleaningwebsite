import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Building2, Dumbbell, Heart, GraduationCap, Hotel, ShoppingBag, ArrowRight } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Services: React.FC = () => {
  const scrollToServices = useScrollToSection('services');
  const services = [
    {
      icon: Building2,
      name: 'Office Cleaning',
      path: '/services/offices',
      description: 'Professional office cleaning services for corporate environments, coworking spaces, and business centers.',
      features: ['Daily/weekly cleaning schedules', 'Desk and workspace sanitization', 'Kitchen and break room cleaning', 'Meeting room maintenance']
    },
    {
      icon: Dumbbell,
      name: 'Fitness Centers',
      path: '/services/fitness',
      description: 'Specialized cleaning for gyms, health clubs, and fitness facilities with focus on hygiene and safety.',
      features: ['Equipment sanitization', 'Locker room deep cleaning', 'Floor maintenance', 'Air quality management']
    },
    {
      icon: Heart,
      name: 'Medical Facilities',
      path: '/services/health',
      description: 'Medical-grade cleaning for clinics, dental offices, and healthcare facilities following strict protocols.',
      features: ['Medical-grade disinfection', 'Biohazard waste handling', 'Exam room sterilization', 'Waiting area maintenance']
    },
    {
      icon: GraduationCap,
      name: 'Educational Institutions',
      path: '/services/education',
      description: 'Comprehensive cleaning services for schools, universities, and training centers.',
      features: ['Classroom cleaning', 'Cafeteria sanitation', 'Library maintenance', 'Playground cleaning']
    },
    {
      icon: Hotel,
      name: 'Hospitality',
      path: '/services/hospitality',
      description: 'Professional cleaning for hotels, restaurants, and entertainment venues.',
      features: ['Guest area maintenance', 'Kitchen deep cleaning', 'Restroom sanitization', 'Event space preparation']
    },
    {
      icon: ShoppingBag,
      name: 'Retail Spaces',
      path: '/services/retail',
      description: 'Retail cleaning services that help create welcoming shopping environments for customers.',
      features: ['Floor and display cleaning', 'Fitting room maintenance', 'Storefront cleaning', 'After-hours service']
    }
  ];

  const pageTitle = 'Commercial Cleaning Services Brisbane | MOG Cleaning';
  const pageDescription = 'Explore commercial cleaning services from MOG Cleaning for offices, gyms, medical facilities, education, hospitality, and retail businesses across Brisbane.';
  const baseSiteUrl = 'https://mogcleaning.com.au';
  const serviceCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Cleaning Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'MOG Cleaning',
      url: baseSiteUrl
    },
    areaServed: 'Brisbane, Queensland',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industry-specific commercial cleaning',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        url: baseSiteUrl + service.path,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description
        }
      }))
    }
  };

  return (
    <div className="pt-20">
      <SEO
        title={pageTitle}
        description={pageDescription}
        type="website"
        image="/images/office-cleaning-background.jpg"
        imageAlt="Commercial cleaning team servicing a Brisbane office"
        keywords={['Brisbane commercial cleaning services', 'industry specific cleaners', 'MOG Cleaning services']}
        jsonLd={serviceCatalogSchema}
      />
      
      <section className="gradient-bg text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Commercial Cleaning Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              Specialized cleaning solutions tailored for different industries and business environments across Brisbane.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link to="/process" className="btn-secondary">
                See How Our Process Works
              </Link>
              <Link to="/#services" onClick={scrollToServices} className="btn-primary">
                Read Client Reviews
              </Link>
              <Link to="/contact" className="btn-secondary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="service-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={service.path}
                      className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors"
                    >
                      Learn More About {service.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Included in All Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regardless of your industry, you can expect these professional standards with every cleaning service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md animate-slide-up">
              <h3 className="text-xl font-semibold mb-4">Professional Equipment</h3>
              <p className="text-gray-600">Commercial-grade cleaning equipment and eco-friendly products for superior results.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">Daily, weekly, or monthly cleaning schedules that work around your business hours.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">Regular inspections and feedback systems to ensure consistent, high-quality results.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-4">Trained Staff</h3>
              <p className="text-gray-600">All cleaners are trained, uniformed, and police-checked for your peace of mind.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-4">Full Insurance</h3>
              <p className="text-gray-600">Comprehensive liability insurance protects your business and gives you confidence.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-semibold mb-4">Emergency Service</h3>
              <p className="text-gray-600">24/7 emergency cleaning services available for unexpected situations.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Professional Cleaning?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free consultation and customized cleaning plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-teal-500 hover:bg-teal-600">
                Get Free Quote
              </Link>
              <a href="tel:+61411820650" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-900">
                Call 0411 820 650
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
