import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function DrChayanikaPatwariPage() {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Helmet>
                <title>Best Skin Doctor in Narengi, Guwahati | Dermatologist at Riya Polyclinic</title>

                <meta
                    name="description"
                    content="Looking for a trusted skin doctor in Narengi, Guwahati? Visit Riya Polyclinic for expert dermatology care including acne, hair fall, and nail treatment."
                />
                <meta
                    name="keywords"
                    content="Skin Doctor Narengi, Dermatologist Guwahati, Best Skin Specialist, Hair Doctor, Nail Specialist, Riya Polyclinic, Skin Care Assam"
                />
                <link rel="canonical" href="https://www.riyapolyclinic.com/skin-doctor-narengi-guwahati" />

            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-6">Dr. Chayanika Patwari</h1>
            <h2 className="text-xl font-semibold text-center mb-4">Skin, Hair & Nail Specialist – Riya Polyclinic, Guwahati</h2>

            <img
                src="doctor-img.svg"
                alt="Dr. Chayanika Patwari at Riya Polyclinic"
                className="w-full h-auto rounded-xl shadow-md mb-6"
            />

            <p className="mb-4 text-lg">
                Dr. Chayanika Patwari is a reputed dermatologist in Guwahati, practicing at <strong>Riya Polyclinic, Narengi</strong>. With years of experience in treating various skin, hair, and nail conditions, she is trusted by hundreds of patients across Assam.
            </p>

            <ul className="list-disc list-inside text-base mb-4">
                <li>Acne & Scar Treatments</li>
                <li>Hair Fall & Dandruff Solutions</li>
                <li>Skin Allergies, Rashes & Fungal Infections</li>
                <li>Nail Disorders & Treatments</li>
                <li>Anti-Aging & Skin Rejuvenation Procedures</li>
            </ul>

            <p className="mb-4 text-lg">
                Visit us at Riya Polyclinic, Birkuchi, Narengi, Guwahati. Easily accessible and known for affordable and effective skin treatments.
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
}
