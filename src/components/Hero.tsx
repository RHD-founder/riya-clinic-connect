"use client"
import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background image with proper sizing */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg" // Fixed typo in filename (was "heror.jpeg")
          alt="Clinic background"
          fill
          priority
          className="object-cover object-center md:bg-fixed"
          sizes="100vw"
        />
        {/* Overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 clinic-container w-full max-w-6xl px-6 py-12 md:py-20 bg-white bg-opacity-20 backdrop-blur-md rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Health Is Our Priority</h1>
            <p className="text-lg text-white mb-8">
              RIYA POLYCLINIC offers comprehensive healthcare services with experienced doctors. We're committed to
              providing quality medical care to the Guwahati community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-clinic-primary hover:bg-clinic-dark text-white">
                <Calendar className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold mb-4 text-center text-clinic-primary">Clinic Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Saturday</span>
                  <span>8:00 AM - 10:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>No New Appointments*</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">*Ongoing patients can consult on Sundays</p>
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

