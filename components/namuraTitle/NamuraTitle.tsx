'use client';

import { useAppSelector } from "@/store/hook/useRedux";
import { getInfo } from "@/utils";
import styles from "@/styles/NamuraTitle.module.css";
import mainStyles from "@/styles/MainStyles.module.css";

export const NamuraTitle = () => {
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { contact_me } = getInfo();
  return (
    <article className={styles['namura-title']}>
      <h1 className={styles['title-name']}>
        David Naranjo <span className={styles['name-job']}>Fullstack developer</span>
      </h1>
      <button className={mainStyles.btn}>{contact_me[indexLanguage]}</button>
    </article>
  );
};
