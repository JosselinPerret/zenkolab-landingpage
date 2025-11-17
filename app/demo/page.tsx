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
          url: "/features",
        },
        {
          title: "Tarifs",
          description: "Choisissez le plan adapté à vos besoins",
          icon: <Book className="size-5 shrink-0" />,
          url: "/pricing",
        },
        {
          title: "Comparaison",
          description: "Comparez ZenkoLab avec d'autres solutions",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/comparison",
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
          url: "/about",
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
    { name: "Fonctionnalités", url: "/features" },
    { name: "Tarifs", url: "/pricing" },
    { name: "À propos", url: "/about" },
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
      <main className="min-h-screen">
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Demander une démo</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Réservez une démonstration personnalisée de ZenkoLab
            </p>
            <div className="max-w-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prénom</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Entreprise</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Préférence de date et heure
                  </label>
                  <input type="datetime-local" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Décrivez vos besoins
                  </label>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows={5}
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white p-2 rounded font-medium">
                  Réserver la démo
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <StackedCircularFooter />
    </>
  )
}
