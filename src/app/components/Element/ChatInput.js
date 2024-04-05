"use client"
import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import { getMixtralResponse } from './apiUtils'; // Import the getMixtralResponse function from the apiUtils file
import {User} from "@nextui-org/react";

const YourComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (inputValue.trim() === '') return;
    
        const userMessage = { text: inputValue, isUserMessage: true };
    
        getMixtralResponse(inputValue)
            .then(botResponse => {
                setMessages([...messages, userMessage, { text: botResponse[0].generated_text, isUserMessage: false }]);
                setInputValue('');
            })
            .catch(error => console.error("Error:", error));
    };
    


    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        {message.isUserMessage ? (
                            <div className="h-8 w-8 mr-2"><User   

                            avatarProps={{
                              src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                            }}
                          /></div>
                        ) : (
                            <div className="rounded-full h-8 w-8 bg-gray-500 mr-2"></div>
                        )}
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <div style={{ padding: '10px' }}>
                <Input 
                    placeholder="Enter your message...." 
                    value={inputValue} 
                    onChange={handleChange} 
                    onKeyPress={handleKeyPress} 
                />
                <Button
                    isIconOnly
                    color="warning"
                    variant="faded"
                    aria-label="Send Message"
                    onClick={sendMessage}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};
export default YourComponent;
