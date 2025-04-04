
import * as z from "zod";

// Form validation schema
export const appointmentFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal('')),
  doctor: z.string({ required_error: "Please select a doctor." }),
  date: z.string().min(1, { message: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time." }),
  message: z.string().optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;
