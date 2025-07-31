'use client';

import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('welcome-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[50vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
         style={{
           backgroundImage: 'url("https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
         }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Eat Smile Bakery
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Brooklyn's Hometown Bakery Since 1955
        </p>
      </div>

      {/* Scroll Arrow */}
      <Button
        onClick={scrollToNext}
        variant="ghost"
        size="lg"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-red-300 hover:bg-white/10 rounded-full p-3 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </Button>
    </div>
  );
}