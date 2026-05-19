import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsMarquee from "@/components/BrandsMarquee";
import Categories from "@/components/Categories";
import Promises from "@/components/Promises";
import Warehouse from "@/components/Warehouse";
import Promo from "@/components/Promo";
import ContactBlock from "@/components/ContactBlock";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandsMarquee />
        <Categories />
        <Promises />
        <Warehouse />
        <Promo />
        <ContactBlock />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
