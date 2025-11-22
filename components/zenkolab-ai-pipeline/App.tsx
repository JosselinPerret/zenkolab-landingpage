import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PIPELINE_STEPS } from './constants';
import { Navigation } from './components/Navigation';
import { PipelineVisual } from './components/PipelineVisual';
import { StepContent } from './components/StepContent';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const currentStep = PIPELINE_STEPS[currentStepIndex];

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentStepIndex((prev) => (prev + 1) % PIPELINE_STEPS.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentStepIndex((prev) => (prev - 1 + PIPELINE_STEPS.length) % PIPELINE_STEPS.length);
  }, []);

  const goToStep = (id: number) => {
    const newIndex = PIPELINE_STEPS.findIndex((s) => s.id === id);
    setDirection(newIndex > currentStepIndex ? 1 : -1);
    setCurrentStepIndex(newIndex);
    setIsPlaying(false); // Pause auto-play on interaction
  };

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isPlaying, goToNext]);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-blue-100 selection:text-blue-900">
      
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              Zenko<span className="text-blue-600">Lab</span>
            </h1>
            <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Pipeline IA</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-zinc-500">Une technologie de pointe</p>
            <p className="text-xs text-zinc-400">De l'acquisition à la restitution</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-full lg:h-[calc(100vh-140px)] min-h-[600px]">
          
          {/* Left: Navigation (Desktop) */}
          <div className="lg:col-span-3 flex flex-col justify-center order-2 lg:order-1">
            <Navigation 
              currentStepId={currentStep.id} 
              onStepClick={goToStep} 
            />
          </div>

          {/* Middle: Visual Core */}
          <div className="lg:col-span-5 order-1 lg:order-2 h-[300px] lg:h-auto min-h-[300px]">
            <PipelineVisual activeStep={currentStep} direction={direction} />
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-4 flex flex-col justify-center order-3">
             <StepContent activeStep={currentStep} direction={direction} />
             
             {/* Mobile/Tablet Controls (Bottom of text) */}
             <div className="mt-8 flex items-center gap-5">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`
                    w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ease-out shadow-sm
                    ${isPlaying 
                      ? 'bg-white border-zinc-100 text-blue-600 hover:border-blue-200 hover:shadow-md hover:scale-105 hover:-translate-y-0.5' 
                      : 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 hover:shadow-blue-200 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5'}
                  `}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1"/>}
                </button>
                
                <div className="flex gap-2">
                   <button 
                    onClick={() => { setIsPlaying(false); goToPrev(); }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent hover:bg-white hover:border-zinc-100 hover:shadow-md text-zinc-400 hover:text-black transition-all duration-300 active:scale-95 hover:-translate-y-0.5"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => { setIsPlaying(false); goToNext(); }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-transparent hover:bg-white hover:border-zinc-100 hover:shadow-md text-zinc-400 hover:text-black transition-all duration-300 active:scale-95 hover:-translate-y-0.5"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                
                <div className="ml-auto text-xs font-medium text-zinc-300 font-mono tracking-wider">
                  {String(currentStepIndex + 1).padStart(2, '0')} / {String(PIPELINE_STEPS.length).padStart(2, '0')}
                </div>
             </div>

             {/* Auto-play Progress Bar */}
             {isPlaying && (
               <div className="w-full h-1 bg-zinc-100 mt-8 rounded-full overflow-hidden">
                 <motion.div 
                    key={currentStepIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-blue-600"
                 />
               </div>
             )}
          </div>

        </div>
      </main>

      {/* Simple Footer (Fixed Bottom) */}
      <div className="fixed bottom-0 w-full bg-white border-t border-zinc-100 py-3 px-6 text-center lg:text-left z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-[10px] text-zinc-400">© 2024 ZenkoLab. Tous droits réservés.</p>
          <div className="hidden lg:flex gap-2">
            {[...Array(PIPELINE_STEPS.length)].map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === currentStepIndex ? 'bg-blue-600' : 'bg-zinc-200'}`}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;