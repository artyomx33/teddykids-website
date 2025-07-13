'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

const ApiePlayground = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [confettiActive, setConfettiActive] = useState(false);
  const [activeColor, setActiveColor] = useState('#FFD700'); // Default yellow color
  const [coloringAreas, setColoringAreas] = useState({
    banana1: '#FFFFFF',
    banana2: '#FFFFFF',
    leaf1: '#FFFFFF',
    leaf2: '#FFFFFF',
    monkey: '#FFFFFF',
    sun: '#FFFFFF',
    cloud: '#FFFFFF',
    flower: '#FFFFFF',
  });
  
  // Handle audio playback
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  // Handle audio ended event
  const handleAudioEnded = () => {
    setIsAudioPlaying(false);
  };
  
  // Trigger confetti animation when page loads
  useEffect(() => {
    setConfettiActive(true);
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle coloring
  // Define the possible coloring areas explicitly to give the `area` parameter a type
  type ColorArea =
    | 'banana1'
    | 'banana2'
    | 'leaf1'
    | 'leaf2'
    | 'monkey'
    | 'sun'
    | 'cloud'
    | 'flower';

  const handleColorArea = (area: ColorArea) => {
    setColoringAreas(prev => ({
      ...prev,
      [area]: activeColor
    }));
  };

  // Banana puns for the page
  const bananaPuns = [
    "Why did the banana go to the doctor? Because it wasn't peeling well!",
    "What's a banana's favorite gymnastics move? The split!",
    "Why don't bananas ever get lonely? Because they hang around in bunches!",
    "What did the banana say to the monkey? Nothing, bananas can't talk!",
    "How do you make a banana split? Just tell it a scary story!"
  ];

  // Random pun selector
  const [currentPun, setCurrentPun] = useState(0);
  
  const getNewPun = () => {
    const randomIndex = Math.floor(Math.random() * bananaPuns.length);
    setCurrentPun(randomIndex);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-yellow to-brand-mint overflow-hidden relative">
      {/* Jungle-themed decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-64 opacity-20">
        <Image
          src="/images/apie/jungle-leaves-left.svg"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-0 right-0 w-32 h-64 opacity-20">
        <Image
          src="/images/apie/jungle-leaves-right.svg"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      
      {/* Confetti animation */}
      {confettiActive && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#FF9F1C', '#A78BFA'][
                  Math.floor(Math.random() * 5)
                ],
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Header */}
      <div className="container mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-brand-purple">
          Apie&apos;s Playground
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Welcome to Apie&apos;s secret banana paradise! Color, play, and have fun!
        </p>
        
        {/* Audio player */}
        <div className="mb-8">
          <audio 
            ref={audioRef} 
            src="/audio/jungle-sounds.mp3" 
            onEnded={handleAudioEnded}
          />
          <Button
            variant="secondary"
            onClick={toggleAudio}
            className="flex items-center gap-2"
          >
            {isAudioPlaying ? (
              <>
                <span>Pause Jungle Sounds</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </>
            ) : (
              <>
                <span>Play Jungle Sounds</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </>
            )}
          </Button>
        </div>
      </div>
      
      {/* Coloring Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-display font-bold mb-4 text-center">Coloring Time!</h2>
            
            {/* Color Palette */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button 
                className={`w-10 h-10 rounded-full ${activeColor === '#FFD700' ? 'ring-4 ring-gray-400' : ''}`}
                style={{ backgroundColor: '#FFD700' }}
                onClick={() => setActiveColor('#FFD700')}
                aria-label="Yellow color"
              />
              <button 
                className={`w-10 h-10 rounded-full ${activeColor === '#FF6B6B' ? 'ring-4 ring-gray-400' : ''}`}
                style={{ backgroundColor: '#FF6B6B' }}
                onClick={() => setActiveColor('#FF6B6B')}
                aria-label="Red color"
              />
              <button 
                className={`w-10 h-10 rounded-full ${activeColor === '#4ECDC4' ? 'ring-4 ring-gray-400' : ''}`}
                style={{ backgroundColor: '#4ECDC4' }}
                onClick={() => setActiveColor('#4ECDC4')}
                aria-label="Teal color"
              />
              <button 
                className={`w-10 h-10 rounded-full ${activeColor === '#A78BFA' ? 'ring-4 ring-gray-400' : ''}`}
                style={{ backgroundColor: '#A78BFA' }}
                onClick={() => setActiveColor('#A78BFA')}
                aria-label="Purple color"
              />
              <button 
                className={`w-10 h-10 rounded-full ${activeColor === '#10B981' ? 'ring-4 ring-gray-400' : ''}`}
                style={{ backgroundColor: '#10B981' }}
                onClick={() => setActiveColor('#10B981')}
                aria-label="Green color"
              />
              <button 
                className={`w-10 h-10 rounded-full ${activeColor === '#F59E0B' ? 'ring-4 ring-gray-400' : ''}`}
                style={{ backgroundColor: '#F59E0B' }}
                onClick={() => setActiveColor('#F59E0B')}
                aria-label="Orange color"
              />
              <button 
                className={`w-10 h-10 rounded-full ${activeColor === '#FFFFFF' ? 'ring-4 ring-gray-400' : ''}`}
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
                onClick={() => setActiveColor('#FFFFFF')}
                aria-label="Eraser"
              />
            </div>
            
            {/* Coloring Canvas */}
            <div className="relative w-full h-64 md:h-96 border-2 border-gray-200 rounded-lg mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-white">
                {/* SVG coloring elements */}
                <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                  {/* Background elements */}
                  <rect x="0" y="0" width="800" height="600" fill="#FFFFFF" />
                  
                  {/* Sun */}
                  <circle 
                    cx="700" 
                    cy="100" 
                    r="60" 
                    fill={coloringAreas.sun} 
                    stroke="#000" 
                    strokeWidth="2" 
                    onClick={() => handleColorArea('sun')}
                    style={{ cursor: 'pointer' }}
                  />
                  
                  {/* Cloud */}
                  <path 
                    d="M600,150 C600,120 620,100 650,100 C680,100 700,120 700,150 C700,180 680,200 650,200 C620,200 600,180 600,150 Z" 
                    fill={coloringAreas.cloud} 
                    stroke="#000" 
                    strokeWidth="2" 
                    onClick={() => handleColorArea('cloud')}
                    style={{ cursor: 'pointer' }}
                  />
                  
                  {/* Tree/Plant */}
                  <rect x="100" y="300" width="30" height="200" fill="#8B4513" stroke="#000" strokeWidth="2" />
                  
                  {/* Leaves */}
                  <path 
                    d="M115,300 C50,250 50,150 115,100 C180,150 180,250 115,300 Z" 
                    fill={coloringAreas.leaf1} 
                    stroke="#000" 
                    strokeWidth="2" 
                    onClick={() => handleColorArea('leaf1')}
                    style={{ cursor: 'pointer' }}
                  />
                  <path 
                    d="M200,350 C150,300 150,200 200,150 C250,200 250,300 200,350 Z" 
                    fill={coloringAreas.leaf2} 
                    stroke="#000" 
                    strokeWidth="2" 
                    onClick={() => handleColorArea('leaf2')}
                    style={{ cursor: 'pointer' }}
                  />
                  
                  {/* Bananas */}
                  <path 
                    d="M400,200 C450,150 500,150 550,200 C500,250 450,250 400,200 Z" 
                    fill={coloringAreas.banana1} 
                    stroke="#000" 
                    strokeWidth="2" 
                    onClick={() => handleColorArea('banana1')}
                    style={{ cursor: 'pointer' }}
                  />
                  <path 
                    d="M350,300 C400,250 450,250 500,300 C450,350 400,350 350,300 Z" 
                    fill={coloringAreas.banana2} 
                    stroke="#000" 
                    strokeWidth="2" 
                    onClick={() => handleColorArea('banana2')}
                    style={{ cursor: 'pointer' }}
                  />
                  
                  {/* Monkey */}
                  <circle 
                    cx="600" 
                    cy="400" 
                    r="50" 
                    fill={coloringAreas.monkey} 
                    stroke="#000" 
                    strokeWidth="2" 
                    onClick={() => handleColorArea('monkey')}
                    style={{ cursor: 'pointer' }}
                  />
                  <circle cx="580" cy="380" r="10" fill="#000" />
                  <circle cx="620" cy="380" r="10" fill="#000" />
                  <path d="M580,420 Q600,440 620,420" stroke="#000" strokeWidth="3" fill="none" />
                  
                  {/* Flower */}
                  <circle 
                    cx="700" 
                    cy="500" 
                    r="30" 
                    fill={coloringAreas.flower} 
                    stroke="#000" 
                    strokeWidth="2" 
                    onClick={() => handleColorArea('flower')}
                    style={{ cursor: 'pointer' }}
                  />
                  <circle cx="700" cy="500" r="10" fill="#FFFF00" stroke="#000" strokeWidth="1" />
                </svg>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                variant="outline"
                onClick={() => setColoringAreas({
                  banana1: '#FFFFFF',
                  banana2: '#FFFFFF',
                  leaf1: '#FFFFFF',
                  leaf2: '#FFFFFF',
                  monkey: '#FFFFFF',
                  sun: '#FFFFFF',
                  cloud: '#FFFFFF',
                  flower: '#FFFFFF',
                })}
              >
                Clear All Colors
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Banana Puns Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-display font-bold mb-4 text-center">Banana Puns</h2>
            
            <div className="bg-brand-yellow bg-opacity-20 p-6 rounded-lg mb-6">
              <p className="text-xl text-center italic">&quot;{bananaPuns[currentPun]}&quot;</p>
            </div>
            
            <div className="text-center">
              <Button 
                variant="primary"
                onClick={getNewPun}
              >
                Tell Me Another Banana Joke!
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fun Activities Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-display font-bold mb-4 text-center">Fun Activities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-mint bg-opacity-20 p-4 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Banana Dance</h3>
                <p className="mb-4">Follow these steps to do the banana dance:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Stand up straight like a banana</li>
                  <li>Bend to the left, like a curvy banana</li>
                  <li>Bend to the right, even more curvy!</li>
                  <li>Spin around and peel yourself!</li>
                  <li>Jump up and shout &quot;BANANA!&quot;</li>
                </ol>
              </div>
              
              <div className="bg-brand-purple bg-opacity-20 p-4 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Monkey See, Monkey Do</h3>
                <p className="mb-4">Can you act like these animals?</p>
                <ul className="space-y-2">
                  <li>🐒 Monkey: Make monkey sounds and scratch your head</li>
                  <li>🦁 Lion: Roar loudly and show your claws</li>
                  <li>🐘 Elephant: Make your arm like a trunk and trumpet</li>
                  <li>🦒 Giraffe: Stretch your neck up tall</li>
                  <li>🐸 Frog: Hop around and say &quot;ribbit ribbit&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Back to Home */}
      <div className="container mx-auto px-4 py-12 text-center">
        <Link href="/" className="inline-flex items-center text-brand-pink hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Teddy Kids
        </Link>
      </div>
    </main>
  );
};

export default ApiePlayground;
