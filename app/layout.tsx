import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishant Bhurani | Developer Portfolio",
  description:
    "Ishant Bhurani is a full-stack developer and freelancer with experience in various domains, such as electronics, Arduino microcontrollers, Internet of Things (IoT), Home Automation, Python development, Web Development, Mobile Development, and Flutter Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute h-[31.25rem] w-[31.25rem] -z-10 rounded-full -top-24 right-44 blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute h-[31.25rem] w-[50rem] -z-10 rounded-full -top-4 -left-[35rem] right-44 blur-[10rem] sm:w-[68.75rem] md:-left-[33rem] lg:-left-[28rem] xl:-left-60 2xl:-left-20 dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
