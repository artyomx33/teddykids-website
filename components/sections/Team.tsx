'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

interface TeamMemberProps {
  name: string;
  role: string;
  funFact: string;
  imageSrc?: string;
  onClick: () => void;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  funFact,
  imageSrc = '/images/team/placeholder.jpg',
  onClick,
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  // Determine if we should show a real image or a placeholder block
  const isPlaceholder =
    !imageSrc || imageSrc.includes('placeholder');

  /* ------------------------------------------------------------------
   * Hover-to-swap photo logic
   * ------------------------------------------------------------------
   * 1. Map main image → alternate “2” image
   * 2. When user hovers, fade primary out & alternate in.
   *    (opacity transition handled by Tailwind classes)
   */
  const hoverMap: Record<string, string> = {
    '/images/team/antonela.webp': '/images/team/antonela2.webp',
    '/images/team/artem.jpg': '/images/team/artem 2.jpeg',
    '/images/team/els.jpg': '/images/team/els 2.jpeg',
    '/images/team/meral.jpg': '/images/team/meral 2.jpeg',
    '/images/team/svetlana.jpg': '/images/team/svetlana 2.jpeg',
    '/images/team/tess.jpg': '/images/team/tess 2.jpeg',
    '/images/team/sofia.webp': '/images/team/sofia2.webp',
  };

  const hoverImage = imageSrc ? hoverMap[imageSrc] : undefined;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Taller container to achieve roughly 2:3 (w:h) portrait ratio */}
      <div className="relative h-72 w-full">
        {!isPlaceholder ? (
          <>
            {/* Primary image */}
            <Image
              src={imageSrc}
              alt={`${name} - ${role} at Teddy Kids`}
              fill
              className={`object-cover object-top transition-opacity duration-300 ${
                isHovered && hoverImage ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {/* Hover image (render only if we have one) */}
            {hoverImage && (
              <Image
                src={hoverImage}
                alt={`${name} alternate portrait`}
                fill
                className={`object-cover object-top absolute inset-0 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full bg-brand-pink bg-opacity-10">
            {/* Friendly Appies fallback illustration */}
            <Image
              src="/images/characters/appies-waving.png"
              alt="Appies placeholder"
              width={80}
              height={80}
            />
            <p className="text-sm text-gray-600 mt-2">
              {t?.('team.photoComingSoon') ?? 'Photo coming soon'}
            </p>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-display font-semibold">{name}</h3>
        <p className="text-gray-600 mb-3">{role}</p>
        <div className="bg-brand-pink bg-opacity-20 p-3 rounded-lg">
          <p className="text-sm font-medium text-gray-700">{t('teamPage.members.didYouKnow')}</p>
          <p className="text-sm italic text-gray-600">{funFact}</p>
        </div>
      </div>
    </div>
  );
};

interface BioModalProps {
  member: {
    id: string;
    name: string;
    role: string;
    funFact: string;
    imageSrc?: string;
    bio?: string;
    childQuote?: string;
  } | null;
  onClose: () => void;
}

const BioModal: React.FC<BioModalProps> = ({ member, onClose }) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 3:2 landscape ratio for cleaner face framing */}
        <div
          className="relative w-full"
          style={{ aspectRatio: '3 / 2' }}
        >
          <Image
            src={member.imageSrc || '/images/team/placeholder.jpg'}
            alt={`${member.name} - ${member.role} at Teddy Kids`}
            fill
            /* Show the top of the image so faces stay framed in landscape ratio */
            className="object-cover object-top"
          />
          <button 
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-display font-semibold mb-1">{member.name}</h3>
          <p className="text-gray-600 mb-4">{member.role}</p>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2">Bio</h4>
            <p className="text-gray-700">
              {member.bio || "Bio coming soon! We're working on sharing more about our amazing team members."}
            </p>
          </div>
          
          {member.childQuote && (
            <div className="bg-brand-yellow bg-opacity-20 p-4 rounded-lg mb-4">
              <h4 className="text-sm font-medium mb-3">What the children say:</h4>
              <p className="italic text-gray-700 text-lg">“{member.childQuote}”</p>
            </div>
          )}
          
          <div className="bg-brand-pink bg-opacity-20 p-4 rounded-lg">
            <h4 className="text-sm font-medium mb-1">{t('teamPage.members.didYouKnow')}</h4>
            <p className="italic text-gray-700">{member.funFact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TeamProps {
  className?: string;
}

const Team: React.FC<TeamProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [activeMember, setActiveMember] = useState<string | null>(null);
  
  // Team members data from translations
  const teamMembers = [
    {
      id: 'artem',
      name: 'Artem',
      role: t('teamPage.members.artem.role'),
      funFact: t('teamPage.members.artem.funFact'),
      imageSrc: '/images/team/artem.jpg',
      bio: "Artem leads Teddy Kids with vision and passion, always looking for innovative ways to enhance children's learning experiences.",
      childQuote: "Artem makes the best paper airplanes!"
    },
    {
      id: 'tess',
      name: 'Tess',
      role: t('teamPage.members.tess.role'),
      funFact: t('teamPage.members.tess.funFact'),
      imageSrc: '/images/team/tess.jpg',
      bio: "Tess ensures everything runs smoothly across all Teddy Kids locations, with an eye for detail and heart for people.",
      childQuote: "Miss Tess knows where everything is!"
    },
    {
      id: 'jess',
      name: 'Jess',
      role: t('teamPage.members.jess.role'),
      funFact: t('teamPage.members.jess.funFact'),
      imageSrc: '/images/team/jess.jpg',
      bio: "Jess oversees our educational quality, bringing creativity and consistency to our curriculum across all locations.",
      childQuote: "Teacher Jess sings the best songs!"
    },
    {
      id: 'meral',
      name: 'Meral',
      role: t('teamPage.members.meral.role'),
      funFact: t('teamPage.members.meral.funFact'),
      imageSrc: '/images/team/meral.jpg',
      bio: "Meral nurtures our team culture, ensuring Teddy Kids remains a place where both children and staff thrive.",
      childQuote: "Meral gives the best hugs!"
    },
    {
      id: 'antonela',
      name: 'Antonella',
      role: t('teamPage.members.antonela.role'),
      funFact: t('teamPage.members.antonela.funFact'),
      imageSrc: '/images/team/antonela.webp',
      bio: "Antonella leads our flagship location with warmth and expertise, creating a multilingual environment where children flourish.",
      childQuote: "Antonella knows how to say everything in different languages!"
    },
    {
      id: 'pamela',
      name: 'Pamela',
      role: t('teamPage.members.pamela.role'),
      funFact: t('teamPage.members.pamela.funFact'),
      imageSrc: '/images/team/pamela.jpg',
      bio: "Pamela ensures we have the best talent at Teddy Kids, with a keen eye for educators who truly care about children.",
      childQuote: "Miss Pamela always remembers my birthday!"
    },
    {
      id: 'svetlana',
      name: 'Svetlana',
      role: t('teamPage.members.svetlana.role'),
      funFact: t('teamPage.members.svetlana.funFact'),
      imageSrc: '/images/team/svetlana.jpg',
      bio: "Svetlana manages our finances with precision, making sure Teddy Kids can continue to provide exceptional care.",
      childQuote: "Svetlana taught me how to count to 100!"
    },
    {
      id: 'sofia',
      name: 'Sofia',
      role: t('teamPage.members.sofia.role'),
      funFact: t('teamPage.members.sofia.funFact'),
      imageSrc: '/images/team/sofia.webp',
      bio: "Sofia brings creativity to everything at Teddy Kids, from classroom designs to special events that children remember forever.",
      childQuote: "Sofia's art projects are magical!"
    },
    {
      id: 'els',
      name: 'Els',
      role: t('teamPage.members.els.role'),
      funFact: t('teamPage.members.els.funFact'),
      imageSrc: '/images/team/els.jpg',
      bio: 'Els is a valued member of our team, bringing dedication and care to everything she does.',
      childQuote: 'Els always has a smile for us!'
    },
  ];
  
  const activeMemberData = activeMember 
    ? teamMembers.find(member => member.id === activeMember) || null
    : null;

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          {t('teamPage.hero.title')}
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('teamPage.hero.subtitle')}
        </p>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              funFact={member.funFact}
              imageSrc={member.imageSrc}
              onClick={() => setActiveMember(member.id)}
            />
          ))}
        </div>
        
        {/* Bio Modal */}
        {activeMember && (
          <BioModal 
            member={activeMemberData} 
            onClose={() => setActiveMember(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Team;
