import { useState } from "react";

const initialChats = [
    { id: 1, name: "Rahul", lastMsg: "Ok done 👍", time: "10:20" },
    { id: 2, name: "Amit", lastMsg: "Call me later", time: "09:45" },
    { id: 3, name: "Priya", lastMsg: "Thanks!", time: "Yesterday" },
];

const initialMessages = {
    1: [
        { sender: "other", text: "Hello Rahul" },
        { sender: "me", text: "Hi!" },
    ],
    2: [{ sender: "other", text: "Are you free?" }],
    3: [{ sender: "other", text: "Thanks for help" }],
};

const WhatsAppUI = () => {
    const [chats] = useState(initialChats);
    const [activeChat, setActiveChat] = useState(1);
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages((prev) => ({
            ...prev,
            [activeChat]: [
                ...prev[activeChat],
                { sender: "me", text: input },
            ],
        }));

        setInput("");
    };

    return (
        <>
            <h1 className="text-white w-50 text-xl font-semibold text-center py-3 bg-gray-900 border-b border-gray-800">
                WhatsApp Clone
            </h1>
            <div className="min-h-screen flex items-center justify-center bg-gray-150 font-sans">


                <div className="w-[480px] h-[600px] flex rounded-2xl overflow-hidden shadow-2xl border border-gray-800">

                    {/* SIDEBAR */}
                    <div className="w-1/3 bg-gray-900 overflow-y-auto">
                        <div className="p-3 font-bold text-white border-b border-gray-800">
                            Chats
                        </div>

                        {chats.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => setActiveChat(chat.id)}
                                className={`p-3 cursor-pointer hover:bg-gray-800 ${activeChat === chat.id ? "bg-gray-800" : ""
                                    }`}
                            >
                                <div className="flex justify-between">
                                    <span className="text-sm font-semibold text-gray-200">
                                        {chat.name}
                                    </span>
                                    <span className="text-[10px] text-gray-500">
                                        {chat.time}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 truncate">
                                    {chat.lastMsg}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CHAT AREA */}
                    <div className="w-2/3 flex flex-col bg-gray-950">

                        {/* HEADER */}
                        <div className="p-3 bg-gray-900 text-gray-200 border-b border-gray-800 text-sm font-semibold">
                            {chats.find((c) => c.id === activeChat)?.name}
                        </div>

                        {/* MESSAGES */}
                        <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
                            {messages[activeChat]?.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`max-w-[70%] px-3 py-2 rounded-lg text-xs ${msg.sender === "me"
                                            ? "bg-green-600 text-white ml-auto"
                                            : "bg-gray-800 text-gray-200"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* INPUT */}
                        <div className="p-2 bg-gray-900 flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 p-2 text-xs rounded-full bg-gray-800 text-gray-200 focus:outline-none"
                            />

                            <button
                                onClick={sendMessage}
                                className="px-3 py-2 text-xs bg-green-600 text-white rounded-full hover:bg-green-700"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhatsAppUI;