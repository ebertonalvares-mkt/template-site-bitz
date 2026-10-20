"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Calendar, ChevronRight, ChevronLeft, ArrowDown } from "lucide-react";

export function HeroSection() {
  const slides = siteConfig.heroSlides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="inicio" className="relative h-screen min-h-[640px] max-h-[1080px] w-full overflow-hidden bg-slate-950 flex items-center">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transition: "opacity 1.2s ease-in-out, transform 7s ease-out" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay escuro em gradiente para máxima legibilidade do texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50" />
        </div>
      ))}

      {/* Conteúdo Central */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E6C687] text-xs font-semibold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#C59A41] animate-pulse" />
            {slides[currentSlide].badge}
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] drop-shadow-lg mb-6">
            {slides[currentSlide].title}
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light mb-8 max-w-2xl drop-shadow">
            {slides[currentSlide].subtitle}
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={siteConfig.bitzEngine.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#0A60D9] hover:bg-[#084eb0] text-white font-semibold text-base shadow-xl shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-5 h-5" />
              <span>Reservar Agora</span>
            </a>

            <a
              href="#acomodacao"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-medium text-base transition-all duration-200"
            >
              <span>Ver Acomodações</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Controles de Navegação do Slider */}
      <div className="absolute right-6 bottom-28 z-20 hidden md:flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 transition-all"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 transition-all"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicadores de slides */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "w-8 bg-[#C59A41]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Ícone de rolagem suave para baixo */}
      <div className="absolute bottom-6 right-8 z-20 hidden lg:block text-white/60 animate-bounce">
        <a href="#booking-bar" aria-label="Rolar para baixo">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
