import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToServices = useScrollToSection('services');
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src="/logo.svg" alt="MOG Cleaning Logo" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MOG Cleaning</h3>
                <p className="text-ash-gray text-sm">Commercial Services</p>
              </div>
            </div>
            <p className="text-ash-gray mb-4">
              Professional commercial cleaning services across Brisbane. Reliable, consistent,
              and detail-focused cleaning for businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-ash-gray">
                <Phone className="w-4 h-4 mr-2" />
                <span>0411 820 650</span>
              </div>
              <div className="flex items-center text-ash-gray">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@mogcleaning.com.au</span>
              </div>
              <div className="flex items-center text-ash-gray">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <a href="https://instagram.com/mogclean" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @mogclean
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-ash-gray hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ash-gray hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#services" onClick={scrollToServices} className="text-ash-gray hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-ash-gray hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ash-gray hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/offices" className="text-ash-gray hover:text-white transition-colors">
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/fitness" className="text-ash-gray hover:text-white transition-colors">
                  Fitness Centers
                </Link>
              </li>
              <li>
                <Link to="/services/health" className="text-ash-gray hover:text-white transition-colors">
                  Medical Facilities
                </Link>
              </li>
              <li>
                <Link to="/services/education" className="text-ash-gray hover:text-white transition-colors">
                  Educational Institutions
                </Link>
              </li>
              <li>
                <Link to="/services/hospitality" className="text-ash-gray hover:text-white transition-colors">
                  Hospitality
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-celestial-blue-1 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-ash-gray">Brisbane Metro Area</p>
                  <p className="text-ash-gray">Queensland, Australia</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-celestial-blue-1 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-ash-gray">Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-ash-gray">Emergency services available</p>
                </div>
              </div>

              <Link to="/contact" className="inline-block btn-primary mt-4">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-jet mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-ash-gray mb-4 md:mb-0">
              &copy; 2025 MOG Cleaning. All rights reserved.
            </p>
            <div className="flex space-x-6 text-ash-gray text-sm">
              <span>- Fully Insured</span>
              <span>- Police Checked</span>
              <span>- 5+ Years Experience</span>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-jet">
            <p className="text-ash-gray text-sm">
              Designed by{' '}
              <a
                href="https://zip-it.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-celestial-blue-1 hover:text-white transition-colors"
              >
                ZIP IT Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
