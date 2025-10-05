import React from 'react';
import { ClipboardCheck, Handshake, LocateFixed, PhoneCall } from 'lucide-react';

interface HowItWorksProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

const defaultSteps = [
  {
    icon: PhoneCall,
    title: 'Request Quote',
    description: 'Share your facility details via our quick form or call for immediate assistance.',
  },
  {
    icon: LocateFixed,
    title: 'Site Visit',
    description: 'We complete a walkthrough to confirm access, compliance requirements and scope priorities.',
  },
  {
    icon: ClipboardCheck,
    title: 'Proposal',
    description: 'Receive a tailored schedule, pricing and onboarding timeline ready for sign-off.',
  },
  {
    icon: Handshake,
    title: 'Cleaning Launch',
    description: 'Your vetted crew is inducted on-site and starts with supervisor oversight from day one.',
  },
];

const HowItWorks: React.FC<HowItWorksProps> = ({
  eyebrow = 'How it works',
  title = 'Your path from enquiry to clean spaces',
  description = 'Each step is designed to give you confidence before we even pick up the mop.',
  className = '',
}) => {
  return (
    <section className={`section-shell section-shell--muted ${className}`.trim()}>
      <div className="container-max mx-auto">
        <div className="section-heading">
          <span className="section-heading__eyebrow">{eyebrow}</span>
          <h2 className="section-heading__title">{title}</h2>
          <p className="section-heading__description">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {defaultSteps.map((step) => (
            <div key={step.title} className="feature-grid-card h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-celestial-blue-1/12 text-celestial-blue-1">
                <step.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal">{step.title}</h3>
              <p className="text-jet/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
