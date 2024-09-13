"use client";
import { useState } from "react";
import { GlobalProvider } from "@/store";

import { HelperCursor } from "@/helpers";
import { Header } from "@/sections";

export const ProviderLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [positionsCursor, setPositionsCursor] = useState<{
    x: number;
    y: number;
  }>({ x: 20, y: 20 });
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./images/namurasLogo.svg" sizes="any" />
      </head>
      <body
        id="home"
        data-theme="light"
        onMouseMove={(e) => setPositionsCursor({ x: e.clientX, y: e.clientY })}
      >
        <GlobalProvider>
          <HelperCursor positions={positionsCursor} />
          <Header />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
};
