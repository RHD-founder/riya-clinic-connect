
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="pt-16 pb-8 bg-clinic-light">
          <div className="clinic-container">
            <h1 className="text-4xl font-bold text-center text-clinic-dark">Contact Us</h1>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Have questions or need to schedule an appointment? Reach out to us through any of the methods below.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
