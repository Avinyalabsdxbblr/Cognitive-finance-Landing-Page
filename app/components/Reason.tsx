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
        {/* <h1 className="animate1 mx-[5%] text-[36px] font-Poppins font-bold leading-[50px]">
          Why Choose <br />
          Cognitive Finance
        </h1> */}

        <div className="mt-[50px] md-mt-0 mx-[5%] flex flex-col gap-[100px] md:gap-[50px] md:flex-row justify-between items-center">
          <div className="w-full md:w-[50%] flex flex-col gap-[30px] md:gap-[70px]">
            <h1 className="animate1 mx-[5%] text-[36px] font-Poppins font-bold leading-[50px]">
              Why Choose <br />
              Cognitive Finance
            </h1>
            <div className="animate2 bg-[#141414] w-full rounded-[12px] h-fit md:h-[225px] p-[30px] flex flex-col justify-center">
              <p className="2xl:text-[20px] text-[#FFFFFFB2]">
                Unlock the future of decentralized finance with our
                intent-centric platform. Experience seamless multi-chain,
                multi-token opportunities, top-tier security, and personalized
                strategies designed to empower your financial growth.
              </p>
              <p className="mt-[10px] 2xl:text-[20px] text-[#FFFFFFB2]">
                Interact with COGNITIVE and build your transactions using
                intents.
              </p>
            </div>
          </div>

          <div className="animate2 relative flex-1 flex flex-col items-center justify-between">
            <div className="relative">
              <Image
                className="animate-bounce2 "
                width={300}
                height={300}
                src="/box3d.avif"
                alt="box"
              />
            </div>
            <div className="mt-[-80px] md:mt-[-50px] relative w-full h-[280px]">
              <Image
                className="object-contain"
                fill
                src="/hand3d.avif"
                alt="hand"
              />
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
