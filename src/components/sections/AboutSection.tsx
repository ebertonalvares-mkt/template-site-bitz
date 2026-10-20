import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, Award, ShieldCheck, HeartHandshake, Phone, ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#F8F6F0]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Textos & Filosofia */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              tagline="Momentos Inspiradores"
              title="Experimente a diferença: uma mistura de elegância e conforto."
              description="Desfrute de espaços cuidadosamente decorados e equipados para o seu bem-estar. Sinta-se em casa longe de casa, com o aconchego da serra e a excelência que só o Bitz Hotel proporciona."
              className="mb-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F7EEDD] text-[#C59A41] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Requinte & Exclusividade</h4>
                  <p className="text-xs text-slate-500 mt-1">Ambientes aconchegantes com arquitetura de montanha refinada.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-50 text-[#0A60D9] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Atendimento Humanizado</h4>
                  <p className="text-xs text-slate-500 mt-1">Equipe pronta para atender cada necessidade da sua estadia.</p>
                </div>
              </div>
            </div>

            {/* Selo e Contato Rápido */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={siteConfig.bitzEngine.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A60D9] hover:bg-[#084eb0] text-white font-medium text-sm shadow-md transition-all"
              >
                <span>Descubra mais</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 font-medium py-2"
              >
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Atendimento: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Lado Direito: Composição Visual com Imagem e Card Flutuante */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="Bitz Hotel & Resort - Área externa e paisagismo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Card Flutuante com Selo de Luxo */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 sm:bottom-6 max-w-xs bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-[#C59A41] text-white">
                  <Award className="w-5 h-5" />
                </div>
                <h5 className="font-serif font-bold text-slate-900 text-sm">
                  Hotéis e resorts de luxo
                </h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sua experiência de viagem elevada a um novo patamar de conforto e bem-estar na serra.
              </p>
            </div>
          </div>
        </div>

        {/* Grade de Estatísticas / Métricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20 mt-12 border-t border-slate-200/60">
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0A60D9]">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-900 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
