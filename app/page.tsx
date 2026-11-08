import About from "@/components/about/page";
import HomeHero from "@/components/home-hero/page";
import Navbar from "@/components/layout/navbar/page";
import Image from "next/image";
import { getXschoolData } from "@/lib/api";

export default async function Home() {
  const aboutData = await getXschoolData();

  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <About data={aboutData} />
      </main>
    </>
  );
}
