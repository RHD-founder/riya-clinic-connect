
import React, { useState, useEffect } from 'react';
import ChatbotButton from './ChatbotButton';
import ChatbotDialog from './ChatbotDialog';
import { useToast } from '@/components/ui/use-toast';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  // Close chat on mobile when user navigates to a different page
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
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
      <ChatbotDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Chatbot;
