import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const GeetmoniDekaPathakPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Helmet>
                <title>ENT Specialist in Narengi, Guwahati | Ear Nose Throat Doctor – Riya Polyclinic</title>
                <meta
                    name="description"
                    content="Looking for the best ENT specialist in Narengi, Guwahati? Dr. Geetmoni Deka Pathak at Riya Polyclinic offers expert treatment for ear, nose & throat issues. Book appointment now."
                />
                <meta
                    name="keywords"
                    content="ENT doctor Narengi, ENT specialist Guwahati, Ear Nose Throat doctor in Assam, Sinus treatment Guwahati, ENT near me, Dr. Geetmoni Deka Pathak, Riya Polyclinic"
                />
                <link
                    rel="canonical"
                    href="https://www.riyapolyclinic.com/ent-doctor-guwahati"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-6">Dr. Geetmoni Deka Pathak</h1>
            <h2 className="text-xl font-semibold text-center mb-4">ENT (Ear, Nose & Throat) Specialist – Riya Polyclinic, Guwahati</h2>

            <img
                src="doctor-img.svg"
                alt="Dr. Geetmoni Deka Pathak at Riya Polyclinic"
                className="w-full h-auto rounded-xl shadow-md mb-6"
            />

            <p className="mb-4 text-lg">
                Dr. Geetmoni Deka Pathak is a trusted ENT specialist at <strong>Riya Polyclinic, Narengi</strong>. Known for compassionate care and accurate diagnosis, she treats a wide range of ear, nose, and throat conditions with excellence.
            </p>

            <ul className="list-disc list-inside text-base mb-4">
                <li>Hearing Issues & Ear Infections</li>
                <li>Sinusitis & Nasal Blockages</li>
                <li>Throat Pain & Tonsillitis</li>
                <li>Balance Disorders & Vertigo</li>
                <li>Voice & Speech Disorders</li>
            </ul>

            <p className="mb-4 text-lg">
                Visit Riya Polyclinic, Birkuchi, Narengi – a top-rated clinic in Guwahati offering expert ENT care in a patient-friendly environment.
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

export default GeetmoniDekaPathakPage;
