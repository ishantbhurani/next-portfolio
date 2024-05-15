import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
