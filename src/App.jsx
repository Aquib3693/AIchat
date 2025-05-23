import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Chat from './components/Chat';
import Ibox from './components/Ibox';
import Pluginmanager from './components/plugins/Pluginmanager';
import './App.css';

const LOCAL_STORAGE_KEY = 'chat_history';

export default function App() {
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error('Error loading messages from localStorage:', err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const handleSend = async (input) => {
    const userMessage = {
      id: uuidv4(),
      sender: 'user',
      content: input,
      type: 'text',
      timestamp: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const pluginResponse = await Pluginmanager.handleMessage(input);
    const newMessage = pluginResponse || {
      id: uuidv4(),
      sender: 'assistant',
      content: "I'm not sure how to respond to that.",
      type: 'text',
      timestamp: new Date().toISOString(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="app-container">
      <Chat messages={messages} />
      <Ibox onSend={handleSend} />
    </div>
  );
}
