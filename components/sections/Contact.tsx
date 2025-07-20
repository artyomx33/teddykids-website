/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import { useTranslation } from '@/lib/translations';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';
import { sendContactEmail } from '@/lib/emailjs';

interface FormData {
  name: string;
  email: string;
  childAge: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  childAge?: string;
  message?: string;
}

const Contact: React.FC = () => {
  /* Get active language from context and hook into translations */
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    childAge: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      /* Actual submission via EmailJS */
      await sendContactEmail({ ...formData, language });
      
      // Success
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        childAge: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS submission error:', error);
      alert('Sorry, something went wrong while sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(t('contact.whatsappMessage'));
  const whatsappLink = `https://wa.me/31620966405?text=${whatsappMessage}`;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-3xl font-display font-bold mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-gray-700">
          {t('contact.subtitle')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        {/* Contact Form - Luna's friendly styling */}
        <form 
          onSubmit={handleSubmit} 
          className="contact-form-container max-w-[500px] mx-auto mb-8 bg-white border border-[#ffe5e5] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
        >
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block font-medium text-[0.95rem] text-gray-700 mb-2"
            >
              {t('contact.formName')}
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className={`w-full text-base px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-[#ddd]'} rounded-md transition-all duration-300 hover:border-[#ffc0b0] focus:border-[#ffcasd] focus:outline-none focus:ring-2 focus:ring-[#ffcasd] focus:ring-opacity-40`}
              required 
              placeholder={t('contact.namePlaceholder')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block font-medium text-[0.95rem] text-gray-700 mb-2"
            >
              {t('contact.formEmail')}
            </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className={`w-full text-base px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-[#ddd]'} rounded-md transition-all duration-300 hover:border-[#ffc0b0] focus:border-[#ffcasd] focus:outline-none focus:ring-2 focus:ring-[#ffcasd] focus:ring-opacity-40`}
              required 
              placeholder={t('contact.emailPlaceholder')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          
          <div className="mb-5">
            <label
              htmlFor="childAge"
              className="block font-medium text-[0.95rem] text-gray-700 mb-2"
            >
              {t('contact.formChildAge')}
            </label>
            <input 
              type="text" 
              id="childAge" 
              name="childAge" 
              value={formData.childAge}
              onChange={handleChange}
              className="w-full text-base px-4 py-3 border border-[#ddd] rounded-md transition-all duration-300 hover:border-[#ffc0b0] focus:border-[#ffcasd] focus:outline-none focus:ring-2 focus:ring-[#ffcasd] focus:ring-opacity-40"
              placeholder={t('contact.agePlaceholder')}
            />
          </div>
          
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block font-medium text-[0.95rem] text-gray-700 mb-2"
            >
              {t('contact.formMessage')}
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              className={`w-full text-base px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-[#ddd]'} rounded-md transition-all duration-300 hover:border-[#ffc0b0] focus:border-[#ffcasd] focus:outline-none focus:ring-2 focus:ring-[#ffcasd] focus:ring-opacity-40`}
              required 
              placeholder={t('contact.messagePlaceholder')}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          
          {/* Luna's gradient button styling */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="send-button w-full py-3.5 px-6 rounded-full font-semibold text-white transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg"
            style={{ 
              background: 'linear-gradient(90deg, #ffa5a2, #ff7f84)',
              boxShadow: '0 2px 8px rgba(255, 127, 132, 0.3)'
            }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('contact.processing')}
              </span>
            ) : (
              t('contact.formSubmit')
            )}
          </button>
          
          {/* Luna's microcopy styling */}
          <p className="microcopy text-[0.85rem] text-gray-600 mt-3 text-center">
            {t('contact.responseTime')}
          </p>
        </form>
        
        {/* Quick Links & Info */}
        <div className="space-y-6">
          <a href="tel:+31620966405" className="flex items-center text-lg font-medium text-brand-pink hover:text-pink-700 transition-colors">
            📞 +31 62 096 6405
          </a>
          
          <a href={whatsappLink} className="flex items-center text-lg font-medium text-green-600 hover:text-green-700 transition-colors">
            💬 WhatsApp Us
          </a>
          
          <address className="not-italic text-gray-700">
            🎒 Rijnsburgerweg 3‑5,<br />2311 JW Leiden
          </address>
          
          <div className="relative w-full h-48 rounded-md overflow-hidden">
            <iframe 
              src="https://maps.google.com/?q=Rijnsburgerweg+Leiden&output=embed"
              className="w-full h-full border-0" 
              loading="lazy" 
              title="Teddy Kids Leiden" 
            />
          </div>
          
          <div className="bg-brand-pink bg-opacity-10 p-4 rounded-lg">
            <p className="text-gray-700 italic">
              &quot;All messages are read daily by our caregiving team&mdash;no bots, no waitlists.&quot;
            </p>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-600 italic">
              &quot;Teddy Kids feels like home from the first click.&quot; – Parent testimonial
            </p>
          </div>
        </div>
      </div>
      
      {/* Success Message (only shown after form submission) */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          {/* Brutal Luna Mafia confirmation card */}
          <div
            className="form-submit-confirmation brutal-mafia relative max-w-[600px] w-full
                       bg-[#1a1a1a] text-gray-100 border-2 border-[#ffc53d] rounded-lg
                       p-8 md:p-10 text-center shadow-xl"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.5)' }}
          >
            {/* Mafia Logo */}
            <Image
              src="/images/logos/teddy-mafia-logo.png"
              alt="Teddy Mafia Logo"
              width={112}
              height={112}
              className="mafia-logo w-28 mx-auto mb-6 animate-pulse"
            />

            {/* Heading */}
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 tracking-wide">
              Welcome to the Family.
            </h2>

            {/* Next steps */}
            <div className="next-steps mb-6">
              <p className="mb-6">
                Your request has landed. Now, do me a little favor...
              </p>
              <ol className="text-left mx-auto inline-block list-decimal pl-6 space-y-3">
                <li>Keep your phone close — someone important is calling.</li>
                <li>We process your details — fast and quiet.</li>
                <li>A location head reaches out — personally.</li>
                <li>You get invited for a private tour.</li>
                <li>We lock in an ideal start date for your child.</li>
                <li>You may qualify for 5 free trial days.</li>
              </ol>
            </div>

            {/* Small note */}
            <p className="small-note text-sm leading-relaxed mb-6">
              We don't ghost.<br />
              Expect contact within 24–48 hours.<br />
              No reply? Check spam or call us.
            </p>

            {/* CTA button */}
            <a
              href="/contact"
              className="btn-mafia inline-block bg-[#ffc53d] text-[#1a1a1a] font-semibold
                         py-3 px-6 rounded hover:bg-[#e6ae2e] transition-colors"
            >
              Still got questions? Call us.
            </a>

            {/* Close button (X) */}
            <button
              onClick={() => setIsSubmitted(false)}
              aria-label="Close"
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-200 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
