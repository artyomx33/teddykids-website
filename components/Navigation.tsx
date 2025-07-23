'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/lib/translations';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Button from '@/components/Button';

const Navigation: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bananaClicks, setBananaClicks] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for transparent to solid background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle banana clicks for secret page
  const handleBananaClick = () => {
    const newCount = bananaClicks + 1;
    setBananaClicks(newCount);
    
    if (newCount >= 3) {
      // Reset counter and navigate to secret page
      setBananaClicks(0);
      window.location.href = '/apie';
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/programs', label: t('navigation.programs') },
    { href: '/locations', label: t('navigation.locations') },
    { href: '/team', label: t('navigation.team') },
    { href: '/learning', label: t('navigation.learning') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-36">
              <Image
                src="/images/logos/teddykids-logo-placeholder.PNG"
                alt="Teddy Kids"
                width={144}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Nav Links */}
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium ${
                    pathname === link.href ? 'active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Apply Now Button */}
            <Button 
              variant="primary" 
              href="/apply"
              size="sm"
            >
              Apply Now
            </Button>

            {/* Hidden Apie Monkey Icon */}
            <button
              onClick={handleBananaClick}
              className="text-yellow-400 opacity-[0.33] hover:opacity-100 transition-opacity cursor-default"
              aria-label="Hidden Apie monkey icon"
            >
              <Image
                src="/images/icons/banana-icon.png"
                alt="Hidden Apie monkey icon"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="primary" 
              href="/apply"
              size="sm"
              className="mr-4"
            >
              Apply
            </Button>
            
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white transition-all duration-300 overflow-hidden shadow-md ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link py-2 text-base font-medium ${
                  pathname === link.href ? 'active' : ''
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher in Mobile Menu */}
            <div className="py-2">
              <LanguageSwitcher className="w-full justify-start" />
            </div>
            
            {/* Hidden Apie Monkey Icon in Mobile Menu */}
            <button
              onClick={handleBananaClick}
              className="text-yellow-400 opacity-[0.33] hover:opacity-100 transition-opacity cursor-default py-2 text-left"
              aria-label="Hidden Apie monkey icon"
            >
              <Image
                src="/images/icons/banana-icon.png"
                alt="Hidden Apie monkey icon"
                width={24}
                height={24}
                className="inline-block w-6 h-6 object-contain mr-2"
              />
              Secret
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
