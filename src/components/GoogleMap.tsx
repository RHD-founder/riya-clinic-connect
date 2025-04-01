
import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md h-64">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.812947979732!2d91.82364087558348!3d26.169717577415716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a755abe8b65%3A0xa85e5c31d351e711!2sNarengi%20Tiniali%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1724626000228!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Riya Polyclinic Location"
        className="rounded"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
