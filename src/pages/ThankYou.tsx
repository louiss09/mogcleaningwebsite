import React from 'react';
import { CheckCircle, Phone, Mail, ArrowRight, Home } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ThankYou: React.FC = () => {
  const scrollToServices = useScrollToSection('services');
  const pageTitle = 'Thank You | MOG Cleaning';
  const pageDescription = 'Thanks for contacting MOG Cleaning. We will be in touch within 24 hours to schedule your site assessment and commercial cleaning proposal.';

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title={pageTitle}
        description={pageDescription}
        robots="noindex,nofollow"
        type="article"
      />
      <div className="container-max max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-ash-gray/30 p-8 md:p-10">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-teal-500" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-4">
            Thank You! Your Request Has Been Received
          </h1>

          <p className="text-center text-jet mb-8">
            We appreciate you considering MOG Cleaning for your cleaning needs. Your request is now with our team.
          </p>

          <div className="bg-light-gray/60 border border-ash-gray/40 rounded-xl p-5 mb-10">
            <p className="text-sm text-charcoal">
              <strong>Important:</strong> Please check your inbox (and your spam/junk folder) for our email. Sometimes first-time messages may end up there.
            </p>
          </div>

          <div className="border-t border-ash-gray/30 my-8" />

          <h2 className="text-2xl font-semibold text-charcoal mb-4 flex items-center">What Happens Next</h2>
          <ol className="space-y-4 text-jet list-decimal list-inside mb-8">
            <li>
              <p className="font-semibold">We'll Contact You</p>
              <p className="text-jet/80">Within 24 hours (Mon-Fri), one of our team members will reach out to arrange a convenient time for your site walkthrough.</p>
            </li>
            <li>
              <p className="font-semibold">Site Walkthrough</p>
              <p className="text-jet/80">We'll visit your premises to assess the space, discuss your requirements, and ensure we fully understand your needs.</p>
            </li>
            <li>
              <p className="font-semibold">Personalised Quote</p>
              <p className="text-jet/80">After the walkthrough, we'll prepare a tailored cleaning proposal and send it directly to you.</p>
            </li>
            <li>
              <p className="font-semibold">Scheduling Your Clean</p>
              <p className="text-jet/80">Once you approve the quote, we'll lock in your first service and handle the rest.</p>
            </li>
          </ol>

          <div className="border-t border-ash-gray/30 my-8" />

          <h3 className="text-xl font-semibold text-charcoal mb-3">Need to Speak With Us Sooner?</h3>
          <div className="bg-white rounded-xl border border-ash-gray/40 p-5 mb-8">
            <p className="mb-2">We're here to help.</p>
            <div className="space-y-2">
              <a href="tel:+61411820650" className="inline-flex items-center text-celestial-blue-1 hover:text-teal-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" /> Call us on 0411 820 650
              </a>
              <a href="mailto:quotes@mogcleaning.com.au" className="inline-flex items-center text-celestial-blue-1 hover:text-teal-600 transition-colors">
                <Mail className="w-4 h-4 mr-2" /> Or email us at quotes@mogcleaning.com.au
              </a>
            </div>
          </div>

          <div className="border-t border-ash-gray/30 my-8" />

          <div className="text-center">
            <p className="text-jet mb-6">While you wait, feel free to explore our services or learn more about us.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#services" onClick={scrollToServices} className="btn-primary inline-flex items-center justify-center">
                View Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                About Us
              </Link>
            </div>
            <div className="mt-6">
              <Link to="/" className="inline-flex items-center text-jet hover:text-celestial-blue-1 transition-colors">
                <Home className="w-4 h-4 mr-2" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
