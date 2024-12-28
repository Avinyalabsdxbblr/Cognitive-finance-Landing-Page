"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextState {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextState | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [menuState, setMenuState] = useState(false);

  return (
    <GlobalContext.Provider value={{ menuState, setMenuState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
