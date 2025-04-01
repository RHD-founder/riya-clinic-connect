
import React from 'react';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';
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
                <Phone size={16} />
                <span className="text-gray-300">8721979078, 8422801801</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-gray-300">info@riyapolyclinic.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span className="text-gray-300">Ramesh Tiniali, Narengi Chandrapur Road, Guwahati</span>
              </li>
            </ul>
          </div>
          
          {/* Appointment */}
          <div>
            <h3 className="text-lg font-bold mb-4">Book Appointment</h3>
            <p className="text-gray-300 mb-4">Need to schedule a visit? Book your appointment online or call us directly.</p>
            <Button className="bg-clinic-secondary hover:bg-opacity-90">
              <Calendar className="mr-2 h-4 w-4" /> Book Now
            </Button>
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
