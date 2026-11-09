import Image from "next/image";
import Link from "next/link";

const sitemap = [
  { title: "Case Studies", href: "#case-studies" },
  { title: "Services", href: "#services" },
  { title: "About", href: "#about" },
  { title: "Career", href: "#career" },
  { title: "Blog", href: "#blog" },
  { title: "News", href: "#news" },
  { title: "Vacancies", href: "#vacancies" },
];

const socials = [
  { title: "Instagram", href: "https://instagram.com" },
  { title: "LinkedIn", href: "https://linkedin.com" },
  { title: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-20 bg-[#14141A] px-5 py-10 text-[#E0E0E0] md:mt-50 md:px-[60px] md:py-20"
    >
      <div className="flex flex-col gap-12 md:flex-row md:justify-between">
        <div className="grid grid-cols-2 gap-8 md:flex md:gap-20">
          <div>
            <h3 className="mb-5 text-[24px] font-medium leading-[32px] md:text-[30px] md:leading-[40px]">
              Sitemap
            </h3>

            <ul className="flex flex-col gap-3">
              {sitemap.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block text-[18px] leading-[28px] text-[#e0e0e080] md:text-[24px] md:leading-[36px]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[24px] font-medium leading-[32px] md:text-[30px] md:leading-[40px]">
              Follow us on
            </h3>

            <ul className="flex flex-col gap-3">
              {socials.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[18px] leading-[28px] text-[#e0e0e080] md:text-[24px] md:leading-[36px]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row md:gap-20">
          <div>
            <h3 className="mb-5 text-[24px] font-medium leading-[32px] md:text-[30px] md:leading-[40px]">
              Office
            </h3>

            <p className="text-[18px] leading-[28px] text-[#e0e0e080] md:text-[24px] md:leading-[36px]">
              Alibeyov Gardashlari 27,
              <br />
              Sabail, Sabah Residence
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[24px] font-medium leading-[32px] md:text-[30px] md:leading-[40px]">
              For partnerships
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="mailto:partnership@wemark.az"
                className="text-[18px] leading-[28px] text-[#e0e0e080] md:text-[24px] md:leading-[36px]"
              >
                partnership@wemark.az
              </Link>

              <Link
                href="tel:+994515555555"
                className="text-[18px] leading-[28px] text-[#e0e0e080] md:text-[24px] md:leading-[36px]"
              >
                +994 51 555 55 55
              </Link>
            </div>
          </div>
        </div>

        {/* ox (scrol animasiya add olunmalidi) */}
        <Link
          href="#top"
          aria-label="Back to top"
          className="flex h-12 w-12 items-center justify-center self-end md:self-start"
        >
          <Image
            src="/images/arrow-top.svg"
            alt=""
            width={75}
            height={58}
            className="transition-transform duration-300 hover:-translate-y-1"
          />
        </Link>
      </div>
      <div className="mt-15 border-t border-[#e0e0e080] py-10 md:py-15">
        <div className="w-[90%] md:w-[80%] m-auto">
          <Image
            src="/images/footer-logo.png"
            alt="Wemark"
            width={1200}
            height={300}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  items-start md:items-center gap-4 justify-between">
        <div className="flex gap-4 text-[#e0e0e080]">
          <p>Copyright © 2024 Wemark</p>
          <p>terms & privacy</p>
        </div>
        <div className="flex items-center gap-2  ">
          <Image
            src="/images/globe.svg"
            alt=""
            width={24}
            height={24}
            className="transition-transform duration-300 hover:-translate-y-1"
          />
          <span className="uppercase">AZərbaycan dİLİ</span>
        </div>
      </div>
    </footer>
  );
}
