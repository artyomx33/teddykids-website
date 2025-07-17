'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/Button';
import Confetti from 'react-confetti';

// Audio player button component
const AudioButton = ({ label = "Play" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control audio playback
  };
  
  return (
    <button 
      className="flex items-center gap-2 text-sm text-brand-pink hover:text-brand-purple transition-colors"
      onClick={togglePlay}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        {isPlaying ? (
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        ) : (
          <path d="M8 5v14l11-7z" />
        )}
      </svg>
      {label}
    </button>
  );
};

// Download button component
interface DownloadButtonProps {
  label: string;
  filename: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ label, filename }) => {
  return (
    <a 
      href={`/downloads/${filename}`} 
      download
      className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all text-gray-800 font-medium"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      {label}
    </a>
  );
};

// Timeline step component
interface TimelineStepProps {
  icon: string;
  title: string;
  description: string;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-brand-pink text-white rounded-full flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Info card component
interface InfoCardProps {
  icon: string;
  title: string;
  content: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="text-gray-700">
        {content}
      </div>
    </div>
  );
};

function AcceptedPageContent() {
  const searchParams = useSearchParams();
  const childName = searchParams.get('child') || '';
  const startDate = searchParams.get('start') || 'September 1, 2025';
  const programName = searchParams.get('program') || 'Teddy Learners';
  const locationFull = searchParams.get('location') || 'RBW – Rijnsburgerweg 35, Leiden';
  const leaderName = searchParams.get('leader') || 'Artem';
  const leaderMessage = searchParams.get('message') || "Hi! I'll be your contact—can't wait to meet you both!";
  
  const [showConfetti, setShowConfetti] = useState(false);
  // We don't have sound yet, but we expose a mute toggle for future-proof UX
  const [confettiMuted, setConfettiMuted] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  });
  
  // Randomly select a welcome message
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  
  useEffect(() => {
    // Set window dimensions for confetti
    if (typeof window !== 'undefined') {
      // Save current url for share links / copy functionality
      setShareUrl(window.location.href);
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      // Add resize listener
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      
      window.addEventListener('resize', handleResize);
      
      // Show confetti
      setShowConfetti(true);
      
      // Hide confetti after 5 seconds
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      
      // Select random welcome message
      const messages: string[] = [];
      if (childName) {
        messages.push(`${childName}, we&apos;ve been waiting for you.`);
      }
      messages.push(
        'Welcome to your new second home.',
        'This is the start of something beautiful.',
        "New friends, new stories, new snacks. Let&apos;s go!"
      );
      const randomIndex = Math.floor(Math.random() * messages.length);
      setWelcomeMessage(messages[randomIndex]);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(timer);
      };
    }
  }, [childName]);
  
  // Sample data - in a real app, this would come from a database or API
  const programInfo = {
    name: programName,
    icon: ((): string => {
      const icons: Record<string, string> = {
        Nursery: '🍼',
        'Teddy Learners': '🎨',
        'Teddy BSO Explorers': '🧩'
      };
      return icons[programName] || '🧸';
    })(),
    location: locationFull.split('–')[0]?.trim() || locationFull,
    address:
      locationFull.includes('–') ? locationFull.split('–')[1]?.trim() : '',
    startDate,
    contactPerson: leaderName,
    contactPhoto: `/team/${leaderName.toLowerCase()}.jpg`,
    contactMessage: leaderMessage
  };
  
  // Timeline steps
  const timelineSteps = [
    {
      icon: '📞',
      title: 'Personal Message',
      description: "You'll receive a personal message from your Site Leader"
    },
    {
      icon: '🧾',
      title: 'Onboarding Packet',
      description: "You'll receive your onboarding packet right here"
    },
    {
      icon: '🧸',
      title: 'Optional Visit',
      description: "Schedule a soft-start day to ease the transition"
    },
    {
      icon: '📸',
      title: 'Preparation',
      description: "You prepare. We get ready."
    },
    {
      icon: '🎈',
      title: 'First Day!',
      description: "We'll make it magic."
    }
  ];
  
  // Download resources
  const downloads = [
    {
      label: 'Teddy Kids Welcome Guide',
      filename: 'welcome-guide.pdf',
      icon: '🎒'
    },
    {
      label: 'First Day Checklist',
      filename: 'first-day-checklist.pdf',
      icon: '🧃'
    },
    {
      label: 'Apie Coloring Page',
      filename: 'apie-coloring.pdf',
      icon: '🎨'
    }
  ];
  
  return (
    <main>
      {/* Hero Image - Added at the top per Luna specs */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <Image 
          src="/shared-images/accepted to teddy kids.png"
          alt="Celebration - Accepted to Teddy Kids!"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* Confetti effect */}
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#FFC0CB', '#FFD700', '#98FB98', '#ADD8E6']}
        />
      )}
      
      {/* Mute / Un-mute button for confetti sound (placeholder) */}
      <button
        onClick={() => setConfettiMuted((m) => !m)}
        className="fixed top-4 right-4 z-20 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-sm hover:shadow-md transition"
        aria-label={confettiMuted ? 'Unmute confetti effects' : 'Mute confetti effects'}
      >
        {confettiMuted ? '🔇' : '🔈'}
      </button>
      
      {/* Hero Section */}
      <section className="py-20 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white px-6 py-3 rounded-full text-brand-pink mb-4">
              🎉 Congratulations!
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {welcomeMessage}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We&apos;ve made the first step simple, warm, and stress-free—just like everything else we do.
            </p>
          </div>
        </div>
      </section>
      
      {/* Welcome Info Panel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <InfoCard 
                icon="📅" 
                title="Start Date" 
                content={<p>Your expected start date: <strong>{programInfo.startDate}</strong> — we&apos;ll confirm it personally.</p>}
              />
              
              <InfoCard 
                icon={programInfo.icon} 
                title="Program" 
                content={<p>You&apos;ve been accepted to <strong>{programInfo.name}</strong></p>}
              />
              
              <InfoCard 
                icon="📍" 
                title="Location" 
                content={
                  <div>
                    <p><strong>{programInfo.location}</strong> - {programInfo.address}</p>
                    <a href="#" className="text-sm text-brand-pink hover:underline mt-2 inline-block">View on map →</a>
                  </div>
                }
              />
              
              <InfoCard 
                icon="👩‍🏫" 
                title="Contact Person" 
                content={
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                      <Image 
                        src={programInfo.contactPhoto} 
                        alt={programInfo.contactPerson}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p><strong>{programInfo.contactPerson}</strong></p>
                      <p className="text-sm">{programInfo.contactMessage}</p>
                    </div>
                  </div>
                }
              />
            </div>
            
            {/* Voice Message */}
            <div className="bg-brand-purple bg-opacity-5 p-6 rounded-xl mb-16">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-purple bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-purple">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg">A message from a Teddy parent</h3>
                  <AudioButton label="Listen" />
                </div>
              </div>
              <p className="mt-4 text-gray-600 italic">
                &quot;When I got the email, I smiled. I just <em>knew</em> we were in the right place.&quot;
              </p>
            </div>
            
            {/* Share Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">Share the good news!</h2>
              <p className="text-center text-gray-600 mb-6">
                Celebrate {childName || 'this moment'} with friends and family.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `🎉 We just got accepted at Teddy Kids! Check it out: ${shareUrl}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-mint text-white px-4 py-3 rounded-lg hover:opacity-90 transition"
                >
                  <span className="text-xl">🟢</span> WhatsApp
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-blue text-white px-4 py-3 rounded-lg hover:opacity-90 transition"
                >
                  <span className="text-xl">📘</span> Facebook
                </a>

                {/* Copy Link */}
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(shareUrl);
                      alert('Link copied to clipboard!');
                    } catch {
                      alert('Unable to copy link');
                    }
                  }}
                  className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition text-gray-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.9 12c0-1.16.94-2.1 2.1-2.1h3v-1.8h-3A3.9 3.9 0 0 0 2.1 12c0 2.15 1.75 3.9 3.9 3.9h3v-1.8h-3c-1.16 0-2.1-.94-2.1-2.1z"></path>
                    <path d="M18 6.9h-3v1.8h3c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1h-3v1.8h3a3.9 3.9 0 1 0 0-7.8z"></path>
                    <path d="M8.7 13.2h6.6v-2.4H8.7z"></path>
                  </svg>
                  Copy Link
                </button>
              </div>
            </div>
            
            {/* What Happens Next */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">What Happens Next</h2>
              <div className="space-y-8">
                {timelineSteps.map((step, index) => (
                  <TimelineStep 
                    key={index}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>
            </div>
            
            {/* Welcome Package Downloads */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-8 text-center">Welcome Package</h2>
              <div className="bg-brand-mint bg-opacity-10 p-8 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {downloads.map((download, index) => (
                    <DownloadButton 
                      key={index}
                      label={`${download.icon} ${download.label}`}
                      filename={download.filename}
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-gray-600 mt-6">
                  {childName ? `Hi ${childName}! ` : ''}I&apos;m Apie! I can&apos;t wait to meet you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Footer */}
      <section className="py-16 bg-brand-pink bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Now that you&apos;re in… we&apos;ll handle the rest.
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              You&apos;ve made a beautiful decision. We&apos;ll make it feel easy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                href="#"
                size="lg"
              >
                Meet My Site Leader
              </Button>
              <Button 
                variant="outline"
                href="#"
                size="lg"
              >
                See My First Day Checklist
              </Button>
              <Button 
                variant="outline"
                href="/"
                size="lg"
              >
                Go to the Teddy Homepage
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Wrapper component providing Suspense so `useSearchParams`
// (which triggers a CSR bailout) is allowed while keeping
// the page static-safe.
export default function AcceptedPage() {
  return (
    <Suspense fallback={null}>
      <AcceptedPageContent />
    </Suspense>
  );
}
