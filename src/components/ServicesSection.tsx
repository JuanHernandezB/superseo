import { Globe, Search, Zap, Users, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Páginas Web Sencillas",
    description:
      "Webs modernas, rápidas y optimizadas que convierten visitantes en clientes. Diseño responsive que se ve perfecto en cualquier dispositivo.",
    features: ["Diseño a medida", "100% Responsive", "Carga ultrarrápida"],
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Search,
    title: "Posicionamiento SEO",
    description:
      "Hacemos que tu negocio aparezca el primero en Google cuando tus clientes te buscan. SEO local especializado en Zafra y Extremadura.",
    features: ["SEO Local", "Palabras clave", "Análisis competencia"],
    gradient: "from-secondary to-secondary/60",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Precio Competitivo",
    description: "Calidad premium sin arruinarte. Presupuestos adaptados a tu negocio.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Trato directo con nosotros. Nada de bots ni intermediarios.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Reales",
    description: "Nos enfocamos en lo que importa: más clientes para tu negocio.",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Tu web lista en tiempo récord sin sacrificar calidad.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            Nuestros <span className="text-gradient">superpoderes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos diseño web profesional con estrategias SEO probadas para que tu negocio 
            destaque en internet. Todo desde Zafra, con el toque cercano que nos caracteriza.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <CardContent className="p-8">
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-4 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold font-display mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
