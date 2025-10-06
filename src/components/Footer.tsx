import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToServices = useScrollToSection('services');
  const scrollToTestimonials = useScrollToSection('testimonials');
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Our Process', to: '/process' },
    { label: 'Contact', to: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Office Cleaning', to: '/services/offices' },
    { label: 'Fitness Centres', to: '/services/fitness' },
    { label: 'Medical Facilities', to: '/services/health' },
    { label: 'Educational', to: '/services/education' },
    { label: 'Hospitality', to: '/services/hospitality' },
    { label: 'Retail Spaces', to: '/services/retail' },
  ];

  const resourceLinks: Array<{ label: string; to: string; onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void }>
    = [
      { label: 'Industry Programs', to: '/#services', onClick: scrollToServices },
      { label: 'Client Testimonials', to: '/#testimonials', onClick: scrollToTestimonials },
      { label: 'Onboarding FAQs', to: '/process' },
      { label: 'Request a Quote', to: '/contact' },
    ];

  return (
    <footer className="site-footer">
      <div className="site-footer__gradient" aria-hidden="true"></div>
      <div className="site-footer__glow site-footer__glow--one" aria-hidden="true"></div>
      <div className="site-footer__glow site-footer__glow--two" aria-hidden="true"></div>
      <div className="site-footer__container container-max px-6">
        <div className="site-footer__primary">
          <div className="site-footer__brand-card">
            <div className="site-footer__brand-heading">
              <div className="site-footer__logo"> 
                <img src="/logo.svg" alt="MOG Cleaning logo" loading="lazy" decoding="async" />
              </div>
              <div>
                <p className="site-footer__eyebrow">Brisbane Commercial Cleaning</p>
                <h2 className="site-footer__title">MOG Cleaning</h2>
                <p className="site-footer__subtitle">
                  Reliable, glass-finish cleaning programs that keep your workplace inspection ready every day.
                </p>
              </div>
            </div>
            <div className="site-footer__contact-list">
              <a href="tel:+61411820650" className="site-footer__contact-item">
                <span className="site-footer__contact-icon">
                  <Phone className="h-4 w-4" />
                </span>
                0411 820 650
              </a>
              <a href="mailto:info@mogcleaning.com.au" className="site-footer__contact-item">
                <span className="site-footer__contact-icon">
                  <Mail className="h-4 w-4" />
                </span>
                info@mogcleaning.com.au
              </a>
              <div className="site-footer__contact-item" aria-label="Service area">
                <span className="site-footer__contact-icon">
                  <MapPin className="h-4 w-4" />
                </span>
                Brisbane Metro &amp; South East Queensland
              </div>
              <div className="site-footer__contact-item" aria-label="Operating hours">
                <span className="site-footer__contact-icon">
                  <Clock className="h-4 w-4" />
                </span>
                Mon–Fri 7:00am–6:00pm · 24/7 rapid response
              </div>
            </div>
            <div className="site-footer__social">
              <a
                href="https://instagram.com/mogclean"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
              >
                <Instagram className="h-4 w-4" />
                <span>@mogclean</span>
              </a>
            </div>
          </div>

          <div className="site-footer__links">
            <div className="site-footer__link-group">
              <h3 className="site-footer__group-title">Company</h3>
              <ul className="site-footer__link-list">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="site-footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-footer__link-group">
              <h3 className="site-footer__group-title">Services</h3>
              <ul className="site-footer__link-list">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="site-footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-footer__link-group">
              <h3 className="site-footer__group-title">Support</h3>
              <ul className="site-footer__link-list">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} onClick={link.onClick} className="site-footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__cta">
          <div className="site-footer__cta-copy">
            <p className="site-footer__cta-eyebrow">Ready when you are</p>
            <h3>Schedule a walkthrough &amp; tailored quote</h3>
            <p>
              Share your facility needs and we&apos;ll respond within 24 hours with pricing, scope and onboarding details.
            </p>
          </div>
          <div className="site-footer__cta-actions">
            <Link to="/contact" className="btn-primary">
              Book a walkthrough
            </Link>
            <a href="tel:+61411820650" className="site-footer__cta-call">
              Call 0411 820 650
            </a>
          </div>
        </div>

        <div className="site-footer__meta">
          <p className="site-footer__copyright">&copy; {currentYear} MOG Cleaning. All rights reserved.</p>
          <div className="site-footer__meta-list">
            <span>Fully insured</span>
            <span>Police-checked teams</span>
            <span>After-hours support</span>
          </div>
          <p className="site-footer__credits">
            Designed by{' '}
            <a href="https://zip-it.com.au" target="_blank" rel="noopener noreferrer">
              ZIP IT Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
