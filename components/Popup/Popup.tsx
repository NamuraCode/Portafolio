"use client";

import { useEffect } from "react";

import { useGlobal } from "@/store";
import styles from "./Popup.module.css";
import { Contact } from "./components"

const popups: JSX.Element[] = [ <Contact/> ]

export const Popup = () => {
  const { openPopup, setTogglePopup } = useGlobal();
  return (
    <section className={`${styles.popup} ${openPopup.open ? styles.openPopup : styles.closePopup}`}>
      <div className={`${openPopup.open ? styles.openPopupChild : styles.closePopupChild}`}>
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={()=> setTogglePopup(-1)}
        >
          <path
            d="M13.7326 19.5C6.83499 27.5022 0 39 0 39C0 39 11.4978 32.165 19.5 25.2674C18.4248 24.3406 17.4126 23.4126 16.5 22.5C15.5874 21.5874 14.6594 20.5752 13.7326 19.5Z"
            fill="black"
          />
          <path
            d="M25.2674 19.5C32.165 11.4978 39 0 39 0C39 0 27.5022 6.83499 19.5 13.7326C20.5752 14.6594 21.5874 15.5874 22.5 16.5C23.4126 17.4126 24.3406 18.4248 25.2674 19.5Z"
            fill="black"
          />
          <path
            d="M22 17C14.2952 9.29518 0 -1.70474e-06 0 -1.70474e-06C0 -1.70474e-06 9.29518 14.2952 17 22C24.7048 29.7048 39 39 39 39C39 39 29.7048 24.7048 22 17Z"
            fill="black"
          />
        </svg>
        {popups[0]}
      </div>
    </section>
  );
};
