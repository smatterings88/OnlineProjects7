import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceType } from '../data/services';

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { id, title, description, icon: Icon } = service;
  
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="card card-hover shadow"
    >
      <div className="p-6">
        <div className="bg-secondary p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/services/${id}`} 
          className="flex items-center font-medium hover:underline"
        >
          Learn More
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;