import { useState } from "react";
import { Send } from "lucide-react";

function Assistant() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello 👋 I'm your study assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);

    // Clear input
    setInput("");

    // Simulate AI response (replace later with API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "This is a sample AI response. (You can connect free AI APIs later)" },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl h-[600px] flex flex-col">
        <h2 className="text-3xl font-bold text-[#1c2412] p-6 border-b">🤖 AI Assistant</h2>

        {/* Chat area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs ${
                  msg.from === "user"
                    ? "bg-[#1c2412] text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="p-4 border-t flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white px-4 rounded-xl flex items-center hover:bg-green-700 transition"
          >
            <Send size={18} className="mr-1" /> Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Assistant;
