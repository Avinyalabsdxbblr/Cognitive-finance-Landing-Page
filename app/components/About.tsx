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
  useGSAP(
    () => {
      const aboutTL = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 90%",
        },
      });
      aboutTL.from(".animate1", { y: 50, opacity: 0 });
    },
    { scope: aboutRef }
  );

  useGSAP(
    () => {
      const aboutTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".animate-wrap",
          start: "top 90%",
        },
      });
      aboutTL

        .from(".animate2", { x: -50, opacity: 0, duration: 1 })
        .from(".animate3", { x: -50, opacity: 0, duration: 1 }, "-=0.5");
    },
    { scope: aboutRef }
  );

  return (
    <div
      id="about"
      ref={aboutRef}
      className="mt-[100px] md:mt-[0px] mb-[100px] vsm:mb-[250px] relative w-full"
    >
      <div className="animate1 relative w-[90%] xmd:w-[75%] 2xl:w-[70%] aspect-video mx-auto mt-[-250px] vsm:mt-[-280px] rounded-[20px] overflow-hidden">
        <Image
          fill
          className="object-contain"
          src="/chatImg.png"
          alt="Chat"
          priority
        />
      </div>

      <div className="mt-[100px] vsm:mt-[150px]">
        <h1 className="text-[20px] font-[600] font-Poppins text-center text-[#36394A]">
          Multichain support
        </h1>
        <div className="mt-[10px] flex flex-wrap justify-center">
          <Image
            className="object-contain"
            width={160}
            height={56}
            src="/polyhedra.svg"
            alt="brand"
          />
        </div>

        <div className="animate-wrap mt-[100px] vsm:mt-[150px] px-[20px] vsm:px-[40px] flex flex-col-reverse lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px]">
          <div className="animate2 relative max-w-[564px] w-full lg:w-[40%] h-[250px] md:h-[300px] rounded-[12px]">
            <div className="hidden vsm:block relative w-full h-full bg-[#2CAEE9] rounded-[12px] px-[40px] py-[20px]">
              <ul className="text-[13px] text-white leading-[20px]">
                <li>
                  <span className="text-[#687887] mr-[15px]">1</span> await
                  increase.achTransfers.create
                </li>
                <li>
                  <span className="text-[#687887] mr-[20px]">2</span>{" "}
                  account_id:{" "}
                  <span className="text-[#31F2CC]">
                    'account_in71c4amph0vgo2qllky'
                  </span>
                  ,
                </li>
                <li>
                  <span className="text-[#687887] mr-[20px]">3</span> amount:{" "}
                  <span className="text-[#DDFF33]">81634</span>,
                </li>
                <li>
                  <span className="text-[#687887] mr-[20px]">4</span> currency:{" "}
                  <span className="text-[#31F2CC]">'USD'</span>,
                </li>
              </ul>
            </div>
            <div className="boxShadow w-full h-full absolute left-0 vsm:left-[20px] xmd:left-[40px] top-0 vsm:top-[40px] xmd:top-[100px]">
              <Image
                priority
                className="object-contain vsm:object-cover"
                fill
                src="/chatImg.png"
                alt="code"
              />
            </div>
          </div>

          <div className="animate3 w-full lg:max-w-[45%]">
            <h1 className="text-[24px] vsm:text-[30px] font-Poppins font-[600] leading-[1.4] text-[#000000]">
              Experience lightning-fast, intent-centric transactions tailored to
              your needs, powered by our AI platform that simplifies and
              personalizes your crypto journey.
            </h1>
            <p className="mt-[20px] mb-[30px] text-[20px] text-[#000000]">
              Simplify your on-chain activities with Cognitive Finance.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
