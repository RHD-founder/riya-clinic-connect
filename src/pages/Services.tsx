
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="pt-16 pb-8 bg-clinic-light">
          <div className="clinic-container">
            <h1 className="text-4xl font-bold text-center text-clinic-dark">Our Services</h1>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of medical services to meet your healthcare needs with a focus on quality and personalized care.
            </p>
          </div>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
