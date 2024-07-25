import { info } from "@/db/info";
import { ExperienceInfo, HelperTitle } from "@/components";
import styles from "@/styles/global.module.css";

export const Experience = () => {
  const { title } = info.experience;
  return (
    <section id="experience" className={styles.sections}>
      <HelperTitle title={title}>
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ fill: "var(--color3)" }}
            d="M21.2 0H31.8C33.2057 0 34.5537 0.58778 35.5477 1.63404C36.5416 2.68029 37.1 4.09932 37.1 5.57895V11.1579H47.7C49.1056 11.1579 50.4537 11.7457 51.4477 12.7919C52.4416 13.8382 53 15.2572 53 16.7368V47.4211C53 48.9007 52.4416 50.3197 51.4477 51.366C50.4537 52.4122 49.1056 53 47.7 53H5.3C3.89435 53 2.54628 52.4122 1.55233 51.366C0.558391 50.3197 0 48.9007 0 47.4211V16.7368C0 13.6405 2.3585 11.1579 5.3 11.1579H15.9V5.57895C15.9 2.48263 18.2585 0 21.2 0ZM31.8 11.1579V5.57895H21.2V11.1579H31.8Z"
            fill="#363639"
          />
        </svg>
      </HelperTitle>
      <ExperienceInfo />
    </section>
  );
};
