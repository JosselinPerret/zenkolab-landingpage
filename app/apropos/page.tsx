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

export default function AProposPage() {
  return (
    <>
      <Navbar1 {...navbarData} />
      <main className="min-h-screen">
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">À propos de nous</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Découvrez notre mission et nos valeurs
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-semibold mb-4">Notre mission</h2>
                <p className="text-muted-foreground">
                  Contenu de la mission de ZenkoLab à ajouter ici.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-4">Nos valeurs</h2>
                <p className="text-muted-foreground">
                  Description des valeurs de ZenkoLab à ajouter ici.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <StackedCircularFooter />
    </>
  )
}
