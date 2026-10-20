"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Users, Bed, Maximize2, Check, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Room, siteConfig } from "@/config/siteConfig";
import { formatCurrency } from "@/lib/utils";

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
}

export function RoomDetailModal({ room, onClose }: RoomDetailModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (room) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [room, onClose]);

  if (!room) return null;

  const bookingUrl = room.bookingUrl || siteConfig.bitzEngine.bookingUrl;

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors focus:outline-none"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Galeria de Fotos do Quarto */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-900">
          <Image
            src={room.images[activeImageIdx]}
            alt={`${room.name} - Foto ${activeImageIdx + 1}`}
            fill
            className="object-cover transition-all duration-500"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Navegação de Imagem se houver mais de uma */}
          {room.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-900 hover:bg-white shadow transition-all"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-900 hover:bg-white shadow transition-all"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {room.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeImageIdx ? "w-6 bg-white" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Ir para foto ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute bottom-4 left-6 right-6 text-white z-10 flex flex-wrap items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E6C687] font-semibold">
                {room.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold drop-shadow-md">
                {room.name}
              </h3>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/20">
              <span className="text-xs text-slate-200">A partir de</span>
              <div className="text-xl sm:text-2xl font-bold text-white">
                {formatCurrency(room.pricePerNight)}
                <span className="text-xs font-normal text-slate-200"> / diária</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo do Quarto */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Ficha Técnica */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
            <div className="flex flex-col items-center justify-center">
              <Users className="w-5 h-5 text-[#0A60D9] mb-1" />
              <span className="text-xs text-slate-500">Capacidade</span>
              <span className="text-sm font-semibold text-slate-800">
                Até {room.capacity.adults + room.capacity.children} pessoas
              </span>
            </div>
            <div className="flex flex-col items-center justify-center border-x border-slate-200">
              <Maximize2 className="w-5 h-5 text-[#0A60D9] mb-1" />
              <span className="text-xs text-slate-500">Área</span>
              <span className="text-sm font-semibold text-slate-800">{room.size}</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Bed className="w-5 h-5 text-[#0A60D9] mb-1" />
              <span className="text-xs text-slate-500">Camas</span>
              <span className="text-sm font-semibold text-slate-800">{room.bedType}</span>
            </div>
          </div>

          {/* Descrição Completa */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Sobre esta acomodação
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {room.fullDescription || room.description}
            </p>
          </div>

          {/* Itens Inclusos */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
              Comodidades inclusas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé com CTA para o Motor Bitz */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs text-slate-500">
                Cancelamento grátis até 7 dias antes • Sem taxas ocultas
              </p>
              <p className="text-xs font-semibold text-emerald-600">
                ✓ Melhor preço garantido direto com o Bitz Hotel
              </p>
            </div>
            <div className="flex w-full sm:w-auto items-center gap-3">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors"
              >
                Voltar
              </button>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-[#0A60D9] hover:bg-[#084eb0] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
