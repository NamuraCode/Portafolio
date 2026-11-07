import type { Metadata } from "next";
import "./globals.css";
import { ProviderLayout } from "@/layouts/ProviderLayout";

const description =
  "Portfolio of David Naranjo, Full Stack Developer from Medellín, Colombia. Node.js and Express APIs, SQL and NoSQL databases, and fast React, Next.js and Three.js interfaces.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.naranjodavid.com"),
  title: "David Naranjo · Full Stack Developer",
  description,
  keywords: [
    "David Naranjo",
    "Full Stack Developer",
    "Node.js",
    "Express",
    "TypeScript",
    "Next.js",
    "React",
    "Three.js",
    "Portfolio",
  ],
  authors: [{ name: "David Naranjo" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "David Naranjo · Full Stack Developer",
    description,
    siteName: "David Naranjo",
    images: ["/images/projects/ProfileWeb1.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Naranjo · Full Stack Developer",
    description,
    images: ["/images/projects/ProfileWeb1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProviderLayout>{children}</ProviderLayout>;
}
