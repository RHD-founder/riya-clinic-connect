import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinic-dark text-white">
      <div className="clinic-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Clinic */}
          <div>
            <h3 className="text-xl font-bold mb-4">RIYA POLYCLINIC</h3>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare services to the community with experienced medical professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/doctors" className="text-gray-300 hover:text-white">Our Doctors</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-clinic-secondary" />
                <span className="text-gray-300">7002529013</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-clinic-secondary" />
                <span className="text-gray-300">info@riyapolyclinic.com</span>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-clinic-secondary mt-1 shrink-0" />
                <span className="text-gray-300">
                  Ramesh Tiniali, Birkuchi, Narengi Chandrapur Road, Guwahati
                </span>
              </li>
            </ul>
          </div>

          {/* Appointment & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Book Appointment</h3>
            <p className="text-gray-300 mb-4">
              Need to schedule a visit? Book your appointment online or call us directly.
            </p>
            

            {/* Social Icons */}
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex gap-3 md:gap-4  md:justify-start">
              <a
                href="https://www.facebook.com/share/18TiLCybpK/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition w-10 h-10 flex items-center justify-center"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://www.instagram.com/riyapolyclinic1?igsh=OTZsZTBrb3I1cWVz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-2 rounded-full hover:opacity-80 transition w-10 h-10 flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} RIYA POLYCLINIC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
