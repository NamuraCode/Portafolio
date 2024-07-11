import React, { createContext, useContext, useState } from "react";

interface GlobalContext {
  openPopup: {open: boolean, index: number};
  setTogglePopup: (id: number) => void;
  navActive: number;
  setNavActive: (index: number) => void;
}

const GlobalContext = createContext<GlobalContext | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [navActive, setNavNumberActive] = useState(0);
  const [openPopup, setOpenPopup] = useState({open: false, index: -1});

  const setTogglePopup = (index: number) => {
    const statePopup = {
      open: !openPopup.open,
      index: index,
    }
    return setOpenPopup(statePopup)
  };

  const setNavActive = (index: number) => {
    return setNavNumberActive(index);
  };

  const value = {
    openPopup,
    setTogglePopup,
    navActive,
    setNavActive,
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
