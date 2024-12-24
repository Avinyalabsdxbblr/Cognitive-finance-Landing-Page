"use client";

import Image from "next/image";
import React, { useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
  const [isOpen, setIsOpen] = useState(0);

  const featuresRef = useRef<any>();
  useGSAP(
    () => {
      const featuresTL = gsap.timeline({
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      });
      featuresTL
        .from(".animate1", { y: 50, opacity: 0 })
        .to(".animate2", { x: 0, opacity: 1, stagger: 0.2 });
    },
    { scope: featuresRef }
  );

  return (
    <div
      id="features"
      ref={featuresRef}
      className="relative w-full min-screen vsm:min-h-[882px] pb-[60px] bg-[#000000] text-white"
    >
      <h1 className="animate1 pt-[50px] vsm:pt-[120px] pl-[20px] vsm:pl-[40px] xmd:pl-[100px] text-[48px] font-[600] font-Poppins leading-[1.1]">
        Explore Our Features
      </h1>
      {/* <div className="hidden xmd:block absolute right-0 top-[-170px] w-[40%] aspect-square">
        <Image fill className="object-contain" src="/lappy.png" alt="laptop" />
      </div> */}

      <div className="mt-[50px] xmd:mt-[220px] relative w-full">
        <div className="absolute left-0 w-[300px] aspect-square">
          <Image className="" fill src="/gradient.png" alt="gradient" />
        </div>
        <Image
          className="absolute left-[100px] top-[140px]"
          width={122}
          height={215}
          src="/line.png"
          alt="line"
        />
        <Image
          className="absolute left-[50px] top-[350px]"
          width={66}
          height={58}
          src="/star.png"
          alt="star"
        />

        <div className=" px-[20px] vsm:px-[30px] relative ml-0 xmd:ml-[200px] lg:ml-[400px] flex flex-col md:flex-row gap-[20px]">
          {features.map((feature, i) => (
            <div
              key={i}
              onClick={() => setIsOpen(i)}
              className={`animate2 -translate-x-[50px] opacity-0 ${
                isOpen != i
                  ? "w-full md:w-[25%] xmd:w-[120px]"
                  : "w-full xmd:w-[360px]"
              }  h-fit md:h-[450px] xl:h-[420px] bg-[#121212] rounded-[8px] duration-300 cursor-pointer overflow-hidden`}
            >
              <div className="hidden md:block">
                {isOpen != i ? (
                  <div className="relative flex flex-col items-center pt-[10px]">
                    <p className="text-[23.5px] italic font-bold">0{i + 1}.</p>
                    <div className="absolute left-[50%] top-[35px] text-[21.56px] whitespace-nowrap origin-left rotate-[90deg]">
                      {feature.title}
                    </div>
                  </div>
                ) : (
                  <div className="py-[28px] px-[40px]">
                    <p className="text-[66.86px] italic font-bold leading-[1.1]">
                      0{i + 1}.
                    </p>
                    <h1 className="mt-[10px] mb-[20px] text-[20px] font-bold font-Poppins">
                      {feature.title}
                    </h1>
                    <p className="text-[#FFFFFFB2] leading-[28px]">
                      {feature.text}
                    </p>
                  </div>
                )}
              </div>
              <div className="block md:hidden">
                <div className="py-[28px] px-[40px]">
                  <p className="text-[66.86px] italic font-bold leading-[1.1]">
                    0{i + 1}.
                  </p>
                  <h1 className="mt-[10px] mb-[20px] text-[20px] font-bold font-Poppins">
                    {feature.title}
                  </h1>
                  <p className="text-[#FFFFFFB2] leading-[28px]">
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

const features = [
  {
    title: "Intent-Centric Interaction",
    text: "Leverage AI with intent to craft personalized investment strategies, analyzing market trends and your preferences to maximize returns with minimal risk",
  },
  {
    title: "AI-Powered Investment Strategies",
    text: "Use AI to create personalized strategies that analyze market trends and preferences, maximizing returns with minimal risk",
  },
  {
    title: "AI-Powered DeFi Insights",
    text: "Harness AI to craft personalized investment strategies, analyzing blockchain trends and your preferences to crush returns with minimal risk",
  },
  {
    title: "Permissionless on chain interactions",
    text: "Leverage AI to customize strategies, analyzing trends and preferences to maximize returns with minimal risk, all in a permissionless environment",
  },
];
