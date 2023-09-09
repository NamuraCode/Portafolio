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
    const widthContent = contentExperience.current.offsetWidth;
    const expStyle = contentExperience.current.style;

    if (indexLanguage == 0) {
      setBarExpWidth(
        nameExperience,
        expStyle,
        widthContent,
        widthDev,
        widthModel
      );
    } else {
      setBarExpWidth(
        nameExperience,
        expStyle,
        widthContent,
        widthDev,
        widthModel
      );
    }
    expStyle.setProperty("--expWidth", `${widthDev + widthModel + 48}px`);
  }, [nameExperience, indexLanguage]);
};

const setBarExpWidth = (
  nameExperience: string,
  expStyle: CSSStyleDeclaration,
  widthContent: number,
  widthDev: number,
  widthModel: number
) => {
  if (nameExperience.toLowerCase() === "dev") {
    expStyle.setProperty("--barExperienceWidth", `${widthDev}px`);
    expStyle.setProperty("--barExperienceLeft", `0px`);
  }
  if (nameExperience.toLowerCase() === "model") {
    const move = widthContent - (widthModel + 48);
    expStyle.setProperty("--barExperienceWidth", `${widthModel}px`);
    expStyle.setProperty("--barExperienceLeft", `${move}px`);
  }
};
