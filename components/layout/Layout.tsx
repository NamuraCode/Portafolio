import { MouseEvent, useState } from "react";
import { Provider } from "react-redux";
import Head from "next/head";

import { LayoutProps, Cursor } from "@/interfaces";
import { CustomCursor } from "@/helpers";
import { store } from "@/store/store";

import styles from "@/styles/Home.module.css";

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({
  children,
  description = "Information about",
  keywords = "fullstack, react, nextjs, nodejs, javascript, typescript, developer, web, mobile, app, David Naranjo",
  title = "David Naranjo, Fullstack Developer",
}: LayoutProps) => {
  const [cursorPositions, setCursorPositions] = useState<Cursor>({
    left: 0,
    top: 0,
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="David Naranjo" />
        <meta name="description" content={`${description} ${title}`} />
        <meta name="keywords" content={`${keywords}`} />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`${description} ${title}`} />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        className={styles["main-namura"]}
        onMouseMove={(e) => {
          setCursorPositions({ left: e.pageX, top: e.pageY });
        }}
      >
        <Provider store={store}>{children}</Provider>
        <CustomCursor left={cursorPositions.left} top={cursorPositions.top} />
      </main>
    </>
  );
};
