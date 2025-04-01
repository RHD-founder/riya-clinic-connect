
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="hover:shadow-lg transition-shadow h-full border-l-4 border-l-clinic-primary">
        <CardHeader className="pb-2">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-clinic-light text-clinic-primary">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
