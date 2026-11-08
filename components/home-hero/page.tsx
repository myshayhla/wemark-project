import Image from "next/image";
import './style.css'

export default function HomeHero() {
  return (
    <section
      id="home-hero"
      className="relative h-screen w-full overflow-hidden px-5 md:px-15 "
    >
      <Image
        src="/images/home-hero.webp "
        alt="Wemark Agency Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:object-top z-1  "
      />
      <div className="relative z-10 flex h-full  flex-col justify-center border  md:pt-[150px]">
        <div className="w-full text-left">
          <h1 className="hero-title">WE ANSWER FASTER</h1>
        </div>

        <div className="w-full text-center">
          <h1 className="hero-title">YOU EXPECT</h1>
        </div>

        <div className="w-full text-right">
          <h1 className="hero-title">EXPERIENCES</h1>
        </div>
      </div>
    </section>
  );
}
