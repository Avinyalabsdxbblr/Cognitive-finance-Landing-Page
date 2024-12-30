import { useAuth } from "@/app/context/AuthContext";
import React from "react";

const ConnectWallet = () => {
  const { login } = useAuth();

  const handleLogin = async () => {
    await login();
  };
  return (
    <div className="h-screen w-screen bg-white grid place-items-center">
      <button
        onClick={handleLogin}
        className="w-[161px] h-[40px] flex items-center gap-[5px] justify-center bg-[#1A2B3B] rounded-[8px] text-white"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;
