import {
  About,
  Background,
  Contact,
  Experience,
  HomeContent,
  LoaderLogo,
  Projects,
} from "@/sections";

export const HomePage = () => {
  return (
    <>
      <Background />
      <HomeContent />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* <LoaderLogo /> */}
    </>
  );
};
