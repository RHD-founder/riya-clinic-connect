
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import ChatMessage, { ChatMessageProps } from './ChatMessage';

interface ChatbotDialogProps {
  isOpen: boolean;
}

const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ isOpen }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      message: "👋 Hello! Welcome to RIYA POLYCLINIC. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      message: input,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thank you for your message. One of our staff members will get back to you shortly.",
        "You can book an appointment by calling us at 8721979078 or using our online form.",
        "Our clinic is located at Ramesh Tiniali, Narengi Chandrapur Road, Guwahati, Assam.",
        "We offer various medical services including consultation, diagnosis, and treatment for various conditions.",
        "Our doctors are available Monday to Saturday from 9 AM to 8 PM.",
      ];
      
      const botMessage = {
        message: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  return (
    <div
      className={`fixed bottom-20 right-6 md:right-8 z-40 bg-white rounded-lg shadow-lg w-[90vw] max-w-[350px] h-[450px] flex flex-col transition-all duration-300 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="bg-clinic-primary text-white p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold">RIYA POLYCLINIC Chat</h3>
        <p className="text-sm opacity-90">We typically reply within a few minutes</p>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.message}
            isBot={msg.isBot}
            timestamp={msg.timestamp}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button 
          type="submit" 
          size="icon"
          disabled={!input.trim()}
          className="bg-clinic-primary hover:bg-clinic-primary/90"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatbotDialog;
