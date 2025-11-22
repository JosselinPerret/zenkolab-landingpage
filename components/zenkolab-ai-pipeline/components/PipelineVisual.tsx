import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PipelineStep } from '../types';

interface PipelineVisualProps {
  activeStep: PipelineStep;
  direction: number;
}

export const PipelineVisual: React.FC<PipelineVisualProps> = ({ activeStep, direction }) => {
  const Icon = activeStep.icon;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-zinc-50 rounded-3xl border border-zinc-100 shadow-inner">
      
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Animated Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64 rounded-full border border-blue-600 absolute"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: 180
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-96 h-96 rounded-full border border-dashed border-black absolute"
        />
      </div>

      {/* Central Icon Container */}
      <div className="relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeStep.id}
            custom={direction}
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-blue-600"
          >
            <Icon className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
          </motion.div>
        </AnimatePresence>

        {/* Connecting Lines (Decorations) */}
        <div className="absolute top-1/2 left-full w-24 h-[2px] bg-gradient-to-r from-blue-600 to-transparent -translate-y-1/2 hidden lg:block" />
        <div className="absolute top-1/2 right-full w-24 h-[2px] bg-gradient-to-l from-blue-600 to-transparent -translate-y-1/2 hidden lg:block" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
         {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-600 rounded-full"
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 200 - 100],
                y: [Math.random() * 100 - 50, Math.random() * 200 - 100],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: '50%',
                top: '50%'
              }}
            />
         ))}
      </div>
    </div>
  );
};