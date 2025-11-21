import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-primary/10 p-8">
            <Icons.logo className="icon-class w-6" />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-primary">
              Accueil
            </a>
            <a href="/produit" className="hover:text-primary">
              Produit
            </a>
            <a href="/tarifs" className="hover:text-primary">
              Tarifs
            </a>
            <a href="/apropos" className="hover:text-primary">
              À propos
            </a>
            <a href="/contact" className="hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              asChild
            >
              <a href="mailto:josselinprrt@gmail.com" title="Email">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              asChild
            >
              <a href="https://www.linkedin.com/company/zenkolab-ia/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <Button className="rounded-full" asChild>
              <a href="/contact">Demander une démo</a>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 ZenkoLab. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
