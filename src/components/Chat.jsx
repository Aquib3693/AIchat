import React from 'react';
import Plugincard from '../components/Plugincard';
import './Chat.css';

export default function Chat({ messages }) {
  return (
    <div className="chat-container">
      {messages.map(msg => (
        msg.type === 'plugin' ? (
          <Plugincard key={msg.id} message={msg} />
        ) : (
          <div className={`message-bubble ${msg.sender === 'user' ? 'message-user' : 'message-assistant'}`}>
  {msg.content}
</div>

        )
      ))}
    </div>
  );
}

