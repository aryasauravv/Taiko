import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Welcome to MIZUKI AI Terminal. How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    // Simulate bot response (you can replace this with actual API calls)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Processing your request... [SYSTEM RESPONSE]", 
        isBot: true 
      }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="terminal-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center text-sm animate-glitch">mizuki-ai@system: ~/chat</div>
        </div>
        <div className="terminal-body">
          <div className="space-y-4 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`terminal-prompt ${message.isBot ? 'animate-glitch' : ''}`}
              >
                <span className={`${message.isBot ? 'text-terminal-green' : 'text-terminal-red'}`}>
                  {message.isBot ? 'MIZUKI-AI>' : 'USER>'} {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="terminal-prompt">
              <span className="animate-glitch">USER></span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-terminal-green ml-2"
                placeholder="Type your message..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;