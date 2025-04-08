
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import DoctorsSection from '@/components/DoctorsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import GeetmoniDekaPathakPage from './geetmoni-deka-pathak-ear-nose-throat-ent-specialist';
import DrChayanikaPatwariPage from './dr-chayanika-patwari-skin-hair-nail-specialist';
import RituPallabKalitaPage from './ritu-pallab-kalita';
import RupjyotiGogoiPage from './rupjyotigogoi';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <DoctorsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
