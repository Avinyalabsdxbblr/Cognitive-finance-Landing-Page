"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight as Arrow } from "react-icons/md";
import { RiMenuFold4Line as MenuIcon } from "react-icons/ri";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENTID,
  secretKey: "",
});

const Header = () => {
  const { menuState, setMenuState } = useGlobalContext();

  return (
    <div className="px-[20px] sm:px-[50px] py-[20px] flex items-center justify-between">
      <div className="flex items-center">
        {!menuState && (
          <button
            className="lg:hidden"
            onClick={() => setMenuState(!menuState)}
          >
            <MenuIcon className="mr-[10px] vsm:mr-[30px] text-[30px] " />
          </button>
        )}
        <Link className="relative" href="/">
          <Image width={48} height={44} src="/logo.svg" alt="logo" />
        </Link>
      </div>

      {/* <button className="w-[161px] h-[40px] flex items-center gap-[5px] justify-center bg-[#1A2B3B] rounded-[8px] text-white">
        <p className="font-[500] text-[14px]">Connect wallet</p>
        <Arrow className="text-[20px]" />
      </button> */}
      <ConnectButton
        client={client}
        wallets={[
          createWallet("io.metamask"),
          createWallet("com.coinbase.wallet"),
        ]}
      />
    </div>
  );
};

export default Header;
