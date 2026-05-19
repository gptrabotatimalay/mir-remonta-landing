import Image from "next/image";
import { COMPANY } from "@/lib/data";

export default function Warehouse() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-36 bg-[var(--color-cream)] scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 relative aspect-[5/4] rounded-2xl overflow-hidden bg-[var(--color-ink)]">
          <Image
            src="/images/warehouse-exterior.jpg"
            alt="Склад в Семее"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute top-4 md:top-6 left-4 md:left-6 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-[var(--color-cream)]/90 backdrop-blur text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink)]">
            Наш склад · {COMPANY.city}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-4 md:mb-6">
            <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />О
            компании
          </div>
          <h2
            className="font-display leading-[1] tracking-tight mb-5 md:mb-8"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Местные.
            <br />
            <span className="italic text-[var(--color-clay)]">
              С {COMPANY.since} года.
            </span>
          </h2>
          <div className="space-y-4 md:space-y-5 text-[var(--color-ink-soft)] text-[15px] md:text-base leading-relaxed">
            <p>
              «Мир Ремонта» — это не маркетплейс. Это склад в Семее, куда вы
              можете приехать, посмотреть, потрогать и забрать.
            </p>
            <p>
              За 17 лет мы собрали ассортимент, который закрывает 90% задач
              прораба и частника: от арматуры до дверной фурнитуры. Без долгих
              ожиданий, без удивляющих чеков.
            </p>
            <p
              className="text-[var(--color-ochre-dark)] font-medium italic font-display"
              style={{ fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)" }}
            >
              «Если у кого-то дешевле — мы хотим знать. И сделаем не выше.»
            </p>
          </div>

          <div className="mt-7 md:mt-10 pt-6 md:pt-8 border-t border-black/10 grid grid-cols-2 gap-5 md:gap-6">
            <div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-[var(--color-olive)] mb-1.5">
                Адрес
              </div>
              <div className="text-[14px] md:text-sm">{COMPANY.address}</div>
            </div>
            <div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em] text-[var(--color-olive)] mb-1.5">
                Часы работы
              </div>
              <div className="text-[14px] md:text-sm">{COMPANY.hours}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
