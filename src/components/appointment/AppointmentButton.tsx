
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';

interface AppointmentButtonProps {
  isSubmitting: boolean;
}

const AppointmentButton: React.FC<AppointmentButtonProps> = ({ isSubmitting }) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-clinic-primary hover:bg-clinic-dark"
      disabled={isSubmitting}
    >
      <Calendar className="mr-2 h-4 w-4" />
      {isSubmitting ? "Sending..." : "Book Appointment via WhatsApp"}
    </Button>
  );
};

export default AppointmentButton;
