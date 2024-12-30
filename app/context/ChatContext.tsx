"use client";

import { createContext, useContext, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";
import { Message } from "../types/Message";
import { useAuth } from "./AuthContext";

interface ChatContextType {
  messages: Message[] | undefined;
  isLoading: boolean;
  isPending: boolean;
  isError: boolean;
  addMessage: (threadId: string, message: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { address: currentThreadId } = useAuth();
  const queryClient = useQueryClient();

  const {
    data: messages,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["threadMessages", currentThreadId], // Include currentThreadId in the key
    queryFn: async () => {
      if (!currentThreadId) throw new Error("No thread selected");

      const { data } = await api.get(`/threads/${currentThreadId}`);
      return data;
    },
    enabled: !!currentThreadId, // Ensures query only runs if currentThreadId exists
  });

  const mutation = useMutation({
    mutationFn: async ({
      threadId,
      message,
    }: {
      threadId: string;
      message: string;
    }) => {
      const { data } = await api.post("/threads", { threadId, message });
      return data;
    },
    onMutate: async ({ message }) => {
      await queryClient.cancelQueries({
        queryKey: ["threadMessages", currentThreadId], // Use the same key structure
      });

      const previousMessages = queryClient.getQueryData([
        "threadMessages",
        currentThreadId,
      ]);

      queryClient.setQueryData(
        ["threadMessages", currentThreadId],
        (ms: Message[] = []): Message[] => [
          ...ms,
          {
            content: message,
            _id: "loading",
            timestamp: new Date().toISOString(),
            role: "human",
          },
        ]
      );

      return { previousMessages };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData(
        ["threadMessages", currentThreadId],
        context?.previousMessages
      );
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["threadMessages", currentThreadId], // Ensure consistent invalidation
      });
    },
  });

  const addMessage = (threadId: string, message: string) => {
    mutation.mutate({ threadId, message });
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        isLoading,
        isError,
        isPending: mutation.isPending,
        addMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessagesProvider");
  }
  return context;
};
