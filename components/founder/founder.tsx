import Image from "next/image";
import type { XschoolData } from "@/types/xcschool";

interface FounderProps {
  data: XschoolData;
}

export default function Founder({ data }: FounderProps) {
  return (
    <section id="founder" className="px-5 py-20 md:px-[60px] md:py-36">
      <h1 className="mb-10  uppercase md:mb-20 text-[24px] md:text-[46px] lg:text-[90px] font-medium">
        FOUNDER
      </h1>

      {data.founders.map((founder, index) => (
        <div
          key={index}
          className="flex flex-col gap-8 xl:flex-row md:items-center md:gap-[115px]"
        >
          <div className="relative w-full shrink-0 md:w-[522px]">
            {/* LEFT */}
            <Image
              src={founder.image}
              alt={founder.name}
              width={522}
              height={522}
              className="aspect-square w-full object-cover"
            />

            <div className="absolute bottom-6 left-1/2 flex w-[289px] -translate-x-1/2 flex-col rounded-md bg-[#E0E0E0] px-5 py-2.5">
              <h3 className="text-base font-medium">{founder.name}</h3>
              <p className="text-sm">{founder.position}</p>
            </div>
          </div>
          {/* right . */}

          <div className="flex-1">
            <h2 className="mb-6 text-[26px] leading-[42px] text-[#14141A] md:text-[36px] md:leading-[62px]  uppercase w-[250px] lg:w-[450px]">
              {founder.title}
            </h2>

            <p className="text-[20px] leading-[32px] text-[#141414] md:text-[24px] md:leading-[44px]">
              {founder.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
