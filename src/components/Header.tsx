
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Update to the new logo path
  const logoPath = "/lovable-uploads/9ef042f8-6a21-4c3d-ac24-e50a1bffc7ad.png";

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="clinic-container py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative h-16 w-auto md:h-20">
                <img 
                  src={logoPath}
                  alt="Riya Polyclinic Logo" 
                  className="h-full w-auto object-contain" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                    // Show fallback when image fails
                    const parentElement = target.parentElement;
                    if (parentElement) {
                      parentElement.innerHTML += `<div class="flex items-center"><div class="bg-clinic-primary text-white font-bold p-1 rounded mr-1">R</div><span class="font-bold text-clinic-primary">RIYA POLYCLINIC</span></div>`;
                    }
                  }}
                />
              </div>
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
          <div className="flex items-center gap-2 md:hidden">
            <a href="tel:8721979078" className="flex items-center justify-center w-10 h-10 text-clinic-primary rounded-full border border-clinic-primary">
              <Phone size={18} />
            </a>
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
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
        </div>
        
        {/* Mobile menu - improved for better UX */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-3 border-t border-gray-200 animate-in slide-in-from-top">
            <nav className="flex flex-col gap-1 mt-2">
              <Link 
                to="/" 
                className="px-3 py-3 hover:bg-clinic-light rounded-md flex items-center font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/doctors" 
                className="px-3 py-3 hover:bg-clinic-light rounded-md flex items-center font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </Link>
              <Link 
                to="/services" 
                className="px-3 py-3 hover:bg-clinic-light rounded-md flex items-center font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="px-3 py-3 hover:bg-clinic-light rounded-md flex items-center font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button className="bg-clinic-primary hover:bg-clinic-dark w-full">
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
