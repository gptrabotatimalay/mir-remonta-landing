import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  AtSign,
} from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function ContactBlock() {
  return (
    <section
      id="contacts"
      className="relative py-16 md:py-24 lg:py-36 bg-[var(--color-ink)] text-[var(--color-cream)] overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="font-display text-[40vw] leading-none tracking-tighter whitespace-nowrap -mt-16">
          Семей
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-ochre)] mb-4 md:mb-6">
            <span className="w-8 md:w-10 h-px bg-[var(--color-ochre)]/50" />
            Связаться
          </div>
          <h2
            className="font-display leading-[1] tracking-tight mb-6 md:mb-10"
            style={{ fontSize: "clamp(2.25rem, 8vw, 6rem)" }}
          >
            Позвоните.
            <br />
            <span className="italic text-[var(--color-ochre)]">
              Поможем подобрать.
            </span>
          </h2>
          <p className="max-w-xl text-[var(--color-cream)]/75 text-[15px] md:text-lg leading-relaxed mb-7 md:mb-10">
            Не уверены в количестве материала? Сомневаетесь в выборе бренда?
            Просто позвоните — наш продавец-консультант с опытом 10+ лет
            подскажет и посчитает.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 md:gap-3">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-14 md:h-auto md:py-[0.95rem] px-6 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] font-medium text-[15px] md:text-[0.95rem] active:scale-[0.98] hover:bg-[var(--color-cream)] transition-all"
            >
              <Phone size={16} /> {COMPANY.phone}
            </a>
            <a
              href={COMPANY.whatsapp}
              className="inline-flex items-center justify-center gap-2 h-14 md:h-auto md:py-[0.95rem] px-6 rounded-full border border-[var(--color-cream)]/40 text-[var(--color-cream)] font-medium text-[15px] md:text-[0.95rem] active:scale-[0.98] hover:bg-[var(--color-cream)] hover:text-[var(--color-ink)] hover:border-[var(--color-cream)] transition-all"
            >
              <MessageCircle size={16} /> Написать в WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-px bg-[var(--color-cream)]/10 rounded-2xl overflow-hidden">
          {[
            { Icon: MapPin, label: "Адрес", value: COMPANY.address },
            { Icon: Clock, label: "Часы работы", value: COMPANY.hours },
            { Icon: Mail, label: "Email", value: COMPANY.email },
            {
              Icon: AtSign,
              label: "Instagram",
              value: COMPANY.instagramHandle,
              href: COMPANY.instagram,
            },
          ].map(({ Icon, label, value, href }) => {
            const Inner = (
              <>
                <Icon
                  size={18}
                  className="text-[var(--color-ochre)] shrink-0 mt-1"
                />
                <div className="min-w-0">
                  <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-[var(--color-cream)]/55 mb-1">
                    {label}
                  </div>
                  <div className="text-[15px] md:text-base break-words">
                    {value}
                  </div>
                </div>
              </>
            );
            return href ? (
              <a
                key={label}
                href={href}
                className="flex gap-4 p-5 md:p-6 lg:p-7 bg-[var(--color-ink)] hover:bg-[var(--color-ink-soft)] transition-colors"
              >
                {Inner}
              </a>
            ) : (
              <div
                key={label}
                className="flex gap-4 p-5 md:p-6 lg:p-7 bg-[var(--color-ink)]"
              >
                {Inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
