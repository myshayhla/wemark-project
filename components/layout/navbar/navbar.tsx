"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Career", href: "#career" },
  { name: "Blog", href: "#blog" },
  { name: "xSchool", href: "#xschool" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-10 w-full px-5 md:px-15 transition-all duration-300  ${
          isScrolled
            ? "bg-[#E0E0E0] text-[#141414] py-5"
            : "bg-transparent text-[#E0E0E0] pt-[42px] pb-5"
        }`}
      >
        <nav className="flex items-center justify-between ">
          {/*logo*/}
          <a href="#" className="relative h-auto w-[102px] md:w-[122px] ">
            <Image
              src="/images/logo.png"
              alt="Wemark"
              width={122}
              height={40}
              priority
              quality={100}
              className="h-auto w-full object-contain"
            />
          </a>

          <ul className="hidden items-center gap-[25px] lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[24px] leading-[36px]  transition-opacity hover:opacity-60"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden text-[24px] leading-9  underline underline-offset-4 lg:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-[16px] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </nav>
      </header>

      {/* Mobil */}
      <div
        className={`fixed inset-0 z-50 bg-[#141414] text-[#e0e0e0] transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 justify-end text-2xl text-[#E0E0E0]  w-full mt-20"
          aria-label="Close menu"
        >
          CLOSE
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="flex h-full flex-col justify-between pt-5 px-5  ">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-12 w-fit text-2xl text-[#E0E0E0] underline underline-offset-4"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </>
  );
}
