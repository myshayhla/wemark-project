'use client';
import { useState } from "react";
import parse from "html-react-parser";

import type { XschoolData } from "@/types/xcschool";

interface FaqProps {
  data: XschoolData;
}

export default function Faq({ data }: FaqProps) {
      const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
      <section id="faq" className="px-5 pt-20 md:px-15 md:pt-36">
        <h1 className="border-b border-[#10101580] pb-10 text-[24px] font-medium uppercase md:pb-[100px] md:text-[46px] md:leading-[100px] lg:text-[90px]">
          {data.faq_title.slice(0, 10)} <br />
          {data.faq_title.slice(10)}
        </h1>

        <div>
          {data.xschool_faq?.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-[#10101580]">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[22px] font-medium leading-[32px] text-[#14141A] md:text-[30px] md:leading-[44px]">
                    {parse(faq.question)}
                  </span>

                  <svg
                    viewBox="0 0 38 38"
                    width="38"
                    height="38"
                    className="h-[30px] w-[30px] shrink-0 md:h-[38px] md:w-[38px]"
                    fill="none"
                  >
                    <path d="M0 19H38" stroke="#14141A" strokeWidth="1.5" />
                    <path
                      d="M19 0V38"
                      stroke="#14141A"
                      strokeWidth="1.5"
                      className={`origin-center transition-transform duration-300 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`pb-6 text-[22px] leading-[32px] text-[#10101580] font-light transition-opacity duration-300 md:text-[30px] md:leading-[44px] ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {parse(faq.answer)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
}
