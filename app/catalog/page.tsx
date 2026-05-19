import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBlock from "@/components/ContactBlock";
import MobileCTA from "@/components/MobileCTA";
import { CATEGORIES, COMPANY } from "@/lib/data";
import { Phone, Check } from "lucide-react";

export const metadata = {
  title: "Каталог — Мир Ремонта Семей",
  description:
    "Полный каталог стройматериалов: металлопрокат, сухие смеси, профнастил, двери, ламинат, фанера. Семей.",
};

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-16 lg:pb-24 bg-[var(--color-cream)]">
          <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
            <div className="flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-olive)] mb-6 md:mb-8">
              <span className="w-8 md:w-10 h-px bg-[var(--color-ink)]/30" />
              Каталог
            </div>
            <h1
              className="font-display leading-[1] tracking-tight max-w-4xl"
              style={{ fontSize: "clamp(2.25rem, 8vw, 6rem)" }}
            >
              Шесть направлений.
              <br />
              <span className="italic text-[var(--color-clay)]">
                Сотни позиций.
              </span>
            </h1>
            <p className="mt-6 md:mt-8 text-[var(--color-olive)] text-base md:text-lg max-w-2xl leading-relaxed">
              Полный прайс присылаем в WhatsApp в течение часа. Цены обновляются
              раз в неделю — звоните, чтобы уточнить актуальные.
            </p>
            <a
              href={COMPANY.whatsapp}
              className="mt-6 md:mt-8 inline-flex items-center justify-center gap-2 h-14 md:h-auto md:py-[0.95rem] px-6 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium text-[15px] md:text-[0.95rem] w-full sm:w-auto"
            >
              <Phone size={16} /> Запросить полный прайс
            </a>
          </div>
        </section>

        {CATEGORIES.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-16 md:py-20 lg:py-28 ${
              idx % 2 === 0
                ? "bg-[var(--color-cream)]"
                : "bg-[var(--color-cream-dark)]"
            } scroll-mt-20 md:scroll-mt-24`}
          >
            <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-7 md:gap-10 lg:gap-16 items-center ${
                  idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-6 relative aspect-[5/4] md:aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-ink)]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-[var(--color-cream)]/90 backdrop-blur text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink)]">
                    0{idx + 1} / 0{CATEGORIES.length}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] md:tracking-[0.3em] text-[var(--color-ochre-dark)] mb-3 md:mb-4">
                    {cat.subtitle}
                  </div>
                  <h2
                    className="font-display leading-[1] tracking-tight mb-6 md:mb-8"
                    style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
                  >
                    {cat.title}
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 md:gap-y-3 mb-7 md:mb-10">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[var(--color-ink-soft)] text-[15px] md:text-base"
                      >
                        <Check
                          size={16}
                          className="text-[var(--color-ochre-dark)] mt-1 shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3">
                    <a
                      href={COMPANY.whatsapp}
                      className="inline-flex items-center justify-center gap-2 h-14 md:h-auto md:py-[0.95rem] px-6 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] font-medium text-[15px] md:text-[0.95rem] active:scale-[0.98] transition-transform"
                    >
                      Узнать цену
                    </a>
                    <a
                      href={COMPANY.phoneHref}
                      className="inline-flex items-center justify-center gap-2 h-14 md:h-auto md:py-[0.95rem] px-6 rounded-full border border-[var(--color-ink)]/20 text-[var(--color-ink)] font-medium text-[15px] md:text-[0.95rem] active:scale-[0.98] transition-transform"
                    >
                      <Phone size={16} /> {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <ContactBlock />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
