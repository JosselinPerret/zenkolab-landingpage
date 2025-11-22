"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import dynamic from "next/dynamic"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))
const AiPipelineSection = dynamic(() => import("@/components/ai-pipeline/ai-pipeline-section").then(mod => mod.AiPipelineSection))

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
  const pathologies = ["Glaucome", "DMLA", "Amblyopie", "Cataracte"];

  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 mb-20">
           {/* Pathologies Section */}
           <div className="mb-20">
              <h2 className="text-lg md:text-4xl mb-8 text-black dark:text-white max-w-4xl font-bold">
                Pathologies ciblées
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pathologies.map((pathology, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-center hover:shadow-md transition-shadow"
                  >
                    <span className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                      {pathology}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-20">
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold">
                  Démonstration
                </h2>
                <div className="w-full aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
                  <iframe 
                    src="https://drive.google.com/file/d/1G_-o5uwwzF0PpZKLAn0VwkT8Ck0J0iYt/preview" 
                    className="w-full h-full" 
                    allow="autoplay; fullscreen"
                    title="Zenkolab Product Demo"
                  ></iframe>
                </div>
            </div>
        </div>

        {/* Pipeline Section */}
        <AiPipelineSection />
      </main>
      <StackedCircularFooter />
    </>
  )
}
