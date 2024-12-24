"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="preloader"
      className={`fixed top-0 left-0 w-full h-full bg-black grid place-items-center z-50 ${
        progress === 100 ? "top-[-105vh] duration-300" : ""
      }`}
    >
      <div className="relative h-full w-full">
        <div className="absolute bottom-[50px] left-[30px] text-center text-white">
          <p className="text-5xl font-bold">{progress}%</p>
        </div>

        <div className="absolute bottom-[50px] right-[30px] flex items-center gap-[5px]">
          <Image width={48} height={44} src="/logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
