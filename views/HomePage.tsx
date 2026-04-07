import {
  About,
  Background,
  Contact,
  Experience,
  HomeContent,
  LoaderLogo,
  Projects,
} from "@/sections";
import Footer from "@/sections/Footer/Footer";
import ReactLenis from "lenis/react";

export const HomePage = () => {
  return (
    <>
      <ReactLenis root options={{duration: 0.6}} />
      <LoaderLogo />
      <Background />
      <HomeContent />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
