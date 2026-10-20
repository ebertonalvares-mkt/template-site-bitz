import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Calendar, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Image com overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
          alt="Bitz Hotel & Resort - Piscina e montanhas ao entardecer"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E6C687] text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sua Próxima Viagem Começa Aqui</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight">
          Relaxe e viva momentos inesquecíveis.
        </h2>

        <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Sua tranquilidade e bem-estar são nossa prioridade. Reserve diretamente em nosso site oficial com o melhor preço garantido e confirmação imediata.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.bitzEngine.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-[#0A60D9] hover:bg-[#084eb0] text-white font-semibold text-base shadow-xl shadow-blue-600/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-5 h-5" />
            <span>Garantir Minha Reserva</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-medium text-base transition-all"
          >
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Melhor tarifa garantida</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sem taxas de intermediação</span>
          </div>
        </div>
      </div>
    </section>
  );
}
