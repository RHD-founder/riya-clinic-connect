
import React, { useState } from 'react';
import ChatbotButton from './ChatbotButton';
import ChatbotDialog from './ChatbotDialog';
import { useToast } from '@/components/ui/use-toast';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const toggleChat = () => {
    setIsOpen(prev => !prev);
    
    if (!isOpen) {
      toast({
        title: "Chat Support",
        description: "Our chat support is now open! Ask us anything.",
        duration: 3000,
      });
    }
  };
  
  return (
    <>
      <ChatbotButton onClick={toggleChat} isOpen={isOpen} />
      <ChatbotDialog isOpen={isOpen} />
    </>
  );
};

export default Chatbot;
