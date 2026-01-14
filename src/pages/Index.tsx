import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SuperSEO",
    "description": "Diseño web y posicionamiento SEO en Zafra, Badajoz. Creamos páginas web profesionales y te posicionamos en el #1 de Google.",
    "url": "https://superseo.es",
    "telephone": "+34600000000",
    "email": "info@superseo.es",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zafra",
      "addressRegion": "Badajoz",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.4167",
      "longitude": "-6.4167"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Zafra"
      },
      {
        "@type": "State",
        "name": "Badajoz"
      },
      {
        "@type": "State",
        "name": "Extremadura"
      }
    ],
    "serviceType": ["Diseño Web", "Posicionamiento SEO", "Marketing Digital"],
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <title>SuperSEO | Diseño Web y SEO en Zafra, Badajoz - Tu Web en el #1 de Google</title>
        <meta 
          name="description" 
          content="Diseño web profesional y posicionamiento SEO en Zafra, Extremadura. Creamos páginas web que venden y te posicionamos en Google. Precio competitivo y atención personalizada. ¡Presupuesto gratis!" 
        />
        <meta 
          name="keywords" 
          content="diseño web zafra, seo zafra, páginas web badajoz, posicionamiento web extremadura, agencia web zafra, diseño web extremadura, seo badajoz, marketing digital zafra" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SuperSEO" />
        <link rel="canonical" href="https://superseo.es" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SuperSEO | Diseño Web y SEO en Zafra, Badajoz" />
        <meta property="og:description" content="Creamos páginas web que venden y te posicionamos en el #1 de Google. Precio competitivo y atención 100% personalizada desde Zafra." />
        <meta property="og:url" content="https://superseo.es" />
        <meta property="og:site_name" content="SuperSEO" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SuperSEO | Diseño Web y SEO en Zafra" />
        <meta name="twitter:description" content="Tus superhéroes digitales en Zafra. Diseño web y SEO con precio competitivo." />
        
        {/* Geo */}
        <meta name="geo.region" content="ES-BA" />
        <meta name="geo.placename" content="Zafra" />
        <meta name="geo.position" content="38.4167;-6.4167" />
        <meta name="ICBM" content="38.4167, -6.4167" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
