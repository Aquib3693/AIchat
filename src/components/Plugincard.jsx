import React from 'react';
import './Plugincard.css';

export default function Plugincard({ message }) {
  const { pluginName, pluginData } = message;

  switch (pluginName) {
    case 'weather':
      return (
        <div className="plugin-card">
          <h4>Weather in {pluginData.city}</h4>
          <p>{pluginData.description}, {pluginData.temperature}°C</p>
        </div>
      );
    case 'calc':
      return (
        <div className="plugin-card">
          <h4>Calculation Result</h4>
          <p>{pluginData.expression} = {pluginData.result}</p>
        </div>
      );
    case 'define':
      return (
        <div className="plugin-card">
          <h4>Definition of {pluginData.word}</h4>
          <ul>
            {pluginData.definitions.map((def, i) => <li key={i}>{def}</li>)}
          </ul>
        </div>
      );
    default:
      return null;
  }
}