'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/lib/translations';
import { useLanguage } from '@/lib/LanguageContext';
import Button from '@/components/Button';

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
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        childAge: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(t('contact.whatsappMessage'));
  const whatsappLink = `https://wa.me/31620966405?text=${whatsappMessage}`;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-3xl font-display font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-gray-700">
          Got questions or just want to say hello? We're here for you—weekdays from 7:30 to 18:30. 
          Fill in the form, call us, or WhatsApp anytime. Welcome to our Teddy family!
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} px-4 py-3 focus:ring-2 focus:ring-brand-pink focus:border-transparent`} 
              required 
              placeholder={t('contact.namePlaceholder')}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'} px-4 py-3 focus:ring-2 focus:ring-brand-pink focus:border-transparent`} 
              required 
              placeholder={t('contact.emailPlaceholder')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="childAge" className="block text-gray-700 mb-1">Child's Age (optional)</label>
            <input 
              type="text" 
              id="childAge" 
              name="childAge" 
              value={formData.childAge}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 px-4 py-3 focus:ring-2 focus:ring-brand-pink focus:border-transparent" 
              placeholder={t('contact.agePlaceholder')}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'} px-4 py-3 focus:ring-2 focus:ring-brand-pink focus:border-transparent`} 
              required 
              placeholder={t('contact.messagePlaceholder')}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
            size="lg"
            className="mt-2"
            disabled={isSubmitting}
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
              'Send Message'
            )}
          </Button>
          
          <p className="text-sm text-gray-500 mt-2">
            Expect a reply within ~2 hours (weekdays).
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
              "All messages are read daily by our caregiving team—no bots, no waitlists."
            </p>
          </div>
          
          <div className="mt-4">
            <p className="text-gray-600 italic">
              "Teddy Kids feels like home from the first click." – Parent testimonial
            </p>
          </div>
        </div>
      </div>
      
      {/* Success Message (only shown after form submission) */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('contact.thankYouTitle')}</h3>
              <p className="text-gray-600 mb-4">{t('contact.thankYou')}</p>
              <Button 
                variant="secondary"
                onClick={() => setIsSubmitted(false)}
              >
                {t('contact.sendAnother')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
