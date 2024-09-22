import { info } from "@/db/info";
import { ContactInfo } from "@/components";
import { HelperTitle } from "@/helpers";
import styles from "@/styles/Global.module.css";

export const Contact = () => {
  const { title } = info.contact;
  return (
    <section id="contact" className={`${styles.sections} ${styles.contact}`}>
      <HelperTitle title={title} center >
        <svg
          width="53"
          height="53"
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ fill: "var(--color3)" }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0C4.92487 0 0 4.92487 0 11V42C0 48.0751 4.92487 53 11 53H42C48.0751 53 53 48.0751 53 42V11C53 4.92487 48.0751 0 42 0H11ZM26.5 32.0944C20.6111 32.0944 8.83333 35.3333 8.83333 41.2222V44.1667H41.2222C42.8484 44.1667 44.1667 42.8484 44.1667 41.2222C44.1667 35.3333 32.3889 32.0944 26.5 32.0944ZM32.7461 23.9128C34.4027 22.2562 35.3333 20.0094 35.3333 17.6667C35.3333 15.3239 34.4027 13.0771 32.7461 11.4206C31.0895 9.76399 28.8427 8.83333 26.5 8.83333C24.1573 8.83333 21.9105 9.76399 20.2539 11.4206C18.5973 13.0771 17.6667 15.3239 17.6667 17.6667C17.6667 20.0094 18.5973 22.2562 20.2539 23.9128C21.9105 25.5693 24.1573 26.5 26.5 26.5C28.8427 26.5 31.0895 25.5693 32.7461 23.9128Z"
            fill="#363639"
          />
        </svg>
      </HelperTitle>
      <ContactInfo />
    </section>
  );
};
