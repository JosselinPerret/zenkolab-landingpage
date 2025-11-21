import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contactez-nous",
  description = "Nous sommes disponibles pour répondre à vos questions, discuter de vos besoins ou explorer des opportunités de collaboration.",
  phone = "+33 6 00 00 00 00",
  email = "josselinprrt@gmail.com",
  web = { label: "zenkolab.com", url: "https://zenkolab.com" },
}: Contact2Props) => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="contents lg:flex lg:max-w-sm lg:flex-col lg:justify-between lg:gap-10">
            <div className="text-center lg:text-left order-1 lg:order-none w-full max-w-sm mx-auto lg:mx-0">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0 order-3 lg:order-none">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Coordonnées
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">LinkedIn: </span>
                  <a href="https://www.linkedin.com/company/zenkolab-ia/" target="_blank" className="underline">
                    ZenkoLab
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10 w-full order-2 lg:order-none">
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Prénom</Label>
                <Input type="text" id="firstname" placeholder="Votre prénom" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Nom</Label>
                <Input type="text" id="lastname" placeholder="Votre nom" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email professionnel</Label>
              <Input type="email" id="email" placeholder="votre@email.com" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="company">Entreprise / Établissement</Label>
              <Input type="text" id="company" placeholder="Nom de votre structure" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="role">Fonction</Label>
              <Input type="text" id="role" placeholder="Ex: Ophtalmologue, Directeur..." />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Sujet</Label>
              <Input type="text" id="subject" placeholder="L'objet de votre message" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Dites-nous en plus sur votre projet..." id="message" />
            </div>
            <Button className="w-full" asChild>
                <a href={`mailto:${email}`}>Envoyer le message</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
