"use client";

import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="chat-container">
      {/* Display the chat messages */}
      <div
        className="messages"
        style={{ maxHeight: "400px", overflowY: "auto", marginBottom: "20px" }}
      >
        {messages.map((m) => (
          <div key={m.id} className="message" style={{ marginBottom: "10px" }}>
            <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
            <ReactMarkdown>{m.content}</ReactMarkdown>
          </div>
        ))}
      </div>

      {/* Chat input and submit */}
      <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
