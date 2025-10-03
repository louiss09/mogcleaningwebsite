import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';

type ServiceSidebarProps = {
  title: string;
  description: string;
};

const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ title, description }) => {
  const formattedTitle = title.toLowerCase();

  return (
    <aside className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-charcoal mb-4">Need a tailored cleaning plan?</h3>
        <p className="text-gray-600 leading-relaxed mb-3">{description}</p>
        <p className="text-gray-600 leading-relaxed">
          Tell us about your {formattedTitle} requirements and we’ll design a schedule that keeps compliance, presentation and budgets on track.
        </p>
      </div>

      <ul className="space-y-3 text-sm text-jet/90 border-t border-ash-gray/20 pt-4">
        <li className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-fresh-green mt-1" />
          <span>Response within 1 business day plus a documented scope of works.</span>
        </li>
        <li className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-fresh-green mt-1" />
          <span>Police-checked, fully insured cleaners with inductions handled for you.</span>
        </li>
        <li className="flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-fresh-green mt-1" />
          <span>Quality reports and site photos delivered after the first clean.</span>
        </li>
      </ul>

      <div className="space-y-3 border-t border-ash-gray/20 pt-4">
        <a href="tel:+61411820650" className="btn-primary flex items-center justify-center">
          <Phone className="w-4 h-4 mr-2" /> Call 0411 820 650
        </a>
        <a href="mailto:info@mogcleaning.com.au" className="btn-secondary flex items-center justify-center">
          <Mail className="w-4 h-4 mr-2" /> Email Our Team
        </a>
      </div>
    </aside>
  );
};

export default ServiceSidebar;

