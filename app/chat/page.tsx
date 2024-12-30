"use client";

import React, { useEffect, useRef, useMemo } from "react";
import Header from "./components/Header";
import { useChat } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";
import Message from "./components/Message";
import { useGlobalContext } from "../context/GlobalContext";

const page = () => {
  const { messages, addMessage, isLoading, isPending } = useChat();
  const { address } = useAuth();
  const { messageText, setMessageText, scrollTracker } = useGlobalContext();

  const handleSend = function () {
    addMessage(address as string, messageText);
    setMessageText("");
  };

  console.log("messages", messages);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollTracker]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const fetching = useMemo(
    () => isLoading || isPending,
    [isLoading, isPending]
  );

  return (
    <div className="relative size-full flex flex-col">
      <Header />

      <div
        ref={chatContainerRef}
        className="chat-container mt-[10px] flex-1 px-[20px] sm:px-[50px] h-full overflow-y-auto pb-[30px]"
      >
        <div className="h-fit w-full flex flex-col gap-[20px]">
          {messages?.map((message, i) => (
            <Message key={i} message={message} index={i} />
          ))}
        </div>
      </div>

      <div className="h-[130px] sm:h-[100px] pt-[5px] px-[20px] sm:px-[50px] flex justify-end gap-[15px]">
        <textarea
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="w-full sm:w-[71%] h-[45px] sm:h-[54px] py-[10px] border border-[#E2E8F0] rounded-[45px] px-[20px] outline-none resize-none"
        ></textarea>
        <button
          onClick={() => handleSend()}
          disabled={fetching}
          className="chat-btn w-[100px] sm:w-[192px] h-[45px] sm:h-[54px] rounded-[45px] text-[14px] font-[600] text-white grid place-items-center"
        >
          {!fetching ? (
            "Submit"
          ) : (
            <div className="size-[30px] border-l border-l-white rounded-full animate-spin" />
          )}
        </button>
      </div>
    </div>
  );
};

export default page;
