"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef<any>();
  // useGSAP(
  //   () => {
  //     const heroTL = gsap.timeline({ delay: 3.5 });
  //     heroTL
  //       .from(".animate1", {
  //         y: 40,
  //         opacity: 0,
  //         stagger: 0.3,
  //         duration: 1,
  //       })
  //       .from("nav", { opacity: 0 }, "-=0.5");
  //   },
  //   { scope: heroRef }
  // );

  return (
    <div
      ref={heroRef}
      className="hero relative w-full min-h-[90vh] vsm:min-h-[830px]"
    >
      <Navbar />

      <div className="relative z-[2] mt-[60px] xmd:mt-[100px]">
        <h1 className="animate1 text-[34px] vsm:text-[48px] md:text-[65px] xmd:text-[90px] font-bold text-center text-[#1A2B3B] font-Poppins leading-[1.2] xmd:leading-[90px]">
          Cognitive Finance
        </h1>

        <p className="animate1 px-[20px] mt-[30px] mb-[60px] text-[19.84px] text-black text-center">
          Cognitive - Your Onchain Advisor: Chat, plan, transact, and simplify
          crypto effortlessly.
        </p>

        <div className="animate1 mx-auto w-fit block">
          <Button />
        </div>
      </div>

      {/* Gradient */}
      <div className="absolute left-0 top-0 h-full w-full">
        <Image fill className="object-cover" src="/heroBg.svg" alt="gradient" />
      </div>
    </div>
  );
};

export default Hero;
