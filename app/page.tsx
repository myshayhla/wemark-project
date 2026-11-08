import HomeHero from "@/components/home-hero/page";
import Navbar from "@/components/layout/navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
      </main>
    </>
  );
}
