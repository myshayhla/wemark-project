import type { Metadata } from "next";           
import localFont from "next/font/local";
import "./globals.css";

const hoves = localFont({
  src: "../public/fonts/TT Hoves Regular.otf",
  variable: "--font-hoves",
  weight: "400",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
  
// });

export const metadata: Metadata = {
  title: "Wemark agency ",
  description: "We mark difference ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${hoves.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
