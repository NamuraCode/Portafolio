"use client";
import { Analytics } from "@vercel/analytics/next";
import { GlobalProvider } from "@/store";
import { Montserrat, Alumni_Sans, Onest } from "next/font/google";

import { HelperCursor } from "@/helpers";
import { Header } from "@/sections";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const alumniSans = Alumni_Sans({
  subsets: ["latin"],
  variable: "--font-alumni-sans",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const ProviderLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${montserrat.variable} ${alumniSans.variable} ${onest.variable}`}>
      <head>
        <link rel="icon" href="./images/namurasLogo.svg" sizes="any" />
      </head>
      <body
        id="home"
        data-theme="light"
      >
        <Analytics />
        <GlobalProvider>
          <HelperCursor />
          <Header />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
};
