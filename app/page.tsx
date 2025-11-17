"use client"

import { HeroSection } from "@/components/blocks/hero-section"
import { Navbar1 } from "@/components/blocks/navbar1"
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo"
import { LogoCloud } from "@/components/ui/logo-cloud-2"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { Icons } from "@/components/ui/icons"
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

export default function Home() {
  return (
    <main>
      <Navbar1 {...navbarData} />
      <HeroSection
        badge={{
          text: "200K+",
          suffix: "dossiers patient déjà analysés",
          action: null,
        }}
        title="Un oeil sur demain, dès aujourd'hui."
        description="Concentrez votre temps sur des cas qui comptent vraiment."
        actions={[
          {
            text: "Demander une démo",
            href: "/demo",
            variant: "default",
          },
        ]}
        image={{
          light: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1248' height='765'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fce7f3;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23dbeafe;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad1)' width='1248' height='765'/%3E%3C/svg%3E",
          dark: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1248' height='765'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231e3a8a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231e293b;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad2)' width='1248' height='765'/%3E%3C/svg%3E",
          alt: "Zenkolab Preview",
        }}
      />
      <GlowingEffectDemo />
      <LogoCloud />
      <StackedCircularFooter />
    </main>
  )
}
