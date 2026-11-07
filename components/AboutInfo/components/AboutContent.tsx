"use client";

import { useGlobal } from "@/store";

import styles from "../AboutInfo.module.css";
import { HelperTitle } from "@/helpers";
import type { SkillGroup } from "@/db/info";

interface AboutContentProps {
  title: string[];
  description: string[];
  skillsTitle: string[];
  skills: SkillGroup[];
}

export const AboutContent = ({
  title,
  description,
  skillsTitle,
  skills,
}: AboutContentProps) => {
  const { language } = useGlobal();
  const paragraphs = description[language].split("\n\n");

  return (
    <div className={styles.aboutContent}>
      <HelperTitle title={title} index="01" />
      <div className={`${styles.aboutText} reveal`}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={index === 0 ? styles.lead : undefined}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className={`${styles.skills} reveal`}>
        <h3>{skillsTitle[language]}</h3>
        <div className={styles.skillGroups}>
          {skills.map((group) => (
            <div key={group.title[1]} className={styles.skillGroup}>
              <h4>{group.title[language]}</h4>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
