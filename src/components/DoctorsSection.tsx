
import React from 'react';
import DoctorCard from './DoctorCard';

// Doctor data
const doctors = [
  {
    name: "Dr. Chayanika Patwari",
    photo: "/placeholder.svg", // Replace with actual photo when available
    specialization: "Dermatology",
    credentials: "MBBS, MD, PhD - Former Asst. Professor GMCA",
    description: "Specialist in skin disorders and cosmetic dermatology."
  },
  {
    name: "Dr. Rupjyoti Gogoi",
    photo: "/placeholder.svg", // Replace with actual photo when available
    specialization: "Orthopedics",
    credentials: "MBBS, MS",
    description: "Expert in bone and joint conditions, sports injuries and surgeries."
  },
  {
    name: "Dr. Bhaskar Jyoti Das Hazarika",
    photo: "/placeholder.svg", // Replace with actual photo when available
    specialization: "Internal Medicine",
    credentials: "MBBS, DNB, FCCCM, CCEBDM",
    description: "Specialized in critical care medicine and diabetes management."
  },
  // Placeholder for remaining doctors
  {
    name: "Dr. Additional Specialist",
    photo: "/placeholder.svg",
    specialization: "General Medicine",
    credentials: "MBBS",
    description: "Experienced general physician providing comprehensive care."
  },
  {
    name: "Dr. Another Specialist",
    photo: "/placeholder.svg",
    specialization: "Pediatrics",
    credentials: "MBBS, DCH",
    description: "Dedicated to children's health and developmental care."
  }
];

const DoctorsSection = () => {
  return (
    <section className="py-16 bg-white" id="doctors">
      <div className="clinic-container">
        <h2 className="section-title">Our Specialists</h2>
        <p className="section-subtitle">
          Meet our team of experienced doctors committed to providing quality healthcare.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              photo={doctor.photo}
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
