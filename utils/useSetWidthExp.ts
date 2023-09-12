"use client";

import { RefObject } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export const useSetWidthExp = (
  devRef: RefObject<HTMLAnchorElement>,
  modelRef: RefObject<HTMLAnchorElement>,
  contentExperience: RefObject<HTMLDivElement>,
  nameExperience: string,
  indexLanguage: number
) => {
  useIsomorphicLayoutEffect(() => {
    if (!modelRef.current || !devRef.current || !contentExperience.current)
      return;
    const widthDev = devRef.current.offsetWidth;
    const widthModel = modelRef.current.offsetWidth;
    const expStyle = contentExperience.current.style;

    setBarExpWidth(
      widthModel,
      widthDev,
      nameExperience,
      indexLanguage,
      expStyle
    );
    expStyle.setProperty("--expWidth", `${widthDev + widthModel + 48}px`);
  }, [nameExperience, indexLanguage]);
};

const setBarExpWidth = (
  widthModel: number,
  widthDev: number,
  nameExperience: string,
  indexLanguage: number,
  expStyle: CSSStyleDeclaration
) => {
  if (nameExperience.toLowerCase() === "dev") {
    expStyle.setProperty("--barExperienceWidth", `${widthDev}px`);
    expStyle.setProperty("--barExperienceLeft", `0px`);
  }
  if (nameExperience.toLowerCase() === "model" && indexLanguage == 0) {
    expStyle.setProperty("--barExperienceWidth", `${widthModel}px`);
    expStyle.setProperty("--barExperienceLeft", `${47}%`);
  }
  if (nameExperience.toLowerCase() === "model" && indexLanguage == 1) {
    expStyle.setProperty("--barExperienceWidth", `${widthModel}px`);
    expStyle.setProperty("--barExperienceLeft", `${50}%`);
  }
};
