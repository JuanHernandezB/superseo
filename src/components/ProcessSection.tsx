import { MessageSquare, Search, Rocket, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contacto",
    description:
      "Nos cuentas qué necesita tu negocio. Charlamos contigo para entender tus objetivos y te damos un presupuesto sin compromiso.",
    color: "primary",
  },
  {
    number: "02",
    icon: Search,
    title: "Análisis",
    description:
      "Estudiamos tu sector, competencia y las mejores palabras clave para posicionarte. Diseñamos una estrategia a medida.",
    color: "accent",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Creación",
    description:
      "Manos a la obra. Diseñamos y desarrollamos tu web con todo el SEO integrado. Tú ves el progreso en tiempo real.",
    color: "secondary",
  },
  {
    number: "04",
    icon: Trophy,
    title: "¡Despegue!",
    description:
      "Lanzamos tu web y empiezas a recibir visitas. Te enseñamos a sacarle el máximo partido y seguimos optimizando.",
    color: "primary",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--secondary)/0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6">
            Tu misión hacia el <span className="text-gradient">éxito digital</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Un proceso simple, transparente y sin complicaciones. En 4 pasos 
            tienes tu web funcionando y atrayendo clientes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-30 -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step card */}
                <div className="relative p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-500 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-6">
                    <div className={`w-10 h-10 rounded-full bg-${step.color} flex items-center justify-center text-${step.color}-foreground font-bold text-sm shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-${step.color}/20 flex items-center justify-center mb-4 mt-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-7 h-7 text-${step.color}`} />
                  </div>

                  <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            ¿Listo para empezar tu misión?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-hero text-white font-bold hover:opacity-90 transition-opacity glow"
          >
            <Rocket className="w-5 h-5" />
            Comenzar ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
