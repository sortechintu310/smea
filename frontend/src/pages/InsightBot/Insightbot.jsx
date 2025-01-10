import { postPrompt, getData } from "../../services/chatServices";
import { useState } from "react";

function Insightbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    try {
      const response = await postPrompt({ text: userInput });
      const botReply = { sender: "bot", text: response.data };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorReply = {
        sender: "bot",
        text: "Something went wrong. Please try again later.",
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  const fetchConversation = async () => {
    try {
      const previousMessages = await getData();
      setMessages(previousMessages);
    } catch (error) {
      console.error("Error fetching conversation:", error);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto p-4 bg-gray-100 shadow-lg rounded-lg">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-300 text-gray-800 self-start"
            }`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-gray-500 text-sm">typing...</div>}
      </div>

      {/* User Input */}
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 text-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          disabled={loading}>
          Send
        </button>
      </div>

      <button
        onClick={fetchConversation}
        className="mt-2 p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none">
        Fetch Previous Conversation
      </button>
    </div>
  );
}

export default Insightbot;
