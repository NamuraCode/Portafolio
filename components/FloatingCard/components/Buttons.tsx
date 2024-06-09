"use client";
import { GlobalProvider } from "@/store";
import { BorderButton } from "@/utils";

export const Buttons = () => {
  return (
    <GlobalProvider>
      <BorderButton text="Contact" index={1} />
      <BorderButton text="Projects" index={2} />
      <BorderButton text="Experience" index={3} />
    </GlobalProvider>
  );
};
