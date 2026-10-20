import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Coluna 1: Sobre & Identidade */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-black tracking-wider text-white">
                BITZ
              </span>
              <span className="text-[11px] tracking-[0.3em] uppercase -mt-1 font-sans font-semibold text-[#C59A41]">
                HOTEL & RESORT
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.hotel.description}
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#C59A41]" />
              <span>Reserva 100% segura pelo motor oficial</span>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-serif font-semibold text-lg mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#acomodacao" className="hover:text-white transition-colors">
                  Acomodações & Suítes
                </a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-white transition-colors">
                  Lazer & Eventos
                </a>
              </li>
              <li>
                <a href="#comodidades" className="hover:text-white transition-colors">
                  Comodidades & Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização & Acesso
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Horários */}
          <div>
            <h4 className="text-white font-serif font-semibold text-lg mb-4">
              Entre em Contato
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C59A41] shrink-0 mt-1" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C59A41] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C59A41] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs space-y-1">
              <div>
                <span className="text-slate-400">Check-in:</span>{" "}
                <strong className="text-white">a partir das {siteConfig.hotel.checkInTime}</strong>
              </div>
              <div>
                <span className="text-slate-400">Check-out:</span>{" "}
                <strong className="text-white">até as {siteConfig.hotel.checkOutTime}</strong>
              </div>
            </div>
          </div>

          {/* Coluna 4: Redes & Motor Oficial */}
          <div className="space-y-4">
            <h4 className="text-white font-serif font-semibold text-lg mb-4">
              Siga Nossas Redes
            </h4>
            <p className="text-sm text-slate-400">
              Acompanhe novidades, pacotes sazonais e fotos da serra diariamente.
            </p>
            <div className="flex items-center gap-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-[#C59A41] text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-[#0A60D9] text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-red-600 text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              )}
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.bitzEngine.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#0A60D9] hover:bg-[#084eb0] text-white transition-all shadow-md"
              >
                Acessar Motor de Reservas
              </a>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright & Bitz Softwares */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            Copyright © {currentYear} {siteConfig.hotel.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>tecnologia</span>
            <a
              href="https://bitzsoftwares.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C59A41] hover:underline font-semibold"
            >
              Bitz Softwares
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
