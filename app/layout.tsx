import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const font = Roboto_Mono({ subsets: ["latin"] });

import Navbar from "@/components/navbar";
import Container from "@/components/ui/container";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Speedbanana | A minimalistic, customizable speed typing arena",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-900 text-neutral-400 select-none flex flex-col justify-between min-h-screen ${font.className}`}
      >
        <Navbar />

        <Container>
          <main>{children}</main>
        </Container>

        <Footer />
      </body>
    </html>
  );
}
