import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Search,
    Plus,
    MoreVertical,
    Phone,
    Video,
    Info,
    Paperclip,
    Mic,
    Send,
    CheckCheck,
    MoreHorizontal,
    FileText,
    Image as ImageIcon,
    Building2,
    Bot
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const CleanCommunications = () => {
    const [activeChat, setActiveChat] = useState(1);
    const [messageInput, setMessageInput] = useState('');

    const chats = [
        {
            id: 1,
            name: 'VoltMaster Electric',
            avatar: 'VM',
            status: 'online',
            lastMessage: 'The revised wiring layout for the 2nd floor has been uploaded.',
            time: '12:42 PM',
            unread: 2,
        },
        {
            id: 2,
            name: 'Sarah Chen (Architect)',
            avatar: 'SC',
            status: 'offline',
            lastMessage: 'Can we schedule a walkthrough for next Tuesday?',
            time: '10:15 AM',
            unread: 0,
        },
        {
            id: 3,
            name: 'Titan Concrete Pros',
            avatar: 'TC',
            status: 'online',
            lastMessage: 'Pouring schedule updated due to weather forecast.',
            time: 'Yesterday',
            unread: 0,
        },
    ];

    const messages = [
        {
            id: 1,
            sender: 'them',
            content: 'Hey, just wanted to check on the status of the electrical rough-in for the Downtown Commercial project.',
            time: '12:30 PM',
            status: 'read'
        },
        {
            id: 2,
            sender: 'me',
            content: 'We are on track. The crew is finishing up the conduit work on the 2nd floor today.',
            time: '12:35 PM',
            status: 'read'
        },
        {
            id: 3,
            sender: 'them',
            content: 'Great. Also, did you see the RFI response regarding the panel location?',
            time: '12:38 PM',
            status: 'read'
        },
        {
            id: 4,
            sender: 'them',
            content: 'The revised wiring layout for the 2nd floor has been uploaded.',
            time: '12:42 PM',
            status: 'read',
            attachment: { type: 'file', name: '2nd_Floor_Electrical_Rev2.pdf', size: '2.4 MB' }
        }
    ];

    const activeContact = chats.find(c => c.id === activeChat);

    return (
        <div className="flex h-full w-full bg-slate-50 dark:bg-slate-950 overflow-hidden">
            {/* List Sidebar */}
            <div className="w-[300px] flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                <div className="p-4">
                    <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Messages</h1>
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Search..."
                            className="pl-9 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl"
                        />
                    </div>
                </div>

                <ScrollArea className="flex-1 px-2">
                    <div className="space-y-1">
                        {chats.map((chat) => (
                            <button
                                key={chat.id}
                                onClick={() => setActiveChat(chat.id)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors
                  ${activeChat === chat.id
                                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                                        : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                                    }
                `}
                            >
                                <div className="relative shrink-0">
                                    <Avatar className="h-10 w-10 border-2 border-white dark:border-slate-900 shadow-sm">
                                        <AvatarFallback className={`${activeChat === chat.id ? 'text-slate-900' : 'text-slate-600'}`}>{chat.avatar}</AvatarFallback>
                                    </Avatar>
                                    {chat.status === 'online' && (
                                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-slate-950"></span>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-semibold text-sm truncate">{chat.name}</span>
                                        <span className={`text-[10px] ${activeChat === chat.id ? 'text-slate-300 dark:text-slate-500' : 'text-slate-400'}`}>{chat.time}</span>
                                    </div>
                                    <p className={`text-xs truncate mt-0.5 ${activeChat === chat.id ? 'text-slate-300 dark:text-slate-500' : 'text-slate-500'}`}>
                                        {chat.lastMessage}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950 relative">
                {activeContact ? (
                    <>
                        {/* Header */}
                        <div className="h-16 px-6 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9">
                                    <AvatarFallback className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200">{activeContact.avatar}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h2 className="text-sm font-bold text-slate-900 dark:text-white">{activeContact.name}</h2>
                                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <Button variant="ghost" size="icon"><Phone className="w-4 h-4 text-slate-500" /></Button>
                                <Button variant="ghost" size="icon"><Video className="w-4 h-4 text-slate-500" /></Button>
                                <Button variant="ghost" size="icon"><MoreHorizontal className="w-4 h-4 text-slate-500" /></Button>
                            </div>
                        </div>

                        {/* Chatbot Style Messages */}
                        <ScrollArea className="flex-1 p-6">
                            <div className="space-y-6 max-w-3xl mx-auto">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex items-end gap-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        {msg.sender === 'them' && (
                                            <Avatar className="h-6 w-6 mb-1">
                                                <AvatarFallback className="text-[10px] bg-slate-200">{activeContact.avatar}</AvatarFallback>
                                            </Avatar>
                                        )}

                                        <div className={`flex flex-col max-w-[70%] ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                                            <div
                                                className={`
                          px-4 py-3 rounded-2xl text-sm shadow-sm
                          ${msg.sender === 'me'
                                                        ? 'bg-blue-600 text-white rounded-br-none'
                                                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none'
                                                    }
                        `}
                                            >
                                                {msg.content}
                                                {msg.attachment && (
                                                    <div className="mt-3 flex items-center gap-2 bg-black/10 p-2 rounded-lg">
                                                        <div className="bg-white p-1 rounded"><FileText className="w-4 h-4 text-blue-600" /></div>
                                                        <div className="text-xs">
                                                            <p className="font-medium">{msg.attachment.name}</p>
                                                            <p className="opacity-70">{msg.attachment.size}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <span className="text-[10px] text-slate-400 mt-1 px-1">
                                                {msg.time}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        {/* Clean Input Area */}
                        <div className="p-4 bg-white dark:bg-slate-950">
                            <div className="max-w-3xl mx-auto flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-2 rounded-full border border-slate-200 dark:border-slate-800">
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-500 hover:bg-white">
                                    <Plus className="h-5 w-5" />
                                </Button>
                                <input
                                    type="text"
                                    className="flex-1 bg-transparent border-none text-sm focus:ring-0 placeholder:text-slate-400"
                                    placeholder="Type a message..."
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                />
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-slate-500 hover:bg-white">
                                    <Mic className="h-4 w-4" />
                                </Button>
                                <Button size="icon" className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-slate-400">
                        <p>Select a conversation to start chatting</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CleanCommunications;
