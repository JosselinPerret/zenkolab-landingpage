"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Scan, Glasses, Sun } from 'lucide-react';
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
    id: 'amblyopie',
    title: 'Amblyopie',
    shortDescription: 'Trouble du développement visuel, souvent appelé "œil paresseux".',
    details: `
L'amblyopie, communément appelée « œil paresseux », est un trouble du développement visuel où un œil ne parvient pas à atteindre une acuité visuelle normale, même avec des lunettes de correction. Le cerveau favorise l'autre œil, ignorant les signaux de l'œil plus faible.

**Symptômes clés :** 
Mauvaise perception de la profondeur, tendance à fermer un œil ou à plisser les yeux, ou un œil qui semble errer vers l'intérieur ou l'extérieur.

**Traitement :** 
Le traitement est plus efficace s'il est commencé tôt dans l'enfance. Il consiste généralement à obliger l'œil paresseux à travailler en cachant le « bon » œil avec un pansement (occlusion) ou en utilisant des gouttes pour brouiller la vision du bon œil.
    `,
    icon: <Glasses size={32} />,
    color: 'bg-blue-600'
  },
  {
    id: 'cataracte',
    title: 'Cataracte',
    shortDescription: 'Opacification progressive du cristallin entraînant une baisse de vision.',
    details: `
La cataracte est l'opacification du cristallin, la lentille naturelle de l'œil qui se trouve derrière l'iris et la pupille. Avec l'âge, les protéines du cristallin commencent à se dégrader et à s'agglutiner, formant des zones troubles.

**Symptômes clés :** 
Vision brouillée (comme si l'on regardait à travers une vitre sale ou givrée), sensibilité accrue à la lumière et aux éblouissements, vision double dans un seul œil et ternissement des couleurs.

**Traitement :** 
Lorsque la cataracte commence à gêner les activités quotidiennes, la chirurgie est le seul traitement efficace. Elle consiste à retirer le cristallin opacifié et à le remplacer par un implant artificiel transparent (lentille intraoculaire).
    `,
    icon: <Sun size={32} />,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
