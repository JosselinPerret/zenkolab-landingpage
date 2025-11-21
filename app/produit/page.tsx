"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import { Book, Sunset, Trees, Zap } from "lucide-react"
import dynamic from "next/dynamic"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))
const Timeline = dynamic(() => import("@/components/ui/timeline").then(mod => mod.Timeline))

const navbarData = {
  logo: {
    url: "/",
    src: "/logo.png",
    alt: "Zenkolab Logo",
    title: "zenkolab",
  },
  menu: [
    {
      title: "Accueil",
      url: "/",
    },
    {
      title: "Produit",
      url: "/produit",
    },
    {
      title: "Tarifs",
      url: "/tarifs",
    },
    {
      title: "À propos",
      url: "/apropos",
    },
  ],
  mobileExtraLinks: [],
  auth: {
    signup: { text: "Nous contacter", url: "/contact" },
  },
};

export default function ProduitPage() {
  const timelineData = [
    {
      title: "01 Acquisition",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Collecte des données médicales directement depuis les appareils d&apos;imagerie.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Mesures réalisées en centre</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Intégration fluide des examens : OCT, fond d&apos;œil, PIO, et autres biométries essentielles.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "02 Sécurisation & Envoi",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Protection maximale des données patients avant tout traitement.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Chiffrement de bout en bout</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Chiffrement en transit et au repos. Pseudonymisation stricte pour garantir la confidentialité absolue.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "03 Pré-traitement",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Préparation intelligente des données pour une analyse optimale.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Normalisation & Enrichissement</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Contrôles qualité automatisés, normalisation des images et enrichissement par le contexte clinique du patient.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "04 Inférence IA",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Le cœur de notre technologie : une analyse profonde et précise.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Modèle Fondationnel Avancé</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Utilisation d&apos;un modèle fondationnel multi-classes entraîné sur des millions de cas pour produire un score de risque fiable et précis.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "05 Triage & Orientation",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Aide à la décision rapide pour optimiser le parcours de soin.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Orientation Intelligente</h4>
              <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400">
                <li><strong>Risque élevé :</strong> Orientation immédiate vers le cabinet.</li>
                <li><strong>Risque standard :</strong> Suivi en téléconsultation/visio.</li>
                <li>Recommandations personnalisées incluses.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "06 Restitution",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Intégration transparente dans votre flux de travail quotidien.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-neutral-100 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <h4 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Rapport & Intégration</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Génération d&apos;une synthèse claire pour l&apos;ophtalmologue et intégration directe via API ou dans le Dossier Médical Électronique (DME).
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background">
        <Timeline data={timelineData} />
      </main>
      <StackedCircularFooter />
    </>
  )
}
