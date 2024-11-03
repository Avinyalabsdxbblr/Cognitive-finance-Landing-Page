import React from "react";
import { MdOutlineKeyboardArrowRight as Arrow } from "react-icons/md";

const Button = () => {
  return (
    <button className="w-[126px] h-[40px] flex items-center gap-[2px] justify-center bg-[#1A2B3B] rounded-[8px] text-white">
      <p className="font-[500] text-[14px]">Launch App</p>
      <Arrow />
    </button>
  );
};

export default Button;
