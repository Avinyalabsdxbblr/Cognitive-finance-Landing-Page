"use client";

import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Reason = () => {
  const reasonRef = useRef<any>();
  useGSAP(
    () => {
      const reasonTL = gsap.timeline({
        scrollTrigger: {
          trigger: reasonRef.current,
          start: "top 80%",
        },
      });
      reasonTL
        .from(".animate1", { y: 50, opacity: 0 })
        .from(".animate2", { x: -50, opacity: 0, duration: 1, stagger: 0.3 });
    },
    { scope: reasonRef }
  );

  return (
    <div
      id="reason"
      ref={reasonRef}
      className="relative bg-[black] text-white py-[100px] grid place-items-center"
    >
      <div className="relative z-[2] w-[90%] xl:w-[80%] min-h-[600px] pt-[40px] md:pt-[100px] pb-[40px] bg-[#212121] flex flex-col justify-between">
        <h1 className="animate1 mx-[5%] lg:mx-[10%] text-[36px] font-Poppins font-bold leading-[50px]">
          Why Choose <br />
          Cognitive Finance
        </h1>

        <div className="mt-[50px] md-mt-0 mx-[5%] lg:mx-[10%] flex flex-col gap-[30px] md:gap-0 md:flex-row justify-between items-center">
          <div className="animate2 bg-[#141414] w-full md:w-[60%] rounded-[12px] h-fit md:h-[225px] p-[30px] flex flex-col justify-center">
            <p className="2xl:text-[20px] text-[#FFFFFFB2]">
              Unlock the future of decentralized finance with our intent-centric
              platform. Experience seamless multi-chain, multi-token
              opportunities, top-tier security, and personalized strategies
              designed to empower your financial growth.
            </p>
            <p className="mt-[10px] 2xl:text-[20px] text-[#FFFFFFB2]">
              Interact with COGNITIVE and build your transactions using intents.
            </p>
          </div>

          <div className="animate2 relative md:max-w-[300px] w-[80%] md:w-[35%] h-[300px] sm:h-[388px] rounded-[20px] overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full">
              <Image
                className="object-cover"
                src="/vidtmb.png"
                fill
                alt="thumbnail"
              />
            </div>
            <div className="absolute size-[50px] vsm:size-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#caca40] grid place-items-center">
              <FaPlay className="size-[25px] vsm:size-[30px] text-[black]" />
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
