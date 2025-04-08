import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const RupjyotiGogoiPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Helmet>
                <title>Dr. Rupjyoti Gogoi - Orthopedic Specialist | Riya Polyclinic, Guwahati</title>
                <meta
                    name="description"
                    content="Consult Dr. Rupjyoti Gogoi, experienced Orthopedic Doctor at Riya Polyclinic, Guwahati. Expert in bone, joint & muscle care. Book your appointment today."
                />
                <meta
                    name="keywords"
                    content="Dr. Rupjyoti Gogoi, Orthopedic Doctor Guwahati, Bone Specialist, Joint Pain Treatment, Muscle Injury Doctor, Riya Polyclinic Narengi, Best Orthopedic Assam"
                />
                <link
                    rel="canonical"
                    href="https://www.riyapolyclinic.com/rupjyotigogoi"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-6">Dr. Rupjyoti Gogoi</h1>
            <h2 className="text-xl font-semibold text-center mb-4">Orthopedic Specialist – Riya Polyclinic, Guwahati</h2>

            <img
                src="doctor-img.svg"
                alt="Dr. Rupjyoti Gogoi at Riya Polyclinic"
                className="w-full h-auto rounded-xl shadow-md mb-6"
            />

            <p className="mb-4 text-lg">
                Dr. Rupjyoti Gogoi is a trusted name in <strong>Orthopedics</strong>, offering quality treatment for bone, joint, and muscle-related conditions at <strong>Riya Polyclinic, Narengi</strong>. With a patient-first approach, he ensures effective and long-term recovery.
            </p>

            <ul className="list-disc list-inside text-base mb-4">
                <li>Joint Pain & Arthritis Management</li>
                <li>Fractures & Bone Injuries</li>
                <li>Sports Injuries & Rehabilitation</li>
                <li>Back Pain, Neck Pain & Spine Issues</li>
                <li>Post-surgery Care & Physiotherapy Guidance</li>
            </ul>

            <p className="mb-4 text-lg">
                Visit us at Riya Polyclinic, Birkuchi, Narengi, Guwahati for expert orthopedic consultation and personalized care.
            </p>

            <div className="bg-blue-100 p-4 rounded-xl shadow mb-6">
                <h3 className="text-lg font-bold mb-2">📞 Book an Appointment</h3>
                <p className="mb-2">
                    Call us at <a href="tel:7002529013" className="text-blue-700 font-medium">7002529013</a>
                </p>
                <Link to="/">
                    <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Book Appointment Online
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RupjyotiGogoiPage;
