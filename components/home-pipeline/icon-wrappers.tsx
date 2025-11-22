import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  isActive: boolean;     // Currently processing this stage
  isCompleted?: boolean; // Finished stage
  isAlert?: boolean;     // Special alert behavior
  color?: string;
  delay?: number;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ 
  icon: Icon, 
  isActive, 
  isCompleted = false,
  isAlert = false,
  color = "text-blue-600", 
  delay = 0 
}) => {
  const isHighlighted = isActive || isCompleted;
  // Pulse if active OR if it's an alert and we have reached/passed it (highlighted)
  const shouldPulse = isActive || (isAlert && isHighlighted);

  return (
    <div className="relative flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-background z-20 aspect-square">
        {/* Background Circle with Border and Shadow/Glow */}
        <motion.div 
            className={`absolute inset-0 rounded-full bg-background border ${isHighlighted ? 'border-transparent' : 'border-border'} shadow-lg`}
            animate={{
                boxShadow: isHighlighted 
                    ? (isAlert ? "0 0 20px rgba(239, 68, 68, 0.4)" : "0 0 20px rgba(59, 130, 246, 0.4)") 
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}
        />

        {/* Icon Itself */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ 
            scale: isHighlighted ? 1.1 : 1, 
            opacity: isHighlighted ? 1 : 0.6,
            color: isHighlighted ? undefined : 'hsl(var(--muted-foreground))' // Gray-400 when inactive
            }}
            transition={{ duration: 0.5, delay }}
            className={`relative z-10 ${isHighlighted ? color : "text-muted-foreground"}`}
        >
            <Icon size={28} strokeWidth={1.5} />
        </motion.div>
      
        {/* Pulse Ring Effect */}
        {shouldPulse && (
            <motion.div
            className={`absolute inset-0 rounded-full border-2 opacity-0 z-0 ${color.replace('text-', 'border-')}`}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            />
        )}
    </div>
  );
};
