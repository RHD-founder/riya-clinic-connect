
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DoctorsSection from '@/components/DoctorsSection';

const Doctors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="pt-16 pb-8 bg-clinic-light">
          <div className="clinic-container">
            <h1 className="text-4xl font-bold text-center text-clinic-dark">Our Medical Team</h1>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Meet our highly qualified doctors who are dedicated to providing the best medical care for you and your family.
            </p>
          </div>
        </div>
        <DoctorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
