"use client";

import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const FAQs = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);

  return (
    <div className="mt-[50px] mb-[50px] sm:mb-[100px]">
      <h1 className="text-center text-[36px] font-[500] font-Poppins text-[#101828]">
        FAQs
      </h1>
      <p className="px-[20px] mt-[10px] text-[20px] font-[500] text-center text-[#667085]">
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
            } w-[90%] md:w-[80%] xmd:w-[55%] px-[15px] rounded-[8px]`}
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
    answer: `Cognitive Finance is an innovative platform transforming
              cryptocurrency savings by utilizing a multi-chain, multi-token
              strategy. This approach allows you to access competitive yields
              across a wide array of digital assets and blockchain networks`,
  },
  {
    question: `How does Cognitive Finance work?`,
    answer: `Cognitive Finance is an innovative platform transforming
              cryptocurrency savings by utilizing a multi-chain, multi-token
              strategy. This approach allows you to access competitive yields
              across a wide array of digital assets and blockchain networks`,
  },
  {
    question: `Is Cognitive Finance secure?`,
    answer: `Cognitive Finance is an innovative platform transforming
              cryptocurrency savings by utilizing a multi-chain, multi-token
              strategy. This approach allows you to access competitive yields
              across a wide array of digital assets and blockchain networks`,
  },
  {
    question: `Why does Cognitive Finance adopt a multi-chain approach?`,
    answer: `Cognitive Finance is an innovative platform transforming
              cryptocurrency savings by utilizing a multi-chain, multi-token
              strategy. This approach allows you to access competitive yields
              across a wide array of digital assets and blockchain networks`,
  },
  {
    question: `Can I save any cryptocurrency on Cognitive Finance?`,
    answer: `Cognitive Finance is an innovative platform transforming
              cryptocurrency savings by utilizing a multi-chain, multi-token
              strategy. This approach allows you to access competitive yields
              across a wide array of digital assets and blockchain networks`,
  },
  {
    question: `How do I select the best saving plan for me?`,
    answer: `Cognitive Finance is an innovative platform transforming
              cryptocurrency savings by utilizing a multi-chain, multi-token
              strategy. This approach allows you to access competitive yields
              across a wide array of digital assets and blockchain networks`,
  },
];
