import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Mail, Linkedin } from "lucide-react"

function StackedCircularFooter() {
  return (
    <footer className="border-t bg-secondary py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
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
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
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
            <RainbowButton className="rounded-full h-10 px-6" asChild>
              <a href="/contact">Demander une démo</a>
            </RainbowButton>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 ZenkoLab. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
