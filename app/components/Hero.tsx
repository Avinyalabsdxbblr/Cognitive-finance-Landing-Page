import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero relative w-full min-h-[90vh] vsm:min-h-[123vh]">
      <Navbar />

      <div className="relative z-[2] mt-[60px] xmd:mt-[100px]">
        <h1 className="text-[34px] vsm:text-[48px] md:text-[65px] xmd:text-[90px] font-bold text-center text-[#1A2B3B] font-Poppins leading-[1.2] xmd:leading-[90px]">
          Cognitive Finance
        </h1>

        <p className="px-[20px] mt-[30px] mb-[60px] text-[19.84px] text-black text-center">
          "Hi, I can assist you with a variety of topics related to Web3{" "}
          <br className="hidden md:block" />
          technology, cryptocurrencies, blockchain, NFTs, decentralized finance{" "}
          <br className="hidden md:block" />
          (DeFi), and more.
        </p>

        <div className="mx-auto w-fit block">
          <Button />
        </div>
      </div>

      <div className="absolute left-0 top-0 h-full w-full">
        <Image fill className="object-cover" src="/heroBg.svg" alt="gradient" />
      </div>

      <div className="absolute w-[90%] xmd:w-[75%] aspect-video left-1/2 -translate-x-1/2 bottom-[-10%] md:bottom-[-30%] xmd:bottom-[-40%] lg:bottom-[-50%]">
        <Image
          fill
          className="object-contain"
          src="/heroImg.png"
          alt="Chat"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
