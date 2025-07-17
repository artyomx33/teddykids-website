'use client';
import Image from 'next/image';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-8">
          <Image
            src="/shared-images/404 image appies.png"
            alt="Appies lost in the jungle of toys"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-purple mb-4">
          Page Not Found
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Oops… Appies got a little lost in the jungle of toys. Want to help him find the way?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/">
            Take Me Home
          </Button>
          <Button variant="outline" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
      <div className="absolute -bottom-4 left-0 w-24 h-24 md:w-32 md:h-32 text-8xl opacity-20 transform -rotate-12">
        🧸
      </div>
      <div className="absolute top-20 right-8 w-16 h-16 md:w-24 md:h-24 text-6xl opacity-20 transform rotate-12">
        🎨
      </div>
    </main>
  );
}