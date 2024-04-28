"use client";
import React, { useState } from "react";
import { Input, Button, Textarea, Avatar } from "@nextui-org/react";
const Usermessage = ({ message }) => {
  return (
    <div className="flex h-full text-left m-2">
      <Avatar
        isBordered
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        className="overflow-hidden flex-shrink-0 flex flex-col relative items-end"
      />
      <div className="chat-message-text">
        <div className="chat-messager-name ml-4 text-xl text-blue-600	">You</div>
        <div className="chat-message ml-4 overflow-y-scroll">
          {message.message}
        </div>
      </div>
    </div>
  );
};
const YourComponent = () => {
  const [userInput, setUserInput] = useState(""); // State variable to store user input
  const [chatLog, setChatLog] = useState([
  ]);

  // Function to send user input to the API and log the response
  const testAPI = async (input) => {
    const url = "";
    const data = {
      context: input,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        const responseText = result.response;
        // Select the div where you want to display the response
        const responseDiv = document.getElementById("response-div");
        // Update the content of the div with the response text
        responseDiv.innerText = responseText;
      } else {
        console.error("Failed to get response from the API");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setChatLog(prevArray => [...prevArray, { user: "you", message: userInput }])
    setUserInput(""); // Clear user input
    const scroll = document.getElementById("chat-log");
    scroll.scrollTop = scroll.scrollHeight;
    // Add user input to chat log
    let input = await testAPI(userInput);
    // Add AI response to chat log
    // setChatLog([...chatLog, { user: "ai", message: input }]);
    setChatLog(prevArray => [...prevArray, { user: "ai", message: input }])
    console.log(input);
      };

  const renderChatLog = () => {
    return chatLog.map((message, index) => {
      if (message.user === "you") {
        return (
          <div className="user flex h-full text-left m-2 " key={index}>
            <Avatar
              isBordered
              color="primary"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              className="overflow-hidden flex-shrink-0 flex flex-col relative items-end"
            />
            <div className="chat-message-text">
              <div className="chat-messager-name ml-4 text-xl text-blue-600	">
                You
              </div>
              <div className="chat-message ml-4 ">{message.message}</div>
            </div>
          </div>
        );
      } else if (message.user === "ai") {
        return (
          <div className="ai m-2 flex h-full text-left" key={index}>
            <Avatar
              isBordered
              color="danger"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="overflow-hidden flex-shrink-0 flex flex-col relative items-end"
            />
            <div className="chat-message-text">
              <div className="chat-messager-name ml-4 text-xl text-rose-500	">
                Shlper
              </div>
              <div className="chat-message ml-4 ">{message.message}</div>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <section className="chatbox w-1/2 relative  border-solid border-2 border-zinc-700 rounded-[12px] m-4">
      <div className="chat-log p-6 overflow-scroll scroll-smooth	focus:scroll-auto" style={{ maxHeight: "800px" }} id="chat-log">
        {renderChatLog()}
      </div>
      <div
        className="chat-input-holder m-4 dark text-foreground bg-background border-zinc-700"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Enter your message..."
            rows="1"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="chat-input dark text-foreground bg-background"
            endContent={
              <button
                className="pointer-events-auto flex items-center"
                onClick={handleSubmit}
              >
                <img src="/send.svg" className="w-6 h-6" alt="send"></img>
              </button>
            }
          ></Input>
        </form>
      </div>
    </section>
  );
};
export default YourComponent;
