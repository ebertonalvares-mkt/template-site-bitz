"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["Todos", "Acomodações", "Lazer", "Gastronomia", "Áreas Comuns"];

  const filteredPhotos =
    selectedCategory === "Todos"
      ? siteConfig.gallery
      : siteConfig.gallery.filter((p) => p.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "unset";
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#F8F6F0]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Nossos Ambientes"
          title="Galeria de Fotos"
          description="Conheça de perto os encantos, a infraestrutura e os detalhes do Bitz Hotel antes mesmo do seu check-in."
        />

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#0A60D9] text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md bg-slate-200"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-semibold text-[#E6C687] uppercase tracking-wider mb-1">
                  {photo.category}
                </span>
                <h4 className="font-serif font-bold text-lg leading-snug">
                  {photo.title}
                </h4>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-200">
                  <ZoomIn className="w-4 h-4" />
                  <span>Ampliar foto</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-[600px] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <span className="text-xs uppercase text-[#E6C687] font-semibold tracking-wider">
                {filteredPhotos[lightboxIndex].category}
              </span>
              <h3 className="font-serif font-bold text-lg mt-0.5">
                {filteredPhotos[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
