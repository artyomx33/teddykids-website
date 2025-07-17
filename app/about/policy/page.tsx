'use client';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// Document link component
const DocumentLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="mb-2 list-none">
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium underline underline-offset-2"
      >
        {children}
      </a>
    </li>
  );
};

// Location report section component
const LocationReport = ({
  title,
  reportLink,
  year = "2024",
}: {
  title: string;
  reportLink: string;
  year?: string;
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <div className="mt-6">
      <h3 className="text-xl font-display font-semibold text-brand-brown mb-2">{title}</h3>
      <ul>
        <DocumentLink href={reportLink}>
          {t('about.policy.downloadReport')} {year} (NL)
        </DocumentLink>
      </ul>
    </div>
  );
};

export default function PolicyPage() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-brand-beige bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t('about.policy.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('about.policy.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Pedagogical Policy Section */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm">
              <h2 className="text-2xl font-display font-bold mb-4 text-brand-brown">
                {t('about.policy.pedagogical.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('about.policy.pedagogical.description')}
              </p>
              <ul className="document-list">
                <DocumentLink href="/docs/PedagogischBeleidsplan-TeddyKids-NL.pdf">
                  {t('about.policy.pedagogical.dutchDocument')}
                </DocumentLink>
                <DocumentLink href="/docs/PedagogicalPolicy-TeddyKids-EN.pdf">
                  {t('about.policy.pedagogical.englishDocument')}
                </DocumentLink>
              </ul>
            </div>
            
            {/* GGD Inspection Reports Section */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm">
              <h2 className="text-2xl font-display font-bold mb-4 text-brand-brown">
                {t('about.policy.ggd.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('about.policy.ggd.description')}
              </p>
              
              <div className="report-group">
                <LocationReport 
                  title={t('about.policy.ggd.locations.rbw')}
                  reportLink="/docs/GGD-RBW-2024.pdf"
                />
                
                <LocationReport 
                  title={t('about.policy.ggd.locations.rb3rb5')}
                  reportLink="/docs/GGD-RB3RB5-2024.pdf"
                />
                
                <LocationReport 
                  title={t('about.policy.ggd.locations.lrz')}
                  reportLink="/docs/GGD-LRZ-2024.pdf"
                />
                
                <LocationReport 
                  title={t('about.policy.ggd.locations.zml')}
                  reportLink="/docs/GGD-ZML-2024.pdf"
                />
              </div>
            </div>
            
            {/* Privacy & GDPR Section */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm">
              <h2 className="text-2xl font-display font-bold mb-4 text-brand-brown">
                {t('about.policy.privacy.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('about.policy.privacy.description')}
              </p>
              
              {/* Placeholder text until final PDF is ready */}
              <p className="italic text-gray-500 mb-4">
                {t('about.policy.privacy.comingSoon')}
              </p>
              
              {/* Uncomment when the file is ready */}
              {/* <DocumentLink href="/docs/TeddyKids-PrivacyPolicy-GDPR.pdf">
                {t('about.policy.privacy.downloadLink')}
              </DocumentLink> */}
            </div>
            
            {/* Additional Forms & Documents Section */}
            <div className="mb-12 p-8 bg-white rounded-xl shadow-sm">
              <h2 className="text-2xl font-display font-bold mb-4 text-brand-brown">
                {t('about.policy.additional.title')}
              </h2>
              <ul className="document-list">
                <DocumentLink href="/docs/IncidentenMeldingenFormulier.pdf">
                  {t('about.policy.additional.incidentForm')}
                </DocumentLink>
                <DocumentLink href="/docs/VerklaringOmtrentGedragVoorbeeld.pdf">
                  {t('about.policy.additional.vogSample')}
                </DocumentLink>
              </ul>
            </div>
            
            {/* Help CTA Section */}
            <div className="text-center p-6 bg-brand-mint bg-opacity-20 rounded-xl">
              <p className="mb-4">
                {t('about.policy.helpCta')}
              </p>
              <Button 
                variant="whatsapp"
                href={`https://wa.me/31712427079?text=${encodeURIComponent(t('contact.whatsappMessage'))}`}
                isExternal={true}
                icon={
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                }
              >
                {t('contact.whatsappButton')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
