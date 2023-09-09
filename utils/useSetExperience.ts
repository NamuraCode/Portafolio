import { RefObject } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export const useSetExperience = (
  devRef: RefObject<HTMLAnchorElement>,
  modelRef: RefObject<HTMLAnchorElement>,
  contentExperience: RefObject<HTMLDivElement>,
  nameExperience: string
) => {
  useIsomorphicLayoutEffect(() => {
    console.log(nameExperience);

    if (nameExperience === "dev") {
      const widthDev = devRef.current?.offsetWidth;
      contentExperience.current?.style.setProperty(
        "--barExperienceWidth",
        `${widthDev}px`
      );
      contentExperience.current?.style.setProperty(
        "--barExperienceLeft",
        `0px`
      );
    }

    if (nameExperience === "model") {
      const widthContent = contentExperience.current?.offsetWidth;
      const move = widthContent!! - (modelRef.current?.offsetWidth! + 48);
      const widthModel = modelRef.current?.offsetWidth;
      contentExperience.current?.style.setProperty(
        "--barExperienceWidth",
        `${widthModel}px`
      );
      contentExperience.current?.style.setProperty(
        "--barExperienceLeft",
        `${move}px`
      );
    }
  }, []);
};

const setContentWidth = (
  devRef: RefObject<HTMLAnchorElement>,
  modelRef: RefObject<HTMLAnchorElement>,
  contentExperience: RefObject<HTMLDivElement>,
  nameExperience: string
) => {
  if (nameExperience === "dev") {
    const widthDev = devRef.current?.offsetWidth;
    contentExperience.current?.style.setProperty(
      "--barExperienceWidth",
      `${widthDev}px`
    );
    contentExperience.current?.style.setProperty("--barExperienceLeft", `0px`);
  }
  if (nameExperience === "model") {
    const widthContent = contentExperience.current?.offsetWidth;
    const move = widthContent!! - (modelRef.current?.offsetWidth! + 48);
    const widthModel = modelRef.current?.offsetWidth;
    contentExperience.current?.style.setProperty(
      "--barExperienceWidth",
      `${widthModel}px`
    );
    contentExperience.current?.style.setProperty(
      "--barExperienceLeft",
      `${move}px`
    );
  }
};
