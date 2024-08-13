import React from "react";
import Image from "next/image";

import {info} from "@/db/info"; 
import styles from "../AboutInfo.module.css";

export const AboutImages = () => {
  const images = info.profileImages;
  return (
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
      {/* <Image
        src="/images/namurasLogo.svg"
        alt="Namuras-Logo"
        width={200}
        height={200}
      /> */}
    </div>
  );
};
