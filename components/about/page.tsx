"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { XschoolData } from "@/types/xcschool";

interface AboutProps {
  data: XschoolData;
}

export default function About({ data }: AboutProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Automatic slider
  useEffect(() => {
    const imageCount = data.about_images.length;

    if (imageCount <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imageCount);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.about_images.length]);

  // Center active image responsively
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const updatePosition = () => {
      const activeSlide = slider.children[activeIndex] as
        | HTMLElement
        | undefined;

      if (!activeSlide) return;

      const sliderWidth = slider.clientWidth;
      const slideCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2;

      setTranslateX(sliderWidth / 2 - slideCenter);
    };

    updatePosition();

    const observer = new ResizeObserver(updatePosition);
    observer.observe(slider);

    return () => observer.disconnect();
  }, [activeIndex, data.about_images.length]);

  return (
    <section id="about" className=" pt-20 md:pt-36 px-5 md:px-15  ">
      <div className="content  flex flex-col gap-10 md:gap-20">
        <div className="flex justify-between items-end text-[#14141A]">
          <h1 className=" text-[24px] md:text-[46px] lg:text-[90px] font-medium md:leading-[100px] uppercase w-50">
            {data.about_title}
          </h1>

          <Link href="#contact" className="hidden md:block text-2xl underline">
            Go to xSchool
          </Link>
        </div>

        <p className="text-[20px] leading-[28px] md:text-[30px] md:leading-normal whitespace-pre-line">
          {data.about_description}
        </p>
      </div>

      {/* Image Carousel */}
      <div className="w-full overflow-hidden mt-10 md:mt-20">
        <div
          ref={sliderRef}
          className="flex gap-[50px] transition-transform duration-700 ease-in-out"
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
          }}
        >
          {data.about_images.map((image, index) => (
            <div
              key={index}
              className="relative h-[250px] w-[calc(100vw-60px)] max-w-[700px] shrink-0 md:h-[400px]"
            >
              <Image
                src={image.image}
                alt={"image "}
                fill
                sizes="(max-width: 768px) 60vw, 700px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
