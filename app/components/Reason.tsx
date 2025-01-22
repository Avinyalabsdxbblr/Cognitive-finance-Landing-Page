"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { FaPlay } from "react-icons/fa";

const Reason = () => {
  const reasonRef = useRef<any>();

  return (
    <div
      id="reason"
      ref={reasonRef}
      className="relative bg-[black] text-white py-[100px] grid place-items-center"
    >
      <div className="relative z-[2] w-[90%] pt-[40px] md:pt-[40px] pb-[40px] bg-[#212121] flex flex-col justify-between">
        <div className="mt-[50px] md-mt-0 mx-[5%] flex flex-col gap-[100px] md:gap-[50px] md:flex-row justify-between items-center">
          <div className="w-full flex flex-col gap-[30px]">
            <h1 className="animate1 mx-[5%] text-[36px] text-center font-Poppins font-bold leading-[50px]">
              Why Choose Cognitive Finance
            </h1>

            <div className="animate2 w-full rounded-[12px] h-fit md:h-[150px] flex flex-col justify-center">
              <p className="2xl:text-[20px] text-center text-[#FFFFFFB2]">
                Unlock the future of decentralized finance with our
                intent-centric platform. Experience seamless multi-chain,
                multi-token opportunities, top-tier security, and personalized
                strategies designed to empower your financial growth.
              </p>

              <p className="mt-[10px] text-center 2xl:text-[20px] text-[#FFFFFFB2]">
                Interact with COGNITIVE and build your transactions using
                intents.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Image
        className="absolute right-0 bottom-0"
        width={1048}
        height={594}
        src="/egradient.png"
        alt="gradient"
      />
    </div>
  );
};

export default Reason;
