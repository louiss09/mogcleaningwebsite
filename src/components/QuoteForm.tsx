import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuoteFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({
  title = 'Get Your Free Quote',
  subtitle = 'No obligation. Response within 24 hours.',
  className = ''
}) => {
  const navigate = useNavigate();
  const formEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT ?? '/contact.php';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const body = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    });

    try {
      const res = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data && data.success) {
        setFormData({ name: '', phone: '', email: '', message: '' });
        navigate('/thank-you');
      } else {
        setError((data && data.message) || 'There was a problem sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Quote form submission failed', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses =
    'w-full rounded-xl border border-ash-gray/60 bg-white/95 px-4 py-3 text-charcoal shadow-sm transition-all placeholder:text-jet/60 focus:border-celestial-blue-1 focus:outline-none focus:ring-4 focus:ring-celestial-blue-1/25';

  return (
    <div
      className={`quote-form relative overflow-hidden rounded-[24px] border border-white/60 bg-white/95 px-5 py-6 shadow-[0_35px_60px_-25px_rgba(15,23,42,0.55)] backdrop-blur sm:rounded-[32px] sm:px-8 sm:py-8 ${className}`}
    >
      <div className="pointer-events-none absolute -top-28 right-0 h-48 w-48 rounded-full bg-celestial-blue-1/25 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 left-6 h-40 w-40 rounded-full bg-fresh-green/20 blur-3xl"></div>

      <div className="relative">
        <div className="quote-form__header flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:text-left">
          <div className="quote-form__intro">
            <h3 className="quote-form__title text-2xl font-bold text-charcoal sm:text-[1.65rem]">{title}</h3>
            <p className="quote-form__subtitle mt-1 text-sm text-jet/80 sm:text-base">{subtitle}</p>
          </div>
          <div className="quote-form__badge inline-flex items-center justify-center gap-2 rounded-full border border-ash-gray/40 bg-white/85 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-charcoal/70 shadow-sm sm:self-center">
            <span className="whitespace-nowrap">24hr Reply</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-charcoal">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your full name"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-charcoal">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="0411 820 650"
                autoComplete="tel"
                inputMode="tel"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-charcoal">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              placeholder="your.email@company.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-charcoal">
              Tell Us About Your Cleaning Needs
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} min-h-[140px] resize-none sm:min-h-[170px]`}
              placeholder="Facility type, approximate size, frequency required, any compliance notes."
              autoComplete="off"
            ></textarea>
          </div>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`btn-primary flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-base font-semibold shadow-lg shadow-celestial-blue-1/30 transition ${
              loading ? 'cursor-not-allowed opacity-70' : ''
            }`}
          >
            <Send className="h-4 w-4" />
            {loading ? 'Sending…' : 'Get My Free Quote'}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-jet/70 sm:mt-6">
          We respect your privacy and never share your information with third parties.
        </p>
      </div>
    </div>
  );
};

export default QuoteForm;

