import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const sections = [
    "about",
    "pricing",
    "features",
    "integration",
    "blog",
    "contact",
  ];
  return (
    <div className="relative z-[5] w-full py-[20px] flex justify-center gap-[100px] items-center">
      <Link href="/">
        <Image width={48} height={44} src="/logo.svg" alt="logo" />
      </Link>

      <div className="flex gap-[30px] capitalize">
        {sections.map((link, id) => (
          <Link
            key={id}
            href={`/${link}`}
            className="text-[14.88px] text-[#222222]"
          >
            {link}
          </Link>
        ))}
      </div>

      <Button />
    </div>
  );
};

export default Navbar;
