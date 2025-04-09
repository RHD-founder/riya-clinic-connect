import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const BhaskarJyotiDasHazarikaPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Helmet>
                <title>Dr. Bhaskar Jyoti Das Hazarika - Internal Medicine & Critical Care Specialist | Riya Polyclinic, Guwahati</title>
                <meta
                    name="description"
                    content="Consult Dr. Bhaskar Jyoti Das Hazarika, expert in Internal Medicine and Critical Care at Riya Polyclinic, Narengi, Guwahati. Specialized in diabetes management and critical care."
                />
                <meta
                    name="keywords"
                    content="Dr. Bhaskar Jyoti Das Hazarika, Internal Medicine Guwahati, Critical Care Specialist, Diabetes Management, Riya Polyclinic Narengi, Best Physician Assam"
                />
                <link
                    rel="canonical"
                    href="https://www.riyapolyclinic.com/bhaskar-jyoti-das-hazarika"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-6">Dr. Bhaskar Jyoti Das Hazarika</h1>
            <h2 className="text-xl font-semibold text-center mb-4">Internal Medicine & Critical Care Specialist – Riya Polyclinic, Guwahati</h2>

            <img
                src="doctor-img.svg"
                alt="Dr. Bhaskar Jyoti Das Hazarika at Riya Polyclinic"
                className="w-full h-auto rounded-xl shadow-md mb-6"
            />

            <p className="mb-4 text-lg">
                Dr. Bhaskar Jyoti Das Hazarika is a distinguished physician specializing in <strong>Internal Medicine</strong> and <strong>Critical Care</strong>. Practicing at <strong>Riya Polyclinic, Narengi</strong>, he has extensive experience in managing complex medical conditions and is particularly adept at diabetes management.
            </p>

            <ul className="list-disc list-inside text-base mb-4">
                <li>Comprehensive Diabetes Care</li>
                <li>Management of Hypertension and Cardiac Conditions</li>
                <li>Critical Care for Severe Infections and Multi-Organ Dysfunction</li>
                <li>Preventive Health Check-ups</li>
                <li>Personalized Treatment Plans for Chronic Illnesses</li>
            </ul>

            <p className="mb-4 text-lg">
                Visit Riya Polyclinic, Birkuchi, Narengi, Guwahati for expert consultation and compassionate care in internal medicine and critical care.
            </p>

            <div className="bg-blue-100 p-4 rounded-xl shadow mb-6">
                <h3 className="text-lg font-bold mb-2">📞 Book an Appointment</h3>
                <p className="mb-2">
                    Call us at <a href="tel:+917002529013" className="text-blue-700 font-medium">+91 70025 29013</a>
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

export default BhaskarJyotiDasHazarikaPage;
