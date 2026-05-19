import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Мир Ремонта — стройматериалы в Семее",
  description:
    "Магазин стройматериалов в Семее. Металлопрокат, сухие смеси, профнастил, двери, ламинат, фанера, ОСБ. Качество на складе, цена на месте.",
  metadataBase: new URL("https://rusles.kz"),
  openGraph: {
    title: "Мир Ремонта — стройматериалы в Семее",
    description:
      "Всё для стройки и ремонта в одном месте. Семей, ул. Чайковского 71А.",
    type: "website",
    locale: "ru_KZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
