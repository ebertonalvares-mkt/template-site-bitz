"use client";

import { useState, useId } from "react";
import { Calendar, Users, Search, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export function BookingBar() {
  const checkinId = useId();
  const checkoutId = useId();
  const adultsId = useId();
  const childrenId = useId();

  // Data de hoje e de amanhã como padrão
  const today = new Date().toISOString().split("T")[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const baseUrl = siteConfig.bitzEngine.bookingUrl;
    // Monta os parâmetros para o motor de reservas da Bitz
    const params = new URLSearchParams({
      checkin: checkIn,
      checkout: checkOut,
      adultos: adults,
      criancas: children,
    });
    const url = `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}${params.toString()}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="booking-bar" className="relative z-30 max-w-6xl mx-auto px-4 -mt-10 sm:-mt-14 mb-16">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 sm:p-6 lg:p-7">
        <div className="flex flex-col sm:flex-row items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-2 font-medium text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Motor de Reservas Oficial • Confirmação Imediata</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantia do Menor Preço Direto com o Hotel</span>
          </div>
        </div>

        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4 items-end">
          {/* Check-in */}
          <div>
            <label htmlFor={checkinId} className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0A60D9]" />
              <span>Check-in</span>
            </label>
            <input
              id={checkinId}
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A60D9] focus:bg-white transition-all cursor-pointer"
              required
            />
          </div>

          {/* Check-out */}
          <div>
            <label htmlFor={checkoutId} className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0A60D9]" />
              <span>Check-out</span>
            </label>
            <input
              id={checkoutId}
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A60D9] focus:bg-white transition-all cursor-pointer"
              required
            />
          </div>

          {/* Adultos */}
          <div>
            <label htmlFor={adultsId} className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#0A60D9]" />
              <span>Adultos</span>
            </label>
            <select
              id={adultsId}
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A60D9] focus:bg-white transition-all cursor-pointer"
            >
              <option value="1">1 Adulto</option>
              <option value="2">2 Adultos</option>
              <option value="3">3 Adultos</option>
              <option value="4">4 Adultos</option>
              <option value="5">5+ Adultos</option>
            </select>
          </div>

          {/* Crianças */}
          <div>
            <label htmlFor={childrenId} className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>Crianças</span>
            </label>
            <select
              id={childrenId}
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A60D9] focus:bg-white transition-all cursor-pointer"
            >
              <option value="0">0 Crianças</option>
              <option value="1">1 Criança</option>
              <option value="2">2 Crianças</option>
              <option value="3">3 Crianças</option>
            </select>
          </div>

          {/* Botão de Busca */}
          <div>
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#0A60D9] hover:bg-[#084eb0] text-white font-semibold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Search className="w-4 h-4" />
              <span className="truncate">Ver Disponibilidade</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
