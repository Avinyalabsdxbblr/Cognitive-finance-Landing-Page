import { Message as MessageType } from "@/app/types/Message";
import React from "react";
import UserMessage from "./UserMessage";
import AiMessage from "./AiMessage";

const Message = ({
  message,
  index,
}: {
  message: MessageType;
  index: number;
}) => {
  return (
    <>
      {message.role == "human" ? (
        <UserMessage message={message} />
      ) : (
        <AiMessage message={message} index={index} />
      )}
    </>
  );
};

export default Message;
