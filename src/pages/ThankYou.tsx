import React from 'react';
import { CheckCircle, Phone, Mail, ArrowRight, Home, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useScrollToSection } from '../hooks/useScrollToSection';

const ThankYou: React.FC = () => {
  const scrollToServices = useScrollToSection('services');
  const pageTitle = 'Thank You | MOG Cleaning';
  const pageDescription =
    'Thanks for contacting MOG Cleaning. We will be in touch within 24 hours to schedule your site assessment and commercial cleaning proposal.';

  return (
    <div>
      <SEO title={pageTitle} description={pageDescription} robots="noindex,nofollow" type="article" />

      <section className="section-shell section-shell--muted">
        <div className="container-max mx-auto max-w-4xl">
          <div className="glass-panel p-10" data-variant="frost">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-celestial-blue-1/15 text-celestial-blue-1">
              <CheckCircle className="h-9 w-9" />
            </div>
            <h1 className="text-center text-3xl font-bold text-charcoal md:text-4xl">
              Thank you! Your request has been received
            </h1>
            <p className="mt-4 text-center text-jet/80">
              We appreciate you considering MOG Cleaning. Our team will be in touch within 24 hours (Mon–Fri) to organise your site walkthrough.
            </p>

            <div className="mt-8 rounded-2xl border border-celestial-blue-1/15 bg-white/80 p-6">
              <p className="text-sm text-charcoal">
                <strong>Important:</strong> Please check your inbox and spam folder for our email confirmation. First-time messages may be filtered.
              </p>
            </div>

            <div className="mt-10 border-t border-ash-gray/40 pt-8">
              <h2 className="text-2xl font-semibold text-charcoal">What happens next</h2>
              <ol className="mt-6 space-y-4 text-jet/80">
                <li>
                  <p className="font-semibold text-charcoal">We’ll contact you</p>
                  <p>Within 24 hours our team will reach out to schedule a convenient time for your walkthrough.</p>
                </li>
                <li>
                  <p className="font-semibold text-charcoal">On-site assessment</p>
                  <p>We visit, note compliance requirements and gather everything needed for your tailored scope.</p>
                </li>
                <li>
                  <p className="font-semibold text-charcoal">Personalised quote</p>
                  <p>You receive a detailed proposal outlining inclusions, schedule options and pricing.</p>
                </li>
                <li>
                  <p className="font-semibold text-charcoal">Kick-off & onboarding</p>
                  <p>Once approved, we finalise scheduling, inductions and launch your cleaning program.</p>
                </li>
              </ol>
            </div>

            <div className="mt-10 rounded-2xl border border-celestial-blue-1/15 bg-white/85 p-6">
              <h3 className="text-xl font-semibold text-charcoal">Need to speak with us sooner?</h3>
              <p className="mt-2 text-jet/80">We’re here to help with urgent requests or questions.</p>
              <div className="mt-4 flex flex-col gap-2 text-celestial-blue-1">
                <a href="tel:+61411820650" className="inline-flex items-center gap-2 hover:text-fresh-green transition-colors">
                  <Phone className="h-4 w-4" /> Call 0411 820 650
                </a>
                <a href="mailto:quotes@mogcleaning.com.au" className="inline-flex items-center gap-2 hover:text-fresh-green transition-colors">
                  <Mail className="h-4 w-4" /> Email quotes@mogcleaning.com.au
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-ash-gray/40 pt-8 text-center">
              <p className="text-jet/80">While you wait, explore our services or learn more about the team behind MOG Cleaning.</p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/#services" onClick={scrollToServices} className="btn-primary">
                  View our services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Meet the team
                </Link>
              </div>
              <Link to="/" className="mt-6 inline-flex items-center gap-2 text-celestial-blue-1 hover:text-fresh-green transition-colors">
                <Home className="h-4 w-4" /> Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell--dark">
        <div className="container-max mx-auto text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <span className="pill-chip bg-white/10 text-white">
              <Sparkles className="h-4 w-4" /> Brisbane businesses trust MOG Cleaning
            </span>
            <h2 className="section-heading__title text-white">We look forward to partnering with you</h2>
            <p className="section-heading__description text-white/80">
              From corporate offices to medical facilities, our team delivers reliable cleaning programs tailored to your site.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
