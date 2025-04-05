import React from "react";
import { Facebook, Instagram } from "lucide-react";

const FloatingSocialIcons = () => {
  return (
    <div className="hidden sm:flex fixed bottom-16 right-4 md:bottom-20 md:right-8 flex-col gap-3 md:gap-4 z-50">
      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com/share/18TiLCybpK/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-3 md:p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
      >
        <Facebook size={22} className="text-white md:size-28" />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://www.instagram.com/riyapolyclinic1?igsh=OTZsZTBrb3I1cWVz&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-pink-500 to-red-500 p-3 md:p-4 rounded-full shadow-lg hover:opacity-80 transition flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
      >
        <Instagram size={22} className="text-white md:size-28" />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
