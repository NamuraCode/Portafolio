"use client";
import { useRef } from "react";
import Link from "next/link";
import {
  infoImagesAbout,
  infoImagesProject,
  ImageProjectProps,
  ImageAboutProps,
} from "@/db/info";

import { useGlobal } from "@/store";

import { ImagesSlider } from "./components/ImagesSlider";
import styles from "./HelperSlider.module.css";

interface HelperSliderProps {
  imagePropsProject?: ImageProjectProps;
  imagePropsAbout?: string[];
  isProject?: boolean;
}

export const HelperSlider = ({
  imagePropsProject,
  imagePropsAbout,
  isProject = false,
}: HelperSliderProps) => {
  const { language, setIsCursorHover } = useGlobal();
  const sliderRef = useRef<HTMLDivElement>(null);
  const cursorText = ["Dar Click", "Click Here"]
  return (
    <div
      className={`${
        isProject ? styles.helperProject : styles.helperAboutContainer
      }`}
    >
      <div className={`${isProject && styles.helperProjectContent}`}>
        <div
          ref={sliderRef}
          className={`${
            isProject ? styles.helperProjectImages : styles.helperAboutImages
          }`}
          onPointerOver={() => {
            setIsCursorHover(true, cursorText[language]);
          }}
          onPointerOut={() => {
            setIsCursorHover(false);
          }}
        >
          <ImagesSlider
            sliderImages={
              isProject
                ? imagePropsProject && imagePropsProject.images
                : imagePropsAbout && imagePropsAbout
            }
            isProject={isProject}
            sliderRef={sliderRef}
          />
        </div>
        {isProject && imagePropsProject && (
          <Link
            href={imagePropsProject.url}
            target="_blank"
            aria-label="helperProjectRedirect"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ fill: "var(--color1)" }}
                d="M9.74989 15C9.9488 15 10.1396 14.921 10.2802 14.7803C10.4209 14.6397 10.4999 14.4489 10.4999 14.25C10.4999 14.0511 10.4209 13.8603 10.2802 13.7197C10.1396 13.579 9.9488 13.5 9.74989 13.5H3.49996C2.96953 13.5 2.46083 13.2893 2.08576 12.9142C1.71069 12.5391 1.49998 12.0304 1.49998 11.5V3.5C1.49998 2.96957 1.71069 2.46086 2.08576 2.08579C2.46083 1.71071 2.96953 1.5 3.49996 1.5H9.74989C9.9488 1.5 10.1396 1.42098 10.2802 1.28033C10.4209 1.13968 10.4999 0.948912 10.4999 0.75C10.4999 0.551088 10.4209 0.360322 10.2802 0.21967C10.1396 0.0790175 9.9488 0 9.74989 0H3.49996C2.57171 0 1.68149 0.368749 1.02512 1.02513C0.368745 1.6815 0 2.57174 0 3.5V11.5C0 12.4283 0.368745 13.3185 1.02512 13.9749C1.68149 14.6313 2.57171 15 3.49996 15H9.74989ZM10.7409 3.699C10.8132 3.63214 10.898 3.58019 10.9905 3.54612C11.0829 3.51205 11.1811 3.49652 11.2796 3.50042C11.378 3.50432 11.4747 3.52757 11.5642 3.56885C11.6536 3.61013 11.734 3.66863 11.8009 3.741L14.8008 6.991C14.9289 7.12957 15 7.31132 15 7.5C15 7.68868 14.9289 7.87043 14.8008 8.009L11.8009 11.259C11.6657 11.405 11.4782 11.4913 11.2794 11.499C11.0806 11.5067 10.8869 11.4351 10.7409 11.3C10.5949 11.1649 10.5085 10.9773 10.5009 10.7785C10.4932 10.5797 10.5648 10.386 10.6999 10.24L12.5379 8.249H4.74995C4.55104 8.249 4.36027 8.16998 4.21962 8.02933C4.07897 7.88868 3.99996 7.69791 3.99996 7.499C3.99996 7.30009 4.07897 7.10932 4.21962 6.96867C4.36027 6.82802 4.55104 6.749 4.74995 6.749H12.5369L10.6989 4.758C10.632 4.68565 10.5801 4.60084 10.546 4.5084C10.5119 4.41597 10.4964 4.31773 10.5003 4.2193C10.5042 4.12086 10.5275 4.02416 10.5687 3.93472C10.61 3.84527 10.6685 3.76583 10.7409 3.699Z"
                fill="#F8F8F8"
              />
            </svg>
          </Link>
        )}
      </div>
      {isProject && (
        <p>{imagePropsProject && imagePropsProject.title[language]}</p>
      )}
    </div>
  );
};
