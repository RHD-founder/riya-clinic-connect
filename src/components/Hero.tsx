"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/medi.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content container */}
      <div className="relative clinic-container w-full max-w-6xl px-4 sm:px-6 py-12 md:py-20 mt-16 sm:mt-20 bg-white bg-opacity-10 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
              Your Health Is Our Priority
            </h1>
            <p className="text-base sm:text-lg text-white mb-8">
              RIYA POLYCLINIC offers comprehensive healthcare services with experienced doctors. We're committed to
              providing quality medical care to the Guwahati community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={handleScrollToContact}
                className="bg-clinic-primary hover:bg-clinic-dark text-white"
              >
                <Calendar className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
              <Button
                variant="destructive"
                className="border-white text-white hover:bg-white hover:text-black"
                asChild
              >
                <a href="tel:7002529013">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right: Clinic Timing Card */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md w-full text-sm sm:text-base">
              <h3 className="text-xl font-bold mb-4 text-center text-clinic-primary">
                Clinic Working Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Saturday</span>
                  <span>8:00 AM - 10:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>No New Appointments</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">*Ongoing patients can consult on Sundays</p>
                <hr className="my-4" />
                <div>
                  <p className="font-medium mb-2">Emergency Contact:</p>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-clinic-primary" />
                    <a href="tel:7002529013" className="hover:text-clinic-primary">
                      7002529013
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
