import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero relative w-full min-h-[123vh]">
      <Navbar />

      <div className="relative z-[2] mt-[100px]">
        <h1 className="text-[90px] font-bold text-center text-[#1A2B3B] font-Poppins leading-[90px]">
          Cognitive Finance
        </h1>

        <p className="mt-[30px] mb-[60px] text-[19.84px] text-black text-center">
          "Hi, I can assist you with a variety of topics related to Web3 <br />
          technology, cryptocurrencies, blockchain, NFTs, decentralized finance{" "}
          <br />
          (DeFi), and more.
        </p>

        <div className="mx-auto w-fit block">
          <Button />
        </div>
      </div>

      <div className="absolute left-0 top-0 h-full w-full">
        <Image fill className="object-cover" src="/heroBg.svg" alt="gradient" />
      </div>

      <div className="absolute w-[75%] h-[667px] left-1/2 -translate-x-1/2 bottom-[-60%]">
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
