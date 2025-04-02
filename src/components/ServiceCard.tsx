
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
      <Card className="hover:shadow-lg transition-shadow h-full border-l-4 border-l-clinic-primary dark:border-l-clinic-secondary">
        <CardHeader className="pb-2">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-md bg-gradient-to-r from-orange-400 to-clinic-primary text-white">
            {icon}
          </div>
          <CardTitle className="text-xl font-poppins">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 text-base font-nunito">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
