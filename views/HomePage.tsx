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

export const HomePage = () => {
  return (
    <>
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
