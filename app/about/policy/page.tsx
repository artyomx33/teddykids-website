'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// Accordion component for document sections
interface AccordionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center">
          <span className="text-2xl mr-3">{icon}</span>
          <h3 className="text-xl font-display font-semibold text-gray-900">{title}</h3>
        </div>
        <svg 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="pt-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

// Document link component with download icon
interface DocumentLinkProps {
  title: string;
  href: string;
  language?: string;
}

const DocumentLink: React.FC<DocumentLinkProps> = ({ title, href, language }) => {
  return (
    <a
      href={href}
      className="flex items-center p-4 bg-gray-50 hover:bg-brand-mint hover:bg-opacity-20 rounded-lg transition-colors group mb-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center justify-center w-10 h-10 bg-brand-pink bg-opacity-10 rounded-lg mr-4">
        <svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 group-hover:text-brand-pink transition-colors">{title}</h4>
        {language && <p className="text-sm text-gray-500">{language}</p>}
      </div>
      <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-pink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
};

export default function PolicyPage() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <main>
      {/* Hero Section with Tree Meadow Background */}
      <section className="relative py-24 bg-gradient-to-br from-brand-mint to-brand-yellow overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-60">
          <Image
            src="/images/treeparkbackground.jpg"
            alt="Tree park background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent"></div>
        
        {/* Purple Dino Character */}
        <div className="absolute bottom-4 right-8 hidden md:block">
          <Image
            src="/images/characters/teddy-character-1.png"
            alt=""
            aria-hidden="true"
            width={150}
            height={150}
            className="opacity-90"
          />
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              {t('about.policy.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {t('about.policy.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Document Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Pedagogical Policy */}
            <Accordion 
              title={t('about.policy.pedagogical.title')} 
              icon="📋"
              defaultOpen={true}
            >
              <p className="text-gray-700 mb-6">{t('about.policy.pedagogical.description')}</p>
              <div className="space-y-3">
                <DocumentLink 
                  title={t('about.policy.pedagogical.dutchDocument')}
                  href="/docs/PedagogischBeleidsplan-TeddyKids-NL.pdf"
                  language="Nederlands"
                />
                <DocumentLink 
                  title={t('about.policy.pedagogical.englishDocument')}
                  href="/docs/PedagogicalPolicy-TeddyKids-EN.pdf"
                  language="English"
                />
              </div>
            </Accordion>

            {/* GGD Reports */}
            <Accordion title={t('about.policy.ggd.title')} icon="🏥">
              <p className="text-gray-700 mb-6">{t('about.policy.ggd.description')}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">{t('about.policy.ggd.locations.rbw')}</h4>
                  <DocumentLink 
                    title="GGD Report 2024"
                    href="/docs/GGD-RBW-2024.pdf"
                    language="Nederlands"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">{t('about.policy.ggd.locations.rb3rb5')}</h4>
                  <DocumentLink 
                    title="GGD Report 2024"
                    href="/docs/GGD-RB3RB5-2024.pdf"
                    language="Nederlands"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">{t('about.policy.ggd.locations.lrz')}</h4>
                  <DocumentLink 
                    title="GGD Report 2024"
                    href="/docs/GGD-LRZ-2024.pdf"
                    language="Nederlands"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">{t('about.policy.ggd.locations.zml')}</h4>
                  <DocumentLink 
                    title="GGD Report 2024"
                    href="/docs/GGD-ZML-2024.pdf"
                    language="Nederlands"
                  />
                </div>
              </div>
            </Accordion>

            {/* Privacy & GDPR */}
            <Accordion title={t('about.policy.privacy.title')} icon="🔐">
              <p className="text-gray-700 mb-6">{t('about.policy.privacy.description')}</p>
              <div className="bg-brand-yellow bg-opacity-10 p-4 rounded-lg">
                <p className="text-gray-700 italic">{t('about.policy.privacy.comingSoon')}</p>
              </div>
            </Accordion>

            {/* Other Documents */}
            <Accordion title={t('about.policy.additional.title')} icon="📄">
              <div className="space-y-3">
                <DocumentLink 
                  title={t('about.policy.additional.incidentForm') || "Incident Reporting Form"}
                  href="/docs/IncidentenMeldingenFormulier.pdf"
                  language="Nederlands"
                />
                <DocumentLink 
                  title={t('about.policy.additional.vogSample') || "VOG Sample"}
                  href="/docs/VerklaringOmtrentGedragVoorbeeld.pdf"
                  language="Nederlands"
                />
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Help CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              {t('about.policy.helpTitle') || "Need help finding something?"}
            </h2>
            <p className="text-gray-700 mb-8">
              {t('about.policy.helpCta') || "Can't find the document you're looking for? Our team is here to help."}
            </p>
            <Button
              variant="whatsapp"
              href={`https://wa.me/31620966405?text=${encodeURIComponent(t('contact.whatsappMessage') || "Hi Teddy Kids! I need help finding a document.")}`}
              size="lg"
              isExternal
              icon={
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              }
            >
              {t('contact.whatsappButton') || "Chat with Us on WhatsApp"}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
