import React from "react";
import Image from "next/image";

import { infoImages } from "@/db/info";
import styles from "../AboutInfo.module.css";

export const AboutImages = () => {
  const images = infoImages.imagesAbout;
  
  return (
    <div className={styles.aboutImagesContainer}>
      <div className={styles.aboutImages}>
        {images.map((path, index) => (
          <Image
            key={index}
            src={path.src}
            alt={`${path.alt}${index}`}
            width={1080}
            height={1920}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
