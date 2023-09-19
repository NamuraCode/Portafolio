import { useAppSelector } from "@/store";
import { getInfo } from "@/utils";

import { NamuraModel } from "./components";

import mainStyles from "@/styles/MainStyles.module.css";
import styles from "@/styles/NamuraTitle.module.css";

export const Home = () => {
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { contact_me } = getInfo();

  return (
    <article className={styles["namura-title"]}>
      <aside className={styles["title-main"]}>
        <h1 className={styles["title-name"]}>
          David Naranjo{" "}
          <span className={styles["name-job"]}>Fullstack developer</span>
        </h1>
        <button className={mainStyles.btn}>{contact_me[indexLanguage]}</button>
      </aside>
      <NamuraModel />
    </article>
  );
};
