
import React from 'react';
import ServiceCard from './ServiceCard';
import { Calendar, Heart, Stethoscope, Syringe, User } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "General Consultation",
    description: "Comprehensive medical check-ups and consultations for all age groups."
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Specialized Care",
    description: "Expert treatment in dermatology, orthopedics, and internal medicine."
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Appointment Scheduling",
    description: "Easy appointment booking via WhatsApp or phone call."
  },
  {
    icon: <User className="h-6 w-6" />,
    title: "Personalized Treatment",
    description: "Individualized care plans tailored to your specific health needs."
  },
  {
    icon: <Syringe className="h-6 w-6" />,
    title: "Preventive Care",
    description: "Vaccinations, health screenings, and preventive health measures."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-clinic-gray" id="services">
      <div className="clinic-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of medical services to meet your healthcare needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
