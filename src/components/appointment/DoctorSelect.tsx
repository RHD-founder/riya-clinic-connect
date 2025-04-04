
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { AppointmentFormValues } from "@/lib/schemas/appointmentSchema";

interface DoctorSelectProps {
  form: UseFormReturn<AppointmentFormValues>;
}

const DoctorSelect: React.FC<DoctorSelectProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="doctor"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select Doctor</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a doctor" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Dr. Chayanika Patwari">Dr. Chayanika Patwari (Dermatology)</SelectItem>
              <SelectItem value="Dr. Rupjyoti Gogoi">Dr. Rupjyoti Gogoi (Orthopedics)</SelectItem>
              <SelectItem value="Dr. Bhaskar Jyoti Das Hazarika">Dr. Bhaskar Jyoti Das Hazarika</SelectItem>
              <SelectItem value="Dr. Geetamoni Deka Pathak">Dr. Geetamoni Deka Pathak (ENT)</SelectItem>
              <SelectItem value="Other">Other Doctor</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DoctorSelect;
