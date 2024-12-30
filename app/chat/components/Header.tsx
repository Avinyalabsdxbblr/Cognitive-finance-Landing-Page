"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight as Arrow } from "react-icons/md";
import { RiMenuFold4Line as MenuIcon } from "react-icons/ri";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { useAuth } from "@/app/context/AuthContext";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  const { menuState, setMenuState } = useGlobalContext();
  const { login, address, isAuthenticated, logout } = useAuth();

  const handleLogin = async () => {
    await login();
  };

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
      {/* <ConnectButton
        client={client}
        wallets={[
          createWallet("io.metamask"),
          createWallet("com.coinbase.wallet"),
        ]}
      /> */}
      {isAuthenticated ? (
        <div className="flex gap-[6px] items-center">
          <button className="w-[161px] h-[40px] flex items-center gap-[5px] justify-center bg-[#1A2B3B] rounded-[8px] text-white">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </button>
          <button
            onClick={logout}
            className="size-[40px] rounded-[6px] bg-[#1A2B3B] text-white grid place-items-center text-[20px]"
          >
            <IoIosLogOut />
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="w-[161px] h-[40px] flex items-center gap-[5px] justify-center bg-[#1A2B3B] rounded-[8px] text-white"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Header;
