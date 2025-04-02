
import React from 'react';
import { cn } from '@/lib/utils';

export interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot, timestamp }) => {
  return (
    <div className={cn(
      "flex max-w-[80%] mb-4",
      isBot ? "self-start" : "self-end ml-auto"
    )}>
      <div className={cn(
        "rounded-lg px-4 py-2 text-sm",
        isBot
          ? "bg-gray-100 text-gray-800"
          : "bg-clinic-primary text-white"
      )}>
        {message}
        <div className={cn(
          "text-xs mt-1",
          isBot ? "text-gray-500" : "text-white/70"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
