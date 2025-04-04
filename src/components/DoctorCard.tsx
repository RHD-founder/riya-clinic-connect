
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface DoctorCardProps {
  name: string;
  photo?: string;
  specialization: string;
  credentials: string;
  description?: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  photo,
  specialization,
  credentials,
  description
}) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="bg-clinic-light relative">
          <AspectRatio ratio={1}>
            <div className="flex items-center justify-center h-full bg-clinic-light">
              <Avatar className="h-32 w-32 text-4xl">
                <AvatarFallback className="bg-clinic-primary text-white">{initials}</AvatarFallback>
              </Avatar>
            </div>
          </AspectRatio>
        </div>
        <CardHeader className="pb-2 flex-none">
          <CardTitle className="text-lg sm:text-xl text-clinic-dark font-poppins">{name}</CardTitle>
          <CardDescription className="text-clinic-primary font-medium">
            {specialization}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2 flex-grow">
          <p className="text-sm text-gray-600 mb-2">{credentials}</p>
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </CardContent>
        <CardFooter className="flex-none">
          <Button className="w-full bg-clinic-primary hover:bg-clinic-dark">
            <Calendar className="mr-2 h-4 w-4" /> Book Appointment
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DoctorCard;
