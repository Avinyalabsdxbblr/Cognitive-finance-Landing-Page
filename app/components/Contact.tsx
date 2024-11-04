import Image from "next/image";
import React from "react";
import { IoCheckmarkOutline as Mark } from "react-icons/io5";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative mb-[100px] vsm:mb-[200px] min-h-[562px] w-[90%] mx-auto flex flex-col items-center justify-center rounded-[30px] md:rounded-[10px] overflow-hidden"
    >
      <p className="relative z-[2] mb-[20px] text-center text-[36px] font-bold font-Poppins text-[#141414]">
        Get in touch
      </p>
      <p className="relative z-[2] max-w-[80%] text-center font-bold 2xl:text-[20px] font-Poppins">
        Contact us via email{" "}
        <span className="underline">support@cognitivefinance.xyz</span> or
        Telegram <span className="underline">@cognitivefinance_xyz.</span>
      </p>

      <div className="relative z-[2] mt-[40px] mb-[50px] flex flex-col md:flex-row items-center justify-center gap-[10px] md:gap-[20px]">
        <span className="flex items-center gap-[5px]">
          <Mark className="text-[#047857]" />
          <p className="2xl:text-[17.9px] text-[#4F4F4F]">Cancel anytime</p>
        </span>
        <span className="flex items-center gap-[5px]">
          <Mark className="text-[#047857]" />
          <p className="2xl:text-[17.9px] text-[#4F4F4F]">
            Access to all content
          </p>
        </span>
        <span className="flex items-center gap-[5px]">
          <Mark className="text-[#047857]" />
          <p className="2xl:text-[17.9px] text-[#4F4F4F]">Expert Support</p>
        </span>
      </div>

      <div className="relative z-[2] mx-auto border border-[#D4D4D8] w-[90%] sm:w-[386px] h-[55px] flex rounded-[10px] overflow-hidden">
        <input
          className="h-full w-[75%] sm:flex-1 pl-[15px] pr-[10px] placeholder:text-[#71717A] outline-none"
          type="mail"
          placeholder="Enter email address"
        />
        <button className="flex-1 sm:flex-auto w-[139px] h-full bg-[#1FA1FF] text-white font-Poppins">
          Join
        </button>
      </div>

      <div className="absolute left-0 bottom-0 h-full w-[50%]">
        <Image fill src="/contactBg1.png" alt="gradient" />
      </div>
      <div className="absolute right-0 bottom-0 h-full w-[50%]">
        <Image fill src="/contactBg2.png" alt="gradient" />
      </div>
    </div>
  );
};

export default Contact;
