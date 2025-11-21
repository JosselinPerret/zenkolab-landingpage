"use client"

import { Navbar1 } from "@/components/blocks/navbar1"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { Book, Sunset, Trees, Zap } from "lucide-react"

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
      url: "#",
      items: [
        {
          title: "Fonctionnalités",
          description: "Découvrez les capacités de ZenkoLab",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/produit",
        },
        {
          title: "Tarifs",
          description: "Choisissez le plan adapté à vos besoins",
          icon: <Book className="size-5 shrink-0" />,
          url: "/tarifs",
        },
        {
          title: "Comparaison",
          description: "Comparez ZenkoLab avec d'autres solutions",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/comparaison",
        },
      ],
    },
    {
      title: "Entreprise",
      url: "#",
      items: [
        {
          title: "À propos",
          description: "Qui sommes-nous et notre mission",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/apropos",
        },
        {
          title: "Contact",
          description: "Nous contacter directement",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/contact",
        },
      ],
    },
  ],
  mobileExtraLinks: [
    { name: "Accueil", url: "/" },
    { name: "Fonctionnalités", url: "/produit" },
    { name: "Tarifs", url: "/tarifs" },
    { name: "À propos", url: "/apropos" },
  ],
  auth: {
    login: { text: "Nous contacter", url: "/contact" },
    signup: { text: "Demander une démo", url: "/demo" },
  },
};

export default function DemoPage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Réserver une démo</h1>
              <p className="text-lg text-muted-foreground">
                Découvrez comment ZenkoLab peut optimiser votre flux de travail en 30 minutes.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="text-sm font-medium">Prénom</label>
                    <input
                      id="firstname"
                      type="text"
                      className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="text-sm font-medium">Nom</label>
                    <input
                      id="lastname"
                      type="text"
                      className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email professionnel</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Entreprise / Établissement</label>
                  <input
                    id="company"
                    type="text"
                    className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="needs" className="text-sm font-medium">Vos besoins spécifiques</label>
                  <textarea
                    id="needs"
                    rows={3}
                    className="w-full p-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  />
                </div>

                <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                  Demander une démo
                </button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  En soumettant ce formulaire, vous acceptez d'être contacté par l'équipe ZenkoLab.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <StackedCircularFooter />
    </>
  )
}
