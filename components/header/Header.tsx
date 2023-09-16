'use client';

import { useState } from "react";
import { getInfo } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks/useRedux";
import { setLanguage } from "@/store/slice/languageSlice/languageSlice";
import styles from "@/styles/Header.module.css";

export const Header = () => {
  const { projects, about, contact } = getInfo();
  const [languageNumber, setLanguageNumber] = useState<boolean>(true);
  const { indexLanguage, language } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  return (
    <>
      <header className={styles.header}>
        <nav className={styles['header-nav']}>
          <a href="#home" className={styles["nav-logo"]} aria-label="Redirect to home">
            David Naranjo
          </a>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
              <a
                href="#about"
                className={styles["nav-link"]}
                aria-label="Redirect to about"
              >
                {about[indexLanguage]}
              </a>
            </li>
            <li className={styles["nav-item"]}>
              <a
                href="#projects"
                className="nav-link link-projects"
                aria-label="Redirect to projects"
              >
                {projects[indexLanguage]}
                <svg
                  className={styles["projects-icon"]}
                  role="img"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.0675 9.92446C3.41911 9.57295 3.89594 9.37549 4.39312 9.37549C4.89031 9.37549 5.36713 9.57295 5.71875 9.92446L15 19.2057L24.2812 9.92446C24.6349 9.58292 25.1085 9.39393 25.6001 9.3982C26.0917 9.40247 26.562 9.59966 26.9097 9.9473C27.2573 10.2949 27.4545 10.7652 27.4588 11.2568C27.463 11.7485 27.274 12.2221 26.9325 12.5757L16.3256 23.1826C15.974 23.5341 15.4972 23.7316 15 23.7316C14.5028 23.7316 14.026 23.5341 13.6744 23.1826L3.0675 12.5757C2.71599 12.2241 2.51852 11.7473 2.51852 11.2501C2.51852 10.7529 2.71599 10.2761 3.0675 9.92446Z"
                    fill="white"
                  />
                </svg>
              </a>
              <div className={styles["projects-items"]}>
                <a className={styles["project-item"]}>Web Pages</a>
                <hr className={styles["projects-separator"]} />
                <a className={styles["project-item"]}>Models</a>
                <a className={styles["project-item"]}>Illustrations</a>
              </div>
            </li>
            <li className={styles["nav-item"]}>
              <a
                href="#contact"
                className={styles["nav-link"]}
                aria-label="Redirect to contact"
              >
                {contact[indexLanguage]}
              </a>
            </li>
            <hr className={styles["nav-separator"]} />
            <li className={styles["nav-item"]}>
              <button
                className={styles["language-button"]}
                onClick={() => {
                  setLanguageNumber(!languageNumber);
                  dispatch(setLanguage(languageNumber));
                }}
              >
                {language}
              </button>
            </li>
            <hr className={styles["nav-separator"]}/>
            <li className={styles["nav-item"]}>
              <a>Light</a>
            </li>
            <hr className={styles["nav-separator"]} />
            <li className={styles["social-item"]}>
              <a
                className={styles["social-link"]}
                href="https://github.com/NamuraCode"
                target="_blank"
                aria-label="Redirect to github"
              >
                <svg
                  className={styles["image-link"]}
                  role="img"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 0.61875C11.1891 0.61875 0 11.8172 0 25.6187C0 36.6703 7.1625 46.0375 17.0891 49.3422C18.3438 49.5781 18.7969 48.8047 18.7969 48.1359C18.7969 47.5422 18.7828 45.9719 18.7734 43.8875C11.8156 45.3937 10.35 40.5266 10.35 40.5266C9.21094 37.6453 7.56719 36.8719 7.56719 36.8719C5.30469 35.3266 7.74688 35.3594 7.74688 35.3594C10.2531 35.5297 11.5719 37.9297 11.5719 37.9297C13.8016 41.7547 17.4219 40.6484 18.8547 40.0047C19.0734 38.3938 19.725 37.2859 20.4344 36.6687C14.8844 36.0422 9.04844 33.8937 9.04844 24.3141C9.04844 21.5781 10.0172 19.35 11.6187 17.6C11.3422 16.9734 10.4953 14.4266 11.8391 10.9828C11.8391 10.9828 13.9313 10.3156 18.7141 13.5469C20.7514 12.9928 22.8527 12.7086 24.9641 12.7016C27.0891 12.7156 29.2125 12.9937 31.2141 13.5469C35.9687 10.3156 38.0594 10.9828 38.0594 10.9828C39.4016 14.4266 38.5547 16.9719 38.3109 17.6C39.8969 19.35 40.8656 21.5797 40.8656 24.3141C40.8656 33.9156 35.0219 36.0328 29.4656 36.6437C30.3344 37.3922 31.1484 38.9312 31.1484 41.2672C31.1484 44.6109 31.1172 47.3047 31.1172 48.1187C31.1172 48.7687 31.5547 49.55 32.8422 49.2984C42.8422 46.0281 49.9969 36.6531 49.9969 25.6172C49.9969 11.8156 38.8078 0.617188 24.9969 0.617188L25 0.61875Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className={styles["social-item"]}>
              <a
                className={styles["social-link"]}
                href="https://www.linkedin.com/in/david-naranjo/"
                target="_blank"
                aria-label="Redirect to linkedin"
              >
                <svg
                  className={styles["image-link"]}
                  role="img"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.3125 0.171811H3.6875C2.76575 0.162431 1.87792 0.519094 1.21882 1.16354C0.55973 1.80799 0.183208 2.68758 0.171875 3.60931V44.3984C0.185257 45.3187 0.56268 46.1963 1.22155 46.8391C1.88042 47.4819 2.76708 47.8375 3.6875 47.8281H44.3125C45.2343 47.8354 46.1215 47.4775 46.7803 46.8326C47.439 46.1878 47.8158 45.3084 47.8281 44.3867V3.59759C47.8117 2.67856 47.4332 1.80317 46.7749 1.16168C46.1165 0.520188 45.2316 0.164459 44.3125 0.171811ZM14.3008 40.7968H7.22656V18.0351H14.3008V40.7968ZM10.7852 14.9335C9.97378 14.9343 9.1804 14.6944 8.50539 14.2442C7.83037 13.794 7.30406 13.1537 6.99302 12.4043C6.68199 11.6549 6.6002 10.8301 6.75802 10.0342C6.91584 9.23831 7.30617 8.50711 7.87963 7.93311C8.45308 7.3591 9.18391 6.96808 9.97964 6.8095C10.7754 6.65093 11.6003 6.73192 12.3499 7.04225C13.0996 7.35257 13.7404 7.87827 14.1913 8.55286C14.6422 9.22744 14.8828 10.0206 14.8828 10.832C14.8818 11.3713 14.7744 11.905 14.5669 12.4028C14.3593 12.9005 14.0556 13.3525 13.6732 13.7327C13.2908 14.1129 12.8371 14.414 12.3382 14.6187C11.8393 14.8235 11.3049 14.9278 10.7656 14.9257L10.7852 14.9335ZM40.7969 40.7968H33.7227V29.7226C33.7227 27.0859 33.6758 23.6913 30.0469 23.6913C26.418 23.6913 25.8008 26.5663 25.8008 29.5507V40.7968H18.7383V18.0351H25.5195V21.1601H25.6133C26.5586 19.371 28.8633 17.4843 32.3047 17.4843C39.4688 17.4687 40.7969 22.1835 40.7969 28.2968V40.7968Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
