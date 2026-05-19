import { PROMISES } from "@/lib/data";

export default function Promises() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[var(--color-ink)] text-[var(--color-cream)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="max-w-3xl mb-10 md:mb-16 lg:mb-24">
          <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-ochre)] mb-4 md:mb-6">
            <span className="w-8 md:w-10 h-px bg-[var(--color-ochre)]/50" />
            Почему к нам
          </div>
          <h2
            className="font-display leading-[1] tracking-tight"
            style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
          >
            Четыре простых
            <br />
            <span className="italic text-[var(--color-ochre)]">обещания.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-cream)]/10">
          {PROMISES.map((p) => (
            <div
              key={p.n}
              className="bg-[var(--color-ink)] p-6 md:p-8 lg:p-10 min-h-[200px] md:min-h-[280px] flex flex-col justify-between gap-5 md:gap-0 hover:bg-[var(--color-ink-soft)] transition-colors duration-500 group"
            >
              <div className="font-display text-xl md:text-2xl text-[var(--color-ochre)]/70 group-hover:text-[var(--color-ochre)] transition-colors">
                {p.n}
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-[14px] md:text-sm leading-relaxed text-[var(--color-cream)]/70">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
