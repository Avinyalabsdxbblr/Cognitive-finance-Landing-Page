"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextState {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  scrollTracker: boolean;
  setScrollTracker: React.Dispatch<React.SetStateAction<boolean>>;
  messageText: string;
  setMessageText: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextState | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [menuState, setMenuState] = useState(false);

  const [messageText, setMessageText] = useState("");
  const [scrollTracker, setScrollTracker] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        menuState,
        setMenuState,
        messageText,
        setMessageText,
        scrollTracker,
        setScrollTracker,
      }}
    >
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
