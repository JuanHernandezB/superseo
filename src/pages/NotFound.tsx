import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página no encontrada | SuperSEO - Diseño Web y SEO en Zafra</title>
        <meta 
          name="description" 
          content="Lo sentimos, la página que buscas no existe. Vuelve al inicio de SuperSEO para descubrir nuestros servicios de diseño web y SEO en Zafra, Badajoz." 
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="container mx-auto px-4">
          <article className="text-center max-w-lg mx-auto">
            <h1 className="mb-4 text-6xl sm:text-8xl font-bold font-display text-gradient">404</h1>
            <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-foreground">
              ¡Ups! Página no encontrada
            </h2>
            <p className="mb-8 text-muted-foreground">
              Parece que esta página se ha perdido en el ciberespacio. 
              No te preocupes, te ayudamos a volver al camino correcto.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-hero hover:opacity-90 transition-opacity glow"
            >
              <a href="/">
                <Home className="w-5 h-5 mr-2" aria-hidden="true" />
                Volver al inicio
              </a>
            </Button>
          </article>
        </div>
      </main>
    </>
  );
};

export default NotFound;
