"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import dynamic from "next/dynamic"
import { PathologiesSection } from "@/components/pathologies/pathologies-section"
import { motion } from "framer-motion"

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
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 mb-20">
           {/* Pathologies Section */}
           <div className="mb-20">
              <PathologiesSection />
            </div>

            {/* Video Section */}
            <div className="mb-20">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                    Démonstration
                  </h2>
                  <div className="h-1.5 bg-blue-600 mx-auto rounded-full mb-6 w-[100px]" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden shadow-2xl border border-border"
                >
                  <iframe 
                    src="https://drive.google.com/file/d/1G_-o5uwwzF0PpZKLAn0VwkT8Ck0J0iYt/preview" 
                    className="w-full h-full" 
                    allow="autoplay; fullscreen"
                    title="Zenkolab Product Demo"
                  ></iframe>
                </motion.div>
            </div>
        </div>

        {/* Pipeline Section */}
        <AiPipelineSection />
      </main>
      <StackedCircularFooter />
    </>
  )
}
