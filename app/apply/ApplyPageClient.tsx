'use client';
import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';
// NOTE: react-audio-player-component was removed due to React 19 compatibility issues.
// We fall back to a styled native <audio> element instead.

// Progress step component
interface ProgressStepProps {
  number: number;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  isActive: boolean;
  isCompleted: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({
  number,
  title,
  description,
  icon,
  isActive,
  isCompleted,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
        isActive ? 'bg-brand-pink text-white' : 
        isCompleted ? 'bg-green-500 text-white' : 
        'bg-gray-200 text-gray-500'
      }`}>
        {isCompleted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          icon ? <span className="text-lg">{icon}</span> : <span>{number}</span>
        )}
      </div>
      <span className={`text-sm mt-2 ${isActive ? 'font-medium' : 'text-gray-500'}`}>{title}</span>
      {description && isActive && (
        <span className="text-xs text-gray-500 text-center mt-1 max-w-[120px]">{description}</span>
      )}
    </div>
  );
};

// Program card component
interface ProgramCardProps {
  title: string;
  icon: React.ReactNode;
  ages: string;
  selected: boolean;
  onClick: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  icon,
  ages,
  selected,
  onClick,
}) => {
  return (
    <div 
      className={`bg-white p-6 rounded-xl shadow-sm cursor-pointer transition-all duration-300 ${
        selected ? 'ring-2 ring-brand-pink shadow-md' : 'hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-display font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{ages}</p>
      <div className={`w-6 h-6 rounded-full border ${
        selected ? 'bg-brand-pink border-brand-pink' : 'border-gray-300'
      } flex items-center justify-center ml-auto`}>
        {selected && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </div>
  );
};

// Location card component
interface LocationCardProps {
  name: string;
  address: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const LocationCard: React.FC<LocationCardProps> = ({
  name,
  address,
  icon,
  selected,
  onClick,
}) => {
  return (
    <div 
      className={`bg-white p-6 rounded-xl shadow-sm cursor-pointer transition-all duration-300 ${
        selected ? 'ring-2 ring-brand-pink shadow-md' : 'hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center">
            {icon && <span className="text-2xl mr-2">{icon}</span>}
            <h3 className="text-xl font-display font-semibold">{name}</h3>
          </div>
          <p className="text-gray-600">{address}</p>
        </div>
        <div className={`w-6 h-6 rounded-full border ${
          selected ? 'bg-brand-pink border-brand-pink' : 'border-gray-300'
        } flex items-center justify-center`}>
          {selected && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

// Form input component
interface FormInputProps {
  label: string;
  type?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  id,
  value,
  onChange,
  required = false,
  placeholder = '',
  error = '',
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg border ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

// Form textarea component
interface FormTextareaProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  id,
  value,
  onChange,
  required = false,
  placeholder = '',
  error = '',
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={4}
        className={`w-full px-4 py-3 rounded-lg border ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

// Main apply-page content component
function ApplyPageContent() {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  // Get initial program from URL if available
  const initialProgram = searchParams.get('program') || '';
  const initialLocation = searchParams.get('location') || '';
  
  // Form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Program Selection
    program: initialProgram,
    location: initialLocation,
    startDate: '',
    
    // Step 2: Child Information
    childFirstName: '',
    childLastName: '',
    childDateOfBirth: '',
    childGender: '',
    childNationality: '',
    childLanguages: '',
    
    // Step 3: Parent/Guardian Information
    parentFirstName: '',
    parentLastName: '',
    parentEmail: '',
    parentPhone: '',
    parentAddress: '',
    parentCity: '',
    parentPostalCode: '',
    parentCountry: '',
    
    // Step 4: Additional Information
    previousChildcare: '',
    dietaryRestrictions: '',
    medicalInformation: '',
    additionalComments: '',
    
    // Step 5: Preferences
    tourRequested: false,
    readyToApply: true,
    whatsappPreferred: false,
    agreeTerms: false
  });
  
  // Form errors
  // Use an index signature so we can safely access errors[key]
  const [errors, setErrors] = useState<Record<string, string>>({});
  // Ref to the multi-step form container for smooth scrolling
  const formRef = React.useRef<HTMLDivElement>(null);
  // Controls fade-in of mafia confirmation content after seal video ends
  const [sealVideoEnded, setSealVideoEnded] = useState(false);
  
  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    // `checked` only exists on HTMLInputElement; cast to access safely
    const isChecked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? isChecked : value
    }));
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Handle program selection
  const handleProgramSelect = (program: string) => {
    setFormData(prev => ({
      ...prev,
      program
    }));
  };
  
  // Handle location selection
  const handleLocationSelect = (location: string) => {
    setFormData(prev => ({
      ...prev,
      location
    }));
  };
  
  // Validate current step
  const validateStep = () => {
    const newErrors: Record<string, string> = {};
    
    switch (currentStep) {
      // Step-1  ─ Program Selection
      case 1:
        if (!formData.program) newErrors.program = 'Please select a program';
        break;

      // Step-2  ─ Location Selection
      case 2:
        if (!formData.location) newErrors.location = 'Please select a location';
        break;

      // Step-3  ─ Preferred Start Date
      case 3:
        if (!formData.startDate) newErrors.startDate = 'Please select a preferred start date';
        break;

      // Step-4  ─ Parent + Child information
      case 4:
        if (!formData.childFirstName) newErrors.childFirstName = 'First name is required';
        if (!formData.childLastName) newErrors.childLastName = 'Last name is required';
        if (!formData.childDateOfBirth) newErrors.childDateOfBirth = 'Date of birth is required';
        if (!formData.parentFirstName) newErrors.parentFirstName = 'First name is required';
        if (!formData.parentLastName) newErrors.parentLastName = 'Last name is required';
        if (!formData.parentEmail) newErrors.parentEmail = 'Email is required';
        break;

      // Step-5  ─ Confirmation
      case 5:
        if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';
        break;

      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle next step
  const handleNextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
      scrollToForm();
    }
  };
  
  // Handle previous step
  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
    scrollToForm();
  };

  // Smoothly scroll the multi-step form into view
  const scrollToForm = () => {
    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50); // allow DOM update
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateStep()) {
      // Validation succeeded – proceed to submit the data
      // TODO: send formData to backend / API endpoint here.
      
      // For now, just go to the success step
      setCurrentStep(6);
      // Smooth-scroll to the confirmation card instead of abrupt jump
      scrollToForm();
       
    }
  };
  
  // Programs data
  const programs = [
    {
      id: 'nursery',
      title: t('locationsPage.applyPage.form.programSection.options.nursery.title'),
      icon: '🍼',
      ages: t('locationsPage.applyPage.form.programSection.options.nursery.ages')
    },
    {
      id: 'preschool',
      title: t('locationsPage.applyPage.form.programSection.options.preschool.title'),
      icon: '🎨',
      ages: t('locationsPage.applyPage.form.programSection.options.preschool.ages')
    },
    {
      id: 'afterschool',
      title: t('locationsPage.applyPage.form.programSection.options.afterschool.title'),
      icon: '🧩',
      ages: t('locationsPage.applyPage.form.programSection.options.afterschool.ages')
    }
  ];
  
  // Locations data
  const locations = [
    {
      id: 'rbw',
      name: 'RBW',
      icon: '🏡',
      address: 'Rijnsburgerweg 35, Leiden'
    },
    {
      id: 'rb35',
      name: 'RB3/5',
      icon: '🏡',
      address: 'Rijnsburgerweg 3 & 5, Leiden'
    },
    {
      id: 'lrz',
      name: 'LRZ',
      icon: '🏡',
      address: 'Lorentzkade 15a, Leiden'
    },
    {
      id: 'zml',
      name: 'ZML',
      icon: '🏡',
      address: 'Zeemanlaan 22a, Leiden'
    }
  ];
  
  // Process steps with descriptions
  const processSteps = [
    {
      number: 1,
      title: "Complete Application",
      description: "Just 3 minutes of clicking & dreaming.",
      icon: "1️⃣"
    },
    {
      number: 2,
      title: "Application Review",
      description: "Our team reads every word. Real humans.",
      icon: "2️⃣"
    },
    {
      number: 3,
      title: "Tour & Interview",
      description: "Come meet us, touch the toys, feel the vibe.",
      icon: "3️⃣"
    },
    {
      number: 4,
      title: "Enrollment Confirmation",
      description: "Paperwork made simple. Clarity first.",
      icon: "4️⃣"
    },
    {
      number: 5,
      title: "Welcome to Teddy Kids",
      description: "We help with the first day, the nerves, and the celebration.",
      icon: "5️⃣"
    }
  ];

  /* ──────────────────────────────────────────────────────────
   *  Hero video handling - FIXED to prevent flash of content
   * ────────────────────────────────────────────────────────── */
  const fallbackImageSrc = '/images/heroes/journey-starts-here.png';
  const videoSrc = '/images/heroes/journey-starts-here-video.mp4';
  const [isMobile, setIsMobile] = useState(false); // Detect screen size for video

  useEffect(() => {
    // Check for mobile on client-side only
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <main>
      {/* 1. Hero Section - FIXED to prevent flash of content */}
      <section className="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden bg-brand-pink">
        {/* Preload critical assets */}
        <Head>
          <link rel="preload" as="image" href={fallbackImageSrc} />
          {!isMobile && <link rel="preload" as="video" href={videoSrc} />}
        </Head>

        {/* Hero background - single image that's always visible */}
        <div className="absolute inset-0">
          <Image
            src={fallbackImageSrc}
            alt="Your journey with Teddy Kids begins here"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Desktop video background - only loaded after initial render */}
        {!isMobile && (
          <video
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
            poster={fallbackImageSrc}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Gradient overlay for text readability - always present */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10" />

        {/* Hero content - always visible */}
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t('locationsPage.applyPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl mx-auto">
              {t('locationsPage.applyPage.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Audio Section - first content after hero */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              {t('locationsPage.applyPage.audioSection.title')}
            </h2>
            <p className="text-gray-700 mb-6">
              {t('locationsPage.applyPage.audioSection.subtitle')}
            </p>
            <div className="bg-gray-50 p-6 rounded-xl inline-block">
              {/* Button-triggered audio playback (same approach as About page) */}
              <div className="text-center">
                <button
                  onClick={() => {
                    const audio = new Audio('/audio/appies-welcome.mp3');
                    audio
                      .play()
                      .catch((error) => {
                        console.error('Audio play failed:', error);
                        alert(
                          'Sorry, audio playback failed. Please check if the file exists or your browser settings.',
                        );
                      });
                  }}
                  className="bg-brand-pink hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto"
                >
                  <span className="mr-2">🎵</span>
                  {t('locationsPage.applyPage.audioSection.buttonText')}
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  {t('locationsPage.applyPage.audioSection.buttonNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Timeline / How It Works Section */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8">
              {t('locationsPage.applyPage.howItWorks.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-medium text-xl mb-2">
                  {t('locationsPage.applyPage.howItWorks.step1.title')}
                </h3>
                <p className="text-gray-600">
                  {t('locationsPage.applyPage.howItWorks.step1.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="font-medium text-xl mb-2">
                  {t('locationsPage.applyPage.howItWorks.step2.title')}
                </h3>
                <p className="text-gray-600">
                  {t('locationsPage.applyPage.howItWorks.step2.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-medium text-xl mb-2">
                  {t('locationsPage.applyPage.howItWorks.step3.title')}
                </h3>
                <p className="text-gray-600">
                  {t('locationsPage.applyPage.howItWorks.step3.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRUTAL LUNA CTA Section - Replaces the previous soft CTA */}
      <section className="brutal-luna py-12 px-6 rounded-xl mx-auto max-w-4xl my-12" 
               style={{ 
                 background: 'linear-gradient(180deg, #fff5f5, #ffefef)',
                 boxShadow: '0 2px 12px rgba(255, 130, 130, 0.1)'
               }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="bl-heading text-3xl font-display font-bold mb-3 text-[#1a1a1a]">
              {t('locationsPage.applyPage.brutalLuna.title')}
            </h2>
            <p className="bl-subtext text-lg text-gray-700 mb-6">
              {t('locationsPage.applyPage.brutalLuna.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg"
                href="#application-form"
                className="apply-button transform hover:scale-105 transition-transform duration-200"
              >
                {t('locationsPage.applyPage.cta.applyButton')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/contact?subject=Tour Request"
              >
                {t('locationsPage.applyPage.cta.tourButton')}
              </Button>
            </div>
            <p className="bl-note text-sm mt-4 text-gray-500">
              ⏳ {t('locationsPage.applyPage.brutalLuna.note')}
            </p>
          </div>
        </div>
      </section>
      
      {/* 5. Application Form - AFTER CTAs */}
      <section id="application-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Begin Your Application</h2>
            
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="hidden md:flex justify-between items-center">
                <ProgressStep 
                  number={1} 
                  title={t('locationsPage.applyPage.steps.programSelection')} 
                  icon="🧸"
                  description={t('locationsPage.applyPage.form.programSection.heading')}
                  isActive={currentStep === 1} 
                  isCompleted={currentStep > 1}
                />
                <div className="flex-1 h-1 bg-gray-200 mx-2">
                  <div 
                    className="h-full bg-brand-pink transition-all duration-300" 
                    style={{ width: `${currentStep > 1 ? '100%' : '0%'}` }}
                  ></div>
                </div>
                <ProgressStep 
                  number={2} 
                  title={t('locationsPage.applyPage.steps.location')} 
                  icon="📍"
                  description={t('locationsPage.applyPage.form.location')}
                  isActive={currentStep === 2} 
                  isCompleted={currentStep > 2}
                />
                <div className="flex-1 h-1 bg-gray-200 mx-2">
                  <div 
                    className="h-full bg-brand-pink transition-all duration-300" 
                    style={{ width: `${currentStep > 2 ? '100%' : '0%'}` }}
                  ></div>
                </div>
                <ProgressStep 
                  number={3} 
                  title={t('locationsPage.applyPage.steps.startDate')} 
                  icon="📅"
                  description={t('locationsPage.applyPage.form.startDate')}
                  isActive={currentStep === 3} 
                  isCompleted={currentStep > 3}
                />
                <div className="flex-1 h-1 bg-gray-200 mx-2">
                  <div 
                    className="h-full bg-brand-pink transition-all duration-300" 
                    style={{ width: `${currentStep > 3 ? '100%' : '0%'}` }}
                  ></div>
                </div>
                <ProgressStep 
                  number={4} 
                  title={t('locationsPage.applyPage.steps.yourDetails')} 
                  icon="👪"
                  description="Parent + Child Info"
                  isActive={currentStep === 4} 
                  isCompleted={currentStep > 4}
                />
                <div className="flex-1 h-1 bg-gray-200 mx-2">
                  <div 
                    className="h-full bg-brand-pink transition-all duration-300" 
                    style={{ width: `${currentStep > 4 ? '100%' : '0%'}` }}
                  ></div>
                </div>
                <ProgressStep 
                  number={5} 
                  title={t('locationsPage.applyPage.steps.confirm')} 
                  icon="✨"
                  description="Almost there!"
                  isActive={currentStep === 5} 
                  isCompleted={currentStep > 5}
                />
              </div>
              
              {/* Mobile Progress Indicator */}
              <div className="md:hidden text-center">
                <p className="text-lg font-medium mb-2">
                  Step {currentStep} of 5: {
                    currentStep === 1 ? t('locationsPage.applyPage.steps.programSelection') :
                    currentStep === 2 ? t('locationsPage.applyPage.steps.location') :
                    currentStep === 3 ? t('locationsPage.applyPage.steps.startDate') :
                    currentStep === 4 ? t('locationsPage.applyPage.steps.yourDetails') :
                    currentStep === 5 ? t('locationsPage.applyPage.steps.confirm') : ''
                  }
                </p>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-brand-pink rounded-full transition-all duration-300" 
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Form Container */}
            <div
              ref={formRef}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <form onSubmit={handleSubmit}>
                {/* Step 1: Program Selection */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6">
                      {t('locationsPage.applyPage.form.programSection.heading')}
                    </h2>
                    
                    {errors.program && (
                      <p className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                        {errors.program}
                      </p>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {programs.map((program) => (
                        <ProgramCard 
                          key={program.id}
                          title={program.title}
                          icon={program.icon}
                          ages={program.ages}
                          selected={formData.program === program.id}
                          onClick={() => handleProgramSelect(program.id)}
                        />
                      ))}
                    </div>
                    
                    <div className="text-center text-sm text-gray-600 mb-8 p-3 bg-gray-50 rounded-lg">
                      {t('locationsPage.applyPage.form.programSection.tisaNote')}
                    </div>
                  </div>
                )}
                
                {/* Step 2: Location Selection */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6">
                      {t('locationsPage.applyPage.form.location')}
                    </h2>
                    
                    {errors.location && (
                      <p className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                        {errors.location}
                      </p>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {locations.map((location) => (
                        <LocationCard 
                          key={location.id}
                          name={location.name}
                          address={location.address}
                          icon={location.icon}
                          selected={formData.location === location.id}
                          onClick={() => handleLocationSelect(location.id)}
                        />
                      ))}
                    </div>
                    
                    <p className="text-center text-gray-600 italic">
                      We&apos;ll try to match your preference—but will always offer the best fit.
                    </p>
                  </div>
                )}
                
                {/* Step 3: Preferred Start Date */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6">
                      {t('locationsPage.applyPage.form.startDate')}
                    </h2>
                    
                    <FormInput 
                      label={t('locationsPage.applyPage.form.startDate')}
                      type="date"
                      id="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required={true}
                      error={errors.startDate}
                    />
                    
                    <p className="text-center text-gray-600 italic mt-4">
                      We know plans change. Just give us your best guess.
                    </p>
                  </div>
                )}
                
                {/* Step 4: Parent + Child Info */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6">
                      {t('locationsPage.applyPage.steps.yourDetails')}
                    </h2>
                    
                    <div className="bg-brand-pink bg-opacity-5 p-4 rounded-lg mb-6">
                      <h3 className="text-lg font-medium mb-2">Parent/Guardian Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormInput 
                          label="Parent Name"
                          id="parentFirstName"
                          value={formData.parentFirstName}
                          onChange={handleChange}
                          required={true}
                          error={errors.parentFirstName}
                          placeholder="Your full name"
                        />
                        
                        <FormInput 
                          label="Email"
                          type="email"
                          id="parentEmail"
                          value={formData.parentEmail}
                          onChange={handleChange}
                          required={true}
                          error={errors.parentEmail}
                        />
                      </div>
                      
                      <FormInput 
                        label="Phone (optional)"
                        id="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        error={errors.parentPhone}
                      />
                    </div>
                    
                    <div className="bg-brand-yellow bg-opacity-5 p-4 rounded-lg mb-6">
                      <h3 className="text-lg font-medium mb-2">Child Details</h3>
                      <FormInput 
                        label="Child&apos;s First Name"
                        id="childFirstName"
                        value={formData.childFirstName}
                        onChange={handleChange}
                        required={true}
                        error={errors.childFirstName}
                      />
                      
                      <FormInput 
                        label="Child&apos;s Age or Date of Birth"
                        type="date"
                        id="childDateOfBirth"
                        value={formData.childDateOfBirth}
                        onChange={handleChange}
                        required={true}
                        error={errors.childDateOfBirth}
                      />
                    </div>
                    
                    <FormTextarea 
                      label="Optional Message"
                      id="additionalComments"
                      value={formData.additionalComments}
                      onChange={handleChange}
                      placeholder="Anything else you&apos;d like us to know?"
                      error={errors.additionalComments}
                    />
                    
                    <div className="mt-6 space-y-3">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="tourRequested"
                            name="tourRequested"
                            type="checkbox"
                            checked={formData.tourRequested}
                            onChange={handleChange}
                            className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="tourRequested" className="font-medium text-gray-700">
                            I&apos;d like to book a tour
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="readyToApply"
                            name="readyToApply"
                            type="checkbox"
                            checked={formData.readyToApply}
                            onChange={handleChange}
                            className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="readyToApply" className="font-medium text-gray-700">
                            I&apos;m ready to apply now
                          </label>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="whatsappPreferred"
                            name="whatsappPreferred"
                            type="checkbox"
                            checked={formData.whatsappPreferred}
                            onChange={handleChange}
                            className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="whatsappPreferred" className="font-medium text-gray-700">
                            Please WhatsApp me instead
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 5: Application Process Timeline */}
                {currentStep === 5 && (
                  <div>
                    <h2 className="text-2xl font-display font-bold mb-6">Application Process Timeline</h2>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                      <ol className="space-y-6">
                        {processSteps.map((step, index) => (
                          <li key={index} className="flex">
                            <span className="bg-brand-pink text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                              {step.icon}
                            </span>
                            <div>
                              <h4 className="font-medium text-lg">{step.title}</h4>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-start mb-4">
                        <div className="flex items-center h-5">
                          <input
                            id="agreeTerms"
                            name="agreeTerms"
                            type="checkbox"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className="focus:ring-brand-pink h-4 w-4 text-brand-pink border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                            I agree to the <a href="/terms" className="text-brand-pink hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-brand-pink hover:underline">Privacy Policy</a>
                          </label>
                        </div>
                      </div>
                      {errors.agreeTerms && <p className="text-sm text-red-600">{errors.agreeTerms}</p>}
                    </div>
                  </div>
                )}
                
                {/* Step 6: Teddy Mafia Welcome */}
                {currentStep === 6 && (
                  <div
                    className="form-submit-confirmation brutal-mafia mx-auto mt-4 mb-8
                               max-w-[600px] w-full bg-[#1a1a1a] text-gray-100
                               border-2 border-[#ffc53d] rounded-lg p-8 md:p-10 text-center
                               shadow-xl"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.5)' }}
                  >
                    {/* Seal video placeholder */}
                    <video
                      id="applySealVideo"
                      className="seal-video w-40 md:w-48 mx-auto mb-6 rounded-lg"
                      autoPlay
                      muted
                      playsInline
                      onEnded={() => setSealVideoEnded(true)}
                      poster="/images/logos/teddy-mafia-logo.png"
                    >
                      <source src="/videos/appies_seal_placeholder.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Content that fades in after video ends */}
                    {sealVideoEnded && (
                      <>
                        {/* Mafia Logo */}
                        <Image
                          src="/images/logos/teddy-mafia-logo.png"
                          alt="Teddy Mafia Logo"
                          width={112}
                          height={112}
                          className="mafia-logo w-28 mx-auto mb-6 animate-pulse"
                        />

                        <h2 className="seal-header font-display font-bold text-2xl md:text-3xl mb-4 tracking-wide">
                          Welcome to the Inner Circle.
                        </h2>
                        <p className="seal-sub text-lg md:text-xl mb-8">
                          The pact is sealed.
                        </p>

                        <div className="next-steps mb-6">
                          <ol className="text-left mx-auto inline-block list-decimal pl-6 space-y-3">
                            <li>Your application has been received&nbsp;&mdash; stamped and logged.</li>
                            <li>A location chief will follow up personally.</li>
                            <li>You&apos;ll be invited for a private tour.</li>
                            <li>We tailor the perfect start date for your child.</li>
                            <li>You may qualify for up to 5 free trial days.</li>
                          </ol>
                        </div>

                        <p className="seal-note text-sm leading-relaxed mb-8">
                          Expect contact within 24&ndash;48&nbsp;hours.<br/>
                          No silence. No guessing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button 
                            variant="primary"
                            href="/"
                            size="lg"
                            className="bg-[#ffc53d] text-[#1a1a1a] hover:bg-[#e6ae2e]"
                          >
                            Return Home
                          </Button>
                          <Button 
                            variant="outline"
                            href="/contact"
                            size="lg"
                            className="border-[#ffc53d] text-[#ffc53d] hover:bg-[#ffc53d] hover:text-[#1a1a1a]"
                          >
                            Contact Us
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                )}
                
                {/* Navigation Buttons */}
                {currentStep < 6 && (
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 ? (
                      <Button 
                        variant="outline"
                        type="button"
                        onClick={handlePrevStep}
                      >
                        Previous
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    
                    {currentStep < 5 ? (
                      <Button 
                        variant="primary"
                        type="button"
                        onClick={handleNextStep}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button 
                        variant="primary"
                        type="submit"
                      >
                        Apply&nbsp;Now
                      </Button>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section - MOVED BELOW FORM */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-medium text-xl mb-2">Do I need to pay a fee?</h3>
              <p className="text-gray-600">No application fee—your tour and our guidance are on us.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-medium text-xl mb-2">Can I schedule a tour first?</h3>
              <p className="text-gray-600">Absolutely—choose &quot;Book a Tour&quot; above and we&apos;ll find a time that works.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-medium text-xl mb-2">Is Teddy Kids bilingual?</h3>
              <p className="text-gray-600">Yes! All our programs are fully bilingual in Dutch and English.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-medium text-xl mb-2">How long does the application process take?</h3>
              <p className="text-gray-600">From application to enrollment typically takes 1-2 weeks, depending on availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Emotional Closing Text - NEW SECTION */}
      <section className="py-16 bg-brand-mint bg-opacity-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">
              Not sure yet? That&apos;s completely okay.
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              There&apos;s no rush — just readiness. We&apos;re happy to chat or send you more information about our programs and approach.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" href="/contact">
                Contact Us
              </Button>
              <Button variant="outline" href="/downloads/welcome-guide.pdf">
                Download Welcome Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ApplyPageClient() {
  /* 
    Heavy multi-step form & validation logic are wrapped in a
    dynamic import so the initial JS bundle for the Apply page
    is smaller.  The form is only needed once the user lands on
    /apply, so it's safe to load it on the client after page
    shell has rendered.
  */
  const DynamicApplyPageContent = dynamic(
    // Using Promise.resolve keeps the code in this file while still
    // allowing Next.js to create a separate chunk for it.
    () => Promise.resolve(ApplyPageContent),
    {
      // Provide lightweight placeholder while chunk loads
      loading: () => (
        <main className="py-20 text-center">
          <p className="text-gray-500">Loading application form…</p>
        </main>
      ),
      ssr: false, // render on client only
    }
  );

  return <DynamicApplyPageContent />;
}
