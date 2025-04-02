
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="clinic-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg" 
                alt="Riya Polyclinic Logo" 
                className="h-10 w-auto mr-2" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/placeholder.svg";
                }}
              />
              <h1 className="text-2xl font-bold text-clinic-primary">RIYA POLYCLINIC</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-clinic-primary">Home</Link>
            <Link to="/doctors" className="font-medium hover:text-clinic-primary">Doctors</Link>
            <Link to="/services" className="font-medium hover:text-clinic-primary">Services</Link>
            <Link to="/contact" className="font-medium hover:text-clinic-primary">Contact</Link>
          </nav>
          
          {/* Call and Appointment Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:8721979078" className="flex items-center gap-2 text-clinic-primary font-medium">
              <Phone size={18} />
              <span className="hidden lg:inline">8721979078</span>
            </a>
            <Button className="bg-clinic-primary hover:bg-clinic-dark">
              <Calendar className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              <Link to="/" className="px-3 py-2 hover:bg-clinic-light rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/doctors" className="px-3 py-2 hover:bg-clinic-light rounded-md" onClick={() => setIsMenuOpen(false)}>Doctors</Link>
              <Link to="/services" className="px-3 py-2 hover:bg-clinic-light rounded-md" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/contact" className="px-3 py-2 hover:bg-clinic-light rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="pt-2 flex flex-col gap-3">
                <a href="tel:8721979078" className="px-3 py-2 flex items-center gap-2 text-clinic-primary">
                  <Phone size={18} /> Call Now
                </a>
                <Button className="bg-clinic-primary hover:bg-clinic-dark">
                  <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
