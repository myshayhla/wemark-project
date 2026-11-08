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
        className={`fixed top-0 left-0 z-10 w-full px-5 md:px-15 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0f121d]/90 py-5 backdrop-blur-md"
            : "bg-transparent pt-[42px] pb-5"
        }`}
      >
        <nav className="flex items-center justify-between ">
          {/*logoh */}
          <a href="#" className="relative h-auto w-[102px] md:w-[122px] border">
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
                  className="text-[24px] leading-[36px] text-[#E0E0E0] transition-opacity hover:opacity-60"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden text-[24px] leading-9 text-[#E0E0E0] underline underline-offset-4 lg:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 text-[16px] text-white lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#0f121d] transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-5 pt-20">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl text-[#E0E0E0]"
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
