import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight as Arrow } from "react-icons/md";

const Button = () => {
  return (
    <Link
      href="/chat"
      className="bumt group w-[126px] h-[40px] flex items-center gap-[2px] justify-center bg-[#1A2B3B] rounded-[8px] text-white"
    >
      <p className="mr-[-20px] group-hover:mr-0 duration-300 font-[500] text-[14px]">
        Launch App
      </p>
      <Arrow className="text-[20px] opacity-0 group-hover:opacity-100 duration-300" />
    </Link>
  );
};

export default Button;
