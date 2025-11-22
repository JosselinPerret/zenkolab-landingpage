import React from 'react';
import { motion } from 'framer-motion';
import { PIPELINE_STEPS } from './constants';

interface NavigationProps {
  currentStepId: number;
  onStepClick: (id: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentStepId, onStepClick }) => {
  return (
    <div className="hidden lg:flex flex-col space-y-1 w-full max-w-xs relative z-20">
      {/* Timeline Line */}
      <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-zinc-100 rounded-full" />
      
      {PIPELINE_STEPS.map((step) => {
        const isActive = step.id === currentStepId;
        const isPassed = step.id < currentStepId;

        return (
          <button
            key={step.id}
            onClick={() => onStepClick(step.id)}
            className={`
              group flex items-start gap-5 p-3 text-left relative transition-all duration-300 rounded-2xl w-full
              ${!isActive ? 'hover:bg-zinc-50/80' : ''}
            `}
          >
            {/* Connector Dot */}
            <div className={`
              relative z-10 mt-1 w-3 h-3 rounded-full border-2 transition-all duration-300 shadow-sm
              ${isActive 
                ? 'bg-blue-600 border-blue-600 scale-125 ring-4 ring-blue-50' 
                : isPassed 
                  ? 'bg-black border-black group-hover:ring-4 group-hover:ring-zinc-50' 
                  : 'bg-white border-zinc-300 group-hover:border-blue-400 group-hover:scale-110 group-hover:bg-blue-50'}
            `} />

            {/* Text Label */}
            <div className={`
              transition-all duration-300 
              ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}
            `}>
              <span className={`
                block text-xs font-bold tracking-wider uppercase mb-0.5 transition-colors
                ${isActive ? 'text-blue-600' : isPassed ? 'text-black' : 'text-zinc-400 group-hover:text-blue-500'}
              `}>
                {step.title.split(' ')[0]}
              </span>
              <span className={`
                block text-sm font-medium transition-colors
                ${isActive ? 'text-black' : 'text-zinc-500 group-hover:text-black'}
              `}>
                {step.title.split(' ').slice(1).join(' ')}
              </span>
            </div>

            {/* Active Background */}
             {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-zinc-50 rounded-2xl -z-10 border border-zinc-100/50 shadow-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
             )}
          </button>
        );
      })}
    </div>
  );
};
