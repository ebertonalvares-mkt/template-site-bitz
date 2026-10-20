import { siteConfig } from "@/config/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Navigation, Compass, Clock, Phone, Mail } from "lucide-react";

export function LocationSection() {
  const { address } = siteConfig.contact;

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#F8F6F0]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Localização Privilegiada"
          title="Fácil acesso aos melhores pontos da cidade"
          description={`Estamos localizados em ${address.city} - ${address.state}, combinando a tranquilidade da serra com a proximidade dos principais atrativos turísticos.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Lado Esquerdo: Detalhes do Endereço & Atrações Próximas */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-7 rounded-2xl bg-white shadow-sm border border-slate-200/80">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-50 text-[#0A60D9] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-lg mb-1">
                    Nosso Endereço
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {address.full}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A60D9] hover:text-[#084eb0] mt-3"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Abrir no Google Maps / Waze</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Atrações Próximas */}
            <div className="p-7 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-[#C59A41]" />
                <h4 className="font-serif font-bold text-slate-900 text-base">
                  Distância de Pontos Turísticos
                </h4>
              </div>

              <div className="space-y-3">
                {siteConfig.nearbyAttractions.map((attraction, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0 text-sm"
                  >
                    <div>
                      <span className="font-medium text-slate-800 block">
                        {attraction.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {attraction.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#0A60D9] bg-blue-50 px-2.5 py-1 rounded-md shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{attraction.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lado Direito: Mapa Incorporado */}
          <div className="lg:col-span-7 h-[380px] sm:h-[460px] lg:h-auto min-h-[380px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative">
            <iframe
              src={address.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de localização - ${siteConfig.hotel.name}`}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
