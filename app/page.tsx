"use client";
import { HeroSection } from '@/src/components/atoms/HeroSection';
import { Module1Section } from '@/src/components/templates/Module1Section';
import { Module2Section } from '@/src/components/templates/Module2Section';
import { Module3Section } from '@/src/components/templates/Module3Section';
import { Footer } from '@/src/components/atoms/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HeroSection />
      <div className="container max-w-5xl mx-auto px-4">
        <Module1Section />
        <Module2Section />
        <Module3Section />
      </div>
      <Footer />
    </main>
  );
}
