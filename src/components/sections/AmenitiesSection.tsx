import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Wifi,
  Dumbbell,
  Sparkles,
  Waves,
  UtensilsCrossed,
  Coffee,
  PartyPopper,
  Briefcase,
  Car,
  Heart,
  Trees,
  Camera,
  CheckCircle2,
} from "lucide-react";

export function AmenitiesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Wifi: <Wifi className="w-6 h-6" />,
    Dumbbell: <Dumbbell className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
    Waves: <Waves className="w-6 h-6" />,
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
    Coffee: <Coffee className="w-6 h-6" />,
    PartyPopper: <PartyPopper className="w-6 h-6" />,
    Briefcase: <Briefcase className="w-6 h-6" />,
    Car: <Car className="w-6 h-6" />,
  };

  const values = [
    {
      icon: <Heart className="w-7 h-7 text-[#0A60D9]" />,
      title: "Hospitalidade Inigualável",
      description: "Cuidado em cada detalhe para que você se sinta genuinamente acolhido e especial do início ao fim.",
    },
    {
      icon: <Trees className="w-7 h-7 text-emerald-600" />,
      title: "Conexão com a Natureza",
      description: "Desfrute de paisagens deslumbrantes da serra e sinta a renovação de energia ao ar livre.",
    },
    {
      icon: <Camera className="w-7 h-7 text-[#C59A41]" />,
      title: "Experiências Memoráveis",
      description: "Momentos gastronômicos, noites ao redor da lareira e memórias que ficarão para sempre na memória.",
    },
  ];

  return (
    <section id="comodidades" className="py-20 lg:py-28 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Comodidades & Serviços"
          title="Eleve sua estadia com recursos e serviços premium"
          description="Oferecemos uma infraestrutura completa pensada para o seu lazer, relaxamento e bem-estar em todas as estações do ano."
        />

        {/* Grade de Comodidades Principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {siteConfig.amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4"
            >
              <div className="p-3.5 rounded-xl bg-blue-50 text-[#0A60D9] group-hover:bg-[#0A60D9] group-hover:text-white transition-colors shrink-0">
                {iconMap[amenity.icon] || <Sparkles className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-base mb-1.5">
                  {amenity.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco "Nosso Valor: Hospitalidade Incomparável" */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E6C687] font-semibold mb-3 block">
              Nosso Valor
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold mb-4">
              Experimente a diferença: hospitalidade incomparável
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Um atendimento que supera expectativas e transforma sua viagem em uma experiência memorável.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center flex flex-col items-center"
              >
                <div className="p-3.5 rounded-full bg-white/10 mb-4">
                  {v.icon}
                </div>
                <h4 className="font-serif font-bold text-lg text-white mb-2">
                  {v.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
