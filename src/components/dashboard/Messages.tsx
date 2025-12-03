import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, Send, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: number;
  from: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  avatar: string;
}

const Messages = () => {
  const { toast } = useToast();
  const [messageText, setMessageText] = useState("");
  
  const messages: Message[] = [
    { id: 1, from: "Sarah Johnson", subject: "Kitchen Design Approval", preview: "I love the new design! Can we proceed with...", time: "2 hours ago", unread: true, avatar: "SJ" },
    { id: 2, from: "Mike Chen", subject: "Material Selection", preview: "I've reviewed the tile options and I prefer...", time: "5 hours ago", unread: true, avatar: "MC" },
    { id: 3, from: "Lisa Brown", subject: "Project Timeline", preview: "When can we schedule the final walkthrough?", time: "1 day ago", unread: false, avatar: "LB" },
    { id: 4, from: "David Wilson", subject: "Budget Discussion", preview: "I'd like to discuss some additional features...", time: "2 days ago", unread: false, avatar: "DW" }
  ];

  const handleViewMessage = (message: Message) => {
    toast({
      title: "Opening Message",
      description: `From: ${message.from}`,
      duration: 2000,
    });
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
        duration: 2000,
      });
      return;
    }
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully",
      duration: 3000,
    });
    setMessageText("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Messages</h1>
          <p className="text-sm text-gray-500 mt-1">Secure client communication</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader className="border-b px-6 py-4">
            <CardTitle className="text-base font-semibold">Conversations</CardTitle>
            <div className="relative mt-3">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <Input placeholder="Search messages..." className="pl-9 h-9 bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y max-h-[600px] overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${message.unread ? 'bg-blue-50' : ''}`}
                  onClick={() => handleViewMessage(message)}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold shadow-sm">
                      {message.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-gray-900 truncate">{message.from}</p>
                        {message.unread && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                      </div>
                      <p className="text-sm font-medium text-gray-700 truncate">{message.subject}</p>
                      <p className="text-sm text-gray-500 truncate">{message.preview}</p>
                      <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold shadow-sm">
                  SJ
                </div>
                <div>
                  <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                  <p className="text-sm text-gray-500">Kitchen Design Approval</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  SJ
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-sm text-gray-900">Hi! I love the new kitchen design you sent over. The layout looks perfect for our space. Can we proceed with the installation?</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="flex-1 max-w-md">
                  <div className="bg-gray-900 rounded-lg p-4 text-white">
                    <p className="text-sm">That's great to hear! Yes, we can start the installation next week. I'll send over the final contract and timeline today.</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-right">1 hour ago</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  ME
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex gap-3">
                <Textarea
                  placeholder="Type your message..."
                  className="flex-1 min-h-[80px]"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-semibold h-[80px] w-[80px]" 
                  onClick={handleSendMessage}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
