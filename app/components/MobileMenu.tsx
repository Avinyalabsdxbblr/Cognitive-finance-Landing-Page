import Link from "next/link";
import React from "react";
import { HiMiniArrowTrendingUp as Arrow } from "react-icons/hi2";

const MobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`mobile-menu ${
        isOpen ? "flex" : "hidden"
      } fixed pt-[60px] z-[4] top-0 left-0 w-screen h-screen bg-white flex xmd:hidden flex-col justify-center gap-[20px] capitalize`}
    >
      {sections.map((link, id) => (
        <Link
          key={id}
          scroll={true}
          href={`#${link}`}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer px-[40px] pb-[20px] flex justify-between border-b border-b-gray-300"
        >
          <p className="text-[20px] text-[#222222] font-[500] font-Poppins">
            {link}
          </p>

          <Arrow />
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;

const sections = [
  "about",
  "pricing",
  "features",
  // "integration",
  // "blog",
  "contact",
];
