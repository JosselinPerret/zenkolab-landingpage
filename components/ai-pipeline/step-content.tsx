import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PipelineStep } from './types';

interface StepContentProps {
  activeStep: PipelineStep;
  direction: number;
}

export const StepContent: React.FC<StepContentProps> = ({ activeStep, direction }) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-full min-h-[300px] flex flex-col justify-center">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeStep.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="w-full"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Étape {activeStep.id.toString().padStart(2, '0')}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            {activeStep.title.split(' ').slice(1).join(' ')}
          </h2>

          <h3 className="text-xl text-black font-semibold mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-600 rounded-full" />
            {activeStep.subtitle}
          </h3>

          <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
            {activeStep.description}
          </p>

          <div className="bg-zinc-50 p-6 rounded-xl border-l-2 border-black">
            <p className="text-sm text-zinc-500 italic">
               {activeStep.details}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
