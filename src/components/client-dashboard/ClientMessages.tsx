import { useState } from "react";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Star,
  Archive,
  Trash2,
  Image as ImageIcon,
  File,
  Smile,
  Check,
  CheckCheck,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Message {
  id: number;
  text: string;
  time: string;
  sender: "me" | "them";
  status?: "sent" | "delivered" | "read";
  type?: "text" | "image" | "file";
  fileName?: string;
}

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  role: string;
  project?: string;
}

const ClientMessages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number>(1);
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const conversations: Conversation[] = [
    {
      id: 1,
      name: "John's Construction",
      avatar: "/contractor.jpg",
      lastMessage: "I'll send you the updated timeline by tomorrow",
      time: "2m ago",
      unread: 2,
      online: true,
      role: "General Contractor",
      project: "Kitchen Renovation",
    },
    {
      id: 2,
      name: "Smith Builders",
      avatar: "/contractor-2.jpg",
      lastMessage: "The materials have been ordered",
      time: "1h ago",
      unread: 0,
      online: true,
      role: "Remodeling Specialist",
      project: "Bathroom Remodel",
    },
    {
      id: 3,
      name: "Green Spaces LLC",
      avatar: "/contractor-3.png",
      lastMessage: "Perfect! I'll start on Monday",
      time: "3h ago",
      unread: 0,
      online: false,
      role: "Landscaping Expert",
      project: "Backyard Landscaping",
    },
    {
      id: 4,
      name: "Mike's Plumbing",
      avatar: "/contractor.jpg",
      lastMessage: "Here's my quote for the bathroom project",
      time: "1d ago",
      unread: 1,
      online: false,
      role: "Plumbing Contractor",
      project: "Bathroom Remodel",
    },
    {
      id: 5,
      name: "Elite Painters",
      avatar: "/contractor-2.jpg",
      lastMessage: "When would you like me to start?",
      time: "2d ago",
      unread: 0,
      online: false,
      role: "Painting Specialist",
      project: "Interior Painting",
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      text: "Hi! I wanted to discuss the kitchen renovation timeline",
      time: "10:30 AM",
      sender: "me",
      status: "read",
    },
    {
      id: 2,
      text: "Of course! I've reviewed your requirements. We can start next Monday.",
      time: "10:32 AM",
      sender: "them",
    },
    {
      id: 3,
      text: "That sounds great! What about the materials?",
      time: "10:35 AM",
      sender: "me",
      status: "read",
    },
    {
      id: 4,
      text: "All materials are ready. I'll bring samples tomorrow for your approval.",
      time: "10:37 AM",
      sender: "them",
    },
    {
      id: 5,
      text: "Perfect! Also, can you send me the detailed cost breakdown?",
      time: "10:40 AM",
      sender: "me",
      status: "read",
    },
    {
      id: 6,
      text: "kitchen-renovation-quote.pdf",
      time: "10:42 AM",
      sender: "them",
      type: "file",
      fileName: "kitchen-renovation-quote.pdf",
    },
    {
      id: 7,
      text: "Thank you! I'll review it and get back to you",
      time: "10:45 AM",
      sender: "me",
      status: "delivered",
    },
    {
      id: 8,
      text: "I'll send you the updated timeline by tomorrow",
      time: "Just now",
      sender: "them",
    },
  ];

  const selectedConv = conversations.find((c) => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Handle send message logic
      console.log("Sending:", messageText);
      setMessageText("");
    }
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-[calc(100vh-12rem)] flex gap-4">
      {/* Conversations List */}
      <div className="w-80 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col">
        {/* Search Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer transition-all ${
                selectedConversation === conv.id
                  ? "bg-yellow-50 border-l-4 border-l-yellow-400"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                    <AvatarImage src={conv.avatar} />
                    <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {conv.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {conv.name}
                    </h3>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">{conv.role}</p>
                  <p className="text-sm text-gray-600 truncate">
                    {conv.lastMessage}
                  </p>
                  {conv.project && (
                    <Badge
                      variant="outline"
                      className="mt-2 text-xs bg-blue-50 text-blue-700 border-blue-200"
                    >
                      {conv.project}
                    </Badge>
                  )}
                </div>
                {conv.unread > 0 && (
                  <Badge className="bg-yellow-500 text-white">
                    {conv.unread}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col">
        {selectedConv ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-12 h-12 border-2 border-yellow-400 shadow-sm">
                    <AvatarImage src={selectedConv.avatar} />
                    <AvatarFallback>{selectedConv.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {selectedConv.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{selectedConv.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-600">{selectedConv.role}</p>
                    {selectedConv.online && (
                      <span className="text-xs text-green-600 font-medium">
                        • Online
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <Phone className="w-5 h-5 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <Video className="w-5 h-5 text-gray-600" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-xl">
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Star className="w-4 h-4 mr-2" />
                      Star Conversation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Archive className="w-4 h-4 mr-2" />
                      Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-md ${
                      message.sender === "me"
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                        : "bg-white border border-gray-200"
                    } rounded-2xl px-4 py-3 shadow-sm`}
                  >
                    {message.type === "file" ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <File className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{message.fileName}</p>
                          <p className="text-xs text-gray-500">PDF • 245 KB</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm">{message.text}</p>
                    )}
                    <div className="flex items-center justify-between mt-2 gap-2">
                      <span
                        className={`text-xs ${
                          message.sender === "me"
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        {message.time}
                      </span>
                      {message.sender === "me" && message.status && (
                        <div>
                          {message.status === "sent" && (
                            <Check className="w-4 h-4 text-white/80" />
                          )}
                          {message.status === "delivered" && (
                            <CheckCheck className="w-4 h-4 text-white/80" />
                          )}
                          {message.status === "read" && (
                            <CheckCheck className="w-4 h-4 text-blue-300" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-end gap-3">
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <Paperclip className="w-5 h-5 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <ImageIcon className="w-5 h-5 text-gray-600" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Type your message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    className="pr-10 bg-gray-50 border-gray-200 focus:ring-yellow-400 rounded-xl"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 rounded-lg"
                  >
                    <Smile className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg transition-all rounded-xl px-6"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Press Enter to send • Shift + Enter for new line
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-lg font-medium">Select a conversation</p>
              <p className="text-sm">Choose a contractor to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientMessages;
