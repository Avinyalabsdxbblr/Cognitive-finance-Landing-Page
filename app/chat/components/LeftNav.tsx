"use client";

import React from "react";
import { FiPlus } from "react-icons/fi";
import { PiChatText } from "react-icons/pi";
import { BiTrash as Delete } from "react-icons/bi";
import { PiArrowSquareOut as ShareIcon } from "react-icons/pi";
import { FiSun as Bright } from "react-icons/fi";
import Link from "next/link";
import { useGlobalContext } from "@/app/context/GlobalContext";

const LeftNav = () => {
  const { menuState, setMenuState } = useGlobalContext();
  const text = "AI Chat Tool Ethicsssssssssssssssss";

  return (
    <div
      className={`${
        !menuState ? "absolute top-0 left-[-100vw]" : "absolute left-0"
      } lg:static duration-300 z-[5] w-[80%] sm:w-[50%] lg:w-[20%] pt-[20px] bg-[white] h-full border border-r-[#1C1C1C1A] flex flex-col items-center`}
    >
      <Link
        onClick={() => setMenuState(false)}
        href="/chat"
        className="w-[85%] h-[40px] bg-[#1C1C1C] rounded-[12px] flex items-center justify-center gap-[10px] text-white"
      >
        <FiPlus className="text-[20px]" />
        <p className="2xl:text-[18px]">New Chat</p>
      </Link>

      <div className="mt-[20px] w-[78%] flex flex-col gap-[10px]">
        {/* <Link
          onClick={() => setMenuState(false)}
          href="/chat/12002nsi"
          className="flex items-center gap-[10px]"
        >
          <PiChatText className="text-[24px]" />
          <p className="text-[14px] text-[#1C1C1C]">
            {text.length > 20 ? text.slice(0, 20) + "..." : text}
          </p>
        </Link> */}
      </div>

      <div className="mt-auto border-t border-t-[#1C1C1C1A] w-full py-[25px]">
        <div className="w-[78%] mx-auto h-full flex flex-col gap-[20px]">
          <button className="flex items-center gap-[10px]">
            <Delete className="text-[24px] text-[#1C1C1C]" />
            <p className="text-[14px] text-[#1C1C1C]">Clear conversations</p>
          </button>
          <button className="flex items-center gap-[10px]">
            <Bright className="text-[24px] text-[#1C1C1C]" />
            <p className="text-[14px] text-[#1C1C1C]">Light mode</p>
          </button>
          <button className="flex items-center gap-[10px]">
            <ShareIcon className="text-[24px] text-[#1C1C1C]" />
            <p className="text-[14px] text-[#1C1C1C]">Updates & FAQ</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
