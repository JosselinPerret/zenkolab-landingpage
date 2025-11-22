"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Stethoscope, 
  Server, 
  BrainCircuit, 
  Siren, 
  ShieldCheck, 
  PlayCircle, 
  RotateCcw,
  Activity
} from 'lucide-react';
import { PipelineStage } from './types';
import { AnimatedIcon } from './icon-wrappers';
import { PipelineCard } from './pipeline-card';
import { ConnectingLine } from './connecting-line';

export function HomePipeline() {
  const [stage, setStage] = useState<PipelineStage>(PipelineStage.IDLE);
  const [isHighRisk, setIsHighRisk] = useState<boolean>(true);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  // Define the strict order of stages
  const stagesOrder = [
    PipelineStage.CENTER_VISIT,
    PipelineStage.MEASUREMENTS,
    PipelineStage.DATA_TRANSFER,
    PipelineStage.AI_ANALYSIS,
    PipelineStage.RISK_ALERT,
    PipelineStage.CARE_TAKEN
  ];

  const getStageDuration = (s: PipelineStage) => {
    return s === PipelineStage.AI_ANALYSIS ? 3000 : 2000;
  };

  const advanceStage = useCallback(() => {
    setStage((current) => {
      const currentIndex = stagesOrder.indexOf(current);
      if (currentIndex === -1) return stagesOrder[0];
      if (currentIndex === stagesOrder.length - 1) return PipelineStage.COMPLETE;
      
      // Logic branch: If not high risk, skip alert/care specific to risk and go to complete (or healthy state)
      // For this demo, we focus on the "High Risk" path as requested in prompt.
      if (!isHighRisk && current === PipelineStage.AI_ANALYSIS) {
         return PipelineStage.COMPLETE; 
      }

      return stagesOrder[currentIndex + 1];
    });
  }, [isHighRisk, stagesOrder]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (autoPlay && stage !== PipelineStage.COMPLETE && stage !== PipelineStage.IDLE) {
      // Timing for each step
      const duration = getStageDuration(stage); 
      timer = setTimeout(advanceStage, duration);
    } else if (autoPlay && stage === PipelineStage.COMPLETE) {
      setAutoPlay(false);
    }
    return () => clearTimeout(timer);
  }, [stage, autoPlay, advanceStage]);

  const startSimulation = () => {
    setStage(PipelineStage.CENTER_VISIT);
    setAutoPlay(true);
  };

  const resetSimulation = () => {
    setStage(PipelineStage.IDLE);
    setAutoPlay(false);
  };

  const handleScenarioChange = (riskScenario: boolean) => {
    if (isHighRisk !== riskScenario) {
        setIsHighRisk(riskScenario);
        resetSimulation();
    }
  };

  const isStageActive = (s: PipelineStage) => stage === s;
  const isStageCompleted = (s: PipelineStage) => {
    if (stage === PipelineStage.COMPLETE) return true;
    const currentIndex = stagesOrder.indexOf(stage);
    const targetIndex = stagesOrder.indexOf(s);
    return currentIndex > targetIndex;
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center pt-12 pb-0 px-4 relative">
      
      {/* Header */}
      <header className="text-center mb-12 max-w-2xl z-30 relative">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
          Le Parcours de Soin <span className="text-blue-600">Augmenté</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Simulation du pipeline IA de détection des risques en temps réel.
        </p>
      </header>

      {/* Controls */}
      <div className="flex gap-4 mb-12 bg-card p-2 rounded-full shadow-sm border border-border z-30 relative">
        <button
          onClick={() => handleScenarioChange(true)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            isHighRisk ? 'bg-foreground text-background' : 'text-muted-foreground hover:bg-muted'
          }`}
        >
          Scénario : Risque Élevé
        </button>
        <button
          onClick={() => handleScenarioChange(false)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            !isHighRisk ? 'bg-blue-600 text-white' : 'text-muted-foreground hover:bg-muted'
          }`}
        >
          Scénario : Patient Sain
        </button>
      </div>

      {/* Main Pipeline Container */}
      <div className="w-fit mx-auto relative pl-4 md:pl-0">
        
        {/* 1. Center Visit */}
        <div className="relative flex items-start pb-12">
          <ConnectingLine 
            isActive={isStageActive(PipelineStage.CENTER_VISIT)} 
            isCompleted={isStageCompleted(PipelineStage.CENTER_VISIT)} 
            duration={getStageDuration(PipelineStage.CENTER_VISIT)}
          />
          <AnimatedIcon 
            icon={MapPin} 
            isActive={isStageActive(PipelineStage.CENTER_VISIT)} 
            isCompleted={isStageCompleted(PipelineStage.CENTER_VISIT)}
          />
          <PipelineCard
            title="Centre de Mesure"
            description="Le patient se rend dans un centre partenaire pour son examen de routine."
            tags={['DocRezo', 'Klarity', 'Partenaires']}
            isActive={isStageActive(PipelineStage.CENTER_VISIT)}
            isCompleted={isStageCompleted(PipelineStage.CENTER_VISIT)}
          />
        </div>

        {/* 2. Measurements */}
        <div className="relative flex items-start pb-12">
          <ConnectingLine 
            isActive={isStageActive(PipelineStage.MEASUREMENTS)} 
            isCompleted={isStageCompleted(PipelineStage.MEASUREMENTS)} 
            duration={getStageDuration(PipelineStage.MEASUREMENTS)}
          />
          <AnimatedIcon 
            icon={Stethoscope} 
            isActive={isStageActive(PipelineStage.MEASUREMENTS)} 
            isCompleted={isStageCompleted(PipelineStage.MEASUREMENTS)}
          />
          <PipelineCard
            title="Prise de Mesures"
            description="Un.e infirmier.e effectue les examens cliniques et saisit les constantes."
            tags={['Constantes', 'Symptômes', 'Clinical Data']}
            isActive={isStageActive(PipelineStage.MEASUREMENTS)}
            isCompleted={isStageCompleted(PipelineStage.MEASUREMENTS)}
          />
        </div>

        {/* 3. Secure Transfer */}
        <div className="relative flex items-start pb-12">
          <ConnectingLine 
            isActive={isStageActive(PipelineStage.DATA_TRANSFER)} 
            isCompleted={isStageCompleted(PipelineStage.DATA_TRANSFER)} 
            duration={getStageDuration(PipelineStage.DATA_TRANSFER)}
          />
          <AnimatedIcon 
            icon={Server} 
            isActive={isStageActive(PipelineStage.DATA_TRANSFER)} 
            isCompleted={isStageCompleted(PipelineStage.DATA_TRANSFER)}
          />
          <PipelineCard
            title="Transfert Sécurisé"
            description="Les données sont chiffrées et envoyées vers l'infrastructure ZenkoLab."
            tags={['RGPD Compliant', 'HDS Certified', 'End-to-End Encryption']}
            isActive={isStageActive(PipelineStage.DATA_TRANSFER)}
            isCompleted={isStageCompleted(PipelineStage.DATA_TRANSFER)}
          />
        </div>

        {/* 4. AI Analysis */}
        <div className="relative flex items-start pb-12">
          <ConnectingLine 
            isActive={isStageActive(PipelineStage.AI_ANALYSIS)} 
            isCompleted={isStageCompleted(PipelineStage.AI_ANALYSIS)} 
            duration={getStageDuration(PipelineStage.AI_ANALYSIS)}
          />
          <AnimatedIcon 
            icon={BrainCircuit} 
            isActive={isStageActive(PipelineStage.AI_ANALYSIS)} 
            isCompleted={isStageCompleted(PipelineStage.AI_ANALYSIS)}
            color="text-blue-600"
          />
          <PipelineCard
            title="Analyse IA ZenkoLab"
            description="Notre modèle analyse les données cliniques pour détecter des patterns de risque invisibles."
            tags={['Deep Learning', 'Predictive Model', 'Real-time']}
            isActive={isStageActive(PipelineStage.AI_ANALYSIS)}
            isCompleted={isStageCompleted(PipelineStage.AI_ANALYSIS)}
          />
        </div>

        {/* 5. Outcome (Risk or Healthy) */}
        <AnimatePresence mode="wait">
            {isHighRisk ? (
                <motion.div
                    key="risk-outcome"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative flex items-start pb-12">
                    <ConnectingLine 
                        isActive={isStageActive(PipelineStage.RISK_ALERT)} 
                        isCompleted={isStageCompleted(PipelineStage.RISK_ALERT)} 
                        duration={getStageDuration(PipelineStage.RISK_ALERT)}
                    />
                    <AnimatedIcon 
                        icon={Siren} 
                        isActive={isStageActive(PipelineStage.RISK_ALERT)} 
                        isCompleted={isStageCompleted(PipelineStage.RISK_ALERT)}
                        isAlert={true}
                        color="text-red-500"
                    />
                    <PipelineCard
                        title="Alerte Risque Détectée"
                        description="Le modèle identifie un risque élevé pour le patient. Un signal prioritaire est émis."
                        tags={['Priorité Haute', 'Signalement Immédiat']}
                        isActive={isStageActive(PipelineStage.RISK_ALERT)}
                        isCompleted={isStageCompleted(PipelineStage.RISK_ALERT)}
                        isAlert={true}
                    />
                    </div>

                    <div className="relative flex items-start">
                    <AnimatedIcon 
                        icon={Activity} 
                        isActive={isStageActive(PipelineStage.CARE_TAKEN)} 
                        isCompleted={isStageCompleted(PipelineStage.CARE_TAKEN)}
                        color="text-black"
                    />
                    <PipelineCard
                        title="Prise en Charge Rapide"
                        description="Grâce à l'alerte, le patient est orienté immédiatement vers le parcours de soin adapté."
                        tags={['Intervention', 'Suivi Renforcé']}
                        isActive={isStageActive(PipelineStage.CARE_TAKEN)}
                        isCompleted={isStageCompleted(PipelineStage.CARE_TAKEN)}
                    />
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="healthy-outcome"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative flex items-start">
                        <AnimatedIcon 
                            icon={ShieldCheck} 
                            isActive={stage === PipelineStage.COMPLETE} 
                            isCompleted={stage === PipelineStage.COMPLETE}
                            color="text-green-600"
                        />
                        <PipelineCard
                            title="Analyse Normale"
                            description="Aucun facteur de risque immédiat détecté. Le patient continue son suivi standard."
                            tags={['R.A.S.', 'Suivi Standard']}
                            isActive={stage === PipelineStage.COMPLETE}
                            isCompleted={stage === PipelineStage.COMPLETE}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

      </div>

      {/* Floating Action Button */}
      <AnimatePresence>
        {(stage === PipelineStage.IDLE || stage === PipelineStage.COMPLETE) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="sticky bottom-0 z-50 mt-auto w-full flex justify-center pb-6 bg-gradient-to-t from-background to-transparent pt-4"
          >
            <button
              onClick={startSimulation}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full shadow-2xl transition-transform hover:scale-105 font-bold text-lg"
            >
              <PlayCircle size={24} />
              Lancer la Simulation
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
