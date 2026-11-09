import Image from "next/image";

export default function HomeHero() {
  return (
    <section
      id="home-hero"
      className="relative h-screen w-full overflow-hidden px-5 md:px-15 "
    >
      <Image
        src="/images/home-hero.webp"
        alt="Wemark Agency Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover  object-[60%] md:object-top z-1  "
      />
      <div className="relative z-2 flex h-full  flex-col justify-center md:pt-[40] tracking-[-0.02em] text-[#e0e0e0] text-[30px] md:text-[60px]  md:leading-20 lg:text-[116px] lg:leading-30">
        <div className="w-full text-left">
          <h1 className="hero-title">WE ANSWER FASTER</h1>
        </div>

        <div className="w-full text-center">
          <h1 className="hero-title">YOU EXPECT</h1>
        </div>

        <div className="w-full text-right">
          <h1 className="hero-title">DON’T WORRY</h1>
        </div>
      </div>
    </section>
  );
}
