import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderMobile from "@/components/header-mobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Just Do it",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <HeaderMobile />
        {children}
      </body>
    </html>
  );
}
