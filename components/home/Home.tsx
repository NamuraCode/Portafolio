import { getInfo } from "@/utils";
import { useAppSelector } from "@/store";

import mainStyles from "@/styles/MainStyles.module.css";
import styles from "@/styles/NamuraTitle.module.css";
import { NamuraModel } from "./components";

export const Home = () => {
  const { indexLanguage } = useAppSelector((state) => state.language);
  const { contact_me } = getInfo();

  return (
    <article className={styles["namura-title"]}>
      <aside>
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
