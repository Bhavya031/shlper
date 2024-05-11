"use client"
import React, { useState, useEffect } from "react";
import { Input, Avatar } from "@nextui-org/react";

const UserMessage = ({ message }) => {
  return (
    <div className="flex h-full text-left m-2">
      <Avatar
        isBordered
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        className="overflow-hidden flex-shrink-0 flex flex-col relative items-end"
      />
      <div className="chat-message-text">
        <div className="chat-messager-name ml-4 text-xl text-blue-600">You</div>
        <div className="chat-message ml-4">{message}</div>
      </div>
    </div>
  );
};

const AIResponse = ({ message }) => {
  return (
    <div className="ai m-2 h-full text-left flex">
      <Avatar
        isBordered
        color="danger"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className="overflow-hidden flex-shrink-0 flex flex-col relative items-end"
      />
      <div className="chat-message-text">
        <div className="chat-messager-name ml-4 text-xl text-rose-500">Shlper</div>
        <div className="chat-message ml-4 ">{message}</div>
      </div>
    </div>
  );
};

const ChatBox = () => {
  const [userInput, setUserInput] = useState(""); // State variable to store user input
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage(userInput);
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [userInput]);

  const sendMessage = (input) => {
    setChatLog((prevLog) => [...prevLog, { user: "you", message: input }]);
    setUserInput(""); // Clear user input

    // Call the API to get AI response
    fetchAIResponse(input);
  };

  const fetchAIResponse = async (input) => {
    const url = "http://127.0.0.1:5000/chat";
    const data = { context: input };
  
    try {
      // Add an empty message to the chat log to indicate that the response is being fetched
      setChatLog((prevLog) => [...prevLog, { user: "ai", message: "" }]);
      scrollToBottom();
  
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        let responseText = ''; // Initialize the response text variable
  
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
  
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          responseText += chunk;
  
          // Update chat log with the current chunk of response
          setChatLog((prevLog) => [
            ...prevLog.slice(0, -1), // Remove the empty message
            { user: "ai", message: responseText },
          ]);
          scrollToBottom();
        }
      } else {
        console.error("Failed to get response from the API");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const scrollToBottom = () => {
    const scroll = document.getElementById("chat-log");
    scroll.scrollTop = scroll.scrollHeight;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    sendMessage(userInput);
  };

  const renderChatLog = () => {
    return chatLog.map((message, index) => {
      if (message.user === "you") {
        return <UserMessage key={index} message={message.message} />;
      } else if (message.user === "ai") {
        return <AIResponse key={index} message={message.message} />;
      }
      return null;
    });
  };

  return (
    <section className="chatbox w-1/2 relative border-solid border-2 border-zinc-700 rounded-[12px] m-4">
      <div className="chat-log p-6 overflow-y-scroll scroll-smooth focus:scroll-auto" style={{ maxHeight: "800px" }} id="chat-log">
        {renderChatLog()}
      </div>
      <div className="chat-input-holder m-4 dark text-foreground bg-background border-zinc-700" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Enter your message..."
            rows="1"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="chat-input dark text-foreground bg-background"
            endContent={
              <button type="submit" className="pointer-events-auto flex items-center">
                <img src="/send.svg" className="w-6 h-6" alt="send" />
              </button>
            }
          />
        </form>
      </div>
    </section>
  );
};

export default ChatBox;
