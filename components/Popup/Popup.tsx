"use client";
import { useGlobal } from "@/store"
export const Popup = () => {
    const { openPopup } = useGlobal();
  return (
    <>
        {openPopup && <h1 className="popup">is: {openPopup}</h1>}
    </>
  )
}
