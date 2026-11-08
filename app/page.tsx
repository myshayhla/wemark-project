import About from "@/components/about/page";
import HomeHero from "@/components/home-hero/page";
import Navbar from "@/components/layout/navbar/page";
import Image from "next/image";
import { getXschoolData } from "@/lib/api";
import Founder from "@/components/founder/page";
import Program from "@/components/program/page";

export default async function Home() {
  const apiData = await getXschoolData();

  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <About data={apiData} />
        <Founder data={apiData} />
        <Program data={apiData}/>
      </main>
    </>
  );
}
