
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatbotButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ onClick, isOpen }) => {
  return (
    <Button
      onClick={onClick}
      className={`h-12 w-12 rounded-full shadow-lg fixed bottom-6 right-6 md:right-8 z-40 p-0 bg-clinic-primary hover:bg-clinic-primary/90 transition-all ${
        isOpen ? 'rotate-90' : 'rotate-0'
      }`}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

export default ChatbotButton;
