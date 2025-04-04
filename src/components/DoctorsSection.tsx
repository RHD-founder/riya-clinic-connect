
import React from 'react';
import DoctorCard from './DoctorCard';

// Doctor data with images
const doctors = [
  {
    name: "Dr. Chayanika Patwari",
    photo: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    specialization: "Dermatology",
    credentials: "MBBS, MD, PhD - Former Asst. Professor GMCA",
    description: "Specialist in skin disorders and cosmetic dermatology."
  },
  {
    name: "Dr. Rupjyoti Gogoi",
    photo: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg",
    specialization: "Orthopedics",
    credentials: "MBBS, MS",
    description: "Expert in bone and joint conditions, sports injuries and surgeries."
  },
  {
    name: "Dr. Bhaskar Jyoti Das Hazarika",
    photo: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
    specialization: "Internal Medicine",
    credentials: "MBBS, DNB, FCCCM, CCEBDM",
    description: "Specialized in critical care medicine and diabetes management."
  },
  {
    name: "Dr. Geetamoni Deka Pathak",
    photo: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg",
    specialization: "ENT Specialist",
    credentials: "MBBS",
    description: "Expert in ear, nose and throat conditions with comprehensive care."
  },
  {
    name: "Dr. Ritupalav Kalita",
    photo: "https://img.freepik.com/free-photo/medium-shot-doctor-with-stethoscope_23-2149101168.jpg",
    specialization: "RIC Department",
    credentials: "MBBS",
    description: "Specialized in providing advanced medical care with precision."
  },
  {
    name: "Dr. Bibu Shankar",
    photo: "https://img.freepik.com/free-photo/doctor-with-white-robe-stethoscope_144627-43879.jpg",
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
