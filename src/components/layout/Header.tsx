"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Calendar, Phone, Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Acomodações", href: "#acomodacao" },
    { label: "Lazer & Eventos", href: "#lazer" },
    { label: "Comodidades", href: "#comodidades" },
    { label: "Galeria", href: "#galeria" },
    { label: "Localização", href: "#localizacao" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span
                className={`text-2xl sm:text-3xl font-serif font-black tracking-wider transition-colors ${
                  isScrolled ? "text-[#0A60D9]" : "text-white"
                }`}
              >
                BITZ
              </span>
              <span
                className={`text-[10px] tracking-[0.3em] uppercase -mt-1 font-sans font-semibold transition-colors ${
                  isScrolled ? "text-[#C59A41]" : "text-[#E6C687]"
                }`}
              >
                HOTEL & RESORT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#C59A41] ${
                  isScrolled ? "text-slate-700" : "text-slate-100 drop-shadow"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className={`hidden xl:flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-slate-900 bg-slate-100"
                  : "text-white/90 hover:text-white bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C59A41]" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <a
              href={siteConfig.bitzEngine.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 bg-[#0A60D9] hover:bg-[#084eb0] text-white shadow-blue-600/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve agora!</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.bitzEngine.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0A60D9] text-white"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reservar</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 text-slate-800 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-[#0A60D9] border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={siteConfig.bitzEngine.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#0A60D9] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve agora!</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-center text-sm font-medium flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0A60D9]" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
