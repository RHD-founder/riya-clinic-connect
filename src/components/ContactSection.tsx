
import React from 'react';
import AppointmentForm from './AppointmentForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import GoogleMap from './GoogleMap';
import { motion } from 'framer-motion';

const contactAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ContactSection = () => {
  return (
    <section className="py-16 bg-clinic-light" id="contact">
      <div className="clinic-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h2 variants={contactAnimation} className="section-title">Contact Us</motion.h2>
          <motion.p variants={contactAnimation} className="section-subtitle">Book an appointment or get in touch with us for any inquiries.</motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div variants={contactAnimation} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-clinic-primary">Clinic Address</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="text-clinic-primary shrink-0 mt-1" />
                  <p className="text-gray-700">
                    RIYA POLYCLINIC<br />
                    Ramesh Tiniali, Bikuchi, Narengi Chandrapur Road<br />
                    Guwahati, Assam
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={contactAnimation} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-clinic-primary">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-clinic-primary" />
                    <div>
                      <p className="font-medium">Phone Number:</p>
                      <a href="tel:7002529013" className="block hover:text-clinic-primary">7002529013</a>
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
              </motion.div>

              {/* Google Map */}
              <motion.div variants={contactAnimation}>
                <GoogleMap />
              </motion.div>
            </div>
            
            {/* Appointment Form */}
            <motion.div variants={contactAnimation}>
              <AppointmentForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
