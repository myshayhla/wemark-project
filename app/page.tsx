import About from "@/components/about/about";
import HomeHero from "@/components/hero/hero";
import Navbar from "@/components/layout/navbar/navbar";
import Image from "next/image";
import { getXschoolData } from "@/lib/api";
import Founder from "@/components/founder/founder";
import Program from "@/components/program/page";
import Quote from "@/components/quotes/page";
import Faq from "@/components/faq/faq";
import Footer from "@/components/layout/footer/footer";
export const instant = false;

export default async function Home() {
  const apiData = await getXschoolData();

  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <About data={apiData} />
        <Founder data={apiData} />
        <Program data={apiData} />
        <Quote />
        <Faq data={apiData}/>
      </main>
      <Footer/>
    </>
  );
}
