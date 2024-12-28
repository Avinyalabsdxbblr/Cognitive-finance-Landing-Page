import React from "react";
import UserMessage from "./components/UserMessage";
import AiMessage from "./components/AiMessage";
import Header from "./components/Header";

const page = () => {
  return (
    <div className="relative size-full flex flex-col">
      <Header />

      <div className="chat-container mt-[10px] flex-1 px-[20px] sm:px-[50px] h-full overflow-y-auto pb-[30px]">
        <div className="h-fit w-full flex flex-col gap-[20px]">
          {/* <UserMessage />
          <AiMessage />
          <UserMessage />
          <AiMessage /> */}
        </div>
      </div>

      <div className="h-[130px] sm:h-[100px] pt-[5px] px-[20px] sm:px-[50px] flex justify-end gap-[15px]">
        <textarea className="w-full sm:w-[71%] h-[45px] sm:h-[54px] border border-[#E2E8F0] rounded-[45px] px-[20px] outline-none resize-none"></textarea>
        <button className="chat-btn w-[100px] sm:w-[192px] h-[45px] sm:h-[54px] rounded-[45px] text-[14px] font-[600] text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
