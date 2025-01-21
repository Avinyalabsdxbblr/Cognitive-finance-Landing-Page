"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { HiMiniBars2 as Bars } from "react-icons/hi2";
import { LiaTimesSolid as Times } from "react-icons/lia";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const sections = ["about", "partners", "features", "FAQ", "contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed backdrop-blur-lg bg-white bg-opacity-25 top-0 z-[5] w-full py-6 px-[40px] flex justify-between  xmd:gap-[130px] items-center">
      <Link className="relative z-[6]" href="/">
        <Image width={48} height={44} src="/logo.svg" alt="logo" />
      </Link>

      <div className="hidden xmd:flex gap-[30px] capitalize">
        {sections.map((link, id) => (
          <Link
            key={id}
            href={`#${link}`}
            className="text-[14.88px] text-[#222222]"
            scroll={true}
          >
            {link}
          </Link>
        ))}
      </div>

      <div className="hidden xmd:block">
        <Button />
      </div>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative z-[6] block xmd:hidden text-[30px]"
      >
        {!isOpen ? <Bars /> : <Times className="text-[red]" />}
      </button>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
