import Image from "next/image";
import { ExperienceCardProps } from "@/interfaces";

import styles from "@/styles/ExperienceCard.module.css";

export const ExperienceCard = ({
  company,
  description,
  img,
}: ExperienceCardProps) => {
  return (
    <div className={`${styles["exp-card"]}`}>
      <h4 className={`${styles["exp-card-title"]}`}>
        <Image src={img} width={30} height={30} alt={"image-company"} />
        {company}
      </h4>
      <p className={`${styles["exp-card-description"]}`}>{description}</p>
    </div>
  );
};
