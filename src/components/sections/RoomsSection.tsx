"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig, Room } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomDetailModal } from "@/components/ui/RoomDetailModal";
import { formatCurrency } from "@/lib/utils";
import { Users, Bed, Eye, Calendar, Sparkles } from "lucide-react";

export function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="acomodacao" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Feito sob medida para a tranquilidade"
          title="Quartos e suítes projetados para o máximo relaxamento"
          description="Ambientes pensados para o seu conforto, com detalhes que fazem toda a diferença em sua estadia. Escolha a acomodação perfeita para sua viagem."
        />

        {/* Grade de Quartos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.rooms.map((room) => (
            <article
              key={room.id}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-md luxury-card-hover flex flex-col"
            >
              {/* Imagem do Quarto */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Badge Destaque se houver */}
                {room.highlight && (
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59A41] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                    <Sparkles className="w-3 h-3" />
                    <span>Destaque</span>
                  </div>
                )}

                {/* Preço em Destaque */}
                <div className="absolute bottom-3 right-3 z-10 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/20">
                  <span className="text-[10px] uppercase text-slate-300 block leading-tight">Diárias a partir de</span>
                  <div className="text-lg font-bold text-white">
                    {formatCurrency(room.pricePerNight)}
                    <span className="text-xs font-normal text-slate-200"> / noite</span>
                  </div>
                </div>
              </div>

              {/* Informações do Quarto */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-semibold text-[#C59A41] tracking-wider block mb-1">
                    {room.tagline}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#0A60D9] transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Informações Rápidas */}
                  <div className="flex items-center gap-4 py-4 my-4 border-y border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#0A60D9]" />
                      <span>Até {room.capacity.adults + room.capacity.children} pessoas</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-[#0A60D9]" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  {/* Comodidades resumo */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {room.features.slice(0, 3).map((feat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                      >
                        {feat}
                      </span>
                    ))}
                    {room.features.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-500 text-[11px]">
                        +{room.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Detalhes</span>
                  </button>

                  <a
                    href={room.bookingUrl || siteConfig.bitzEngine.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0A60D9] hover:bg-[#084eb0] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reservar</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes do Quarto */}
      <RoomDetailModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
      />
    </section>
  );
}
