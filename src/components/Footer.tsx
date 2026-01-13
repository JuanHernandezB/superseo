import { Zap, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="relative">
              <Zap className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
            </div>
            <span className="text-lg font-bold font-display text-gradient">
              SuperSEO
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="hover:text-foreground transition-colors">
              Proceso
            </a>
            <a href="#nosotros" className="hover:text-foreground transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} SuperSEO. Hecho con</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
            <span>en Zafra</span>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            SuperSEO - Diseño web y posicionamiento SEO en Zafra, Badajoz. 
            Creamos páginas web profesionales y optimizamos tu presencia en Google. 
            Servicios de diseño web en Extremadura con atención personalizada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
