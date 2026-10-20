import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, Quote, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Avaliações Reais"
          title="O que dizem os nossos hóspedes"
          description="A satisfação e os momentos inesquecíveis de quem já viveu a experiência Bitz Hotel."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-10 h-10 text-slate-200 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-1 mb-4 text-[#C59A41]">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {test.author}
                  </h4>
                  <span className="text-xs text-slate-500">
                    {test.origin}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>{test.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
