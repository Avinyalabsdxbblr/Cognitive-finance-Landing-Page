"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const aboutRef = useRef<any>();
  // useGSAP(
  //   () => {

  //     gsap.from(".animate1", { y: 50, opacity: 0, delay: 4.6 });
  //   },
  //   { scope: aboutRef }
  // );

  // useGSAP(
  //   () => {
  //     const aboutTL = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".animate-wrap",
  //         start: "top 80%",
  //       },
  //     });
  //     aboutTL

  //       .from(".animate2", { x: -30, opacity: 0, duration: 1 })
  //       .from(".animate3", { x: -30, opacity: 0, duration: 1 }, "-=0.5");
  //   },
  //   { scope: aboutRef }
  // );

  return (
    <div
      id="about"
      ref={aboutRef}
      className="mt-[100px] md:mt-[0px] mb-[100px] vsm:mb-[250px] relative w-full"
    >
      <div id="partners" className="mt-[100px] vsm:mt-[150px]">
        <h1 className="text-[20px] font-[600] font-Poppins text-center text-[#36394A]">
          Multichain support
        </h1>
        <div className="mt-[60px] gap-[72px] flex flex-wrap justify-center">
          <Image
            className="object-contain"
            width={160}
            height={56}
            src="/polyhedra.svg"
            alt="brand"
          />

          <Image
            className="object-contain"
            width={160}
            height={56}
            src="/skale.svg"
            alt="brand"
          />
        </div>

        <div className="animate-wrap mt-[100px] vsm:mt-[150px] px-[20px] vsm:px-[40px] flex flex-col-reverse lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px]">
          <div className="animate3 w-full lg:max-w-3xl">
            <h1 className="text-[24px] vsm:text-[64px] text-center font-Poppins font-[600] leading-[1.4] text-[#000000]">
              Power up transactions with our ultra-fast, intent-driven
              interface!
            </h1>
            <p className="mt-[54px] text-center mb-[30px] text-[21px] text-[#000000]">
              Simplify your on-chain activities with Cognitive Finance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
