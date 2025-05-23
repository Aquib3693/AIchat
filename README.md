# React Plugin-Based Chat Application

- A responsive React-based chatbot application that supports dynamic plugins like `/weather`, `/calc`, and `/define`. It demonstrates handling natural input, command 
  parsing, and rendering rich plugin responses.

###  Features

- ✉️ Simple chat interface
- 📦 Plugin system supporting:
  - `/weather [city]` - Get current weather info
  - `/calc [expression]` - Evaluate math expressions
  - `/define [word]` - Get word definitions
- 💾 Chat history is stored locally
- 🌐 Fetches real-time data using Axios
- 💡 Fully responsive UI with plain CSS
  
## 📁 Project Structure
src/
│
├── App.jsx # Main app logic
├── App.css # Main styling
├── components/
│ ├── Chat.jsx # Chat display component
│ ├── Ibox.jsx # Input box component
│ ├── Plugincard.jsx # Plugin-specific card rendering
│ └── plugins/
│ ├── Pluginmanager.js# Plugin dispatcher
│ ├── calc.js # Calc plugin
│ ├── define.js # Dictionary plugin
│ └── weather.js # Weather plugin
└── index.js # Entry point

## 📦 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ai-chat-plugin-app.git
cd aichat
npm install
npm run dev

Commands Supported
/weather [cityname]
/calc 5 * (2 + 3) 
/define apple


