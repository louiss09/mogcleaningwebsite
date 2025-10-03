import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Instagram } from 'lucide-react';

const mobileMenuAnimationDuration = 220;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = (targetPath: string, after?: () => void) => {
    if (location.pathname === targetPath) {
      scrollToTopSmooth();
    }
    after?.();
  };

  const toggleMobileMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => setIsMenuVisible(false), mobileMenuAnimationDuration);
    } else {
      setIsMenuVisible(true);
      requestAnimationFrame(() => setIsMenuOpen(true));
    }
  };

  const closeMobileMenu = () => {
    if (!isMenuOpen) {
      setIsMenuVisible(false);
      return;
    }
    setIsMenuOpen(false);
    setTimeout(() => setIsMenuVisible(false), mobileMenuAnimationDuration);
    setIsMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMenuVisible(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  }, [isMenuOpen]);

  const services = [
    { name: 'Office Cleaning', path: '/services/offices' },
    { name: 'Fitness Centers', path: '/services/fitness' },
    { name: 'Medical Facilities', path: '/services/health' },
    { name: 'Educational Institutions', path: '/services/education' },
    { name: 'Hospitality', path: '/services/hospitality' },
    { name: 'Retail Spaces', path: '/services/retail' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => handleNavLinkClick('/')}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/logo.svg" alt="MOG Cleaning Logo" className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-charcoal">MOG Cleaning</h2>
              <p className="text-xs text-jet">Commercial Cleaning Services</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-celestial-blue-1 ${
                location.pathname === '/' ? 'text-celestial-blue-1' : 'text-jet'
              }`}
              onClick={() => handleNavLinkClick('/')}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-celestial-blue-1 ${
                location.pathname === '/about' ? 'text-celestial-blue-1' : 'text-jet'
              }`}
              onClick={() => handleNavLinkClick('/about')}
            >
              About Us
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center font-medium transition-colors hover:text-celestial-blue-1 ${
                  location.pathname.startsWith('/services') ? 'text-celestial-blue-1' : 'text-jet'
                }`}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-ash-gray/30 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => handleNavLinkClick(service.path, () => setIsServicesOpen(false))}
                      className="block px-4 py-2 text-jet hover:bg-light-gray hover:text-celestial-blue-1 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/process"
              className={`font-medium transition-colors hover:text-celestial-blue-1 ${
                location.pathname === '/process' ? 'text-celestial-blue-1' : 'text-jet'
              }`}
              onClick={() => handleNavLinkClick('/process')}
            >
              Our Process
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-celestial-blue-1 ${
                location.pathname === '/contact' ? 'text-celestial-blue-1' : 'text-jet'
              }`}
              onClick={() => handleNavLinkClick('/contact')}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+61411820650"
              className="flex items-center text-charcoal hover:text-celestial-blue-1 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">0411 820 650</span>
            </a>
            <a
              href="https://instagram.com/mogclean"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-celestial-blue-1 transition-colors"
              aria-label="MOG Cleaning on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Link to="/contact" className="btn-primary" onClick={() => handleNavLinkClick('/contact')}>
              Get Free Quote
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-jet hover:text-celestial-blue-1 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`hamburger-icon ${isMenuOpen ? 'rotate' : ''}`}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>

        {isMenuVisible && (
          <div className={`lg:hidden overflow-hidden transition-all duration-200 ease-in-out ${
            isMenuOpen ? 'max-h-[800px] opacity-100 animate-slide-down' : 'max-h-0 opacity-0 animate-menu-slide-up'
          } mt-4 border-t border-ash-gray/30`}
          >
            <div className="flex flex-col space-y-4 mt-4 px-4 pb-4">
              <Link
                to="/"
                className="text-jet hover:text-celestial-blue-1 font-medium"
                onClick={() => handleNavLinkClick('/', closeMobileMenu)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-jet hover:text-celestial-blue-1 font-medium"
                onClick={() => handleNavLinkClick('/about', closeMobileMenu)}
              >
                About Us
              </Link>

              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`flex items-center justify-between w-full text-left font-medium transition-colors hover:text-celestial-blue-1 ${
                    location.pathname.startsWith('/services') ? 'text-celestial-blue-1' : 'text-jet'
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-ash-gray/30 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => handleNavLinkClick(service.path, closeMobileMenu)}
                        className="block text-jet hover:text-celestial-blue-1 font-medium py-1"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/process"
                className="text-jet hover:text-celestial-blue-1 font-medium"
                onClick={() => handleNavLinkClick('/process', closeMobileMenu)}
              >
                Our Process
              </Link>
              <Link
                to="/contact"
                className="text-jet hover:text-celestial-blue-1 font-medium"
                onClick={() => handleNavLinkClick('/contact', closeMobileMenu)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-ash-gray/30">
                <a
                  href="tel:+61411820650"
                  className="flex items-center text-charcoal mb-4 hover:text-celestial-blue-1 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-semibold">0411 820 650</span>
                </a>
                <Link
                  to="/contact"
                  className="btn-primary block text-center"
                  onClick={() => handleNavLinkClick('/contact', closeMobileMenu)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
