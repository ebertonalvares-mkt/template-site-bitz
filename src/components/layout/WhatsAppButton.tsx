"use client";

import { siteConfig } from "@/config/siteConfig";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Fale conosco no WhatsApp
      </span>

      {/* Botão com Pulso */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Atendimento via WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
