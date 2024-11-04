"use client";

import Image from "next/image";
import React, { useState } from "react";

const features = [
  {
    title: "Seamless Blockchain Interactions",
    text: "Leverage the power of artificial intelligence to craft personalized investment strategies. Our advanced algorithms analyze market trends and user preferences to maximize your returns with minimal risk",
  },
  {
    title: "AI-Driven Investment Strategies",
    text: "Leverage the power of artificial intelligence to craft personalized investment strategies. Our advanced algorithms analyze market trends and user preferences to maximize your returns with minimal risk",
  },
  {
    title: "Real-Time Financial Insights",
    text: "Leverage the power of artificial intelligence to craft personalized investment strategies. Our advanced algorithms analyze market trends and user preferences to maximize your returns with minimal risk",
  },
  {
    title: "Seamless Blockchain Interactions",
    text: "Leverage the power of artificial intelligence to craft personalized investment strategies. Our advanced algorithms analyze market trends and user preferences to maximize your returns with minimal risk",
  },
];

const Features = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div
      id="features"
      className="relative w-full min-h-screen pb-[60px] bg-[#000000] text-white"
    >
      <h1 className="pt-[120px] pl-[100px] text-[48px] font-[600] font-Sora">
        Explore Our Features
      </h1>
      <div className="absolute right-0 top-[-170px] w-[40%] aspect-square">
        <Image fill className="object-contain" src="/lappy.png" alt="laptop" />
      </div>

      <div className="mt-[100px] relative w-full">
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

        <div className="relative ml-[400px] flex gap-[20px]">
          {features.map((feature, i) => (
            <div
              key={i}
              onClick={() => setIsOpen(i)}
              className={`${
                isOpen != i ? "w-[120px]" : "w-[360px]"
              } h-[400px] bg-[#121212] rounded-[8px] duration-300 cursor-pointer overflow-hidden`}
            >
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
                  <h1 className="mt-[10px] mb-[20px] text-[20px] font-bold font-Sora">
                    {feature.title}
                  </h1>
                  <p className="text-[#FFFFFFB2] leading-[28px]">
                    {feature.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
