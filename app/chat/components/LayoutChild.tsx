"use client";

import React from "react";
import LeftNav from "./LeftNav";
import MenuCover from "./MenuCover";
import { useAuth } from "@/app/context/AuthContext";
import ConnectWallet from "./ConnectWallet";

const LayoutChild = ({ children }: { children: React.ReactNode }) => {
  const { login, isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <div className="chat-page relative flex h-screen max-w-[1900px] mx-auto font-Inter">
          <LeftNav />

          <div className="main flex-1 h-full font-PlusJakartaSans">
            {children}
          </div>

          <MenuCover />
        </div>
      ) : (
        <ConnectWallet />
      )}
    </>
  );
};

export default LayoutChild;
