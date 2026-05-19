"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";
import InstagramIcon from "./InstagramIcon";

export default function MobileCTA() {
  return (
    <>
      {/* MOBILE — нижняя панель Позвонить + WhatsApp, всегда видна */}
      <div
        className="md:hidden fixed left-3 right-3 z-40 flex gap-2"
        style={{ bottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <a
          href={COMPANY.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 h-[52px] rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium text-[14px] ring-1 ring-[var(--color-cream)]/35 shadow-[0_8px_30px_rgba(0,0,0,0.3)] active:scale-[0.97] transition-transform"
        >
          <Phone size={16} /> Позвонить
        </a>
        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-pulse flex-1 flex items-center justify-center gap-2 h-[52px] rounded-full bg-[#25D366] text-white font-medium text-[14px] active:scale-[0.97] transition-transform"
        >
          <WhatsAppIcon size={18} /> WhatsApp
        </a>
      </div>

      {/* DESKTOP — плавающие круги справа внизу */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-40 flex-col gap-3">
        <a
          href={COMPANY.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="bg-instagram w-14 h-14 flex items-center justify-center rounded-full text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 transition-transform"
        >
          <InstagramIcon size={22} />
        </a>
        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="wa-pulse w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-105 active:scale-95 transition-transform"
        >
          <WhatsAppIcon size={24} />
        </a>
        <a
          href={COMPANY.phoneHref}
          aria-label="Позвонить"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] ring-1 ring-[var(--color-cream)]/30 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-transform"
        >
          <Phone size={20} />
        </a>
      </div>
    </>
  );
}
