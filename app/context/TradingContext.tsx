"use client";

import { createContext, PropsWithChildren, useEffect } from "react";
import { useAuth } from "./AuthContext";
import {
  SwingSDK,
  TransferParams,
  TransferStep,
  TransferStepResult,
  // TransferStepResults,
} from "@swing.xyz/sdk";
import { ethers, parseEther } from "ethers";

import { useSwitchChain } from "wagmi";

export const swingSDK = new SwingSDK({
  // environment: "testnet",
});

interface TradingContextProps {}

const TradingContext = createContext<TradingContextProps | undefined>(
  undefined
);

export const TradingProvider = ({ children }: PropsWithChildren<any>) => {
  const { isAuthenticated, address, connector, chainId } = useAuth();

  const { switchChain } = useSwitchChain();

  const handleSSEMessage = async (data: any) => {
    if (!address || !data.fromToken || !data.toToken || !data.amount) {
      return;
    }

    const fromChain = data.fromChain || "bsc";
    const toChain = data.toChain || "bsc";

    const amount = parseEther(data.amount.toString()).toString();

    const transferParams: TransferParams = {
      fromChain,
      fromToken: data.fromToken,
      fromUserAddress: address,
      amount,
      toChain,
      toToken: data.toToken,
      toUserAddress: address,
      maxSlippage: 0.01,
    };

    const quote = await swingSDK.getQuote(transferParams);

    await swingSDK.transfer(quote.routes[0], transferParams);
  };

  const setup = async function () {
    if (!isAuthenticated || !chainId || !connector) {
      return;
    }

    const provider = await connector.getProvider();
    await swingSDK.wallet.connect(provider, chainId);

    // handleSSEMessage({
    //   action: "buy",
    //   token: "SOL",
    //   amount: 0.106,
    //   threadId: "0xC9aFff7b66c3453262a6e6C010212C3cC847B3ca",
    // });

    const eventSource = new EventSource(
      `${"https://cognitive-backend-4444c52b6fcc.herokuapp.com/"}/events`,
      {
        withCredentials: true,
      }
    );

    eventSource.onmessage = async (event) => {
      const parsedData = JSON.parse(event.data);
      await handleSSEMessage(parsedData);
    };

    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
      eventSource.close();
    };

    swingSDK.on("TRANSFER", handleSwingEvent);

    return () => {
      eventSource?.close();
    };
  };

  useEffect(() => {
    setup().then();
  }, [isAuthenticated, chainId]);

  const handleSwingEvent = (
    transferStep: TransferStepResult<TransferStep>
    // transferResults: TransferStepResults,
  ) => {
    switch (transferStep.status) {
      case "PENDING":
        console.log("PENDING: ", transferStep);
        break;

      case "WALLET_CONNECTION_REQUIRED":
        console.log("WALLET_CONNECTION_REQUIRED: ", transferStep);

        break;

      case "CHAIN_SWITCH_REQUIRED":
        switchChain({ chainId: transferStep.chain.chainId });
        console.log("CHAIN_SWITCH_REQUIRED: ", transferStep);

        break;

      case "ACTION_REQUIRED":
        console.log("ACTION_REQUIRED: ", transferStep);
        // Let the user know they need to take action within their wallet, such as signing a transaction
        break;

      case "CONFIRMING":
        console.log("CONFIRMING: ", transferStep);
        // Let the user know the transaction is waiting for confirmations
        break;

      case "SUCCESS":
        console.log("SUCCESS: ", transferStep);
        // The transaction was successful, yay!
        break;

      case "FAILED":
        console.log("FAILED: ", transferStep);
        // Alert the user there was an error. Check the message in `transferStep.error`
        break;
    }
  };

  return (
    <TradingContext.Provider value={{}}>{children}</TradingContext.Provider>
  );
};
