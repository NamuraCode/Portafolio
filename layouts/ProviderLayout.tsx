"use client";
import { Header } from "@/sections";
import { GlobalProvider } from "@/store";

export const ProviderLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./images/namurasLogo.svg" sizes="any"/>
      </head>
      <body id="home" data-theme="dark">
        <GlobalProvider>
            <Header />
            {children}
        </GlobalProvider>
      </body>
    </html>
  );
};
