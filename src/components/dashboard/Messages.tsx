import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, Phone, Mail, Send } from "lucide-react";
import { messages } from "@/data/dashboardData";
import { useToast } from "@/hooks/use-toast";

const Messages = () => {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [formData, setFormData] = useState<any>({});
    const { toast } = useToast();

    const handleAction = (action: string, item?: any) => {
        toast({
            title: "Action Performed",
            description: `${action} ${item ? `for ${item.name || item.client}` : 'successfully'}`,
        });
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
                <p className="text-gray-600 mt-1">Communicate with clients and team members</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1">
                    <CardHeader className="border-b">
                        <CardTitle>Conversations</CardTitle>
                        <div className="relative mt-3">
                            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                            <Input placeholder="Search messages..." className="pl-10" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y max-h-[600px] overflow-y-auto">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${message.unread ? 'bg-blue-50' : ''}`}
                                    onClick={() => setSelectedItem(message)}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
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
                                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
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
                                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-sm">
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
                                    <div className="bg-yellow-500 rounded-lg p-4">
                                        <p className="text-sm text-gray-900">That's great to hear! Yes, we can start the installation next week. I'll send over the final contract and timeline today.</p>
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
                                    value={formData.message || ''}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-[80px]" onClick={() => handleAction("Send Message")}>
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
