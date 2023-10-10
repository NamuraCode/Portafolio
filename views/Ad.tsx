import { setLanguage, useAppDispatch, useAppSelector } from "@/store";
import { getInfo } from "@/utils";
import mainStyles from "@/styles/MainStyles.module.css";
import { useState } from "react";

export const Ad = () => {
  const [languageNumber, setLanguageNumber] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { ad, language } = getInfo();

  return (
    <article className={mainStyles['ad']}>
      <h4>{ad[indexLanguage]}</h4>
      <button
        className={mainStyles['btn']}
        onClick={() => {
          setLanguageNumber(!languageNumber);
          dispatch(setLanguage(languageNumber));
        }}
      >
        {language[indexLanguage]}
      </button>
    </article>
  );
};
