import Image from "next/image";
import { ArrowDown, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col overflow-hidden grain"
      style={{ minHeight: "100svh" }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Склад стройматериалов"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream)]/75 via-[var(--color-ink)]/45 to-[var(--color-ink)]/90 md:from-[var(--color-cream)]/80 md:via-[var(--color-ink)]/30 md:to-[var(--color-ink)]/85" />
      </div>

      <div className="relative z-10 flex-1 flex items-center max-w-[1400px] mx-auto w-full px-5 md:px-6 lg:px-10 pt-24 md:pt-32 pb-10 md:pb-12">
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-12 w-full">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-ink)]/75 reveal">
            <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/40" />С{" "}
            {COMPANY.since} года · {COMPANY.city}
          </div>

          <h1
            className="font-display leading-[1] tracking-tight text-[var(--color-cream)] max-w-[16ch] reveal"
            style={{ fontSize: "clamp(2.25rem, 7.5vw, 6.5rem)" }}
          >
            <span className="text-[var(--color-ink)]">Строим</span>
            <br />
            <span className="italic">Семей</span> вместе.
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 reveal">
            <p
              className="text-[15px] md:text-lg lg:text-xl text-[var(--color-cream)] max-w-md leading-relaxed"
              style={{ textShadow: "0 1px 12px rgba(26,26,24,0.5)" }}
            >
              Магазин стройматериалов с собственным складом.
              <br />
              <span className="text-[var(--color-ochre)] font-medium">
                Качество на складе. Цена на месте.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 md:gap-3 w-full lg:w-auto">
              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 h-14 md:h-auto md:py-[0.95rem] px-6 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] font-medium text-[15px] md:text-[0.95rem] active:scale-[0.98] hover:bg-[var(--color-cream)] transition-all"
              >
                Смотреть каталог
                <ArrowDown size={16} />
              </a>
              <a
                href={COMPANY.whatsapp}
                className="inline-flex items-center justify-center gap-2 h-14 md:h-auto md:py-[0.95rem] px-6 rounded-full border border-[var(--color-cream)]/50 text-[var(--color-cream)] font-medium text-[15px] md:text-[0.95rem] active:scale-[0.98] hover:bg-[var(--color-cream)] hover:text-[var(--color-ink)] hover:border-[var(--color-cream)] transition-all"
              >
                Прайс в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[var(--color-cream)]/15 bg-[var(--color-ink)]/60 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 text-[var(--color-cream)]">
          {[
            { v: "17+", l: "лет в Семее" },
            { v: "1 200 м²", l: "склад" },
            { v: "60+", l: "категорий" },
            { v: "1 час", l: "доставка" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`py-4 md:py-6 lg:py-8 px-1 lg:px-4 border-[var(--color-cream)]/10 ${
                i < 2 ? "border-b lg:border-b-0" : ""
              } ${i % 2 === 0 ? "border-r" : "lg:border-r"} ${
                i === 3 ? "lg:border-r-0" : ""
              }`}
            >
              <div
                className="font-display text-[var(--color-ochre)] leading-none"
                style={{ fontSize: "clamp(1.6rem, 5vw, 3rem)" }}
              >
                {s.v}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest mt-1.5 md:mt-2 opacity-75">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-20 md:top-28 right-4 md:right-6 lg:right-10 z-10 hidden md:flex flex-col items-end gap-2 text-xs uppercase tracking-[0.25em] text-[var(--color-ink)]/70">
        <div className="flex items-center gap-2">
          <MapPin size={12} /> ул. Чайковского 71А
        </div>
        <div className="flex items-center gap-2">
          <Clock size={12} /> 09:00 – 18:00
        </div>
      </div>
    </section>
  );
}
