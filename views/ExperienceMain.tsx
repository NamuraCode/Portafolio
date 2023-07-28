import { Experience } from "@/components";
import { useAppSelector } from "@/store/hook/useRedux";
import { getInfo } from "@/utils";

export const ExperienceMain = () => {
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { experience } = getInfo();
  return (
    <section className="experience-main">
      <h2 className="experience-title">{experience[indexLanguage]}</h2>
      <Experience />
    </section>
  );
};
