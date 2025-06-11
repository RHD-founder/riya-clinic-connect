
import React from 'react';
import DoctorCard from './DoctorCard';

// Doctor data without images
const doctors = [
  {
    name: "Dr. Chayanika Patwari",
    specialization: "Dermatology",
    credentials: "MBBS, MD, PhD - Former Asst. Professor GMCA",
    description: "Specialist in skin disorders and cosmetic dermatology."
  },
  {
    name: "Dr. Rupjyoti Gogoi",
    specialization: "Orthopedics",
    credentials: "MBBS, MS",
    description: "Expert in bone and joint conditions, sports injuries and surgeries."
  },
  {
    name: "Dr. Bhaskar Jyoti Das Hazarika",
    specialization: "Internal Medicine",
    credentials: "MBBS, DNB, FCCCM, CCEBDM",
    description: "Specialized in critical care medicine and diabetes management."
  },
  {
    name: "Dr. Geetamoni Deka Pathak",
    specialization: "ENT Specialist",
    credentials: "MBBS",
    description: "Expert in ear, nose and throat conditions with comprehensive care."
  },
  {
    name: "Dr. Ritupalav Kalita",
    specialization: "(Specialist in Pediatrics)",
    credentials: "MBBS",
    description: "Specialized in providing advanced medical care with precision."
  },
  {
    name: "Dr. Bibu Shankar",
    specialization: "Piles Specialist",
    credentials: "MBBS",
    description: "Expert in treating hemorrhoids and other anorectal disorders."
  }
];

const DoctorsSection = () => {
  return (
    <section className="py-10 md:py-16 bg-white" id="doctors">
      <div className="clinic-container">
        <h2 className="section-title font-poppins">Our Specialists</h2>
        <p className="section-subtitle">
          Meet our team of experienced doctors committed to providing quality healthcare.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              credentials={doctor.credentials}
              description={doctor.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
