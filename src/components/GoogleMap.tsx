
import React from 'react';
import { motion } from 'framer-motion';

const GoogleMap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.005913952194!2d91.8414896!3d26.1272869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5bb29d4b7373%3A0x61808905b618f48!2sRIYA%20MEDICOS!5e0!3m2!1sen!2sin!4v1724644840834!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Riya Polyclinic Location"
        ></iframe>
      </div>
      <div className="p-4 bg-clinic-light border-t border-gray-200">
        <h3 className="font-poppins text-lg font-bold text-clinic-primary">RIYA POLYCLINIC</h3>
        <p className="text-gray-600 font-nunito">Ramesh Tiniali, Birkuchi, Narengi Chandrapur Road, Guwahati, Assam</p>
      </div>
    </motion.div>
  );
};

export default GoogleMap;
