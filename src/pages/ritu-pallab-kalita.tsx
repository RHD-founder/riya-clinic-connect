import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const RituPallabKalitaPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Helmet>
                <title>Physician in Narengi, Guwahati | Internal Medicine Doctor – Riya Polyclinic</title>
                <meta
                    name="description"
                    content="Looking for a reliable physician in Narengi, Guwahati? Consult Dr. Ritu Pallab Kalita at Riya Polyclinic for expert care in internal medicine, diabetes, hypertension, and chronic illness."
                />
                <meta
                    name="keywords"
                    content="physician in Narengi, internal medicine Guwahati, doctor for diabetes Guwahati, Dr. Ritu Pallab Kalita, chronic disease doctor Assam, fever BP thyroid specialist"
                />
                <link
                    rel="canonical"
                    href="https://www.riyapolyclinic.com/internal-medicine-doctor-guwahati"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-6">Dr. Ritu Pallab Kalita</h1>
            <h2 className="text-xl font-semibold text-center mb-4">Specialist in Pediatrics – Riya Polyclinic, Guwahati</h2>

            <img
                src="doctor-img.svg"
                alt="Dr. Ritu Pallab Kalita at Riya Polyclinic"
                className="w-full h-auto rounded-xl shadow-md mb-6"
            />

            <p className="mb-4 text-lg">
                Dr. Ritu Pallab Kalita is a highly regarded physician with extensive experience in <strong>Internal Medicine</strong>. Practicing at <strong>Riya Polyclinic, Narengi</strong>, he is known for treating complex and chronic illnesses with accuracy and compassion.
            </p>

            <ul className="list-disc list-inside text-base mb-4">
                <li>Diabetes, Hypertension & Thyroid Disorders</li>
                <li>Infectious Diseases & Fevers</li>
                <li>Chronic Cough, Asthma & Respiratory Issues</li>
                <li>Stomach, Liver & Digestive Problems</li>
                <li>Comprehensive Adult Health Checkups</li>
            </ul>

            <p className="mb-4 text-lg">
                Visit Riya Polyclinic, Birkuchi, Narengi, Guwahati – a trusted medical center for complete health care under expert guidance.
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

export default RituPallabKalitaPage;
