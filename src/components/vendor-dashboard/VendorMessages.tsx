import { useState } from "react";
import { Search, Send, Paperclip, MoreVertical, Star, Archive, Trash2, Phone, Video, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  sender: string;
  avatar?: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  type: "customer" | "support" | "contractor";
}

interface ChatMessage {
  id: number;
  sender: "me" | "them";
  message: string;
  time: string;
}

const VendorMessages = () => {
  const [selectedChat, setSelectedChat] = useState<number>(1);
  const [messageInput, setMessageInput] = useState("");

  const conversations: Message[] = [
    {
      id: 1,
      sender: "John Construction Co.",
      avatar: "/boy1.jpg",
      lastMessage: "Do you have the cement bags in stock?",
      time: "2m ago",
      unread: 3,
      online: true,
      type: "contractor"
    },
    {
      id: 2,
      sender: "Sarah Miller",
      avatar: "/girl.jpg",
      lastMessage: "Thanks for the quick delivery!",
      time: "15m ago",
      unread: 0,
      online: true,
      type: "customer"
    },
    {
      id: 3,
      sender: "Mike's Hardware",
      avatar: "/boy2.jpg",
      lastMessage: "Can we discuss bulk pricing?",
      time: "1h ago",
      unread: 1,
      online: false,
      type: "contractor"
    },
    {
      id: 4,
      sender: "Platform Support",
      lastMessage: "Your store verification is complete",
      time: "3h ago",
      unread: 0,
      online: true,
      type: "support"
    },
    {
      id: 5,
      sender: "Emma Johnson",
      avatar: "/girl2.jpg",
      lastMessage: "When will the tiles be available?",
      time: "5h ago",
      unread: 0,
      online: false,
      type: "customer"
    },
  ];

  const chatMessages: ChatMessage[] = [
    { id: 1, sender: "them", message: "Hi! I'm interested in your cement bags.", time: "10:30 AM" },
    { id: 2, sender: "me", message: "Hello! Yes, we have them in stock. How many do you need?", time: "10:32 AM" },
    { id: 3, sender: "them", message: "I need about 50 bags for a construction project.", time: "10:33 AM" },
    { id: 4, sender: "me", message: "Perfect! We can offer a bulk discount for 50 bags. Would you like me to send you a quote?", time: "10:35 AM" },
    { id: 5, sender: "them", message: "Yes please! Also, do you offer delivery?", time: "10:36 AM" },
    { id: 6, sender: "me", message: "Absolutely! We offer free delivery for orders over $500. Let me prepare the quote for you.", time: "10:38 AM" },
    { id: 7, sender: "them", message: "Do you have the cement bags in stock?", time: "10:40 AM" },
  ];

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle send message logic
      setMessageInput("");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600 mt-1">Communicate with your customers and partners</p>
      </div>

      {/* Messages Container */}
      <Card className="h-[calc(100vh-250px)] flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-full md:w-96 border-r border-gray-200 flex flex-col bg-white">
          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                  selectedChat === conv.id
                    ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-l-yellow-400'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conv.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                        {conv.sender.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">{conv.sender}</h3>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white ml-2">
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                    <div className="mt-1">
                      <Badge variant="outline" className="text-xs">
                        {conv.type === "contractor" && "🏗️ Contractor"}
                        {conv.type === "customer" && "👤 Customer"}
                        {conv.type === "support" && "💬 Support"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={selectedConversation.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                        {selectedConversation.sender.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    {selectedConversation.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedConversation.sender}</h3>
                    <p className="text-xs text-gray-500">
                      {selectedConversation.online ? "Active now" : "Offline"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-xl">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-xl">
                    <Video className="h-5 w-5 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-xl">
                    <Star className="h-5 w-5 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-xl">
                    <MoreVertical className="h-5 w-5 text-gray-600" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-end gap-2 max-w-md ${msg.sender === "me" ? "flex-row-reverse" : ""}`}>
                      {msg.sender === "them" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={selectedConversation.avatar} />
                          <AvatarFallback className="bg-gray-300 text-gray-600 text-xs">
                            {selectedConversation.sender.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            msg.sender === "me"
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                              : "bg-white border border-gray-200 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                        </div>
                        <p className={`text-xs text-gray-500 mt-1 ${msg.sender === "me" ? "text-right" : ""}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-xl">
                    <Paperclip className="h-5 w-5 text-gray-600" />
                  </Button>
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg rounded-xl"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No conversation selected</h3>
                <p className="text-sm text-gray-500">Choose a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default VendorMessages;
