"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Scan, Activity } from 'lucide-react';
import PathologyCard from './pathology-card';
import InfoModal from './info-modal';
import { Pathology } from './types';

const PATHOLOGIES: Pathology[] = [
  {
    id: 'glaucome',
    title: 'Glaucome',
    shortDescription: 'Maladie du nerf optique souvent liée à une pression intraoculaire élevée.',
    details: `
Le glaucome est une maladie oculaire grave qui endommage le nerf optique, le lien vital entre l'œil et le cerveau. Il est souvent associé à une accumulation de pression liquide à l'intérieur de l'œil. C'est l'une des principales causes de cécité chez les personnes de plus de 60 ans.

**Symptômes clés :** 
Perte progressive de la vision périphérique (vision en tunnel), bien que la maladie soit souvent asymptomatique au début jusqu'à un stade avancé.

**Traitement :** 
Les dommages causés par le glaucome sont irréversibles. Cependant, la maladie peut être gérée et la vision préservée grâce à des collyres quotidiens, un traitement au laser ou une intervention chirurgicale pour réduire la pression intraoculaire.
    `,
    icon: <Eye size={32} />,
    color: 'bg-blue-600'
  },
  {
    id: 'dmla',
    title: 'DMLA',
    shortDescription: 'Dégénérescence Maculaire Liée à l\'Âge affectant la vision centrale.',
    details: `
La Dégénérescence Maculaire Liée à l'Âge (DMLA) est une maladie chronique de l'œil qui atteint la zone centrale de la rétine, appelée macula, responsable de l'acuité visuelle nécessaire à la lecture ou à la conduite.

**Symptômes clés :** 
Vision floue ou déformée au centre du champ visuel. Les lignes droites peuvent apparaître ondulées, et une tache sombre peut se former au centre de la vision.

**Prévention et Gestion :** 
Bien qu'il n'existe pas de remède définitif pour la forme sèche, la prise de compléments vitaminiques spécifiques peut ralentir sa progression. Pour la forme humide, des injections intraoculaires sont souvent prescrites. L'arrêt du tabac est fortement recommandé.
    `,
    icon: <Scan size={32} />,
    color: 'bg-blue-600'
  },
  {
    id: 'retinopathie',
    title: 'Rétinopathie diabétique',
    shortDescription: 'Complication du diabète affectant les vaisseaux sanguins de la rétine.',
    details: `
La rétinopathie diabétique est une complication du diabète qui affecte les yeux. Elle est causée par des dommages aux vaisseaux sanguins du tissu sensible à la lumière situé au fond de l'œil (la rétine).

**Symptômes clés :**
Au début, la rétinopathie diabétique peut ne causer aucun symptôme ou seulement de légers problèmes de vision. À terme, elle peut entraîner la cécité. Les symptômes peuvent inclure des taches ou des fils foncés flottant dans votre vision (corps flottants), une vision floue, une vision fluctuante, des zones sombres ou vides dans votre vision et une perte de vision.

**Prévention et Traitement :**
La meilleure façon de prévenir la perte de vision est de gérer soigneusement votre diabète. Le traitement peut inclure des injections de médicaments dans l'œil, un traitement au laser ou une intervention chirurgicale (vitrectomie).
    `,
    icon: <Activity size={32} />,
    color: 'bg-blue-600'
  }
];

export const PathologiesSection = () => {
  const [selectedPathology, setSelectedPathology] = useState<Pathology | null>(null);

  const handleCardClick = (pathology: Pathology) => {
    setSelectedPathology(pathology);
  };

  const closeModal = () => {
    setSelectedPathology(null);
  };

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4"
          >
            Pathologies <span className="text-blue-600">ciblées</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez nos spécialités médicales. Cliquez sur une pathologie pour obtenir une fiche descriptive détaillée.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PATHOLOGIES.map((pathology, index) => (
            <PathologyCard 
              key={pathology.id} 
              data={pathology} 
              index={index}
              onClick={handleCardClick}
            />
          ))}
        </motion.div>

        <InfoModal 
          isOpen={!!selectedPathology}
          onClose={closeModal}
          pathology={selectedPathology}
        />
    </div>
  );
};
