import { Link } from "wouter";
import logo from "@assets/EFK-officiel_1764370820619.png";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Histoire", href: "/histoire" },
    { label: "Programme", href: "/programme" },
    { label: "Galerie", href: "/galerie" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "Hommages", href: "/hommages" },
    { label: "Partenaires", href: "/partenaires" },
    { label: "Faire un Don", href: "/don" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img 
                src={logo} 
                alt="Logo EFK Centenaire" 
                className="h-12 w-auto object-contain"
              />
              <div className="hidden md:block">
                <h1 className="font-serif font-bold text-lg text-primary leading-none">École Fondamentale</h1>
                <p className="text-sm text-muted-foreground tracking-widest uppercase">de Kourouninkoto</p>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.href === "/don" ? "text-accent font-bold" : "text-foreground/80"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-white font-serif">
                Contact
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  className="block text-base font-medium text-foreground/80 hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-primary text-white font-serif">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-accent/20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img src={logo} alt="EFK Logo" className="h-10 brightness-0 invert opacity-80" />
              <span className="font-serif font-bold text-xl">EFK 1925</span>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs mx-auto md:mx-0">
              Célébrons un siècle d'éducation, de transmission et d'avenir à Kourouninkoto, Mali.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-bold mb-4 text-secondary">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/histoire"><a className="hover:text-secondary transition-colors">Notre Histoire</a></Link></li>
              <li><Link href="/programme"><a className="hover:text-secondary transition-colors">Programme du Centenaire</a></Link></li>
              <li><Link href="/galerie"><a className="hover:text-secondary transition-colors">Galerie Photos</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold mb-4 text-secondary">Contact</h3>
            <address className="text-sm not-italic text-primary-foreground/70 space-y-2">
              <p>Kourouninkoto, Cercle de Kita</p>
              <p>Région de Kita, Mali</p>
              <p className="mt-4">Email: contact@efk-centenaire.ml</p>
            </address>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
          <p>© 2025 École Fondamentale de Kourouninkoto. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Développé par Modibo D Keita</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 z-50"
          aria-label="Retour en haut"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}