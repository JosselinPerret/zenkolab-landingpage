import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Pathology } from './types';

interface PathologyCardProps {
  data: Pathology;
  onClick: (pathology: Pathology) => void;
  index: number;
}

const PathologyCard: React.FC<PathologyCardProps> = ({ data, onClick, index }) => {
  // Variants for staggered animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: index * 0.1 
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-card dark:bg-neutral-900 rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer border border-border h-full flex flex-col"
      onClick={() => onClick(data)}
    >
      {/* Top Accent Line */}
      <div className={`h-2 w-full ${data.color}`} />

      <div className="p-8 flex flex-col flex-grow items-center text-center z-10">
        {/* Icon Container with animated background */}
        <div className="mb-6 relative">
          <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 scale-110 ${data.color}`}></div>
          <div className={`h-16 w-16 rounded-full flex items-center justify-center bg-muted text-foreground group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300`}>
            {data.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
          {data.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {data.shortDescription}
        </p>

        <div className="mt-auto opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 text-sm font-semibold text-blue-600">
          En savoir plus <ArrowRight size={16} />
        </div>
      </div>

      {/* Decorative background blob */}
      <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-5 transition-all duration-500 ${data.color}`} />
    </motion.div>
  );
};

export default PathologyCard;
