import { ArrowDown, Sparkles, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import superheroesImage from "@/assets/superheroes.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${100 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Diseño Web & SEO en Zafra, Badajoz</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Tus <span className="text-gradient">superhéroes</span> digitales están aquí
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Creamos <strong className="text-foreground">páginas web que venden</strong> y las 
              posicionamos en el <strong className="text-foreground">#1 de Google</strong>. 
              Precio competitivo y atención 100% personalizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-hero hover:opacity-90 transition-all glow text-lg px-8"
              >
                <a href="#contacto">
                  <Rocket className="w-5 h-5 mr-2" />
                  Solicita tu presupuesto gratis
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 text-lg"
              >
                <a href="#servicios">
                  Descubre más
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-accent" />
                <span>J & R a tu servicio</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Resultados garantizados</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 animate-float">
              <img
                src={superheroesImage}
                alt="J y R, los superhéroes del diseño web y SEO en Zafra, Badajoz - SuperSEO"
                className="w-full max-w-lg mx-auto"
              />
              {/* Glow effect behind image */}
              <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-hero opacity-30 scale-110" />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 lg:right-0 glass px-4 py-2 rounded-lg animate-float" style={{ animationDelay: "0.5s" }}>
              <span className="text-accent font-bold">#1</span>
              <span className="text-sm text-muted-foreground ml-1">en Google</span>
            </div>
            <div className="absolute -bottom-4 -left-4 lg:left-0 glass px-4 py-2 rounded-lg animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-primary font-bold">100%</span>
              <span className="text-sm text-muted-foreground ml-1">personalizado</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#servicios" aria-label="Scroll to services">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
