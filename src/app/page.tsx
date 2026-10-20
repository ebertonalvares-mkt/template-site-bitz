import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { BitzChatWidget } from "@/components/layout/BitzChatWidget";

import { HeroSection } from "@/components/sections/HeroSection";
import { BookingBar } from "@/components/sections/BookingBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { LeisureSection } from "@/components/sections/LeisureSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Fixo com efeito Glass e Menu Mobile */}
      <Header />

      <main className="flex-1">
        {/* Banner Hero com Slider de Fotos */}
        <HeroSection />

        {/* Barra de Reserva com Filtro de Datas e Integração Bitz */}
        <BookingBar />

        {/* Sobre o Hotel & Momentos Inspiradores */}
        <AboutSection />

        {/* Vitrine de Acomodações & Modal de Detalhes */}
        <RoomsSection />

        {/* Comodidades & Filosofia de Hospitalidade */}
        <AmenitiesSection />

        {/* Lazer, Eventos e Instalações */}
        <LeisureSection />

        {/* Galeria de Fotos com Filtros e Lightbox */}
        <GallerySection />

        {/* Avaliações e Prova Social */}
        <TestimonialsSection />

        {/* Localização, Distâncias e Mapa */}
        <LocationSection />

        {/* Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* Banner de Chamada para Reserva */}
        <CtaBanner />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />

      {/* Widget do Chat Oficial da Bitz (se habilitado em siteConfig) */}
      <BitzChatWidget />
    </div>
  );
}
