"use client";
import { Analytics } from "@vercel/analytics/next";
import { GlobalProvider } from "@/store";
import { Montserrat } from "next/font/google";

import { HelperCursor } from "@/helpers";
import { Header } from "@/sections";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const ProviderLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={montserrat.variable}>
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
