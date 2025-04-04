
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import ContactFields from './appointment/ContactFields';
import DoctorSelect from './appointment/DoctorSelect';
import DateTimeSelect from './appointment/DateTimeSelect';
import MessageField from './appointment/MessageField';
import AppointmentButton from './appointment/AppointmentButton';
import { appointmentFormSchema, AppointmentFormValues } from '@/lib/schemas/appointmentSchema';

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare WhatsApp message
      const message = encodeURIComponent(
        `New Appointment Request\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || 'Not provided'}\nDoctor: ${data.doctor}\nDate: ${data.date}\nTime: ${data.time}\nMessage: ${data.message || 'None'}`
      );
      
      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/917002529013?text=${message}`;
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      toast({
        title: "Appointment request sent",
        description: "Your appointment request has been sent via WhatsApp. We'll confirm shortly.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "There was a problem sending your appointment request. Please try again or call us directly.",
        variant: "destructive",
      });
      console.error("Appointment form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center text-clinic-primary">Book Your Appointment</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <ContactFields form={form} />
          <DoctorSelect form={form} />
          <DateTimeSelect form={form} />
          <MessageField form={form} />
          <AppointmentButton isSubmitting={isSubmitting} />
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;
