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
      <h4>
        <Image src={img} width={50} height={50} alt={"image-company"} />
        {company}
      </h4>
      <p>{description}</p>
    </div>
  );
};
