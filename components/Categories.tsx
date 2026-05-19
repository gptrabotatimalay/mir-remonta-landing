import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/lib/data";

const SPAN_CLASS: Record<string, string> = {
  wide: "md:col-span-2 h-[240px] md:h-auto",
  tall: "md:col-span-1 h-[240px] md:h-auto",
  square: "md:col-span-1 h-[240px] md:h-auto",
};

export default function Categories() {
  return (
    <section
      id="categories"
      className="py-16 md:py-24 lg:py-36 bg-[var(--color-cream)] scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 md:gap-6 mb-10 md:mb-14 lg:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-4 md:mb-6">
              <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
              Каталог
            </div>
            <h2
              className="font-display leading-[1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
            >
              Всё для стройки
              <br />
              <span className="italic text-[var(--color-clay)]">
                и ремонта.
              </span>
            </h2>
          </div>
          <p className="lg:max-w-sm text-[var(--color-olive)] text-[15px] md:text-base leading-relaxed">
            Шесть направлений. Сотни позиций. От арматуры и цемента — до двери
            для бани и ламината 33-го класса.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3 md:auto-rows-[340px]">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`/catalog#${cat.id}`}
              className={`group relative overflow-hidden rounded-2xl bg-[var(--color-ink)] active:scale-[0.98] transition-transform ${SPAN_CLASS[cat.span]}`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
                unoptimized
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 md:from-black/80 md:via-black/15 md:to-black/5 transition-opacity duration-500" />
              <div className="absolute top-4 md:top-5 right-4 md:right-5 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--color-cream)]/15 backdrop-blur-md flex items-center justify-center text-[var(--color-cream)] group-hover:bg-[var(--color-ochre)] group-hover:text-[var(--color-ink)] transition-all duration-500">
                <ArrowUpRight
                  size={16}
                  className="group-hover:rotate-45 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 lg:p-8 text-[var(--color-cream)]">
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-[var(--color-ochre)] mb-1.5 md:mb-2">
                  {cat.subtitle}
                </div>
                <h3 className="font-display text-xl md:text-2xl lg:text-3xl leading-tight">
                  {cat.title}
                </h3>
                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-out overflow-hidden mt-3">
                  <ul className="text-sm space-y-1 text-[var(--color-cream)]/80">
                    {cat.items.slice(0, 4).map((i) => (
                      <li key={i}>— {i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
