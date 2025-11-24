import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, Send, User, Settings, RotateCcw, Sparkles } from "lucide-react";

const AIChatbot = () => {
    const [messages, setMessages] = useState([
        { id: 1, role: 'bot', content: "Hello! I'm your AI construction assistant. I can help with code compliance, material estimates, or drafting emails. How can I help you today?", time: '10:00 AM' }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        const newMsg = {
            id: messages.length + 1,
            role: 'user',
            content: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMsg]);
        setInput("");

        // Simulate response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: prev.length + 1,
                role: 'bot',
                content: "I'm processing your request. This is a demo response.",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }, 1000);
    };

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">AI Chatbot</h1>
                    <p className="text-slate-500">Your personal construction assistant</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setMessages([])}>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Clear Chat
                    </Button>
                    <Button variant="outline">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-0">
                <Card className="lg:col-span-3 flex flex-col shadow-sm border-slate-200">
                    <CardHeader className="border-b bg-slate-50/50 py-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <Bot className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Assistant</CardTitle>
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs text-slate-500 font-medium">Online</span>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                    >
                                        <Avatar className="h-8 w-8 border">
                                            {msg.role === 'bot' ? (
                                                <div className="bg-blue-100 h-full w-full flex items-center justify-center">
                                                    <Bot className="h-5 w-5 text-blue-600" />
                                                </div>
                                            ) : (
                                                <AvatarFallback className="bg-slate-900 text-white">
                                                    <User className="h-4 w-4" />
                                                </AvatarFallback>
                                            )}
                                        </Avatar>
                                        <div
                                            className={`rounded-2xl px-4 py-2 max-w-[80%] ${msg.role === 'user'
                                                    ? 'bg-slate-900 text-white rounded-tr-sm'
                                                    : 'bg-slate-100 text-slate-800 rounded-tl-sm'
                                                }`}
                                        >
                                            <p className="text-sm leading-relaxed">{msg.content}</p>
                                            <span className={`text-[10px] mt-1 block opacity-70 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                                                {msg.time}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="p-4 border-t bg-white">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex gap-2"
                            >
                                <Input
                                    placeholder="Ask about building codes, estimates, or project management..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1"
                                />
                                <Button type="submit" disabled={!input.trim()}>
                                    <Send className="h-4 w-4" />
                                    <span className="sr-only">Send</span>
                                </Button>
                            </form>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-4">
                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-medium flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-yellow-500" />
                                Suggested Prompts
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-2">
                            {["Draft a client proposal", "Check plumbing codes", "Estimate drywall costs", "Write a follow-up email"].map((prompt) => (
                                <Button
                                    key={prompt}
                                    variant="ghost"
                                    className="justify-start h-auto py-2 px-3 text-xs text-left whitespace-normal border border-slate-100 hover:bg-slate-50 hover:text-blue-600"
                                    onClick={() => setInput(prompt)}
                                >
                                    {prompt}
                                </Button>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AIChatbot;
