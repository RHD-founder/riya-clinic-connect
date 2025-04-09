import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const BibuShankarPage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Helmet>
                <title> Best Doctors for Piles Surgery in Narengi, Guwahati , Dr. Bibu Shankar - Piles Specialist | Riya Polyclinic, Guwahati</title>
                <meta
                    name="description"
                    content="Consult Dr. Bibu Shankar, expert Piles Specialist at Riya Polyclinic, Narengi, Guwahati. Specialized in treating hemorrhoids and anorectal disorders."
                />
                <meta
                    name="keywords"
                    content=" Best Doctors for Piles Surgery in Narengi, Guwahati , Dr. Bibu Shankar, Piles Specialist Guwahati, Hemorrhoid Treatment, Anorectal Disorders, Riya Polyclinic Narengi, Best Piles Doctor Assam"
                />
                <link
                    rel="canonical"
                    href="https://www.riyapolyclinic.com/bibu-shankar"
                />
            </Helmet>

            <h1 className="text-3xl font-bold text-center mb-6">Dr. Bibu Shankar</h1>
            <h2 className="text-xl font-semibold text-center mb-4">Piles Specialist – Riya Polyclinic, Guwahati</h2>

            <img
                src="doctor-img.svg"
                alt="Dr. Bibu Shankar at Riya Polyclinic"
                className="w-full h-auto rounded-xl shadow-md mb-6"
            />

            <p className="mb-4 text-lg">
                Dr. Bibu Shankar is a dedicated <strong>Piles Specialist</strong> practicing at <strong>Riya Polyclinic, Narengi</strong>. With a focus on anorectal disorders, he provides effective treatments for hemorrhoids and related conditions, ensuring patient comfort and recovery.
            </p>

            <ul className="list-disc list-inside text-base mb-4">
                <li>Non-Surgical and Surgical Treatment of Hemorrhoids</li>
                <li>Management of Anal Fissures and Fistulas</li>
                <li>Comprehensive Care for Anorectal Disorders</li>
                <li>Post-Treatment Care and Lifestyle Advice</li>
                <li>Minimally Invasive Procedures for Quick Recovery</li>
            </ul>

            <p className="mb-4 text-lg">
                Visit Riya Polyclinic, Birkuchi, Narengi, Guwahati for specialized care in piles and anorectal conditions.
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

export default BibuShankarPage;
