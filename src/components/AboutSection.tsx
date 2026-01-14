import { Heart, MapPin, Sparkles } from "lucide-react";
import escudosImage from "@/assets/escudos.png";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img
                src={escudosImage}
                alt="Escudos J & R - El equipo de SuperSEO, expertos en diseño web y SEO en Zafra"
                className="w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-hero opacity-20 scale-110" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 right-1/4 glass px-4 py-3 rounded-lg animate-float">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Zafra, Badajoz</span>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/4 glass px-4 py-3 rounded-lg animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Pasión digital</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">El dúo dinámico</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
              Somos <span className="text-gradient">J & R</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Dos apasionados del mundo digital que decidieron unir fuerzas para ayudar a 
                negocios como el tuyo a triunfar en internet.
              </p>
              <p>
                Desde <strong className="text-foreground">Zafra, en el corazón de Extremadura</strong>, 
                trabajamos mano a mano con emprendedores y pequeñas empresas que quieren dar el 
                salto digital sin complicaciones ni presupuestos astronómicos.
              </p>
              <p>
                Nada de grandes corporaciones ni tratos impersonales. Aquí <strong className="text-foreground">
                hablas directamente con nosotros</strong>, conocemos tu negocio y nos implicamos 
                como si fuera el nuestro propio.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl glass">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Dedicación</div>
              </div>
              <div className="text-center p-4 rounded-xl glass">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">24h</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Respuesta</div>
              </div>
              <div className="text-center p-4 rounded-xl glass">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">∞</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Ganas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
