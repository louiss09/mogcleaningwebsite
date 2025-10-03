import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Instagram } from 'lucide-react';

const mobileMenuAnimationDuration = 300;

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="px-4">
        <div
          className={`container-max mx-auto flex flex-col rounded-[32px] border bg-white/60 px-6 py-3 shadow-lg backdrop-blur-xl transition-all duration-300 ${
            isScrolled ? 'border-white/60 shadow-xl' : 'border-white/30'
          }`}
        >
          <div className="flex items-center justify-between gap-6">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={() => handleNavLinkClick('/')}
            >
              <div className="h-12 w-12 rounded-full border border-white/50 bg-white/70 p-2 shadow-sm backdrop-blur">
                <img src="/logo.svg" alt="MOG Cleaning Logo" className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <h2 className="text-lg font-semibold text-charcoal">MOG Cleaning</h2>
                <p className="text-xs text-jet/80">Commercial Cleaning Services</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              <Link
                to="/"
                className="font-medium text-jet transition-colors hover:text-celestial-blue-1"
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
                About
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

                <div
                  className={`absolute top-full left-0 mt-2 w-64 origin-top rounded-2xl border border-white/50 bg-white/70 p-2 shadow-lg backdrop-blur-xl transition-all duration-300 ease-out ${
                    isServicesOpen
                      ? 'pointer-events-auto opacity-100 translate-y-0 scale-100'
                      : 'pointer-events-none opacity-0 -translate-y-2 scale-95'
                  }`}
                >
                  <div className="overflow-hidden rounded-xl bg-white/40 shadow-inner">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => handleNavLinkClick(service.path, () => setIsServicesOpen(false))}
                        className="block px-4 py-2 text-jet transition-colors hover:bg-white/60 hover:text-celestial-blue-1"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/process"
                className={`font-medium transition-colors hover:text-celestial-blue-1 ${
                  location.pathname === '/process' ? 'text-celestial-blue-1' : 'text-jet'
                }`}
                onClick={() => handleNavLinkClick('/process')}
              >
                Process
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

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+61411820650"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/60 text-charcoal/80 backdrop-blur transition-colors hover:border-celestial-blue-1 hover:text-celestial-blue-1"
                aria-label="Call MOG Cleaning"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/mogclean"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/60 text-charcoal/80 backdrop-blur transition-colors hover:border-celestial-blue-1 hover:text-celestial-blue-1"
                aria-label="MOG Cleaning on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <Link to="/contact" className="btn-primary" onClick={() => handleNavLinkClick('/contact')}>
                Get Free Quote
              </Link>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden rounded-full border border-white/60 bg-white/80 p-2 text-jet shadow-sm transition-colors hover:border-celestial-blue-1 hover:text-celestial-blue-1"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <div className={`hamburger-icon ${isMenuOpen ? 'rotate' : ''}`}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </button>
          </div>

          <div className="lg:hidden">
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isMenuOpen
                  ? 'pointer-events-auto grid-rows-[1fr] opacity-100'
                  : 'pointer-events-none grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                {isMenuVisible && (
                  <div className="flex flex-col space-y-4 border-t border-white/50 pt-4">
                    <Link
                      to="/"
                      className="font-medium text-jet hover:text-celestial-blue-1"
                      onClick={() => handleNavLinkClick('/', closeMobileMenu)}
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="font-medium text-jet hover:text-celestial-blue-1"
                      onClick={() => handleNavLinkClick('/about', closeMobileMenu)}
                    >
                      About
                    </Link>

                    <div>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`flex w-full items-center justify-between text-left font-medium transition-colors hover:text-celestial-blue-1 ${
                          location.pathname.startsWith('/services') ? 'text-celestial-blue-1' : 'text-jet'
                        }`}
                      >
                        Services
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`grid overflow-hidden transition-all duration-300 ease-out ${
                          isMobileServicesOpen
                            ? 'mt-2 ml-4 grid-rows-[1fr] opacity-100'
                            : 'ml-4 grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="space-y-2 border-l-2 border-white/50 pl-4">
                          {services.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              onClick={() => handleNavLinkClick(service.path, closeMobileMenu)}
                              className="block py-1 font-medium text-jet transition-colors hover:text-celestial-blue-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/process"
                      className="font-medium text-jet hover:text-celestial-blue-1"
                      onClick={() => handleNavLinkClick('/process', closeMobileMenu)}
                    >
                      Process
                    </Link>
                    <Link
                      to="/contact"
                      className="font-medium text-jet hover:text-celestial-blue-1"
                      onClick={() => handleNavLinkClick('/contact', closeMobileMenu)}
                    >
                      Contact
                    </Link>
                    <div className="flex items-center gap-3 border-t border-white/50 pt-4">
                      <a
                        href="tel:+61411820650"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/60 text-charcoal/80 backdrop-blur transition-colors hover:border-celestial-blue-1 hover:text-celestial-blue-1"
                        aria-label="Call MOG Cleaning"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                      <a
                        href="https://instagram.com/mogclean"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/60 text-charcoal/80 backdrop-blur transition-colors hover:border-celestial-blue-1 hover:text-celestial-blue-1"
                        aria-label="MOG Cleaning on Instagram"
                      >
                        <Instagram className="h-5 w-5" />
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
