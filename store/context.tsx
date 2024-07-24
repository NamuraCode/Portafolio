import React, { createContext, useContext, useState } from "react";

interface GlobalContext {
  language: number;
  setLanguage: (id: number) => void;
}

const GlobalContext = createContext<GlobalContext | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState(1);

  const setLanguage = (index: number) => {
    return setLanguageState(index);
  };

  const value = {
    language,
    setLanguage,
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
