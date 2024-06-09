import React, { createContext, useContext, useState } from "react";

interface GlobalContext {
  openPopup: boolean;
  setTogglePopup: () => void;
}

const GlobalContext = createContext<GlobalContext | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const setTogglePopup = () => {
    return setOpenPopup(!openPopup);
  };

  const value = {
    openPopup,
    setTogglePopup,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
