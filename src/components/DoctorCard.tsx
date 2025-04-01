
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  photo: string;
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
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-clinic-light">
        <img 
          src={photo || "/placeholder.svg"} 
          alt={`Dr. ${name}`} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-clinic-dark">{name}</CardTitle>
        <CardDescription className="text-clinic-primary font-medium">
          {specialization}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 mb-2">{credentials}</p>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-clinic-primary hover:bg-clinic-dark">
          <Calendar className="mr-2 h-4 w-4" /> Book Appointment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
