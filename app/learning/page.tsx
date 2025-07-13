'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';

// Types for our learning moments
type Tag = '🗣️ Talking in Two Languages' | '💛 Big Feelings' | '🎨 Chaos & Wonder' | '🔧 Real-World Teddy Tricks' | '🤝 Growing Together';

interface LearningMoment {
  id: string;
  title: string;
  insight: string;
  tag: Tag;
  image: string;
  hasAudio?: boolean;
  audioLabel?: string;
}

// Child quotes for random rotation
const childQuotes = [
  "I asked 'why' 42 times today. They answered 39.",
  "Learning is when your brain smiles.",
  "Today I found out water can bounce."
];

// Learning moments data
const learningMoments: LearningMoment[] = [
  {
    id: 'music-brain',
    title: 'The Brain is Fluent in Music Before Words',
    insight: 'Long before babies understand "please" or "thank you," they\'re decoding the rhythm and melody of language. That\'s why our nursery rooms are filled with songs, not instructions. When we sing "clean up time" instead of saying it, we\'re speaking the native language of the developing brain. Watch how even our youngest friends bob their heads to the beat—they\'re not just enjoying music, they\'re processing patterns that will later help them decode speech, math, and emotional cues.',
    tag: '🗣️ Talking in Two Languages',
    image: '/images/learning/music-brain.jpg',
    hasAudio: true,
    audioLabel: 'Educator Insight'
  },
  {
    id: 'sharing-snack',
    title: 'Teddy Shared His Snack, and Made a New Friend',
    insight: 'It happened so quickly we almost missed it. Four-year-old Teddy noticed his classmate looking at his apple slices. Without prompting, he slid two pieces across the table. "For you," he said simply. What looks like a small moment is actually the foundation of empathy, generosity, and social connection. These micro-interactions build the neural pathways for lifelong relationship skills. We celebrate these tiny choices because they\'re actually enormous developmental milestones.',
    tag: '🤝 Growing Together',
    image: '/images/learning/sharing-snack.jpg',
    hasAudio: true,
    audioLabel: 'Child Voice'
  },
  {
    id: 'finger-paint',
    title: 'Finger Paint = Philosophy',
    insight: 'When Sophia spent 20 minutes mixing blue and yellow paint with her fingers, she wasn\'t just making a mess—she was conducting a scientific experiment, making aesthetic choices, and developing fine motor control simultaneously. Each swirl was a decision: more blue or more yellow? Each handprint was spatial awareness in action. We don\'t rush these moments or worry about the cleanup, because we recognize them as complex thinking made visible. That green smudge? It\'s cognitive development you can see.',
    tag: '🎨 Chaos & Wonder',
    image: '/images/learning/finger-paint.jpg'
  },
  {
    id: 'please-languages',
    title: 'The Day They Taught Each Other "Please" in Two Languages',
    insight: 'We watched in amazement as Liam (Dutch-speaking) and Maya (English-speaking) created their own language lesson at snack time. "Alsjeblieft," offered Liam, handing Maya a cracker. "Please," she responded, returning the favor. For the next ten minutes, they exchanged crackers and language, giggling at each other\'s pronunciation. This peer-to-peer learning creates stronger neural connections than any formal lesson could. Children teaching children creates a special kind of magic that accelerates language acquisition and builds cultural bridges simultaneously.',
    tag: '🗣️ Talking in Two Languages',
    image: '/images/learning/please-languages.jpg',
    hasAudio: true,
    audioLabel: 'Parent Testimonial'
  },
  {
    id: 'blocks-thinking',
    title: 'Why We Call Blocks "Thinking Tools"',
    insight: 'When 4-year-old Noah builds a tower that keeps falling, he\'s not just playing—he\'s developing scientific thinking. Each collapse is a hypothesis tested; each rebuild incorporates new learning. "Maybe it needs a bigger bottom," he mutters, demonstrating engineering principles he can\'t yet name. Block play develops spatial reasoning, physics understanding, and problem-solving resilience. It\'s STEM education in its purest form, happening naturally through play. That\'s why our classrooms have more blocks than almost any other material.',
    tag: '🔧 Real-World Teddy Tricks',
    image: '/images/learning/blocks-thinking.jpg'
  },
  {
    id: 'big-feelings',
    title: 'When Emma\'s Tower Fell (And She Didn\'t)',
    insight: 'The crash was spectacular—30 minutes of careful construction destroyed in seconds. We braced for tears, but instead watched Emma take a deep breath, say "I\'m feeling really frustrated," and start again. This emotional regulation didn\'t happen by accident. It came from months of naming feelings, modeling responses, and creating a safe space for big emotions. When children learn to identify and manage feelings early, they build resilience that will serve them through life\'s inevitable disappointments. That rebuilt tower? It\'s emotional intelligence you can see.',
    tag: '💛 Big Feelings',
    image: '/images/learning/big-feelings.jpg',
    hasAudio: true,
    audioLabel: 'Child Voice'
  },
  {
    id: 'puddle-science',
    title: 'The Great Puddle Experiment',
    insight: 'What happens when you give six 3-year-olds access to puddles after a rainstorm? Spontaneous science class. They discovered water displacement ("Look, it splashes!"), weather patterns ("The sun makes it smaller"), and states of matter ("It\'s disappearing into the air!"). Their rain boots became research tools, and their excited shrieks were hypotheses being tested in real time. We document these moments because they remind us that curiosity is the foundation of all learning, and nature is the most engaging classroom.',
    tag: '🎨 Chaos & Wonder',
    image: '/images/learning/puddle-science.jpg'
  },
  {
    id: 'conflict-resolution',
    title: 'Two Children, One Teddy, Zero Adults Stepping In',
    insight: 'When Jasmijn and Leo both reached for the same teddy bear, we resisted the urge to intervene. Instead, we watched as they worked through their first negotiation. "I hold one arm, you hold other arm?" suggested Leo. This spontaneous compromise wasn\'t just adorable—it was the beginning of conflict resolution skills that many adults still struggle with. By giving children space to solve social problems (while staying nearby for support), we help them develop the confidence to navigate relationships throughout life. That shared teddy bear moment? It\'s emotional intelligence in action.',
    tag: '🤝 Growing Together',
    image: '/images/learning/conflict-resolution.jpg'
  },
  {
    id: 'zipper-victory',
    title: 'The Day Mila Zipped Her Own Coat (And Why We Cheered)',
    insight: '"I did it ALL BY MYSELF!" announced Mila, beaming with pride after conquering her coat zipper after weeks of trying. This wasn\'t just about outdoor preparation—it was a milestone in fine motor development, persistence, and self-efficacy. When children master self-care skills, they develop a powerful sense of competence that transfers to other challenges. We celebrate these moments loudly because independence builds confidence, and confidence builds lifelong learners. That zipper victory? It\'s the foundation of "I can do hard things" thinking.',
    tag: '🔧 Real-World Teddy Tricks',
    image: '/images/learning/zipper-victory.jpg',
    hasAudio: true,
    audioLabel: 'Educator Insight'
  }
];

// Audio player component
const AudioButton = ({ label }: { label: string }) => {
  return (
    <button className="flex items-center gap-2 text-sm text-brand-pink hover:text-brand-purple transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
      {label}
    </button>
  );
};

// Learning moment card component
const LearningMomentCard = ({ moment }: { moment: LearningMoment }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={moment.image}
          alt={moment.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-brand-yellow bg-opacity-20 mb-3">
          {moment.tag}
        </span>
        <h3 className="text-xl font-medium mb-2">{moment.title}</h3>
        <p className="text-gray-700 mb-4">{moment.insight}</p>
        {moment.hasAudio && (
          <div className="mt-3">
            <AudioButton label={moment.audioLabel || 'Play Audio'} />
          </div>
        )}
      </div>
    </div>
  );
};

// Filter tag component
const FilterTag = ({ tag, isActive, onClick }: { tag: Tag, isActive: boolean, onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive 
          ? 'bg-brand-pink text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {tag}
    </button>
  );
};

export default function LearningPage() {
  // State for random child quote
  const [quote, setQuote] = useState('');
  
  // State for active filter
  const [activeFilter, setActiveFilter] = useState<Tag | null>(null);
  
  // Filtered learning moments
  const filteredMoments = activeFilter 
    ? learningMoments.filter(moment => moment.tag === activeFilter)
    : learningMoments;

  // Set random quote on page load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * childQuotes.length);
    setQuote(childQuotes[randomIndex]);
  }, []);

  // Handle filter click
  const handleFilterClick = (tag: Tag) => {
    if (activeFilter === tag) {
      setActiveFilter(null); // Clear filter if clicking the active one
    } else {
      setActiveFilter(tag); // Set new filter
    }
  };

  // Handle shuffle
  const handleShuffle = () => {
    // Just reset the filter for now
    setActiveFilter(null);
    // Could also randomize the order of cards here
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-pink bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What if the smartest person in the room… is the one finger painting in the corner?
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Teddy Kids isn&apos;t just where children grow. It&apos;s where we learn to see growth differently.
            </p>
            {quote && (
              <div className="bg-white p-5 rounded-xl inline-block shadow-sm">
                <p className="text-lg italic font-handwriting text-gray-700">&quot;{quote}&quot;</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              <FilterTag 
                tag="🗣️ Talking in Two Languages" 
                isActive={activeFilter === "🗣️ Talking in Two Languages"} 
                onClick={() => handleFilterClick("🗣️ Talking in Two Languages")} 
              />
              <FilterTag 
                tag="💛 Big Feelings" 
                isActive={activeFilter === "💛 Big Feelings"} 
                onClick={() => handleFilterClick("💛 Big Feelings")} 
              />
              <FilterTag 
                tag="🎨 Chaos & Wonder" 
                isActive={activeFilter === "🎨 Chaos & Wonder"} 
                onClick={() => handleFilterClick("🎨 Chaos & Wonder")} 
              />
              <FilterTag 
                tag="🔧 Real-World Teddy Tricks" 
                isActive={activeFilter === "🔧 Real-World Teddy Tricks"} 
                onClick={() => handleFilterClick("🔧 Real-World Teddy Tricks")} 
              />
              <FilterTag 
                tag="🤝 Growing Together" 
                isActive={activeFilter === "🤝 Growing Together"} 
                onClick={() => handleFilterClick("🤝 Growing Together")} 
              />
              
              <button 
                onClick={handleShuffle}
                className="px-4 py-2 rounded-full text-sm font-medium bg-brand-purple text-white hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 3 21 3 21 8"></polyline>
                  <line x1="4" y1="20" x2="21" y2="3"></line>
                  <polyline points="21 16 21 21 16 21"></polyline>
                  <line x1="15" y1="15" x2="21" y2="21"></line>
                  <line x1="4" y1="4" x2="9" y2="9"></line>
                </svg>
                Shuffle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Moments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMoments.map(moment => (
                <LearningMomentCard key={moment.id} moment={moment} />
              ))}
            </div>
            
            {filteredMoments.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-700">No learning moments found with this filter. Try another category!</p>
                <button 
                  onClick={() => setActiveFilter(null)}
                  className="mt-4 px-6 py-2 bg-brand-pink text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Show All Moments
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">
              What if your child&apos;s most powerful learning moment… was happening today—and you didn&apos;t see it?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let us show you how brilliance hides in snack time, sandboxes, and squishy socks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                href="/contact"
                size="lg"
              >
                See It Firsthand
              </Button>
              <Button 
                variant="outline"
                href="/contact?tour=true"
                size="lg"
              >
                Book a 20-Minute Tour That Might Change Everything
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
