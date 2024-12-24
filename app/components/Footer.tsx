"use client";

import Image from "next/image";
import Link from "next/link";
import { FaYoutube as Yt, FaLinkedinIn as Ln } from "react-icons/fa";
import { FaXTwitter as Tw } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<any>();
  useGSAP(
    () => {
      const footerTL = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });
      footerTL.from(".animate1", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="w-full min-h-[478px] bg-[#14171F] text-[#DDDDDE] flex flex-col justify-between"
    >
      <div className="flex-1 w-full py-[100px] xmd:py-0 px-[20px] vsm:px-[50px] xl:px-[100px] xmd:flex space-y-[50px] xmd:space-y-0 justify-between items-center">
        <div className="animate1">
          <Image src="/logo.svg" width={48} height={44} alt="logo" />
          <p className="mt-[20px] mb-[40px]">
            Explore the future of decentralized <br /> finance on our
            intent-centric platform
          </p>
          <div className="flex items-center gap-[20px] text-[20px]">
            <Yt />
            <Ln />
            <Tw />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between xmd:justify-start gap-[30px] xmd:gap-[70px]">
          <div className="animate1 links">
            <h1>Company</h1>
            <Link href="#reason">Why Us?</Link>
            <Link href="#contact">Contact Us</Link>
            <Link href="">Blog</Link>
            <Link href="">FAQ</Link>
          </div>
          <div className="animate1 links">
            <h1>Resources</h1>
            <Link href="">Docs</Link>
            <Link href="">LinkTree</Link>
            <Link href="">Medium</Link>
            <Link href="">Media Kit</Link>
          </div>

          <div className="animate1 links">
            <h1>Legal</h1>
            <Link href="">Terms of Service</Link>
            <Link href="">Privacy Policy / GDPR</Link>
            <Link href="">Cookie Policy</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-t-[#272C39] py-[20px] grid place-items-center">
        <p className="text-[14px] ">
          ©CognitiveFinance 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
