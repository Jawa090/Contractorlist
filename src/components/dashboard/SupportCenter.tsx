import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, Send, HelpCircle, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SupportCenter = () => {
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
                <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
                <p className="text-gray-600 mt-1">Get help and find answers to your questions</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <CardHeader className="border-b">
                        <CardTitle>Submit a Support Ticket</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                        <div>
                            <Label htmlFor="ticket-subject">Subject</Label>
                            <Input
                                id="ticket-subject"
                                placeholder="Brief description of your issue"
                                className="mt-1"
                                value={formData.subject || ''}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />
                        </div>

                        <div>
                            <Label htmlFor="ticket-category">Category</Label>
                            <select
                                id="ticket-category"
                                className="w-full mt-1 p-2 border rounded-md"
                                value={formData.category || ''}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option value="">Select a category</option>
                                <option>Technical Issue</option>
                                <option>Billing Question</option>
                                <option>Feature Request</option>
                                <option>Account Management</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <Label htmlFor="ticket-priority">Priority</Label>
                            <select
                                id="ticket-priority"
                                className="w-full mt-1 p-2 border rounded-md"
                                value={formData.priority || ''}
                                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                            >
                                <option value="">Select priority</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Urgent</option>
                            </select>
                        </div>

                        <div>
                            <Label htmlFor="ticket-description">Description</Label>
                            <Textarea
                                id="ticket-description"
                                placeholder="Please provide detailed information about your issue..."
                                className="mt-1 min-h-[150px]"
                                value={formData.description || ''}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div>
                            <Label>Attachments (Optional)</Label>
                            <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-500 transition-colors cursor-pointer">
                                <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                <p className="text-sm text-gray-600">Click to upload screenshots or files</p>
                                <p className="text-xs text-gray-500 mt-1">Max file size: 10MB</p>
                            </div>
                        </div>

                        <Button
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                            onClick={() => {
                                handleAction("Submit Ticket");
                                setFormData({});
                            }}
                        >
                            <Send className="w-4 h-4 mr-2" />
                            Submit Ticket
                        </Button>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-blue-100">
                            <CardTitle className="flex items-center">
                                <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                                Quick Help
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Contact Options</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Mail className="w-4 h-4 text-gray-600" />
                                        <div>
                                            <p className="font-medium text-gray-900">Email Support</p>
                                            <p className="text-gray-600">support@platform.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Phone className="w-4 h-4 text-gray-600" />
                                        <div>
                                            <p className="font-medium text-gray-900">Phone Support</p>
                                            <p className="text-gray-600">(555) 999-8888</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Clock className="w-4 h-4 text-gray-600" />
                                        <div>
                                            <p className="font-medium text-gray-900">Business Hours</p>
                                            <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <h4 className="font-semibold text-gray-900 mb-2">Response Times</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Urgent:</span>
                                        <span className="font-semibold">1-2 hours</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">High:</span>
                                        <span className="font-semibold">4-6 hours</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Medium:</span>
                                        <span className="font-semibold">24 hours</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Low:</span>
                                        <span className="font-semibold">48 hours</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="border-b">
                            <CardTitle>Popular Resources</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="space-y-3">
                                {[
                                    "Getting Started Guide",
                                    "AI Takeoff Tutorial",
                                    "Lead Management Tips",
                                    "Billing & Payments FAQ",
                                    "Video Tutorials"
                                ].map((resource) => (
                                    <button
                                        key={resource}
                                        className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-between group"
                                        onClick={() => handleAction("View Resource", { name: resource })}
                                    >
                                        <span className="text-sm font-medium text-gray-900">{resource}</span>
                                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600" />
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Card>
                <CardHeader className="border-b">
                    <CardTitle>Recent Tickets</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Ticket ID</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Subject</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Priority</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {[
                                    { id: "#TK-1234", subject: "AI Takeoff not processing", category: "Technical", priority: "High", status: "In Progress", date: "Nov 9, 2024" },
                                    { id: "#TK-1233", subject: "Billing question about upgrade", category: "Billing", priority: "Medium", status: "Resolved", date: "Nov 7, 2024" },
                                    { id: "#TK-1232", subject: "Feature request: Export to Excel", category: "Feature Request", priority: "Low", status: "Under Review", date: "Nov 5, 2024" }
                                ].map((ticket) => (
                                    <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-semibold text-blue-600">{ticket.id}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-medium text-gray-900">{ticket.subject}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline">{ticket.category}</Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={ticket.priority === "High" ? "default" : "secondary"}>
                                                {ticket.priority}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={ticket.status === "Resolved" ? "default" : "secondary"}>
                                                {ticket.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-gray-600">{ticket.date}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SupportCenter;
