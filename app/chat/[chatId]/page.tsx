import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight as Arrow } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import UserMessage from "../components/UserMessage";
import AiMessage from "../components/AiMessage";

const page = () => {
  return (
    <div className="relative size-full flex flex-col">
      <div className="px-[50px] py-[20px] flex items-center justify-between">
        <Link className="relative z-[6]" href="/">
          <Image width={48} height={44} src="/logo.svg" alt="logo" />
        </Link>

        <button className="w-[161px] h-[40px] flex items-center gap-[5px] justify-center bg-[#1A2B3B] rounded-[8px] text-white">
          <p className="font-[500] text-[14px]">Connect wallet</p>
          <Arrow className="text-[20px]" />
        </button>
      </div>

      <div className="chat-container mt-[10px] flex-1 px-[50px] h-full overflow-y-auto pb-[30px]">
        <div className="h-fit w-full flex flex-col gap-[20px]">
          <UserMessage />
          <AiMessage />
          <UserMessage />
          <AiMessage />
        </div>
      </div>

      <div className="h-[100px] pt-[5px] px-[50px] flex justify-end gap-[15px]">
        <input
          type="text"
          className="w-[71%] h-[54px] border border-[#E2E8F0] rounded-[45px] px-[20px] outline-none"
          placeholder="Enter your question"
        />
        <button className="chat-btn w-[192px] h-[54px] rounded-[45px] text-[14px] font-[600] text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
