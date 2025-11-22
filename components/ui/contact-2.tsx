"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contents lg:flex lg:max-w-sm lg:flex-col lg:justify-between lg:gap-10"
          >
            <div className="text-center lg:text-left order-1 lg:order-none w-full max-w-sm mx-auto lg:mx-0">
              <h1 className="mb-4 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                {title}
              </h1>
              <div className="h-1.5 bg-blue-600 w-[100px] rounded-full mb-6 mx-auto lg:mx-0" />
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
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10 w-full order-2 lg:order-none bg-card"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold">Message envoyé !</h3>
                <p className="text-muted-foreground">
                  Merci de nous avoir contactés. Nous reviendrons vers vous dans les plus brefs délais.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-6">
                  Envoyer un autre message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex gap-4 flex-col md:flex-row">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input type="text" id="firstname" name="firstname" placeholder="Votre prénom" required />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="lastname">Nom</Label>
                    <Input type="text" id="lastname" name="lastname" placeholder="Votre nom" required />
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email professionnel</Label>
                  <Input type="email" id="email" name="email" placeholder="votre@email.com" required />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="company">Entreprise / Établissement</Label>
                  <Input type="text" id="company" name="company" placeholder="Nom de votre structure" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="role">Fonction</Label>
                  <Input type="text" id="role" name="role" placeholder="Ex: Ophtalmologue, Directeur..." />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input type="text" id="subject" name="subject" placeholder="L'objet de votre message" required />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea placeholder="Dites-nous en plus sur votre projet..." id="message" name="message" required />
                </div>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
