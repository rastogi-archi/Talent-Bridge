import React, { useState } from 'react';
import { Search, Video, Phone, Paperclip, Mic, SendHorizontal } from 'lucide-react';

const Message = () => {
    const [message, setMessage] = useState(''); // Current input value
    const [messages, setMessages] = useState([]); // List of chat messages

    const sendMessage = () => {
        if (message.trim()) {
            setMessages((prevMessages) => [...prevMessages, message]); // Add message to chat
            setMessage(''); // Clear input field
        }
    };

    return (
        <div className='flex flex-row justify-center gap-4 mt-5'>
            {/* Left side */}
            <div className='border w-[20%] rounded-2xl overflow-y-auto'>
                <div className='flex gap-2 m-4 border rounded-full p-2'>
                    <Search className='size-5' />
                    <input type="search" name="search" placeholder='Search' className='outline-none' />
                </div>
            </div>

            {/* Right side */}
            <div className='border w-[40%] rounded-2xl overflow-y-auto h-[500px]'>
                <div className='flex justify-between items-center m-2'>
                    <div className='flex items-center'>
                        <img src="\profile.png" alt="" className='size-11' />
                        <p>Archi</p>
                    </div>
                    <div className='flex items-center gap-3 bg-[#1988ab] p-2 rounded-md justify-center'>
                        <Video className='size-5 bg-[#1988ab] text-white cursor-pointer' />
                        <Phone className='size-5 bg-[#1988ab] text-white cursor-pointer' />
                    </div>
                </div>

                {/* Chat messages */}
                <div className='flex flex-col gap-2 p-2 overflow-y-auto h-[400px]'>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className='p-2 bg-gray-100 text-black rounded-lg self-end max-w-[80%]'
                        >
                            {msg}
                        </div>
                    ))}
                </div>

                {/* Input area */}
                <div className='flex justify-between bg-[#1988ab] p-2 message'>
                    <div className='flex items-center bg-[#1988ab]'>
                        <Paperclip className='size-4 text-white bg-[#1988ab]' />
                        <input
                            type="text"
                            placeholder='Type a message'
                            className='text-sm outline-none ml-2 bg-transparent text-white placeholder-white'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') sendMessage(); // Send message on Enter key
                            }}
                        />
                    </div>
                    {message.trim() ? (
                        <SendHorizontal
                            className='size-4 text-white bg-[#1988ab] cursor-pointer'
                            onClick={sendMessage}
                        />
                    ) : (
                        <Mic className='size-4 text-white bg-[#1988ab]' />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Message;
