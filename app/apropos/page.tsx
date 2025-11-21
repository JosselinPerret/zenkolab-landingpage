"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import { Book, Sunset, Trees, Zap } from "lucide-react"
import dynamic from "next/dynamic"

const StackedCircularFooter = dynamic(() => import("@/components/ui/stacked-circular-footer").then(mod => mod.StackedCircularFooter))

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

export default function AProposPage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Réinventer le dépistage <span className="text-primary">ophtalmologique</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ZenkoLab allie expertise médicale et intelligence artificielle pour lutter contre les déserts médicaux et prévenir la cécité évitable.
              </p>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Notre Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Face au vieillissement de la population et à la pénurie croissante d'ophtalmologistes, les délais de rendez-vous s'allongent dangereusement.
                </p>
                <p className="text-lg text-muted-foreground">
                  Notre mission est de déployer une solution de triage intelligent qui permet aux orthoptistes et aux centres de santé de pré-qualifier les dossiers patients. Nous permettons aux médecins de se concentrer sur les cas pathologiques nécessitant une expertise immédiate.
                </p>
              </div>
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-border">
                <div className="text-center p-6">
                  <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-white font-medium">Technologie de pointe au service de la vision</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Les piliers qui guident le développement de nos solutions au quotidien.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Book className="w-8 h-8 text-primary" />,
                  title: "Excellence Scientifique",
                  description: "Nos algorithmes sont validés cliniquement et développés en collaboration étroite avec des experts de la rétine."
                },
                {
                  icon: <Trees className="w-8 h-8 text-primary" />,
                  title: "Impact Social",
                  description: "Nous œuvrons pour réduire les inégalités d'accès aux soins visuels, partout sur le territoire."
                },
                {
                  icon: <Sunset className="w-8 h-8 text-primary" />,
                  title: "Transparence & Sécurité",
                  description: "La confidentialité des données de santé et l'explicabilité de nos résultats sont nos priorités absolues."
                }
              ].map((value, index) => (
                <div key={index} className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">L'équipe fondatrice</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Une alliance complémentaire entre expertise technique et vision stratégique.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Founder 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-background border p-2 transition-all hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted relative">
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 text-neutral-400">
                    <span className="text-lg font-medium">Photo Cofondateur 1</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">Prénom Nom</h3>
                  <p className="text-primary font-medium mb-4">Cofondateur & CEO</p>
                  <p className="text-sm text-muted-foreground">
                    Vision stratégique et développement commercial. Passionné par l'impact de la technologie sur la santé publique.
                  </p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-background border p-2 transition-all hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted relative">
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 text-neutral-400">
                    <span className="text-lg font-medium">Photo Cofondateur 2</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">Prénom Nom</h3>
                  <p className="text-primary font-medium mb-4">Cofondateur & CTO</p>
                  <p className="text-sm text-muted-foreground">
                    Expertise technique et R&D. Architecte des solutions d'IA et garant de la robustesse technologique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <StackedCircularFooter />
    </>
  )
}
