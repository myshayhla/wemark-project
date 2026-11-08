import Marquee from "react-fast-marquee";

export default function Quote() {
  return (
    <section className="">
      <div className="border border-[#10101580]">
        <Marquee direction="left" speed={60}>
          <span className="text-[30px] md:text-[40px] lg:text-[60px] font-medium text-[#17171D]">
            WE BRING EFFECT
          </span>
          <span className="mx-10 text-[30px] md:text-[40px] lg:text-[60px] text-red-500">
            *
          </span>
          <span className="text-[30px] md:text-[40px] lg:text-[60px] font-medium text-[#17171D]">
            WE MAKE DIFFERENCE
          </span>
          <span className="mx-10 text-[30px] md:text-[40px] lg:text-[60px] text-red-500">
            *
          </span>
          <span className="text-[30px] md:text-[40px] lg:text-[60px] font-medium text-[#17171D]">
            WE CARE
          </span>
          <span className="mx-10 text-[30px] md:text-[40px] lg:text-[60px] text-red-500">
            *
          </span>
        </Marquee>
      </div>

      <div className="border border-[#10101580]">
        <Marquee direction="right" speed={60}>
          <span className="text-[30px] md:text-[40px] lg:text-[60px] font-medium text-[#17171D]">
            WE BRING EFFECT
          </span>
          <span className="mx-10 text-[30px] md:text-[40px] lg:text-[60px] text-red-500">
            *
          </span>
          <span className="text-[30px] md:text-[40px] lg:text-[60px] font-medium text-[#17171D]">
            WE MAKE DIFFERENCE
          </span>
          <span className="mx-10 text-[30px] md:text-[40px] lg:text-[60px] text-red-500">
            *
          </span>
          <span className="text-[30px] md:text-[40px] lg:text-[60px] font-medium text-[#17171D]">
            WE CARE
          </span>
          <span className="mx-10 text-[30px] md:text-[40px] lg:text-[60px] text-red-500">
            *
          </span>
        </Marquee>
      </div>
    </section>
  );
}
