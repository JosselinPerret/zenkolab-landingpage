import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
            <a href="/features" className="hover:text-primary">
              Fonctionnalités
            </a>
            <a href="/pricing" className="hover:text-primary">
              Tarifs
            </a>
            <a href="/about" className="hover:text-primary">
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
              <a href="mailto:contact@zenkolab.com" title="Email">
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
              <a href="https://linkedin.com/company/zenkolab" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="votre email"
                  type="email"
                  className="rounded-full"
                />
              </div>
              <Button type="submit" className="rounded-full">
                S'abonner
              </Button>
            </form>
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
