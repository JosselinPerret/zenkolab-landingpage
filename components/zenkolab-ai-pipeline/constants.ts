import { 
  ScanEye, 
  ShieldCheck, 
  Sparkles, 
  BrainCircuit, 
  GitFork, 
  FileText 
} from 'lucide-react';
import { PipelineStep } from './types';

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: 1,
    title: "01 Acquisition",
    subtitle: "Mesures réalisées en centre",
    description: "Collecte des données médicales directement depuis les appareils d'imagerie.",
    details: "Intégration fluide des examens : OCT, fond d'œil, PIO, et autres biométries essentielles.",
    icon: ScanEye
  },
  {
    id: 2,
    title: "02 Sécurisation & Envoi",
    subtitle: "Chiffrement de bout en bout",
    description: "Protection maximale des données patients avant tout traitement.",
    details: "Chiffrement en transit et au repos. Pseudonymisation stricte pour garantir la confidentialité absolue.",
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "03 Pré-traitement",
    subtitle: "Normalisation & Enrichissement",
    description: "Préparation intelligente des données pour une analyse optimale.",
    details: "Contrôles qualité automatisés, normalisation des images et enrichissement par le contexte clinique du patient.",
    icon: Sparkles
  },
  {
    id: 4,
    title: "04 Inférence IA",
    subtitle: "Modèle Fondationnel Avancé",
    description: "Le cœur de notre technologie : une analyse profonde et précise.",
    details: "Utilisation d'un modèle fondationnel multi-classes entraîné sur des millions de cas pour produire un score de risque fiable et précis.",
    icon: BrainCircuit
  },
  {
    id: 5,
    title: "05 Triage & Orientation",
    subtitle: "Orientation Intelligente",
    description: "Aide à la décision rapide pour optimiser le parcours de soin.",
    details: "Risque élevé : Orientation immédiate vers le cabinet. Risque standard : Suivi en téléconsultation/visio. Recommandations personnalisées incluses.",
    icon: GitFork
  },
  {
    id: 6,
    title: "06 Restitution",
    subtitle: "Rapport & Intégration",
    description: "Intégration transparente dans votre flux de travail quotidien.",
    details: "Génération d'une synthèse claire pour l'ophtalmologue et intégration directe via API ou dans le Dossier Médical Électronique (DME).",
    icon: FileText
  }
];