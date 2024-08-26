import React from "react";
import Image from "next/image";

import { info } from "@/db/info";
import styles from "../AboutInfo.module.css";

export const AboutImages = () => {
  const images = info.profileImages;
  return (
    <div className={styles.aboutImagesContainer}>
      <button className={styles.ImgBtnPrev} data-snap-slider-goto="prev">
        &larr;
      </button>
      <div className={styles.aboutImages}>
        {images.map((path, index) => (
          <Image
            key={index}
            src={path}
            alt={`David-Naranjo${index}`}
            width={1080}
            height={1920}
            loading="lazy"
          />
        ))}
      </div>
      <button className={styles.ImgBtnNext} data-snap-slider-goto="next">
        &rarr;
      </button>
    </div>
  );
};
