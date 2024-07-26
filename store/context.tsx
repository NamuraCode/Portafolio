import React, { createContext, useContext, useState } from "react";

export enum ProjectType {
  dev = "dev",
  art = "art"
}

interface GlobalContext {
  language: number;
  setLanguage: (id: number) => void;
  // project type
  projectType: ProjectType;
  setProjectType: (type: ProjectType) => void;
}

const GlobalContext = createContext<GlobalContext | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState(1);
  const [projectType, setProjectTypeState] = useState<ProjectType>(ProjectType.dev);

  const setLanguage = (index: number) => {
    return setLanguageState(index);
  };

  const setProjectType = (type: ProjectType) => {
    return setProjectTypeState(type);
  }

  const value = {
    language,
    setLanguage,
    projectType,
    setProjectType
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
