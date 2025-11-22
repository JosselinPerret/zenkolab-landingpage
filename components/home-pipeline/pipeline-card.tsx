import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface PipelineCardProps {
  title: string;
  description: string;
  tags?: string[];
  isActive: boolean;
  isCompleted: boolean;
  isAlert?: boolean;
}

export const PipelineCard: React.FC<PipelineCardProps> = ({ 
  title, 
  description, 
  tags, 
  isActive, 
  isCompleted,
  isAlert = false 
}) => {
  // Determine if the card should be interactive (visible and hoverable)
  const isInteractable = isActive || isCompleted;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: isInteractable ? 1 : 0.3,
        x: 0,
        scale: isActive ? 1.02 : 1,
        backgroundColor: 'hsl(var(--card))',
        // Dynamic border color: Red for Alert, Blue for Active, Gray for others
        borderColor: isActive 
            ? (isAlert ? '#ef4444' : '#3b82f6') 
            : 'hsl(var(--border))',
        // Dynamic shadow: Red glow for Alert, Blue glow for Active
        boxShadow: isActive
            ? (isAlert 
                ? "0 4px 20px -2px rgba(239, 68, 68, 0.25)" 
                : "0 4px 20px -2px rgba(59, 130, 246, 0.25)")
            : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
      }}
      whileHover={isInteractable ? { 
        scale: isActive ? 1.04 : 1.02,
        // Enhanced shadow on hover
        boxShadow: isAlert 
            ? "0 10px 25px -5px rgba(239, 68, 68, 0.3)" 
            : "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
        borderColor: isActive 
            ? (isAlert ? '#dc2626' : '#2563eb') 
            : 'hsl(var(--border))',
      } : {}}
      transition={{ duration: 0.3 }}
      className={`
        relative p-6 rounded-2xl border-2 w-full md:max-w-md ml-6 md:ml-12
        ${!isInteractable ? 'pointer-events-none' : 'cursor-default'}
      `}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className={`font-bold text-lg ${isActive && isAlert ? 'text-red-600' : 'text-foreground'}`}>
          {title}
        </h3>
        {isCompleted && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <CheckCircle2 className="text-blue-600" size={20} />
          </motion.div>
        )}
      </div>
      
      <p className={`text-sm mb-4 ${isActive && isAlert ? 'text-foreground' : 'text-muted-foreground'}`}>
        {description}
      </p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className={`
                text-xs font-semibold px-2.5 py-1 rounded-full border
                ${isAlert && isActive 
                  ? 'bg-red-50 border-red-100 text-red-700' 
                  : 'bg-blue-50 border-blue-100 text-blue-700'}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Active Indicator Line */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ height: 0 }}
            className={`absolute left-0 top-0 w-1.5 rounded-l-2xl ${isAlert ? 'bg-red-500' : 'bg-blue-600'}`}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
