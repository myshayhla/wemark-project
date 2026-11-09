import Image from "next/image";
import type { XschoolData } from "@/types/xcschool";

interface ProgramProps {
  data: XschoolData;
}

export default function Program({ data }: ProgramProps) {
  return (
    <section id="program" className="px-5 py-20 md:px-[60px] md:py-18">
      <div>
        {data.programs.map((program, index) => (
          <div key={index}>
            <div
              className="mb-10  uppercase text-[24px] md:text-[46px] lg:text-[90px] font-medium"
              dangerouslySetInnerHTML={{
                __html: program.title,
              }}
            ></div>

            <div
              className="program-description text-[20px] md:text-[30px]"
              dangerouslySetInnerHTML={{
                __html: program.description,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
