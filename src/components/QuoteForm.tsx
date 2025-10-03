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

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <h3 className="text-2xl font-bold text-charcoal mb-2">{title}</h3>
      <p className="text-jet mb-6">{subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-ash-gray rounded-lg focus:ring-4 focus:ring-celestial-blue-1/30 focus:border-celestial-blue-1 outline-none transition-all text-charcoal placeholder:text-jet/60 bg-white"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-ash-gray rounded-lg focus:ring-4 focus:ring-celestial-blue-1/30 focus:border-celestial-blue-1 outline-none transition-all text-charcoal placeholder:text-jet/60 bg-white"
            placeholder="0411 820 650"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-ash-gray rounded-lg focus:ring-4 focus:ring-celestial-blue-1/30 focus:border-celestial-blue-1 outline-none transition-all text-charcoal placeholder:text-jet/60 bg-white"
            placeholder="your.email@company.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
            Tell Us About Your Cleaning Needs
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-ash-gray rounded-lg focus:ring-4 focus:ring-celestial-blue-1/30 focus:border-celestial-blue-1 outline-none transition-all resize-none text-charcoal placeholder:text-jet/60 bg-white"
            placeholder="Brief description of your facility type, size, frequency needed, etc."
          ></textarea>
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full btn-primary flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          <Send className="w-4 h-4 mr-2" />
          {loading ? 'Sending...' : 'Get My Free Quote'}
        </button>
      </form>

      <p className="text-xs text-jet/70 mt-4 text-center">
        We respect your privacy and never share your information with third parties.
      </p>
    </div>
  );
};

export default QuoteForm;

