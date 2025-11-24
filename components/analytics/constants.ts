import { PathologyData, MetricDefinition } from './types';

export const PATHOLOGIES: PathologyData[] = [
  {
    id: 'dmla',
    name: 'DMLA',
    description: 'Dégénérescence Maculaire Liée à l\'Âge',
    detailedAnalysis: "L'analyse se concentre sur la détection des drusens et des néovaisseaux choroïdiens. Notre modèle segmente les couches rétiniennes pour identifier les biomarqueurs précoces de la forme humide (exsudative) et sèche (atrophique) avec une précision micrométrique, permettant une prise en charge avant la perte irréversible de vision centrale.",
    metrics: {
      sensitivity: 98.6,
      specificity: 98.9,
      auc: 0.999,
    },
    humanMetrics: {
      sensitivity: 85.0,
      specificity: 92.0,
    },
  },
  {
    id: 'dr',
    name: 'Rétinopathie Diabétique',
    description: 'Complication vasculaire du diabète',
    detailedAnalysis: "Détection automatique et hiérarchisation des lésions : microanévrismes, hémorragies rétiniennes, exsudats durs et mous (cotton-wool spots). Le modèle classifie automatiquement la sévérité selon l'échelle internationale ICDR pour orienter immédiatement le patient vers le traitement laser ou les injections intra-vitréennes si nécessaire.",
    metrics: {
      sensitivity: 99.6,
      specificity: 98.6,
      auc: 0.998,
    },
    humanMetrics: {
      sensitivity: 82.0,
      specificity: 95.0,
    },
  },
  {
    id: 'glaucoma',
    name: 'Glaucome',
    description: 'Neuropathie optique progressive',
    detailedAnalysis: "Analyse morphologique avancée du rapport Cup/Disc et de l'amincissement de la couche des fibres nerveuses rétiniennes (RNFL). L'IA croise ces données structurelles pour estimer la probabilité de neuropathie optique glaucomateuse bien avant l'apparition des premiers déficits périmétriques au champ visuel.",
    metrics: {
      sensitivity: 89.5,
      specificity: 90.6,
      auc: 0.965,
    },
    humanMetrics: {
      sensitivity: 70.0,
      specificity: 85.0,
    },
  },
];

export const DEFINITIONS: MetricDefinition[] = [
  {
    term: "Sensibilité (Taux de détection)",
    simpleDefinition: "C'est la capacité de l'IA à NE PAS RATER un patient malade.",
    technicalDefinition: "Si la sensibilité est de 99%, cela signifie que sur 100 malades, l'IA en détectera 99. C'est le critère de sécurité le plus important.",
  },
  {
    term: "Spécificité (Précision)",
    simpleDefinition: "C'est la capacité à NE PAS INQUIÉTER un patient sain pour rien.",
    technicalDefinition: "Une haute spécificité évite les 'faux positifs' et donc les examens complémentaires inutiles et anxiogènes.",
  },
  {
    term: "AUC (Performance Globale)",
    simpleDefinition: "La note globale de l'examen sur 1.",
    technicalDefinition: "L'Aire Sous la Courbe (AUC) combine sensibilité et spécificité. Un score proche de 1.000 indique une perfection théorique de la distinction malade/sain.",
  },
];
