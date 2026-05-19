import { PROMOS, COMPANY } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Promo() {
  return (
    <section
      id="promo"
      className="py-16 md:py-24 lg:py-32 bg-[var(--color-cream-dark)] scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 md:gap-6 mb-10 md:mb-14 lg:mb-20">
          <div>
            <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-4 md:mb-6">
              <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
              Сейчас выгодно
            </div>
            <h2
              className="font-display leading-[1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
            >
              Акции
              <br />
              <span className="italic text-[var(--color-clay)]">
                этой недели.
              </span>
            </h2>
          </div>
          <a
            href={COMPANY.whatsapp}
            className="inline-flex items-center justify-center gap-2 h-14 md:h-auto md:py-[0.95rem] px-6 rounded-full border border-[var(--color-ink)]/20 text-[var(--color-ink)] font-medium text-[15px] md:text-[0.95rem] w-full sm:w-auto self-start lg:self-end active:scale-[0.98] transition-transform"
          >
            Запросить актуальный прайс
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {PROMOS.map((p) => (
            <div
              key={p.title}
              className="group relative bg-[var(--color-cream)] rounded-2xl p-6 md:p-8 min-h-[220px] md:min-h-[300px] flex flex-col justify-between gap-6 border border-black/5 hover:border-[var(--color-ochre)] hover:shadow-[var(--shadow-lift)] transition-all duration-500"
            >
              <div className="flex justify-between items-start">
                <div className="inline-flex px-3 py-1 rounded-full bg-[var(--color-ochre)] text-[var(--color-ink)] text-[11px] font-medium uppercase tracking-wider">
                  {p.badge}
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-[var(--color-olive)] group-hover:text-[var(--color-ink)] group-hover:rotate-45 transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-2 md:mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-[14px] md:text-sm text-[var(--color-olive)] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
