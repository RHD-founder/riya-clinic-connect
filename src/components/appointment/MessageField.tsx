
import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { AppointmentFormValues } from "@/lib/schemas/appointmentSchema";

interface MessageFieldProps {
  form: UseFormReturn<AppointmentFormValues>;
}

const MessageField: React.FC<MessageFieldProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Message (Optional)</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Please briefly describe your symptoms or reason for visit" 
              className="resize-none"
              {...field} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MessageField;
