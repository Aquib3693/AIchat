import React, { useState } from 'react';
import './IBox.css';

export default function Ibox({ onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="ibox-container">
      <input
        type="text"
        className="ibox-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message or command..."
      />
      <button type="submit" className="ibox-button">Send</button>
    </form>
  );
}