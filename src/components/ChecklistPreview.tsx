import React from 'react';

interface ChecklistPreviewItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  items: string[];
}

interface ChecklistPreviewProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  note?: string;
  categories: ChecklistPreviewItem[];
}

const ChecklistPreview: React.FC<ChecklistPreviewProps> = ({
  id,
  eyebrow,
  title,
  description,
  note =
    'This is a snapshot of common inclusions. After our walkthrough we build a tailored checklist to match your site.',
  categories,
}) => {
  return (
    <section className="section-shell section-shell--muted" id={id}>
      <div className="container-max mx-auto">
        <div className="section-heading">
          <span className="section-heading__eyebrow">{eyebrow}</span>
          <h2 className="section-heading__title">{title}</h2>
          <p className="section-heading__description">{description}</p>
        </div>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm font-medium text-jet/70">
          {note}
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2" data-motion-stagger="true">
          {categories.map((category) => (
            <div key={category.title} className="rounded-[32px] bg-white p-8 shadow-sm motion-child">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-celestial-blue-1/12 text-celestial-blue-1">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-charcoal">{category.title}</h3>
              <p className="mt-3 leading-relaxed text-jet/80">{category.description}</p>
              <ul className="mt-5 space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-jet/80">
                    <span className="mt-2 inline-flex h-2 w-2 flex-none rounded-full bg-celestial-blue-1" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChecklistPreview;
