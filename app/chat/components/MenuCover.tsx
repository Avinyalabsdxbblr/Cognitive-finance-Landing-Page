"use client";

import { useGlobalContext } from "@/app/context/GlobalContext";
import React from "react";

const MenuCover = () => {
  const { menuState, setMenuState } = useGlobalContext();

  return (
    <>
      {menuState && (
        <div
          onClick={() => setMenuState(false)}
          className="absolute left-0 top-0 z-[2] h-full w-full bg-[black]/30"
        ></div>
      )}
    </>
  );
};

export default MenuCover;
