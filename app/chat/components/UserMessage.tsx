import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Message as MessageType } from "@/app/types/Message";
import { useGlobalContext } from "@/app/context/GlobalContext";

const UserMessage = ({ message }: { message: MessageType }) => {
  const { setMessageText, setScrollTracker } = useGlobalContext();
  return (
    <div className="w-full flex gap-[10px] sm:gap-[15px]">
      <div className="my-[9px] size-[35px] sm:size-[40px] rounded-full border border-[#E2E8F0] grid place-items-center">
        <FaUserAlt color="#91BEF6" size={13} />
      </div>
      <div className="flex-1 py-[20px] px-[10px] sm:px-[20px] border border-[#E2E8F0] rounded-[14px] flex justify-between items-start">
        <p className="font-[600] text-[#1B2559]">{message.content}</p>
        <button
          onClick={() => {
            setMessageText(message.content);
            setScrollTracker((prev) => !prev);
          }}
          className="hidden sm:block"
        >
          <MdEdit color="#718096" size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserMessage;
