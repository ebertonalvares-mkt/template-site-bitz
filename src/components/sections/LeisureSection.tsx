import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, Mountain, CalendarCheck, Tag, ArrowRight } from "lucide-react";

export function LeisureSection() {
  const leisureCards = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#C59A41]" />,
      title: "Luxo e Conforto",
      description: "O requinte que você merece em cada detalhe, com ambientes climatizados e rouparia nobre.",
    },
    {
      icon: <Mountain className="w-6 h-6 text-[#0A60D9]" />,
      title: "Vistas Deslumbrantes",
      description: "Paisagens que inspiram e encantam, cercadas pela exuberância das araucárias e montanhas.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-emerald-600" />,
      title: "Reserva Fácil & Segura",
      description: "Planeje sua viagem com total praticidade, confirmação instantânea e sem burocracia.",
    },
    {
      icon: <Tag className="w-6 h-6 text-indigo-600" />,
      title: "Pacotes Flexíveis",
      description: "Opções sob medida para casais, famílias e datas comemorativas com condições especiais.",
    },
  ];

  return (
    <section id="lazer" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeading
              align="left"
              tagline="Instalações em Destaque"
              title="Desfrute de conforto e conveniência de classe mundial"
              description="Um ambiente completo para você relaxar, se divertir e aproveitar ao máximo cada instante da sua viagem à serra."
              className="mb-0"
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href={siteConfig.bitzEngine.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0A60D9] hover:bg-[#084eb0] text-white font-medium text-sm shadow-md transition-all"
            >
              <span>Conhecer Pacotes</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Grade com 4 Destaques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leisureCards.map((card, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-slate-50 border border-slate-100/80 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/50">
                <a
                  href={siteConfig.bitzEngine.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0A60D9] group-hover:text-[#084eb0] inline-flex items-center gap-1.5"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
