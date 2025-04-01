
import React from 'react';
import AppointmentForm from './AppointmentForm';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-clinic-light" id="contact">
      <div className="clinic-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Book an appointment or get in touch with us for any inquiries.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-clinic-primary">Clinic Address</h3>
              <div className="flex items-start gap-3">
                <MapPin className="text-clinic-primary shrink-0 mt-1" />
                <p className="text-gray-700">
                  RIYA POLYCLINIC<br />
                  Ramesh Tiniali, Narengi Chandrapur Road<br />
                  Guwahati, Assam
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-clinic-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-clinic-primary" />
                  <div>
                    <p className="font-medium">Phone Numbers:</p>
                    <a href="tel:8721979078" className="block hover:text-clinic-primary">8721979078</a>
                    <a href="tel:8422801801" className="block hover:text-clinic-primary">8422801801</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-clinic-primary" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <a href="mailto:info@riyapolyclinic.com" className="hover:text-clinic-primary">
                      info@riyapolyclinic.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder - Can be replaced with an actual map iframe */}
            <div className="bg-white p-2 rounded-lg shadow-md">
              <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
                <p className="text-gray-500">Map Location</p>
              </div>
            </div>
          </div>
          
          {/* Appointment Form */}
          <div>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
