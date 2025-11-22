import React from 'react';
import { motion } from 'framer-motion';

interface ConnectingLineProps {
  isActive: boolean;
  isCompleted: boolean;
  duration?: number; // Duration in milliseconds
}

export const ConnectingLine: React.FC<ConnectingLineProps> = ({ 
  isActive, 
  isCompleted, 
  duration = 2000 
}) => {
  return (
    <div className="absolute left-6 md:left-8 top-14 bottom-0 w-1 -ml-0.5 z-0 h-[calc(100%+1rem)] pointer-events-none">
      {/* Background Line (Track) */}
      <div className="absolute inset-0 bg-border w-0.5 mx-auto opacity-50" />
      
      {/* Glow Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Active Progress Line (The Beam) */}
        <motion.div
          initial={{ height: '0%' }}
          animate={{ height: isCompleted ? '100%' : isActive ? '100%' : '0%' }}
          transition={{ 
            duration: isCompleted ? 0 : isActive ? duration / 1000 : 0.5, 
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-0 right-0 mx-auto w-0.5 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-500"
          style={{
            boxShadow: isActive || isCompleted ? '0 0 10px 1px rgba(59, 130, 246, 0.6)' : 'none'
          }}
        >
          {/* The "Head" of the beam (Bright white tip) */}
          {(isActive && !isCompleted) && (
             <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-white rounded-full blur-[1px]"
                style={{ boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)' }}
             />
          )}
        </motion.div>
      </div>
      
      {/* Data Packet Animation - A pulse traveling down the fiber */}
      {isActive && !isCompleted && (
        <motion.div
          initial={{ top: '0%', opacity: 0 }}
          animate={{ top: '100%', opacity: [0, 1, 1, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.2, 
            ease: "linear",
            repeatDelay: 0.2 
          }}
          className="absolute left-0 right-0 mx-auto w-1 h-6 z-10"
        >
            {/* Glowing Tail */}
            <div className="w-full h-full bg-gradient-to-b from-transparent to-blue-400 opacity-80" />
            {/* Bright Core */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_4px_rgba(59,130,246,0.8)]" />
        </motion.div>
      )}
    </div>
  );
};
