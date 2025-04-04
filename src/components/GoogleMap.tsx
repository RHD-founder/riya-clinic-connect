
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
          src="https://www.google.com/maps/place/RIYA+MEDICOS/data=!4m2!3m1!1s0x0:0x61808905b618f48?sa=X&ved=1t:2428&ictx=111"
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
        <p className="text-gray-600 font-nunito">Ramesh Tiniali, Bikuchi, Narengi Chandrapur Road, Guwahati, Assam</p>
      </div>
    </motion.div>
  );
};

export default GoogleMap;
