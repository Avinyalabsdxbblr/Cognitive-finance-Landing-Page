"use client";

import React, { createContext, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Connector, useAccount, useDisconnect, useSignMessage } from "wagmi";
import api from "../api";
import { useAppKit } from "@reown/appkit/react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => void;
  address?: string;
  connector?: Connector;
  chainId?: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const { signMessageAsync } = useSignMessage();
  const { isConnected, address, connector, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();

  // Check authentication status (e.g., on app load or refresh)
  const checkAuthStatus = async () => {
    try {
      const response = await api.get("/auth/status", { withCredentials: true });
      setIsAuthenticated(response.data.isAuthenticated);
    } catch {
      setIsAuthenticated(false);
    }
  };

  // Call checkAuthStatus when component mounts
  React.useEffect(() => {
    checkAuthStatus();
  }, [isConnected, address]);

  const authMutation = useMutation({
    mutationFn: async () => {
      if (!address) {
        return;
      }

      const message = `Sign this message to authenticate:\nWallet Address: ${address}`;
      const signature = await signMessageAsync({ message });

      await api.post(
        "/authenticate",
        { walletAddress: address, message, signature },
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      setIsAuthenticated(true);
    },
  });

  const login = async () => {
    try {
      if (!isConnected) {
        await open(); // Connect wallet if not already connected
      }

      await authMutation.mutateAsync();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      disconnect();
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isConnected && isAuthenticated,
        login,
        logout,
        address,
        connector,
        chainId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
