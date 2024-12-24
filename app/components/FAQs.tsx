"use client";

import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FAQs = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);

  const faqRef = useRef<any>();
  useGSAP(
    () => {
      const faqTL = gsap.timeline({
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
        },
      });
      faqTL
        .from(".animate1", { y: 20, opacity: 0 })
        .from(".animate2", { y: 20, opacity: 0 })
        .from(".animate3", { x: -30, opacity: 0, duration: 1, stagger: 0.3 });
    },
    { scope: faqRef }
  );

  return (
    <div
      ref={faqRef}
      className="mt-[100px] vsm:mt-[200px] mb-[50px] sm:mb-[100px]"
    >
      <h1 className="animate1 text-center text-[36px] font-[500] font-Poppins text-[#101828]">
        FAQs
      </h1>
      <p className="animate2 px-[20px] mt-[10px] text-[20px] font-[500] text-center text-[#667085]">
        Can't find the answer you're looking for? Reach out to our{" "}
        <span className="underline">
          customer <br className="hidden md:block" />
          support
        </span>{" "}
        team.
      </p>

      <div className="mt-[50px] flex flex-col items-center gap-[20px]">
        {FAQ.map((item, i) => (
          <div
            key={i}
            className={`${
              isOpen != i ? "border border-[#EAEAEA]" : ""
            } animate3 w-[90%] md:w-[80%] xmd:w-[55%] px-[15px] rounded-[8px]`}
          >
            <button
              onClick={() => {
                setIsOpen((prev) => (prev == i ? null : i));
              }}
              className="w-full py-[10px] flex items-center justify-between"
            >
              <p className="text-left vsm:text-[20px] font-[500] text-[#101828]">
                {item.question}
              </p>
              <div className="size-[20px] rounded-full border-[2px] border-[#071A34] grid place-items-center text-[#071A34]">
                {isOpen != i ? <FiPlus /> : <FiMinus />}
              </div>
            </button>

            <div
              className={`${
                isOpen == i
                  ? "h-[170px] vsm:h-[190px] md:h-[150px] 2xl:h-[200px]"
                  : "h-0"
              } duration-300 overflow-hidden`}
            >
              <p className="w-full xmd:w-[80%] text-[14px] vsm:text-[16px] 2xl:text-[20px] font-[500] text-[#667085] leading-[1.8] vsm:leading-[35px]">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

const FAQ = [
  {
    question: `What is Cognitive Finance?`,
    answer: `Cognitive Finance is an innovative, user-centric platform that empowers you to take control of your cryptocurrency savings. With a onchain, multi-token strategy, it allows you to set your preferences and simplify complex processes, providing competitive yields across various digital assets and blockchain networks through a more human-centric interface.`,
  },
  {
    question: `How does Cognitive Finance work?`,
    answer: `Cognitive Finance is an intent-centric platform that puts you in control of your cryptocurrency savings. Its intent engine powers multiple solvers, efficiently managing settlements across various chains to optimize your financial strategy.`,
  },
  {
    question: `Is Cognitive Finance secure?`,
    answer: `Yes, Cognitive Finance prioritizes security. The platform follows industry-leading practices, including rigorous audits of smart contracts and operational procedures, ensuring a secure environment for managing your cryptocurrency. With a focus on regulatory compliance and robust security measures, Cognitive Finance provides a reliable and safe space for your digital assets.`,
  },
  {
    question: `Can I Create an AI Portfolio on Cognitive Finance?`,
    answer: `Cognitive Finance supports a broad selection of cryptocurrencies via its multi-chain, multi-token strategy. While it enables you to save and manage a variety of digital assets, the available tokens and chains may differ. The platform ensures flexibility by offering competitive yields on supported cryptocurrencies, allowing for diverse portfolio growth.`,
  },
];
