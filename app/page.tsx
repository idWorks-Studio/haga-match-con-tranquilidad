"use client";
import { HeroSection } from '@/src/features/landing/components/HeroSection';
import { Module1Section } from '@/src/features/modules/module1/Module1Section';
import { Module2Section } from '@/src/features/modules/module2/Module2Section';
import { Module3Section } from '@/src/features/modules/module3/Module3Section';
import { Footer } from '@/src/features/landing/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HeroSection />
      <Module1Section />
      <Module2Section />
      <Module3Section />
      <Footer />
    </main>
  );
}
