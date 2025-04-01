
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-clinic-light">
      <div className="clinic-container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-clinic-dark mb-4">
              Your Health Is Our Priority
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              RIYA POLYCLINIC offers comprehensive healthcare services with experienced doctors. We're committed to providing quality medical care to the Guwahati community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-clinic-primary hover:bg-clinic-dark">
                <Calendar className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
              <Button variant="outline" className="border-clinic-primary text-clinic-primary hover:bg-clinic-light">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold mb-4 text-center text-clinic-primary">Clinic Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <hr className="my-4" />
                <div>
                  <p className="font-medium mb-2">Emergency Contact:</p>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-clinic-primary" />
                    <a href="tel:8721979078" className="hover:text-clinic-primary">8721979078</a>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Phone size={16} className="text-clinic-primary" />
                    <a href="tel:8422801801" className="hover:text-clinic-primary">8422801801</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
