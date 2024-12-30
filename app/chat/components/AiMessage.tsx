import Image from "next/image";
import React from "react";
import { TbReload } from "react-icons/tb";
import { Message as MessageType } from "@/app/types/Message";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { useChat } from "@/app/context/ChatContext";

const AiMessage = ({
  message,
  index,
}: {
  message: MessageType;
  index: number;
}) => {
  const { messages } = useChat();

  return (
    <div className="w-full flex gap-[10px] sm:gap-[15px]">
      <div className="my-[9px] size-[35px] sm:size-[40px] overflow-hidden rounded-full border border-[#E2E8F0] grid place-items-center">
        <Image src="/AIAvatar.svg" alt="Ai Avatar" width={40} height={40} />
      </div>
      <div className="flex-1">
        <div className="react-markdown w-full px-[10px] sm:px-[20px] py-[15px] bg-[white] rounded-[14px]">
          <ReactMarkdown remarkPlugins={[remarkBreaks]}>
            {message.content}
          </ReactMarkdown>
        </div>

        {/* <button className="ml-auto sm:mx-auto mt-[5px] size-[30px] sm:w-[218px] sm:h-[54px] flex justify-center items-center gap-[5px] border border-[#E2E8F0] rounded-[45px] text-[#1B2559]">
          <TbReload />
          <p className="text-[14px] font-[600] hidden sm:block">
            Regenerate Response
          </p>
        </button> */}
        {index + 1 == messages?.length && (
          <button className="ml-auto mt-[5px] size-[30px] flex justify-center items-center gap-[5px] border border-[#E2E8F0] rounded-[45px] text-[#1B2559]">
            <TbReload />
          </button>
        )}
      </div>
    </div>
  );
};

export default AiMessage;
